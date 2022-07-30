import { useEffect, useState } from 'preact/hooks';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function LastSeen() {
  const [heartbeat, setHeartbeat] = useState<{ id: number, device: string, time: number } | undefined>(undefined);

  useEffect(() => {
    fetch('https://api.idk.i-sp.in/get/beat')
      .then((res) => res.json())
      .then((data) => { setHeartbeat(data); console.log(data) })
  }, [])

  if (!heartbeat) return (<p>Loading...</p>)

  return (
    <p className='text-center'>
      Last seen:<br />
      <span>{dayjs.unix(heartbeat.time / 1000).fromNow()}</span>
    </p>
  )
}
