import { useEffect, useState } from 'preact/hooks';

export default function DiscordStatus() {
  const [presence, setPresence] = useState<{ status: string, custom: { name: string, text: string, emoji: string } | undefined } | undefined>(undefined);

  useEffect(() => {
    fetch('https://api.idk.i-sp.in/get/presence')
      .then((res) => res.json())
      .then((data) => { setPresence(data); console.log(data) });
  }, [])

  if (!presence) return (<p>Loading...</p>)

  return (
    <p className="dark:text-white text-center">
      Current discord status: {presence.status}<br />
      {!presence.custom ? "" :
        <div className='flex justify-center'>
          {presence.custom.emoji ? <img src={presence.custom.emoji} className="w-5 h-5 mr-4" alt="emoji" /> : ''}
          {presence.custom.name} {presence.custom.text ? `- ${presence.custom.text}` : ''}
        </div>
      }
    </p>
  )
}
