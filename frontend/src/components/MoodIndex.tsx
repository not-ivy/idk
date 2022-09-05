import { useEffect, useState } from 'preact/hooks';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { InterfaceMood } from '../types/mood';
import { backendUrl } from '../config.json';

dayjs.extend(relativeTime);

export default function MoodIndex() {
  const [moodData, setMoodData] = useState<InterfaceMood | Error | undefined>(undefined);

  useEffect(() => {
    fetch(`${backendUrl}/get/mood`)
      .then((res) => res.json())
      .then((data) => { setMoodData(data); console.log(data) })
      .catch((error) => { setMoodData(error); console.log(error) });
  }, [])

  if (!moodData) return (<p>Loading...</p>)
  if (moodData instanceof Error) return (<div>Error: <br /> <pre>{moodData.toString()}</pre></div>)

  return (
    <div className='text-center'>
      <p>Mood Index: {moodData.score}</p>
      <p>Updated {dayjs.unix(moodData.date / 1000).fromNow()}</p>
    </div>
  )
}
