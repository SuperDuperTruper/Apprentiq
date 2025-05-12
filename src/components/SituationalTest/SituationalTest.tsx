"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  Users,
  ChevronRight,
  Timer,
  Brain,
  Target,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Scenario {
  id: number;
  situation: string;
  question: string;
  options: {
    text: string;
    explanation: string;
    traits: {
      analytical: number;
      collaborative: number;
      decisive: number;
      empathetic: number;
      innovative: number;
    };
  }[];
  competency: string;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    competency: "Time Management & Prioritization",
    situation: "You arrive at work on Monday morning to find 20 unread emails, three urgent requests from different team members, and a report due by end of day that requires 4 hours of work.",
    question: "How would you handle this situation?",
    options: [
      {
        text: "Start with the report since it has a fixed deadline and will take the most time",
        explanation: "This approach prioritizes individual deliverables and structured time management",
        traits: {
          analytical: 4,
          collaborative: 1,
          decisive: 3,
          empathetic: 1,
          innovative: 2
        }
      },
      {
        text: "Quickly scan emails for critical issues, then create a prioritized task list before starting any work",
        explanation: "This balanced approach demonstrates analytical thinking and systematic problem-solving",
        traits: {
          analytical: 5,
          collaborative: 3,
          decisive: 4,
          empathetic: 2,
          innovative: 3
        }
      },
      {
        text: "Immediately respond to the urgent team requests since they involve others' work",
        explanation: "This response prioritizes team needs and collaborative work",
        traits: {
          analytical: 2,
          collaborative: 5,
          decisive: 3,
          empathetic: 4,
          innovative: 2
        }
      },
      {
        text: "Work on multiple tasks simultaneously to try to complete everything",
        explanation: "This approach shows adaptability but may impact work quality",
        traits: {
          analytical: 1,
          collaborative: 2,
          decisive: 2,
          empathetic: 3,
          innovative: 4
        }
      }
    ]
  },
  {
    id: 2,
    competency: "Communication & Conflict Resolution",
    situation: "During a team meeting, a colleague repeatedly interrupts and dismisses your ideas about a new project approach.",
    question: "What would be the most appropriate way to handle this situation?",
    options: [
      {
        text: "Confront the colleague immediately during the meeting to assert yourself",
        explanation: "This direct approach shows decisiveness but may escalate tension",
        traits: {
          analytical: 2,
          collaborative: 1,
          decisive: 5,
          empathetic: 1,
          innovative: 2
        }
      },
      {
        text: "Remain silent and avoid sharing further ideas in the meeting",
        explanation: "This passive approach minimizes conflict but reduces contribution",
        traits: {
          analytical: 2,
          collaborative: 1,
          decisive: 1,
          empathetic: 3,
          innovative: 1
        }
      },
      {
        text: "Schedule a private conversation with the colleague to discuss communication styles and find common ground",
        explanation: "This diplomatic approach balances assertiveness with relationship building",
        traits: {
          analytical: 4,
          collaborative: 4,
          decisive: 3,
          empathetic: 5,
          innovative: 3
        }
      },
      {
        text: "Speak to your manager about the colleague's behavior without first attempting to resolve it directly",
        explanation: "This formal approach follows hierarchy but may damage peer relationships",
        traits: {
          analytical: 3,
          collaborative: 2,
          decisive: 4,
          empathetic: 2,
          innovative: 1
        }
      }
    ]
  },
  {
    id: 3,
    competency: "Teamwork & Collaboration",
    situation: "You notice a teammate is struggling with their portion of a group project, which could delay the entire team's deadline.",
    question: "What would be the best course of action?",
    options: [
      {
        text: "Take over their tasks to ensure the project stays on schedule",
        explanation: "This doesn't address the underlying issue or help your colleague develop",
        traits: {
          analytical: 2,
          collaborative: 1,
          decisive: 3,
          empathetic: 1,
          innovative: 1
        }
      },
      {
        text: "Offer to collaborate and share knowledge while helping them complete their tasks",
        explanation: "This supports both the team's goals and individual development",
        traits: {
          analytical: 4,
          collaborative: 5,
          decisive: 4,
          empathetic: 4,
          innovative: 3
        }
      },
      {
        text: "Report their performance issues to the project manager",
        explanation: "This could damage team trust and relationships",
        traits: {
          analytical: 1,
          collaborative: 1,
          decisive: 5,
          empathetic: 1,
          innovative: 1
        }
      },
      {
        text: "Suggest they work overtime to catch up",
        explanation: "This puts undue pressure on the colleague and doesn't address skill gaps",
        traits: {
          analytical: 1,
          collaborative: 2,
          decisive: 2,
          empathetic: 2,
          innovative: 2
        }
      }
    ]
  },
  {
    id: 4,
    competency: "Professional Ethics & Integrity",
    situation: "You discover a minor error in a report that has already been sent to a client, which doesn't significantly impact the conclusions.",
    question: "What should you do in this situation?",
    options: [
      {
        text: "Ignore it since the error doesn't change the main conclusions",
        explanation: "This compromises professional integrity and transparency",
        traits: {
          analytical: 1,
          collaborative: 1,
          decisive: 1,
          empathetic: 1,
          innovative: 1
        }
      },
      {
        text: "Inform your manager and the client immediately, providing a corrected version",
        explanation: "This demonstrates integrity and commitment to accuracy",
        traits: {
          analytical: 5,
          collaborative: 5,
          decisive: 5,
          empathetic: 5,
          innovative: 5
        }
      },
      {
        text: "Fix it quietly and send an updated version without mentioning the error",
        explanation: "This lacks transparency and could damage trust if discovered",
        traits: {
          analytical: 2,
          collaborative: 2,
          decisive: 2,
          empathetic: 2,
          innovative: 2
        }
      },
      {
        text: "Wait to see if the client notices the error",
        explanation: "This is unprofessional and could damage credibility",
        traits: {
          analytical: 1,
          collaborative: 1,
          decisive: 1,
          empathetic: 1,
          innovative: 1
        }
      }
    ]
  },
  {
    id: 5,
    competency: "Leadership & Decision Making",
    situation: "Your team needs to implement a new software system, and team members are divided between two options with strong opinions on both sides.",
    question: "How would you approach this decision?",
    options: [
      {
        text: "Make the decision yourself based on your research to avoid further debate",
        explanation: "This ignores valuable team input and could affect buy-in",
        traits: {
          analytical: 4,
          collaborative: 1,
          decisive: 3,
          empathetic: 1,
          innovative: 2
        }
      },
      {
        text: "Create a structured evaluation process involving all team members, comparing both options against agreed criteria",
        explanation: "This promotes inclusive decision-making and thorough analysis",
        traits: {
          analytical: 5,
          collaborative: 4,
          decisive: 5,
          empathetic: 3,
          innovative: 4
        }
      },
      {
        text: "Put it to a team vote without further discussion",
        explanation: "This might be democratic but misses the opportunity for meaningful analysis",
        traits: {
          analytical: 2,
          collaborative: 2,
          decisive: 4,
          empathetic: 2,
          innovative: 2
        }
      },
      {
        text: "Defer the decision to senior management",
        explanation: "This avoids responsibility and doesn't utilize team expertise",
        traits: {
          analytical: 3,
          collaborative: 1,
          decisive: 3,
          empathetic: 1,
          innovative: 1
        }
      }
    ]
  }
];

