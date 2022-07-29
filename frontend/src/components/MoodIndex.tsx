import { useEffect, useState } from 'preact/hooks';
export default function MoodIndex() {
  const [moodData, setMoodData] = useState<{ id: number, date: number, score: number } | undefined>(undefined);

  useEffect(() => {
    fetch('https://api.idk.i-sp.in/mood')
      .then((res) => res.json())
      .then((data) => setMoodData(data))
  }, [])

  return (
    <div>
      Mood Index: <br />
      {!moodData ? <span>Loading...</span> :
      <div className='text-center'>
        <span>{moodData.score}</span> <br />
        Last Updated: <br />
        <span>{new Date(moodData.date).toLocaleDateString()}</span>
      </div>}
    </div>
  )
}
