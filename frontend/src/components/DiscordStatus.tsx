import { useEffect, useState } from 'preact/hooks';

type Activity = {
  name: string | null,
  emoji: string | null,
  state: string | null
}

type DiscordState = {
  status: string,
  activities: Activity[] | undefined
}

export default function DiscordStatus() {
  const [presence, setPresence] = useState<DiscordState | undefined>(undefined);

  useEffect(() => {
    fetch('https://api.idk.i-sp.in/get/presence')
      .then((res) => res.json())
      .then((data) => { setPresence(data); console.log(data) });
  }, [])

  if (!presence) return (<p>Loading...</p>)

  return (
    <p className="text-center">
      Discord status: {presence.status} <br />
      {presence.activities?.map((p) => (
        <div className='flex justify-center'>
          {p.emoji ? <img src={p.emoji} className="w-5 h-5 mr-4" alt="emoji" /> : ''}
          {p.name} {p.state ? `- ${p.state}` : ''}
        </div>
      ))}
    </p>
  )
}