// Helper function to analyze traits
function analyzeTraits(answers: number[]) {
  const traits = {
    analytical: 0,
    collaborative: 0,
    decisive: 0,
    empathetic: 0,
    innovative: 0
  };
  
  answers.forEach((answerIndex, questionIndex) => {
    const option = scenarios[questionIndex].options[answerIndex];
    Object.keys(traits).forEach(trait => {
      traits[trait as keyof typeof traits] += option.traits[trait as keyof typeof option.traits];
    });
  });
  
  // Convert to percentages
  const maxScore = answers.length * 5; // 5 is max score per trait
  Object.keys(traits).forEach(trait => {
    traits[trait as keyof typeof traits] = Math.round((traits[trait as keyof typeof traits] / maxScore) * 100);
  });
  
  return traits;
}

// Helper function to generate strengths and areas for development
function generateInsights(traits: ReturnType<typeof analyzeTraits>) {
  const strengths = [];
  const development = [];
  
  if (traits.analytical >= 70) strengths.push("Strong analytical thinking and systematic problem-solving");
  if (traits.analytical <= 40) development.push("Consider developing more structured approaches to problem-solving");
  
  if (traits.collaborative >= 70) strengths.push("Excellent team player with strong collaborative skills");
  if (traits.collaborative <= 40) development.push("Focus on building more collaborative relationships");
  
  if (traits.decisive >= 70) strengths.push("Quick and confident decision-making abilities");
  if (traits.decisive <= 40) development.push("Work on making more timely and confident decisions");
  
  if (traits.empathetic >= 70) strengths.push("High emotional intelligence and people-oriented approach");
  if (traits.empathetic <= 40) development.push("Develop greater awareness of others' perspectives and needs");
  
  if (traits.innovative >= 70) strengths.push("Creative problem-solver with innovative thinking");
  if (traits.innovative <= 40) development.push("Explore more creative and innovative solutions");
  
  return { strengths, development };
}

