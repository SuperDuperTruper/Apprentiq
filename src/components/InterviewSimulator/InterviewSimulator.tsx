'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import {
  Play,
  Pause,
  StopCircle,
  Video,
  Clock,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface Question {
  id: number;
  text: string;
  category: string;
  suggestedDuration: number;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    text: "Tell me about yourself and your experience.",
    category: "Background",
    suggestedDuration: 120
  },
  {
    id: 2,
    text: "What are your greatest strengths and weaknesses?",
    category: "Self-Assessment",
    suggestedDuration: 180
  },
  {
    id: 3,
    text: "Where do you see yourself in five years?",
    category: "Goals",
    suggestedDuration: 120
  },
  {
    id: 4,
    text: "Describe a challenging situation at work and how you handled it.",
    category: "Experience",
    suggestedDuration: 180
  },
  {
    id: 5,
    text: "Why are you interested in this position?",
    category: "Motivation",
    suggestedDuration: 120
  }
];

interface InterviewState {
  isStarted: boolean;
  isPaused: boolean;
  currentQuestionIndex: number;
  prepTimeRemaining: number;
  answerTimeRemaining: number;
  transcription: string;
  audioLevel: number;
}

export default function InterviewSimulator() {
  // State
  const [settings, setSettings] = useState({
    prepTime: 30, // seconds
    answerTime: 120, // seconds
    enableVideo: true,
    enableAudio: true,
  });

  const [state, setState] = useState<InterviewState>({
    isStarted: false,
    isPaused: false,
    currentQuestionIndex: 0,
    prepTimeRemaining: settings.prepTime,
    answerTimeRemaining: settings.answerTime,
    transcription: '',
    audioLevel: 0,
  });

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recognitionRef = useRef<any>(null);
  const chunksRef = useRef<Blob[]>([]);
  const audioLevelFrameRef = useRef<number>();

  // Initialize media devices and speech recognition
  useEffect(() => {
    const initializeDevices = async () => {
      try {
        // Request media permissions
        const stream = await navigator.mediaDevices.getUserMedia({
          video: settings.enableVideo,
          audio: settings.enableAudio,
        });
        
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        // Initialize audio analysis with throttling
        if (settings.enableAudio) {
          const audioContext = new AudioContext();
          const source = audioContext.createMediaStreamSource(stream);
          const analyzer = audioContext.createAnalyser();
          analyzer.fftSize = 256;
          source.connect(analyzer);

          const dataArray = new Uint8Array(analyzer.frequencyBinCount);
          
          const updateAudioLevel = () => {
            if (!state.isStarted || state.isPaused) {
              return;
            }
            
            analyzer.getByteFrequencyData(dataArray);
            const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
            setState(prev => ({ ...prev, audioLevel: average }));
            audioLevelFrameRef.current = requestAnimationFrame(updateAudioLevel);
          };

          updateAudioLevel();
        }

        // Initialize MediaRecorder with error handling
        try {
          const recorder = new MediaRecorder(stream);
          mediaRecorderRef.current = recorder;

          recorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              chunksRef.current.push(event.data);
            }
          };

          recorder.onstop = () => {
            // Handle recording completion
            // You can save the recording or process it further here
            // const blob = new Blob(chunksRef.current, { type: 'video/webm' });
          };

          // Initialize speech recognition in main thread
          if ('webkitSpeechRecognition' in window) {
            const SpeechRecognition = (window as any).webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;

            recognition.onresult = (event: any) => {
              let finalTranscript = '';
              let interimTranscript = '';

              for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                  finalTranscript += event.results[i][0].transcript;
                } else {
                  interimTranscript += event.results[i][0].transcript;
                }
              }

              setState(prev => ({ ...prev, transcription: finalTranscript + ' ' + interimTranscript }));
            };

            recognitionRef.current = recognition;
          }
        } catch (error) {
          console.error('Error accessing media devices:', error);
        }
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    initializeDevices();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioLevelFrameRef.current) {
        cancelAnimationFrame(audioLevelFrameRef.current);
      }
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [settings.enableVideo, settings.enableAudio]);

  const startInterview = () => {
    setState(prev => ({
      ...prev,
      isStarted: true,
      prepTimeRemaining: settings.prepTime,
      answerTimeRemaining: settings.answerTime,
      currentQuestionIndex: 0,
    }));
    
    if (mediaRecorderRef.current) {
      chunksRef.current = [];
      mediaRecorderRef.current.start();
    }

    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  const pauseInterview = () => {
    setState(prev => ({ ...prev, isPaused: true }));
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.pause();
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const resumeInterview = () => {
    setState(prev => ({ ...prev, isPaused: false }));
    if (mediaRecorderRef.current?.state === 'paused') {
      mediaRecorderRef.current.resume();
    }
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  const stopInterview = () => {
    setState(prev => ({
      ...prev,
      isStarted: false,
      isPaused: false,
      currentQuestionIndex: 0,
      transcription: '',
    }));
    
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Interview Simulator</h1>
          <p className="text-gray-400 mt-2">Practice your interview skills with real-time feedback</p>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={() => setSettings(prev => ({ ...prev, enableAudio: !prev.enableAudio }))}
            className="bg-transparent border border-gray-600 hover:bg-gray-700"
          >
            {settings.enableAudio ? (
              <Volume2 className="w-5 h-5 text-green-500" />
            ) : (
              <VolumeX className="w-5 h-5 text-gray-500" />
            )}
          </Button>
          <Button
            onClick={() => setSettings(prev => ({ ...prev, enableVideo: !prev.enableVideo }))}
            className="bg-transparent border border-gray-600 hover:bg-gray-700"
          >
            <Video className={`w-5 h-5 ${settings.enableVideo ? 'text-green-500' : 'text-gray-500'}`} />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6">
        {/* Video Preview */}
        <Card className="col-span-8 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
          <CardContent className="p-4">
            <div className="aspect-video rounded-lg overflow-hidden bg-black relative">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className={`w-full h-full object-cover ${!settings.enableVideo ? 'hidden' : ''}`}
              />
              {!settings.enableVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video className="w-16 h-16 text-gray-600" />
                </div>
              )}
            </div>
            
            {/* Controls */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {!state.isStarted ? (
                  <Button 
                    onClick={startInterview} 
                    className="bg-green-600 hover:bg-green-700"
                    disabled={!settings.enableVideo && !settings.enableAudio}
                  >
                    <Play className="w-4 h-4 mr-2" /> Start
                  </Button>
                ) : (
                  <>
                    {state.isPaused ? (
                      <Button onClick={resumeInterview} className="bg-green-600 hover:bg-green-700">
                        <Play className="w-4 h-4 mr-2" /> Resume
                      </Button>
                    ) : (
                      <Button onClick={pauseInterview} className="bg-yellow-600 hover:bg-yellow-700">
                        <Pause className="w-4 h-4 mr-2" /> Pause
                      </Button>
                    )}
                    <Button onClick={stopInterview} className="bg-red-600 hover:bg-red-700">
                      <StopCircle className="w-4 h-4 mr-2" /> Stop
                    </Button>
                  </>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">
                    {state.prepTimeRemaining > 0
                      ? `Prep: ${formatTime(state.prepTimeRemaining)}`
                      : `Answer: ${formatTime(state.answerTimeRemaining)}`}
                  </span>
                </div>
                {settings.enableAudio && (
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div
                      className="h-full rounded-full bg-green-500"
                      style={{
                        width: `${state.audioLevel / 2.55}%`,
                        transition: 'width 0.1s',
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Transcription */}
            {settings.enableAudio && state.transcription && (
              <div className="mt-4 p-4 rounded-lg bg-gray-700/30 border border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Transcription</h3>
                <p className="text-gray-300 text-sm">{state.transcription}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Question and Settings */}
        <Card className="col-span-4 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Current Question</CardTitle>
            <CardDescription className="text-gray-400">
              {state.prepTimeRemaining > 0 ? 'Preparation Time' : 'Answer Time'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-700/50">
              <p className="text-sm text-gray-300 mb-2">
                {sampleQuestions[state.currentQuestionIndex].category}
              </p>
              <p className="text-white">
                {sampleQuestions[state.currentQuestionIndex].text}
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-gray-400">Preparation Time</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    value={[settings.prepTime]}
                    onValueChange={(value) => setSettings(prev => ({ ...prev, prepTime: value[0] }))}
                    min={10}
                    max={60}
                    step={5}
                    disabled={state.isStarted}
                  />
                  <span className="text-white w-16">{formatTime(settings.prepTime)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-400">Answer Time</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    value={[settings.answerTime]}
                    onValueChange={(value) => setSettings(prev => ({ ...prev, answerTime: value[0] }))}
                    min={60}
                    max={300}
                    step={30}
                    disabled={state.isStarted}
                  />
                  <span className="text-white w-16">{formatTime(settings.answerTime)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress */}
      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Progress</span>
            <span className="text-gray-400">
              Question {state.currentQuestionIndex + 1} of {sampleQuestions.length}
            </span>
          </div>
          <Progress
            value={((state.currentQuestionIndex + 1) / sampleQuestions.length) * 100}
            className="h-2"
          />
        </CardContent>
      </Card>
    </div>
  );
} 