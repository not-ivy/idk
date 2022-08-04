import { useEffect, useState } from 'preact/hooks';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { DiscordState } from '../types/discord';

dayjs.extend(relativeTime);

export default function DiscordStatus() {
  const [presence, setPresence] = useState<DiscordState | undefined>(undefined);

  useEffect(() => {
    fetch('https://api.idk.i-sp.in/get/presence')
      .then((res) => res.json())
      .then((data) => { setPresence(data); console.log(data) })
      .catch((error) => (<p>Error: <br /> <pre>{error.stack}</pre></p>));
  }, [])

  if (!presence) return (<p>Loading...</p>)

  return (
    <p className="text-center">
      Discord status: {presence.status} <br />
      {presence.activities?.map((p) => (
        <div className='flex justify-center'>
          {p.emoji ? <img src={p.emoji} className="w-5 h-5 mr-4" alt="emoji" /> : ''}
          Started <p className="px-1 cursor-help" title={p.state ?? 'no state'}>{p.name}</p> {p.created ? `${dayjs.unix(p.created / 1000).fromNow()}` : ''}
        </div>
      ))}
    </p>
  )
}
