import url from 'url';
import crypto from 'crypto';
import querystring from 'querystring';

let state = '';

export default function Login(req, res) {
  const query = url.parse(req.url, true).query;
  if (query.token !== process.env.TOKEN) return res.end('invalid token')

  state = randHash();
  res.writeHead(302, {
    'Location': 'https://accounts.spotify.com/authorize?' + querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: 'user-read-playback-state',
      redirect_uri: process.env.SPOTIFY_CALLBACK_URL,
      state,
    }),
  });
  res.end();
}

function randHash() {
  return Array.from(
    crypto.getRandomValues(new Uint8Array(16)),
    (b) => ('0' + (b & 0xFF).toString(16)).slice(-2)
  ).join('')
}

export { state };
