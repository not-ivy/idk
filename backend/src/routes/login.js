import url from 'node:url';
import querystring from 'node:querystring';

let state = '';

export default function Login(req, res) {
  const query = url.parse(req.url, true).query;
  if (query.token !== process.env.TOKEN) return res.end('invalid token')

  state = (Math.random() + 1).toString(36).substring(2);
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

export { state };
