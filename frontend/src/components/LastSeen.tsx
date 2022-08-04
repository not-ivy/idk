import { useEffect, useState } from 'preact/hooks';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { InterfaceHeartbeat } from '../types/heartbeat';
import { backendUrl } from '../config.json';

dayjs.extend(relativeTime);

export default function LastSeen() {
  const [heartbeat, setHeartbeat] = useState<InterfaceHeartbeat | undefined>(undefined);

  useEffect(() => {
    fetch(`${backendUrl}/get/beat`)
      .then((res) => res.json())
      .then((data) => { setHeartbeat(data); console.log(data) })
      .catch((error) => (<p>Error: <br /> <pre>{error.stack}</pre></p>));
  }, [])

  if (!heartbeat) return (<p>Loading...</p>)

  return (
    <p className='text-center'>
      Last seen:<br />
      <span>{dayjs.unix(heartbeat.time / 1000).fromNow()}</span>
    </p>
  )
}
