export type QuestionCategory = 
  | 'percentages'
  | 'finance'
  | 'data-interpretation'
  | 'ratios'
  | 'probability'
  | 'statistics'
  | 'time-and-distance'
  | 'profit-and-loss'
  | 'averages'
  | 'number-series';

export type GraphData = {
  type: 'line' | 'bar' | 'pie';
  labels: string[];
  values: number[];
};

export type TableData = {
  headers: string[];
  rows: (string | number)[][];
};

export interface Question {
  id: number;
  type: 'calculation' | 'graph' | 'table';
  question: string;
  data: GraphData | TableData | null;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: QuestionCategory;
} 