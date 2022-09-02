import { Buffer } from 'node:buffer';
import { URLSearchParams } from 'node:url';
import fetch from 'node-fetch';

let oauthData;

export default function requestAccessToken(code) {
  fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      code: code,
      redirect_uri: process.env.SPOTIFY_CALLBACK_URL,
      grant_type: 'authorization_code'
    }),
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((res) => res.json()).then((data) => { oauthData = { ...data, expires_at: data.expires_in * 1000 + Date.now() } });
}

export { oauthData };
