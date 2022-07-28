import random from 'random';

import './app.css'
import MoodGraph from './components/MoodGraph'
import Recorder from './components/Recorder';

export function App() {
  const fakeData = [...Array(24).keys()].map((n) => {
    return { time: n, moodScore: random.int(-5, 5) };
  });
  return (
    <div className='w-full h-full p-6 bg-slate-200 grid grid-cols-4 grid-rows-2 gap-4'>
      <MoodGraph data={fakeData} />
      <Recorder />
    </div>
  )
}
