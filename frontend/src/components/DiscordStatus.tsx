import { useEffect, useState } from 'preact/hooks';

export default function DiscordStatus() {
  const [presence, setPresence] = useState<{ status: string, custom: { name: string, text: string, emoji: string } } | undefined>(undefined);

  useEffect(() => {
    fetch('https://api.idk.i-sp.in/presence')
      .then((res) => res.json())
      .then((data) => setPresence(data));
  }, [])

  return (
    <p className="dark:text-white">
      Current discord status: {!presence ? "loading..." : presence.status}<br />
      {!presence ? "loading..." :
        <div>
          <img src={presence.custom.emoji} className="w-4 h-4" alt="emoji" />
          {presence.custom.name} {presence.custom.text}
        </div>
      }
    </p>
  )
}
