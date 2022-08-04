import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'preact/hooks';
import type { TypeHeartBeatList } from '../types/heartbeat';

dayjs.extend(relativeTime);

export default function HeartbeatList() {
  const [heartbeats, setHeartbeats] = useState<TypeHeartBeatList | undefined>(undefined);

  useEffect(() => {
    // need to find a better way to do this
    fetch('https://api.idk.i-sp.in/get/beat/')
      .then((res) => res.json())
      .then((data) => {
        let d = 6;
        if (data.id - d < 0) d = data.id;
        fetch(`https://api.idk.i-sp.in/get/beat/${data.id}-${data.id - d}`)
          .then((res) => res.json())
          .then((data) => { setHeartbeats(data); console.log(data) })
      })
  }, [])

  if (!heartbeats) return (<p>Loading...</p>)

  return (
    <table className="table-auto h-min w-full">
      <tr className='border-b-2 border-b-zinc-500'>
        <th>id</th>
        <th>time</th>
        <th>device</th>
      </tr>
      {heartbeats.map((h) => (
        <tr className='text-center border-b-2 border-b-zinc-700'>
          <td>{h.id}</td>
          <td>{dayjs.unix(h.time / 1000).fromNow()}<sub className='text-xs text-zinc-400'>{dayjs.unix(h.time / 1000).format('H:mm M/D/YYYY')}</sub></td>
          <td>{h.device}</td>
        </tr>
      ))}
    </table>
  )
}
