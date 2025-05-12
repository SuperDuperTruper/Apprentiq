'use client';

import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { GraphData } from '../types';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface PieGraphProps {
  data: GraphData;
}

export default function PieGraph({ data }: PieGraphProps) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',  // blue
          'rgba(147, 51, 234, 0.5)',  // purple
          'rgba(16, 185, 129, 0.5)',  // green
          'rgba(245, 158, 11, 0.5)',  // yellow
          'rgba(239, 68, 68, 0.5)',   // red
          'rgba(14, 165, 233, 0.5)',  // light blue
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(147, 51, 234)',
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)',
          'rgb(14, 165, 233)',
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    }
  };

  return (
    <div className="h-[300px] w-full">
      <Pie data={chartData} options={options} />
    </div>
  );
} 