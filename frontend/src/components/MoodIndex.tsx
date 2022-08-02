import { useEffect, useState } from 'preact/hooks';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { InterfaceMood } from '../types/mood';

dayjs.extend(relativeTime);

export default function MoodIndex() {
  const [moodData, setMoodData] = useState<InterfaceMood | undefined>(undefined);

  useEffect(() => {
    fetch('https://api.idk.i-sp.in/get/mood')
      .then((res) => res.json())
      .then((data) => { setMoodData(data); console.log(data) })
  }, [])

  if (!moodData) return (<p>Loading...</p>)

  return (
    <div className='text-center'>
      <p>Mood Index: {moodData.score}</p>
      <p>Updated {dayjs.unix(moodData.date / 1000).fromNow()}</p>
    </div>
  )
}
