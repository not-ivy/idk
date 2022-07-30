import { presence } from '../util/discord.js';
import serialize from '../util/serialize.js';

export default function Presence(req, res) {
  res.end(serialize(presence));
}
