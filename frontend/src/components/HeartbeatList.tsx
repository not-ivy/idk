import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'preact/hooks';

dayjs.extend(relativeTime);

export default function HeartbeatList() {
  const [heartbeats, setHeartbeats] = useState<{ id: number, device: string, time: number }[] | undefined>(undefined);

  useEffect(() => {
    // need to find a better way to do this
    fetch('http://localhost:8080/get/beat/')
      .then((res) => res.json())
      .then((data) => {
        fetch(`http://localhost:8080/get/beat/${data.id}-${data.id - 20}`)
          .then((res) => res.json())
          .then((data) => { setHeartbeats(data); console.log(data) })
      })
  }, [])

  if (!heartbeats) return (<p>Loading...</p>)

  return (
    <table className="table-auto w-full">
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
