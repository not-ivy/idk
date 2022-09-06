import { useEffect, useState } from 'preact/hooks';
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

  if (!spotify) return (<p>No spotify data.</p>)
  if (spotify instanceof Error) return (<div>Error: <pre>{spotify.toString()}</pre></div>)

  return (
    <div>
      Playing <a href={spotify.item.external_urls.spotify}>{spotify.item.name}</a> <br />
      by {spotify.item.artists.map((a) => (<a href={a.external_urls.spotify}>{a.name}</a>)).join(', ')} <br />
      in album <a className='underline' href={spotify.item.album.external_urls.spotify}>{spotify.item.album.name}</a> {spotify.repeat_state ? 'on repeat' : ''}
    </div>
  )
}
