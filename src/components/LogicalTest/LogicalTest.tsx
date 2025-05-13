'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Brain,
  ChevronRight,
  Timer,
  Puzzle,
  Lightbulb,
  Shapes,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Image from 'next/image';
import { questionPool, getRandomQuestions } from './questions';

interface Question {
  id: number;
  type: 'pattern' | 'sequence' | 'rule' | 'spatial' | 'analogy';
  text: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
  questionImage: string;
  choiceImages: string[];
}

export default function LogicalTest() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes per question
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize test with random questions
  useEffect(() => {
    const selectedQuestions = getRandomQuestions(10); // Get 10 questions (2 of each type)
    setQuestions(selectedQuestions);
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !showExplanation && testStarted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showExplanation && testStarted) {
      handleNextQuestion();
    }
  }, [timeLeft, showExplanation, testStarted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(120);
    } else {
      setIsTestComplete(true);
    }
  };

  const handleStartTest = async () => {
    setIsTransitioning(true);
    // Wait for fade out animation
    await new Promise(resolve => setTimeout(resolve, 500));
    setTestStarted(true);
  };

  if (!testStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="max-w-4xl mx-auto p-6"
      >
        <Card className={`p-8 border-gray-700 transition-all duration-500 ${
          isTransitioning 
            ? 'bg-black opacity-0' 
            : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm'
        }`}>
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="w-8 h-8 text-purple-500" />
            <h1 className="text-3xl font-bold text-white">Logical Reasoning Test</h1>
          </div>
          
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-white">Test Format:</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Puzzle className="w-5 h-5 text-green-500 mr-2" />
                5 types of logical reasoning questions
              </li>
              <li className="flex items-center">
                <Timer className="w-5 h-5 text-yellow-500 mr-2" />
                2 minutes per question
              </li>
              <li className="flex items-center">
                <Shapes className="w-5 h-5 text-purple-500 mr-2" />
                Visual pattern recognition and spatial reasoning
              </li>
              <li className="flex items-center">
                <Lightbulb className="w-5 h-5 text-blue-500 mr-2" />
                Instant feedback and explanations
              </li>
            </ul>
          </div>

          <Button
            onClick={handleStartTest}
            className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6"
          >
            Start Test
          </Button>
        </Card>
      </motion.div>
    );
  }

  if (isTestComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto p-6"
      >
        <Card className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">Test Complete!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Your score: {score} out of {questions.length}
          </p>
          
          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={question.id} className="p-4 bg-gray-800/50 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  Question {index + 1}: {question.type.charAt(0).toUpperCase() + question.type.slice(1)}
                </h3>
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={question.questionImage}
                    alt={`Question ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-300 mb-2">{question.text}</p>
                <div className="grid grid-cols-4 gap-4 mb-4">
                  {question.choiceImages.map((image, choiceIndex) => (
                    <div key={choiceIndex} className="relative h-24">
                      <Image
                        src={image}
                        alt={`Choice ${question.choices[choiceIndex]}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-gray-300">Your answer: <span className={question.correctAnswer === selectedAnswer ? 'text-green-500' : 'text-red-500'}>{selectedAnswer}</span></p>
                <p className="text-green-500">Correct answer: {question.correctAnswer}</p>
                <p className="text-gray-400 mt-2">{question.explanation}</p>
              </div>
            ))}
          </div>

          <Button
            onClick={() => window.location.reload()}
            className="w-full bg-purple-600 hover:bg-purple-700 mt-6"
          >
            Try Again
          </Button>
        </Card>
      </motion.div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Brain className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-bold text-white">Question {currentQuestion + 1}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Timer className="w-5 h-5 text-yellow-500" />
          <span className="text-lg font-mono text-white">{formatTime(timeLeft)}</span>
        </div>
      </div>

      <Progress 
        value={(timeLeft / 120) * 100} 
        className={`mb-6 ${
          timeLeft < 30 ? 'bg-red-500' : timeLeft < 60 ? 'bg-yellow-500' : 'bg-green-500'
        }`}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="space-y-6"
        >
          <Card className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
            <p className="text-lg text-gray-100 mb-6">{currentQ.text}</p>

            <div className="relative w-full h-64 mb-6">
              <Image
                src={currentQ.questionImage}
                alt={`Question ${currentQuestion + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {currentQ.choices.map((choice, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(choice)}
                  disabled={showExplanation}
                  className={`p-4 rounded-lg text-left transition-colors relative ${
                    showExplanation
                      ? choice === currentQ.correctAnswer
                        ? 'bg-green-600/20 border-green-500'
                        : choice === selectedAnswer
                        ? 'bg-red-600/20 border-red-500'
                        : 'bg-gray-700/50'
                      : 'bg-gray-700/50 hover:bg-gray-700/70'
                  } border ${
                    selectedAnswer === choice ? 'border-purple-500' : 'border-transparent'
                  }`}
                >
                  <div className="relative h-32 mb-2">
                    <Image
                      src={currentQ.choiceImages[index]}
                      alt={`Choice ${choice}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white">Option {choice}</span>
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-6 p-4 bg-gray-700/30 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">Explanation</h3>
                  <p className="text-gray-300">{currentQ.explanation}</p>
                  <Button
                    onClick={handleNextQuestion}
                    className="mt-4 w-full bg-purple-600 hover:bg-purple-700"
                  >
                    Next Question <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shapes className="w-5 h-5 text-green-500" />
          <span className="text-gray-300">Score: {score}/{currentQuestion + 1}</span>
        </div>
        <div className="flex items-center space-x-2">
          <ArrowRight className="w-5 h-5 text-purple-500" />
          <span className="text-gray-300">Progress: {Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
} 