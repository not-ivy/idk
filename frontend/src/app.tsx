import random from 'random';

import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

export function App() {
  const fakeData = [...Array(24).keys()].map((n) => {
    return { time: n, moodScore: random.int(-5, 5) };
  });
  return (
    <div className='w-full h-full grid grid-flow-col grid-rows-4 dark:bg-blue-900'>
      <HomePage />
      <Navigation />
    </div>
  )
}
