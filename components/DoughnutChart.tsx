'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [{
      label: 'Banks',
      data: [7800.58, 2575, 9800],
      backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
    }
  ],
  labels: ['Bank 1', 'Bank 2', 'Bank 3']
  }
  return (
    <Doughnut data={data} />
  )
}

export default DoughnutChart