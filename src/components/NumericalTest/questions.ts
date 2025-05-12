import { Question } from './types';

export const questionPool: Question[] = [
  // Percentages
  {
    id: 1,
    type: 'calculation',
    question: "A company's revenue grew by 15% each year for 3 years. If the initial revenue was $100,000, what was the final revenue?",
    data: null,
    options: ['$152,087', '$145,000', '$172,325', '$156,250'],
    correctAnswer: 0,
    explanation: "Using compound growth: 100,000 × (1.15)³ = 152,087",
    category: 'percentages'
  },
  {
    id: 2,
    type: 'calculation',
    question: "If a product's price increased by 20% and then decreased by 20%, what is the total percentage change?",
    data: null,
    options: ['0%', '-4%', '4%', 'No change'],
    correctAnswer: 1,
    explanation: "New price after increase: 100% × 1.2 = 120%. After decrease: 120% × 0.8 = 96%. Total change is -4%",
    category: 'percentages'
  },
  {
    id: 3,
    type: 'calculation',
    question: "In a class of 200 students, 45% are boys. How many girls are there?",
    data: null,
    options: ['90', '110', '155', '45'],
    correctAnswer: 1,
    explanation: "Girls = Total - Boys = 200 - (45% of 200) = 200 - 90 = 110",
    category: 'percentages'
  },
  {
    id: 4,
    type: 'graph',
    question: "The graph shows monthly sales growth percentages. What was the total percentage growth over the three months?",
    data: {
      type: 'line',
      labels: ['January', 'February', 'March'],
      values: [5, 7, 3]
    },
    options: ['15%', '15.71%', '14.89%', '16.02%'],
    correctAnswer: 1,
    explanation: "Total growth = (1.05 × 1.07 × 1.03 - 1) × 100 = 15.71%",
    category: 'percentages'
  },
  {
    id: 5,
    type: 'calculation',
    question: "A store offers a 30% discount, plus an additional 10% off the discounted price. What is the total percentage discount?",
    data: null,
    options: ['40%', '37%', '33%', '35%'],
    correctAnswer: 1,
    explanation: "After first discount: 70%. After second discount: 70% × 90% = 63%. Total discount = 37%",
    category: 'percentages'
  },
  // Finance
  {
    id: 6,
    type: 'calculation',
    question: "An investment of $5,000 earns 8% simple interest annually. How much interest is earned after 2.5 years?",
    data: null,
    options: ['$1,000', '$1,200', '$800', '$1,500'],
    correctAnswer: 0,
    explanation: "Simple interest = Principal × Rate × Time = $5,000 × 0.08 × 2.5 = $1,000",
    category: 'finance'
  },
  {
    id: 7,
    type: 'calculation',
    question: "What is the future value of $10,000 invested at 6% compound interest for 2 years?",
    data: null,
    options: ['$11,200', '$11,236', '$11,300', '$12,000'],
    correctAnswer: 1,
    explanation: "Future Value = $10,000 × (1 + 0.06)² = $11,236",
    category: 'finance'
  },
  {
    id: 8,
    type: 'graph',
    question: "Based on the investment returns shown in the graph, which quarter showed the highest percentage gain?",
    data: {
      type: 'bar',
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      values: [2.5, 3.8, 1.2, 2.9]
    },
    options: ['Q1', 'Q2', 'Q3', 'Q4'],
    correctAnswer: 1,
    explanation: "Q2 showed the highest return at 3.8%",
    category: 'finance'
  },
  {
    id: 9,
    type: 'table',
    question: "Given the monthly expenses in the table, what percentage of total expenses goes to rent?",
    data: {
      headers: ['Expense', 'Amount'],
      rows: [
        ['Rent', '$1500'],
        ['Utilities', '$300'],
        ['Food', '$600'],
        ['Transport', '$400']
      ]
    },
    options: ['50%', '53.57%', '45%', '55%'],
    correctAnswer: 1,
    explanation: "Total expenses = $2800. Rent percentage = (1500/2800) × 100 = 53.57%",
    category: 'finance'
  },
  {
    id: 10,
    type: 'calculation',
    question: "If a loan of $20,000 is to be repaid in 24 monthly installments with 5% annual interest, what is the approximate monthly payment?",
    data: null,
    options: ['$876.04', '$833.33', '$891.67', '$920.83'],
    correctAnswer: 0,
    explanation: "Using loan amortization formula: PMT = 20000 × (0.05/12 × (1 + 0.05/12)^24) / ((1 + 0.05/12)^24 - 1) = $876.04",
    category: 'finance'
  },
  // Data Interpretation
  {
    id: 11,
    type: 'graph',
    question: "Looking at the sales data graph, what was the percentage increase in sales from Q1 to Q2?",
    data: {
      type: 'line',
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      values: [100, 150, 130, 180]
    },
    options: ['25%', '50%', '75%', '100%'],
    correctAnswer: 1,
    explanation: "Q1 sales: 100, Q2 sales: 150. Increase = (150-100)/100 × 100 = 50%",
    category: 'data-interpretation'
  },
  {
    id: 12,
    type: 'graph',
    question: "Based on the pie chart, what percentage of total revenue comes from Product A and Product B combined?",
    data: {
      type: 'pie',
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      values: [30, 25, 20, 25]
    },
    options: ['50%', '55%', '45%', '60%'],
    correctAnswer: 1,
    explanation: "Product A (30%) + Product B (25%) = 55% of total revenue",
    category: 'data-interpretation'
  },
  {
    id: 13,
    type: 'table',
    question: "From the employee data table, what is the average age of employees in the Marketing department?",
    data: {
      headers: ['Department', 'Employee', 'Age'],
      rows: [
        ['Marketing', 'John', '28'],
        ['Marketing', 'Sarah', '32'],
        ['Marketing', 'Mike', '35'],
        ['Marketing', 'Lisa', '29']
      ]
    },
    options: ['30', '31', '32', '33'],
    correctAnswer: 1,
    explanation: "Average age = (28 + 32 + 35 + 29) ÷ 4 = 31",
    category: 'data-interpretation'
  },
  {
    id: 14,
    type: 'graph',
    question: "If the trend in the graph continues, what will be the projected value for Month 7?",
    data: {
      type: 'line',
      labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
      values: [10, 15, 20, 25, 30, 35]
    },
    options: ['38', '40', '42', '45'],
    correctAnswer: 1,
    explanation: "The trend shows a consistent increase of 5 units per month. Month 6 value is 35, so Month 7 would be 40",
    category: 'data-interpretation'
  },
  {
    id: 15,
    type: 'table',
    question: "What is the percentage difference in sales between the highest and lowest performing regions?",
    data: {
      headers: ['Region', 'Sales ($M)'],
      rows: [
        ['North', '2.4'],
        ['South', '3.1'],
        ['East', '2.8'],
        ['West', '2.2']
      ]
    },
    options: ['29%', '41%', '35%', '40%'],
    correctAnswer: 1,
    explanation: "Highest (South): 3.1M, Lowest (West): 2.2M. Difference = (3.1 - 2.2)/2.2 × 100 = 41%",
    category: 'data-interpretation'
  },
  // Ratios
  {
    id: 16,
    type: 'calculation',
    question: "If 3 workers can complete a project in 12 days, how many days would it take 4 workers to complete the same project?",
    data: null,
    options: ['9 days', '16 days', '8 days', '6 days'],
    correctAnswer: 0,
    explanation: "Using inverse proportion: (3 workers × 12 days) ÷ 4 workers = 9 days",
    category: 'ratios'
  },
  {
    id: 17,
    type: 'calculation',
    question: "In a mixture of milk and water in the ratio 5:3, if there are 24 liters of water, how many liters of milk are there?",
    data: null,
    options: ['40', '35', '45', '30'],
    correctAnswer: 0,
    explanation: "If 3 parts = 24 liters, then 1 part = 8 liters. Therefore, 5 parts = 40 liters of milk",
    category: 'ratios'
  },
  {
    id: 18,
    type: 'calculation',
    question: "Two numbers are in the ratio 3:4. If their sum is 35, what is the larger number?",
    data: null,
    options: ['15', '20', '25', '30'],
    correctAnswer: 1,
    explanation: "Total parts = 7. One part = 35/7 = 5. Larger number = 4 parts = 20",
    category: 'ratios'
  },
  {
    id: 19,
    type: 'calculation',
    question: "If the ratio of boys to girls in a class is 5:4, and there are 45 students in total, how many boys are there?",
    data: null,
    options: ['20', '25', '30', '35'],
    correctAnswer: 1,
    explanation: "Total parts = 9. One part = 45/9 = 5. Boys = 5 parts = 25",
    category: 'ratios'
  },
  {
    id: 20,
    type: 'calculation',
    question: "A car travels 240 km in 3 hours. At the same speed, how far will it travel in 5 hours?",
    data: null,
    options: ['300 km', '350 km', '400 km', '450 km'],
    correctAnswer: 2,
    explanation: "Speed = 240/3 = 80 km/h. Distance in 5 hours = 80 × 5 = 400 km",
    category: 'ratios'
  },
  // Probability
  {
    id: 21,
    type: 'calculation',
    question: "In a bag of 20 marbles, 8 are red and 12 are blue. What is the probability of drawing a red marble?",
    data: null,
    options: ['0.4', '0.6', '0.3', '0.5'],
    correctAnswer: 0,
    explanation: "Probability = Number of favorable outcomes / Total outcomes = 8/20 = 0.4",
    category: 'probability'
  },
  {
    id: 22,
    type: 'calculation',
    question: "If you roll two dice, what is the probability of getting a sum of 7?",
    data: null,
    options: ['1/6', '5/36', '1/12', '6/36'],
    correctAnswer: 3,
    explanation: "There are 6 ways to get a sum of 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) out of 36 possible outcomes = 6/36",
    category: 'probability'
  },
  {
    id: 23,
    type: 'calculation',
    question: "In a deck of 52 cards, what is the probability of drawing a face card or an ace?",
    data: null,
    options: ['12/52', '16/52', '13/52', '15/52'],
    correctAnswer: 1,
    explanation: "Face cards (12) + Aces (4) = 16 cards. Probability = 16/52",
    category: 'probability'
  },
  {
    id: 24,
    type: 'graph',
    question: "Based on the historical data shown in the pie chart, what is the probability of a successful project outcome?",
    data: {
      type: 'pie',
      labels: ['Success', 'Partial Success', 'Failure'],
      values: [65, 20, 15]
    },
    options: ['0.65', '0.85', '0.75', '0.55'],
    correctAnswer: 0,
    explanation: "Probability of success = 65/100 = 0.65",
    category: 'probability'
  },
  {
    id: 25,
    type: 'calculation',
    question: "If the probability of rain on any day is 0.3, what is the probability of no rain for three consecutive days?",
    data: null,
    options: ['0.343', '0.7', '0.3', '0.027'],
    correctAnswer: 0,
    explanation: "Probability of no rain = 0.7. For three days = 0.7³ = 0.343",
    category: 'probability'
  },
  // Statistics
  {
    id: 26,
    type: 'calculation',
    question: "Find the mean of the numbers: 15, 18, 22, 24, 25, 28, 32",
    data: null,
    options: ['23.4', '24', '23.5', '22.8'],
    correctAnswer: 0,
    explanation: "Mean = Sum of values / Number of values = 164/7 = 23.4",
    category: 'statistics'
  },
  {
    id: 27,
    type: 'table',
    question: "Calculate the median salary from the given data.",
    data: {
      headers: ['Department', 'Salary'],
      rows: [
        ['HR', '45000'],
        ['IT', '65000'],
        ['Sales', '55000'],
        ['Marketing', '50000'],
        ['Finance', '60000']
      ]
    },
    options: ['55000', '50000', '60000', '52500'],
    correctAnswer: 0,
    explanation: "Ordered salaries: 45000, 50000, 55000, 60000, 65000. Median is the middle value: 55000",
    category: 'statistics'
  },
  {
    id: 28,
    type: 'graph',
    question: "What is the range of the data points shown in the graph?",
    data: {
      type: 'line',
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      values: [23, 18, 25, 30, 22]
    },
    options: ['12', '7', '5', '10'],
    correctAnswer: 0,
    explanation: "Range = Highest value - Lowest value = 30 - 18 = 12",
    category: 'statistics'
  },
  {
    id: 29,
    type: 'calculation',
    question: "Find the standard deviation of the numbers: 2, 4, 4, 4, 5, 5, 7, 9",
    data: null,
    options: ['2', '2.12', '1.87', '2.24'],
    correctAnswer: 2,
    explanation: "Mean = 5, Sum of squared differences = 28, Variance = 3.5, Standard deviation = √3.5 ≈ 1.87",
    category: 'statistics'
  },
  {
    id: 30,
    type: 'table',
    question: "What is the mode of the test scores in the data set?",
    data: {
      headers: ['Student', 'Score'],
      rows: [
        ['A', '85'],
        ['B', '92'],
        ['C', '88'],
        ['D', '92'],
        ['E', '85'],
        ['F', '92']
      ]
    },
    options: ['85', '88', '92', 'No mode'],
    correctAnswer: 2,
    explanation: "92 appears three times, more than any other score, making it the mode",
    category: 'statistics'
  },
  // Time and Distance
  {
    id: 31,
    type: 'calculation',
    question: "A train traveling at 60 km/h takes 2 hours to reach its destination. If the speed is increased to 75 km/h, how long will the journey take?",
    data: null,
    options: ['1.6 hours', '1.5 hours', '1.8 hours', '2.5 hours'],
    correctAnswer: 0,
    explanation: "Distance = Speed × Time. Distance = 60 × 2 = 120 km. New time = 120/75 = 1.6 hours",
    category: 'time-and-distance'
  },
  {
    id: 32,
    type: 'calculation',
    question: "Two cars start from the same point. Car A travels north at 40 km/h and Car B travels east at 30 km/h. What is the distance between them after 3 hours?",
    data: null,
    options: ['150 km', '125 km', '100 km', '175 km'],
    correctAnswer: 0,
    explanation: "Using Pythagorean theorem: Distance = √((40×3)² + (30×3)²) = √(14400 + 8100) = 150 km",
    category: 'time-and-distance'
  },
  {
    id: 33,
    type: 'graph',
    question: "Based on the speed-time graph, what is the total distance traveled?",
    data: {
      type: 'line',
      labels: ['0h', '1h', '2h', '3h', '4h'],
      values: [0, 30, 30, 45, 45]
    },
    options: ['120 km', '150 km', '135 km', '140 km'],
    correctAnswer: 2,
    explanation: "Area under the graph = (30×2) + (45×2) = 60 + 75 = 135 km",
    category: 'time-and-distance'
  },
  {
    id: 34,
    type: 'calculation',
    question: "A cyclist covers 20 km at 10 km/h and the next 30 km at 15 km/h. What is the average speed for the entire journey?",
    data: null,
    options: ['12.5 km/h', '13 km/h', '11.5 km/h', '14 km/h'],
    correctAnswer: 1,
    explanation: "Total time = 20/10 + 30/15 = 2 + 2 = 4 hours. Average speed = Total distance/Total time = 50/4 = 13 km/h",
    category: 'time-and-distance'
  },
  {
    id: 35,
    type: 'calculation',
    question: "If a person walks at 4 km/h, how long will it take to cover 6 km?",
    data: null,
    options: ['1.5 hours', '2 hours', '1.25 hours', '1.75 hours'],
    correctAnswer: 0,
    explanation: "Time = Distance/Speed = 6/4 = 1.5 hours",
    category: 'time-and-distance'
  },
  // Profit and Loss
  {
    id: 36,
    type: 'calculation',
    question: "A product is bought for $80 and sold for $100. What is the percentage profit?",
    data: null,
    options: ['20%', '25%', '15%', '30%'],
    correctAnswer: 1,
    explanation: "Profit percentage = (Profit/Cost Price) × 100 = (20/80) × 100 = 25%",
    category: 'profit-and-loss'
  },
  {
    id: 37,
    type: 'table',
    question: "Calculate the total profit/loss from the given sales data.",
    data: {
      headers: ['Product', 'Cost Price', 'Selling Price', 'Units Sold'],
      rows: [
        ['A', '100', '120', '5'],
        ['B', '150', '140', '3'],
        ['C', '80', '95', '4']
      ]
    },
    options: ['$115', '$125', '$135', '$145'],
    correctAnswer: 2,
    explanation: "Product A: 5×(120-100) = 100, B: 3×(140-150) = -30, C: 4×(95-80) = 60. Total = 135",
    category: 'profit-and-loss'
  },
  {
    id: 38,
    type: 'calculation',
    question: "If a shopkeeper offers a 20% discount on marked price and still makes a 25% profit on cost price, what is the marked price if the cost price is $100?",
    data: null,
    options: ['$150', '$156.25', '$160', '$162.50'],
    correctAnswer: 1,
    explanation: "Let marked price be x. After 20% discount: 0.8x = 125 (25% profit on 100). Therefore x = 125/0.8 = 156.25",
    category: 'profit-and-loss'
  },
  {
    id: 39,
    type: 'graph',
    question: "From the profit/loss graph over months, what was the total profit for the quarter?",
    data: {
      type: 'bar',
      labels: ['January', 'February', 'March'],
      values: [2500, -1500, 3000]
    },
    options: ['$4000', '$3500', '$4500', '$5000'],
    correctAnswer: 0,
    explanation: "Total profit = 2500 - 1500 + 3000 = $4000",
    category: 'profit-and-loss'
  },
  {
    id: 40,
    type: 'calculation',
    question: "A merchant buys 100 items at $5 each and sells 80% of them at $7 each and the rest at a loss of 20%. What is the overall profit percentage?",
    data: null,
    options: ['28%', '30%', '32%', '35%'],
    correctAnswer: 1,
    explanation: "CP = 500, SP = (80×7) + (20×4) = 560 + 80 = 640. Profit% = (140/500)×100 = 30%",
    category: 'profit-and-loss'
  },
  // Averages
  {
    id: 41,
    type: 'calculation',
    question: "The average of five numbers is 27. If four of the numbers are 25, 28, 30, and 22, what is the fifth number?",
    data: null,
    options: ['28', '30', '32', '35'],
    correctAnswer: 1,
    explanation: "Sum = Average × Count = 27 × 5 = 135. Fifth number = 135 - (25 + 28 + 30 + 22) = 30",
    category: 'averages'
  },
  {
    id: 42,
    type: 'table',
    question: "Find the weighted average of test scores where Test 1 has weight 2, Test 2 has weight 3, and Test 3 has weight 5.",
    data: {
      headers: ['Test', 'Score'],
      rows: [
        ['Test 1', '85'],
        ['Test 2', '90'],
        ['Test 3', '88']
      ]
    },
    options: ['87.5', '88', '88.5', '89'],
    correctAnswer: 2,
    explanation: "Weighted average = (85×2 + 90×3 + 88×5)/(2+3+5) = 885/10 = 88.5",
    category: 'averages'
  },
  {
    id: 43,
    type: 'calculation',
    question: "The average age of a team of 11 players is 24 years. If the coach aged 50 years joins the team, what is the new average age?",
    data: null,
    options: ['26', '25', '27', '28'],
    correctAnswer: 0,
    explanation: "Current sum = 24 × 11 = 264. New sum = 264 + 50 = 314. New average = 314/12 = 26",
    category: 'averages'
  },
  {
    id: 44,
    type: 'graph',
    question: "What is the moving average (window of 3) for the last point in the data series?",
    data: {
      type: 'line',
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      values: [10, 15, 12, 18, 14]
    },
    options: ['14.67', '15', '14.33', '15.33'],
    correctAnswer: 0,
    explanation: "Moving average of last 3 points = (12 + 18 + 14)/3 = 14.67",
    category: 'averages'
  },
  {
    id: 45,
    type: 'calculation',
    question: "A batsman scored 30 runs in the first match. What should be his score in the second match to have an average of 50 runs?",
    data: null,
    options: ['60', '70', '75', '80'],
    correctAnswer: 1,
    explanation: "For average of 50: (30 + x)/2 = 50. Therefore, x = 100 - 30 = 70",
    category: 'averages'
  },
  // Number Series
  {
    id: 46,
    type: 'calculation',
    question: "What is the next number in the series: 2, 6, 12, 20, 30, __?",
    data: null,
    options: ['42', '40', '38', '36'],
    correctAnswer: 0,
    explanation: "Difference between consecutive terms: 4, 6, 8, 10, 12. Next number = 30 + 12 = 42",
    category: 'number-series'
  },
  {
    id: 47,
    type: 'calculation',
    question: "Find the missing number: 1, 3, 9, 27, __, 243",
    data: null,
    options: ['81', '108', '72', '90'],
    correctAnswer: 0,
    explanation: "Each number is multiplied by 3 to get the next number. 27 × 3 = 81",
    category: 'number-series'
  },
  {
    id: 48,
    type: 'graph',
    question: "Based on the pattern shown in the graph, what should be the next value?",
    data: {
      type: 'line',
      labels: ['1', '2', '3', '4', '5'],
      values: [2, 4, 8, 16, 32]
    },
    options: ['48', '64', '56', '60'],
    correctAnswer: 1,
    explanation: "Each number is doubled to get the next number. 32 × 2 = 64",
    category: 'number-series'
  },
  {
    id: 49,
    type: 'calculation',
    question: "What is the next number in the series: 3, 8, 15, 24, 35, __?",
    data: null,
    options: ['48', '46', '50', '52'],
    correctAnswer: 0,
    explanation: "Difference between terms: 5, 7, 9, 11, 13. Next number = 35 + 13 = 48",
    category: 'number-series'
  },
  {
    id: 50,
    type: 'calculation',
    question: "Complete the series: 1, 4, 9, 16, 25, __",
    data: null,
    options: ['36', '49', '64', '81'],
    correctAnswer: 0,
    explanation: "Series is square numbers: 1², 2², 3², 4², 5², 6². Next number = 6² = 36",
    category: 'number-series'
  }
];

// Categories for balanced question selection
export const categories = [
  'percentages',
  'finance',
  'data-interpretation',
  'ratios',
  'probability',
  'statistics',
  'time-and-distance',
  'profit-and-loss',
  'averages',
  'number-series'
] as const;

// Helper function to get random questions ensuring category balance
export function getRandomQuestions(count: number): Question[] {
  const questionsPerCategory = Math.floor(count / categories.length);
  const remainder = count % categories.length;
  
  let selectedQuestions: Question[] = [];
  
  // Select equal number of questions from each category
  categories.forEach(category => {
    const categoryQuestions = questionPool.filter(q => q.category === category);
    const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5);
    selectedQuestions.push(...shuffled.slice(0, questionsPerCategory));
  });
  
  // Add remaining questions randomly from any category
  if (remainder > 0) {
    const remainingQuestions = questionPool.filter(q => !selectedQuestions.includes(q));
    const shuffled = [...remainingQuestions].sort(() => Math.random() - 0.5);
    selectedQuestions.push(...shuffled.slice(0, remainder));
  }
  
  // Shuffle final selection
  return selectedQuestions.sort(() => Math.random() - 0.5);
} 