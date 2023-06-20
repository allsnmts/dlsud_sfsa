import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export default function CardBarChart({ feedbackObjByCategory }) {
  const data = {
    labels: Object.keys(feedbackObjByCategory),
    datasets: Object.entries(feedbackObjByCategory).map(([k, v]) => ({
      ['label']: k,
      ['borderColor']:
        k === 'positive' ? '#57B4A3' : k === 'negative' ? '#E05D3D' : '#FFD567',
      ['backgroundColor']:
        k === 'positive' ? '#57B4A3' : k === 'negative' ? '#E05D3D' : '#FFD567',
      ['data']:
        k === 'positive'
          ? [v.length]
          : k === 'negative'
          ? [0, v.length]
          : [0, 0, v.length],
      ['fill']: false,
      ['barThickness']: 25,
    })),
  };

  return (
    <div className="bg-lightComponents shadow-lg dark:bg-darkComponents dark:text-light dark:border-light p-8 relative rounded-xl">
      {!!feedbackObjByCategory && (
        <Bar options={options} data={data} w={'100%'} h={'100%'} />
      )}
    </div>
  );
}
