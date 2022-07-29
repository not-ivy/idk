import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

export function App() {
  return (
    <div className='w-full h-full flex flex-col justify-around text-black bg-white dark:bg-black dark:text-white'>
      <HomePage />
      <Navigation />
    </div>
  )
}
