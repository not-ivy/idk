import { presences } from '../../util/discord.js';
import serialize from '../../util/serialize.js';

export default function Presence(req, res) {
  console.log(req.headers['user-agent']);
  res.end(serialize(presences));
}
