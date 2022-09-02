import requestAccessToken, { oauthData } from "../../util/spotify_oauth.js";
import fetch from "node-fetch";

export default function Spotify(req, res) {
  if (!oauthData) return res.end('Please login to spotify first.');
  if (Date.now() > oauthData.expires_at) {
    requestAccessToken(oauthData.refresh_token);
  }
  fetch('https://api.spotify.com/v1/me/player', {
    headers: {
      'Authorization': `${oauthData.token_type} ${oauthData.access_token}`,
      'Content-Type': 'application/json'
    }
  }).then((res) => res.text()).then((text) => res.end(text));
}
