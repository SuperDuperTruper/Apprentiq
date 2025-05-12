'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Calculator,
  ChevronRight,
  Timer,
  BarChart,
  LineChart,
  PieChart,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getRandomQuestions } from './questions';
import { Question } from './types';
import dynamic from 'next/dynamic';

// Dynamically import chart components with no SSR
const LineGraph = dynamic(() => import('./graphs/LineGraph'), { ssr: false });
const BarGraph = dynamic(() => import('./graphs/BarGraph'), { ssr: false });
const PieGraph = dynamic(() => import('./graphs/PieGraph'), { ssr: false });

export default function NumericalTest() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes per question
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  // Initialize test with 20 random questions
  useEffect(() => {
    const selectedQuestions = getRandomQuestions(20);
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

  const handleStartTest = () => {
    setTestStarted(true);
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    if (answerIndex === questions[currentQuestion].correctAnswer) {
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
            <Calculator className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-white">Numerical Reasoning Test</h1>
          </div>
          
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-white">Test Format:</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <BookOpen className="w-5 h-5 text-green-500 mr-2" />
                20 questions selected from a pool of 100
              </li>
              <li className="flex items-center">
                <Timer className="w-5 h-5 text-yellow-500 mr-2" />
                2 minutes per question
              </li>
              <li className="flex items-center">
                <BarChart className="w-5 h-5 text-purple-500 mr-2" />
                Mix of calculations, graphs, and data interpretation
              </li>
              <li className="flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                Instant feedback and explanations
              </li>
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
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Test Complete!</h2>
        <p className="text-xl text-gray-300 mb-8">
          Your score: {score} out of {questions.length}
        </p>
        <Button onClick={() => window.location.reload()} className="bg-green-600 hover:bg-green-700">
          Try Again
        </Button>
      </motion.div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Calculator className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold text-white">Question {currentQuestion + 1}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Timer className="w-5 h-5 text-yellow-500" />
          <span className="text-lg font-mono text-white">{formatTime(timeLeft)}</span>
        </div>
      </div>

      <Progress value={(timeLeft / 120) * 100} className="mb-6" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="space-y-6"
        >
          <Card className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
            <p className="text-lg text-gray-100 mb-6">
              {currentQ.question}
            </p>

            {currentQ.type !== 'calculation' && currentQ.data && (
              <div className="mb-6 bg-gray-700/30 p-4 rounded-lg">
                {currentQ.type === 'graph' && currentQ.data.type === 'line' && (
                  <LineGraph data={currentQ.data} />
                )}
                {currentQ.type === 'graph' && currentQ.data.type === 'bar' && (
                  <BarGraph data={currentQ.data} />
                )}
                {currentQ.type === 'graph' && currentQ.data.type === 'pie' && (
                  <PieGraph data={currentQ.data} />
                )}
                {currentQ.type === 'table' && (
                  <table className="w-full text-gray-300">
                    <thead>
                      <tr>
                        {currentQ.data.headers.map((header, i) => (
                          <th key={i} className="p-2 border-b border-gray-600">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentQ.data.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j} className="p-2 border-b border-gray-600">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              {currentQ.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                  className={`p-4 rounded-lg text-left transition-colors ${
                    showExplanation
                      ? index === currentQ.correctAnswer
                        ? 'bg-green-600/20 border-green-500'
                        : index === selectedAnswer
                        ? 'bg-red-600/20 border-red-500'
                        : 'bg-gray-700/50'
                      : 'bg-gray-700/50 hover:bg-gray-700/70'
                  } border ${
                    selectedAnswer === index ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <span className="text-white">{option}</span>
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
                  <p className="text-gray-300">
                    {currentQ.explanation}
                  </p>
                  <Button
                    onClick={handleNextQuestion}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
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
          <BarChart className="w-5 h-5 text-green-500" />
          <span className="text-gray-300">Score: {score}/{currentQuestion + 1}</span>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          <span className="text-gray-300">Progress: {Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
      </div>
    </div>
  );
} 