// Helper function to determine decision-making style
function determineStyle(traits: ReturnType<typeof analyzeTraits>) {
  if (traits.analytical > 70 && traits.decisive > 70) return "Logical Decision Maker";
  if (traits.empathetic > 70 && traits.collaborative > 70) return "People-Oriented Decision Maker";
  if (traits.innovative > 70 && traits.decisive > 70) return "Creative Problem Solver";
  if (traits.analytical > 70 && traits.empathetic > 70) return "Balanced Decision Maker";
  return "Adaptable Decision Maker";
}

// Add this function before the component
function getRandomScenarios(allScenarios: Scenario[], count: number): Scenario[] {
  const shuffled = [...allScenarios].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function SituationalTest() {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes per question
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentScenarios, setCurrentScenarios] = useState<Scenario[]>([]);

  useEffect(() => {
    // Select 20 random scenarios when the test starts
    if (testStarted && currentScenarios.length === 0) {
      setCurrentScenarios(getRandomScenarios(scenarios, 20));
    }
  }, [testStarted]);

  useEffect(() => {
    if (timeLeft > 0 && testStarted && !isTestComplete) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && testStarted && !isTestComplete) {
      handleNextQuestion();
    }
  }, [timeLeft, testStarted, isTestComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (optionIndex: string) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      setAnswers([...answers, parseInt(selectedOption)]);
    }
    
    if (currentQuestion < currentScenarios.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setTimeLeft(120);
    } else {
      setIsTestComplete(true);
      confetti();
    }
  };

  const handleStartTest = () => {
    setTestStarted(true);
  };

  const handleRetakeTest = () => {
    setTestStarted(true);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setTimeLeft(120);
    setIsTestComplete(false);
    setAnswers([]);
    setCurrentScenarios(getRandomScenarios(scenarios, 20));
  };

  if (!testStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto p-6"
      >
        <Card className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-white">Situational Judgement Test</h1>
          </div>
          
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-white">Test Format:</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Brain className="w-5 h-5 text-green-500 mr-2" />
                20 workplace scenarios
              </li>
              <li className="flex items-center">
                <Timer className="w-5 h-5 text-yellow-500 mr-2" />
                2 minutes per question
              </li>
              <li className="flex items-center">
                <Target className="w-5 h-5 text-purple-500 mr-2" />
                Professional competency assessment
              </li>
              <li className="flex items-center">
                <Lightbulb className="w-5 h-5 text-blue-500 mr-2" />
                You can change your answer before proceeding
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">Competencies Assessed:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Time Management & Prioritization</li>
              <li>• Communication & Conflict Resolution</li>
              <li>• Teamwork & Collaboration</li>
              <li>• Professional Ethics & Integrity</li>
              <li>• Leadership & Decision Making</li>
            </ul>
          </div>

          <Button
            onClick={handleStartTest}
            className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
          >
            Start Test
          </Button>
        </Card>
      </motion.div>
    );
  }

  if (isTestComplete) {
    const traits = analyzeTraits(answers);
    const { strengths, development } = generateInsights(traits);
    const style = determineStyle(traits);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto p-6"
      >
        <Card className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">Assessment Report</h2>
          
          <div className="space-y-8">
            {/* Decision Making Style */}
            <div className="p-6 bg-gray-800/50 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-semibold text-white">Decision-Making Style: {style}</h3>
              </div>
              
              {/* Trait Breakdown */}
              <div className="space-y-4">
                {Object.entries(traits).map(([trait, score]) => (
                  <div key={trait} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 capitalize">{trait}</span>
                      <span className="text-gray-300">{score}%</span>
                    </div>
                    <Progress value={score} className="bg-gray-700" />
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div className="p-6 bg-gray-800/50 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Target className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold text-white">Key Strengths</h3>
              </div>
              <ul className="space-y-2">
                {strengths.map((strength, index) => (
                  <li key={index} className="text-gray-300 flex items-start space-x-2">
                    <span className="text-green-500">•</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas for Development */}
            <div className="p-6 bg-gray-800/50 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-white">Areas for Development</h3>
              </div>
              <ul className="space-y-2">
                {development.map((area, index) => (
                  <li key={index} className="text-gray-300 flex items-start space-x-2">
                    <span className="text-blue-500">•</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={handleRetakeTest}
              className="w-full bg-blue-600 hover:bg-blue-700 mt-6"
            >
              Take Test Again
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  }

  if (currentScenarios.length === 0) {
    return null; // Loading state while scenarios are being selected
  }

  const currentScenario = currentScenarios[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Users className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold text-white">Question {currentQuestion + 1}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Timer className="w-5 h-5 text-yellow-500" />
          <span className="text-lg font-mono text-white">{formatTime(timeLeft)}</span>
        </div>
      </div>

      <Progress 
        value={(timeLeft / 120) * 100} 
        className="mb-6 bg-gray-700"
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
            <div className="flex items-center space-x-2 mb-4">
              <Target className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold text-white">{currentScenario.competency}</h3>
            </div>

            <p className="text-lg text-gray-100 mb-6">{currentScenario.situation}</p>
            <p className="text-lg font-medium text-white mb-6">{currentScenario.question}</p>

            <RadioGroup
              value={selectedOption || ""}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {currentScenario.options.map((option, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className={`p-4 rounded-lg transition-colors ${
                    index.toString() === selectedOption
                      ? 'bg-gray-700/70 border-blue-500'
                      : 'hover:bg-gray-700/70 bg-gray-700/50 border-transparent'
                  } border`}
                >
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="text-white cursor-pointer">
                      {option.text}
                    </Label>
                  </div>
                </motion.div>
              ))}
            </RadioGroup>

            {selectedOption !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <Button
                  onClick={handleNextQuestion}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {currentQuestion < currentScenarios.length - 1 ? (
                    <>Next Question <ChevronRight className="w-4 h-4 ml-2" /></>
                  ) : (
                    'Complete Test'
                  )}
                </Button>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Target className="w-5 h-5 text-blue-500" />
          <span className="text-gray-300">Question {currentQuestion + 1} of {currentScenarios.length}</span>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          <span className="text-gray-300">Progress: {Math.round(((currentQuestion + 1) / currentScenarios.length) * 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
} 