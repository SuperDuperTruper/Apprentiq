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

export const questionPool: Question[] = [
  // Pattern Recognition Questions
  {
    id: 1,
    type: 'pattern',
    text: "Which shape completes the pattern?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'C',
    explanation: "The pattern shows shapes rotating 45° clockwise and alternating between filled and outlined styles. Option C continues this pattern.",
    questionImage: '/images/logical/pattern-question.svg',
    choiceImages: [
      '/images/logical/pattern-choice-a.svg',
      '/images/logical/pattern-choice-b.svg',
      '/images/logical/pattern-choice-c.svg',
      '/images/logical/pattern-choice-d.svg'
    ]
  },
  {
    id: 2,
    type: 'pattern',
    text: "Which figure completes the grid pattern?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'B',
    explanation: "The pattern alternates between circles and squares in each row and column. The missing space should contain a circle to maintain the pattern.",
    questionImage: '/images/logical/pattern2-question.svg',
    choiceImages: [
      '/images/logical/pattern2-choice-a.svg',
      '/images/logical/pattern2-choice-b.svg',
      '/images/logical/pattern2-choice-c.svg',
      '/images/logical/pattern2-choice-d.svg'
    ]
  },
  {
    id: 3,
    type: 'pattern',
    text: "Which element continues the pattern of transformation?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
    explanation: "Each shape is transformed by adding one dot and rotating 90° clockwise. Option A follows this pattern.",
    questionImage: '/images/logical/pattern3-question.svg',
    choiceImages: [
      '/images/logical/pattern3-choice-a.svg',
      '/images/logical/pattern3-choice-b.svg',
      '/images/logical/pattern3-choice-c.svg',
      '/images/logical/pattern3-choice-d.svg'
    ]
  },
  {
    id: 4,
    type: 'pattern',
    text: "Which figure belongs in the empty cell?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'D',
    explanation: "The pattern combines shape type and shading. Each row must contain all different shapes, and each column must contain all different shadings.",
    questionImage: '/images/logical/pattern4-question.svg',
    choiceImages: [
      '/images/logical/pattern4-choice-a.svg',
      '/images/logical/pattern4-choice-b.svg',
      '/images/logical/pattern4-choice-c.svg',
      '/images/logical/pattern4-choice-d.svg'
    ]
  },
  // Sequence Questions
  {
    id: 5,
    type: 'sequence',
    text: "Which figure comes next in the sequence?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'B',
    explanation: "In each step, the number of small circles increases by one while moving clockwise, and the color alternates. Option B follows this pattern.",
    questionImage: '/images/logical/sequence-question.svg',
    choiceImages: [
      '/images/logical/sequence-choice-a.svg',
      '/images/logical/sequence-choice-b.svg',
      '/images/logical/sequence-choice-c.svg',
      '/images/logical/sequence-choice-d.svg'
    ]
  },
  {
    id: 6,
    type: 'sequence',
    text: "What comes next in this geometric sequence?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'C',
    explanation: "Each figure adds one triangle and rotates the entire shape 45° counterclockwise. Option C continues this pattern.",
    questionImage: '/images/logical/sequence2-question.svg',
    choiceImages: [
      '/images/logical/sequence2-choice-a.svg',
      '/images/logical/sequence2-choice-b.svg',
      '/images/logical/sequence2-choice-c.svg',
      '/images/logical/sequence2-choice-d.svg'
    ]
  },
  {
    id: 7,
    type: 'sequence',
    text: "Which figure completes the sequence?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
    explanation: "The sequence shows a star pattern where one point is filled in clockwise order. The next figure should have the fifth point filled.",
    questionImage: '/images/logical/sequence3-question.svg',
    choiceImages: [
      '/images/logical/sequence3-choice-a.svg',
      '/images/logical/sequence3-choice-b.svg',
      '/images/logical/sequence3-choice-c.svg',
      '/images/logical/sequence3-choice-d.svg'
    ]
  },
  {
    id: 8,
    type: 'sequence',
    text: "What is the next figure in this sequence?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'D',
    explanation: "Each figure shows a dot moving clockwise and leaving a trail. The next figure should show the dot at the bottom right with a trail from the bottom left.",
    questionImage: '/images/logical/sequence4-question.svg',
    choiceImages: [
      '/images/logical/sequence4-choice-a.svg',
      '/images/logical/sequence4-choice-b.svg',
      '/images/logical/sequence4-choice-c.svg',
      '/images/logical/sequence4-choice-d.svg'
    ]
  },
  // Rule-based Questions
  {
    id: 9,
    type: 'rule',
    text: "Which figure follows the same rule as the example pair?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
    explanation: "The rule is: the second shape contains twice the number of elements as the first shape, rotated 90°. Only option A follows this rule.",
    questionImage: '/images/logical/rule-question.svg',
    choiceImages: [
      '/images/logical/rule-choice-a.svg',
      '/images/logical/rule-choice-b.svg',
      '/images/logical/rule-choice-c.svg',
      '/images/logical/rule-choice-d.svg'
    ]
  },
  {
    id: 10,
    type: 'rule',
    text: "Which pair follows the same transformation rule?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'B',
    explanation: "The rule shows a shape being inverted and its internal elements doubled. Only pair B follows this transformation rule.",
    questionImage: '/images/logical/rule2-question.svg',
    choiceImages: [
      '/images/logical/rule2-choice-a.svg',
      '/images/logical/rule2-choice-b.svg',
      '/images/logical/rule2-choice-c.svg',
      '/images/logical/rule2-choice-d.svg'
    ]
  },
  {
    id: 11,
    type: 'rule',
    text: "Which option follows the rule shown in the example?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'C',
    explanation: "The rule combines the elements of the first shape with a mirror image of the second shape. Option C follows this combination rule.",
    questionImage: '/images/logical/rule3-question.svg',
    choiceImages: [
      '/images/logical/rule3-choice-a.svg',
      '/images/logical/rule3-choice-b.svg',
      '/images/logical/rule3-choice-c.svg',
      '/images/logical/rule3-choice-d.svg'
    ]
  },
  {
    id: 12,
    type: 'rule',
    text: "Which pair demonstrates the same relationship?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'D',
    explanation: "The rule shows outer elements becoming inner elements while maintaining their relative positions. Only pair D follows this rule.",
    questionImage: '/images/logical/rule4-question.svg',
    choiceImages: [
      '/images/logical/rule4-choice-a.svg',
      '/images/logical/rule4-choice-b.svg',
      '/images/logical/rule4-choice-c.svg',
      '/images/logical/rule4-choice-d.svg'
    ]
  },
  // Spatial Reasoning Questions
  {
    id: 13,
    type: 'spatial',
    text: "Which 3D shape would be created by folding this 2D pattern?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'D',
    explanation: "When folded along the lines, the pattern creates a cube with specific patterns on each face. Only option D shows the correct arrangement.",
    questionImage: '/images/logical/spatial-question.svg',
    choiceImages: [
      '/images/logical/spatial-choice-a.svg',
      '/images/logical/spatial-choice-b.svg',
      '/images/logical/spatial-choice-c.svg',
      '/images/logical/spatial-choice-d.svg'
    ]
  },
  {
    id: 14,
    type: 'spatial',
    text: "Which view would you see from the arrow's direction?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
    explanation: "When viewed from the direction of the arrow, the blocks create a specific silhouette. Option A shows the correct view.",
    questionImage: '/images/logical/spatial2-question.svg',
    choiceImages: [
      '/images/logical/spatial2-choice-a.svg',
      '/images/logical/spatial2-choice-b.svg',
      '/images/logical/spatial2-choice-c.svg',
      '/images/logical/spatial2-choice-d.svg'
    ]
  },
  {
    id: 15,
    type: 'spatial',
    text: "Which 3D object matches these three views?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'B',
    explanation: "The three views show the front, top, and side of a 3D object. Only option B could create all these views.",
    questionImage: '/images/logical/spatial3-question.svg',
    choiceImages: [
      '/images/logical/spatial3-choice-a.svg',
      '/images/logical/spatial3-choice-b.svg',
      '/images/logical/spatial3-choice-c.svg',
      '/images/logical/spatial3-choice-d.svg'
    ]
  },
  {
    id: 16,
    type: 'spatial',
    text: "Which shape would you see if you rotated the object 90° clockwise?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'C',
    explanation: "When the 3D object is rotated 90° clockwise, certain faces become visible while others are hidden. Option C shows the correct rotation.",
    questionImage: '/images/logical/spatial4-question.svg',
    choiceImages: [
      '/images/logical/spatial4-choice-a.svg',
      '/images/logical/spatial4-choice-b.svg',
      '/images/logical/spatial4-choice-c.svg',
      '/images/logical/spatial4-choice-d.svg'
    ]
  },
  // Analogy Questions
  {
    id: 17,
    type: 'analogy',
    text: "Circle is to Sphere as Square is to ?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'C',
    explanation: "The relationship is 2D shape to 3D shape. A circle becomes a sphere when extended into 3D, so a square becomes a cube (option C).",
    questionImage: '/images/logical/analogy-question.svg',
    choiceImages: [
      '/images/logical/analogy-choice-a.svg',
      '/images/logical/analogy-choice-b.svg',
      '/images/logical/analogy-choice-c.svg',
      '/images/logical/analogy-choice-d.svg'
    ]
  },
  {
    id: 18,
    type: 'analogy',
    text: "Single is to Double as Triangle is to ?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'B',
    explanation: "The relationship is doubling of elements. As 'single' doubles to 'double', a single triangle should double to two triangles (option B).",
    questionImage: '/images/logical/analogy2-question.svg',
    choiceImages: [
      '/images/logical/analogy2-choice-a.svg',
      '/images/logical/analogy2-choice-b.svg',
      '/images/logical/analogy2-choice-c.svg',
      '/images/logical/analogy2-choice-d.svg'
    ]
  },
  {
    id: 19,
    type: 'analogy',
    text: "Small dot inside big circle is to Big dot inside small circle as ?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
    explanation: "The relationship is inversion of size relationships. The small square inside big triangle should become big square inside small triangle.",
    questionImage: '/images/logical/analogy3-question.svg',
    choiceImages: [
      '/images/logical/analogy3-choice-a.svg',
      '/images/logical/analogy3-choice-b.svg',
      '/images/logical/analogy3-choice-c.svg',
      '/images/logical/analogy3-choice-d.svg'
    ]
  },
  {
    id: 20,
    type: 'analogy',
    text: "Solid to Outline as Black to ?",
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 'D',
    explanation: "The relationship is transformation from filled to empty. As solid becomes outline, black should become white while maintaining the pattern.",
    questionImage: '/images/logical/analogy4-question.svg',
    choiceImages: [
      '/images/logical/analogy4-choice-a.svg',
      '/images/logical/analogy4-choice-b.svg',
      '/images/logical/analogy4-choice-c.svg',
      '/images/logical/analogy4-choice-d.svg'
    ]
  }
];

// Helper function to get random questions ensuring type balance
export function getRandomQuestions(count: number): Question[] {
  const types = ['pattern', 'sequence', 'rule', 'spatial', 'analogy'] as const;
  const questionsPerType = Math.floor(count / types.length);
  const remainder = count % types.length;
  
  let selectedQuestions: Question[] = [];
  
  // Select equal number of questions from each type
  types.forEach(type => {
    const typeQuestions = questionPool.filter(q => q.type === type);
    const shuffled = [...typeQuestions].sort(() => Math.random() - 0.5);
    selectedQuestions.push(...shuffled.slice(0, questionsPerType));
  });
  
  // Add remaining questions randomly from any type
  if (remainder > 0) {
    const remainingQuestions = questionPool.filter(q => !selectedQuestions.includes(q));
    const shuffled = [...remainingQuestions].sort(() => Math.random() - 0.5);
    selectedQuestions.push(...shuffled.slice(0, remainder));
  }
  
  // Shuffle final selection
  return selectedQuestions.sort(() => Math.random() - 0.5);
} 