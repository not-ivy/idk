import random from 'random';

import MoodGraph from './components/MoodGraph'
import Recorder from './components/Recorder';
import HomePage from './pages/HomePage';

export function App() {
  const fakeData = [...Array(24).keys()].map((n) => {
    return { time: n, moodScore: random.int(-5, 5) };
  });
  return (
    <div className='w-full h-full dark:bg-blue-900'>
      <HomePage />
    </div>
  )
}
