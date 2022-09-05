import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'preact/hooks';
import type { TypeMoodList } from '../types/mood';
import { backendUrl } from '../config.json';

dayjs.extend(relativeTime);

export default function MoodList() {
  const [moodList, setMoodList] = useState<TypeMoodList | Error | undefined>(undefined);

  useEffect(() => {
    // need to find a better way to do this
    fetch(`${backendUrl}/get/mood`)
      .then((res) => res.json())
      .then((data) => {
        let d = 6;
        if (data.id - d < 0) d = data.id;
        fetch(`${backendUrl}/get/mood/${data.id}-${data.id - d}`)
          .then((res) => res.json())
          .then((data) => { setMoodList(data); console.log(data) })
          .catch((error) => { setMoodList(error); console.log(error) });
      })
  }, [])

  if (!moodList) return (<p>Loading...</p>)
  if (moodList instanceof Error) return (<div>Error: <br /> <pre>{moodList.toString()}</pre></div>)

  return (
    <table className="table-auto h-min w-full">
      <tr className='border-b-2 border-b-zinc-500'>
        <th>id</th>
        <th>date</th>
        <th>score</th>
      </tr>
      {moodList.map((m) => (
        <tr className='text-center border-b-2 border-b-zinc-700'>
          <td>{m.id}</td>
          <td>{dayjs.unix(m.date / 1000).fromNow()}<sub className='text-xs text-zinc-400'>{dayjs.unix(m.date / 1000).format('H:mm M/D/YYYY')}</sub></td>
          <td>{m.score}</td>
        </tr>
      ))}
    </table>
  )
}
