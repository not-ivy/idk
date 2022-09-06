import { useEffect, useState } from 'preact/hooks';
import { JSX } from 'preact';
import type { Spotify } from '../types/spotify';
import { backendUrl } from '../config.json';

export default function SpotifyStatus() {
  const [spotify, setSpotify] = useState<Spotify | Error | undefined>(undefined);

  useEffect(() => {
    fetch(`${backendUrl}/get/spotify`)
      .then((res) => res.json())
      .then((data) => { setSpotify(data); console.log(data) })
      .catch((error) => { setSpotify(error); console.log(error) });
  }, [])

  if (!spotify) return (<p>Loading...</p>)
  if (spotify instanceof Error) return (<div>Error: <pre>{spotify.toString()}</pre></div>)

  return (
    <div className='text-center'>
      {spotify.is_playing ? 'Playing' : 'Last played'} <a className='underline' href={spotify.item.external_urls.spotify}>{spotify.item.name}</a> <br />
      by {spotify.item.artists.map((a, i) => (
        <span><a className='underline' href={a.external_urls.spotify}>{a.name}</a>{(i ? '' : ', ')}</span>
      ))}  <br />
      {spotify.repeat_state === 'track' ? 'on repeat' : ''}
      </div>
  )
}
