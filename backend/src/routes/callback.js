import url from 'node:url';

import requestAccessToken from '../util/spotify_oauth.js';
import { state } from './login.js';

export default function Callback(req, res) {
  const query = url.parse(req.url, true).query;

  if (query.state !== state) return res.end('invalid state');
  if (req.error) return res.end(JSON.stringify(req.error));

  requestAccessToken(query.code);

  return res.end();
}
