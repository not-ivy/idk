import { Routes, Route } from 'react-router';

import Navigation from './components/Navigation';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import DataPage from './pages/DataPage';
import ChartsPage from './pages/ChartsPage';

export function App() {
  return (
    <div className='w-full h-full flex flex-col justify-around text-black bg-white dark:bg-black dark:text-white'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/charts" element={<ChartsPage />} />
      </Routes>
      <Navigation />
    </div>
  )
}
