import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-dayjs';
import { useEffect, useState } from 'preact/hooks';
import { Line } from 'react-chartjs-2';
import type { TypeMoodList } from '../types/mood';
import { backendUrl } from '../config.json';

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MoodGraph() {
  const [moodList, setMoodList] = useState<TypeMoodList | undefined>(undefined);

  useEffect(() => {
    // need to find a better way to do this
    fetch(`${backendUrl}/get/mood`)
      .then((res) => res.json())
      .then((data) => {
        let d = data.id - 1;
        if (data.id - d < 0) d = data.id;
        fetch(`${backendUrl}/get/mood/${data.id}-${data.id - d}`)
          .then((res) => res.json())
          .then((data) => { setMoodList(data); console.log(data) })
          .catch((error) => (<p>Error: <br /> <pre>{error.stack}</pre></p>));
      })
  }, [])

  if (!moodList) return (<p>Loading...</p>)


  const data: ChartData<'line'> = {
    labels: moodList.map((m) => m.date),
    datasets: [
      {
        label: 'Mood Data',
        data: moodList.map((m) => m.score),
        borderColor: '#9CA3AF',
        cubicInterpolationMode: 'monotone',
        tension: 0.2,
        borderWidth: 2,
      }
    ]
  }

  const config: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        type: 'time',
        title: {
          display: true,
          text: 'Date'
        },
        grid: {
          borderWidth: 2,
          display: true,
          borderColor: '#9CA3AF',
        }
      },
      y: {
        title: {
          display: true,
          text: 'Score'
        },
        grid: {
          borderWidth: 2,
          display: true,
          borderColor: '#9CA3AF',
        }
      },
    },
  };

  return (
    <Line options={config} data={data} />
  )
}
