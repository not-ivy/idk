import { getLastScore } from '../util/prisma.js';
import serialize from '../util/serialize.js';

export default function Mood(req, res) {
  getLastScore().then((data) => {
    res.end(serialize(data));
  }).catch((e) => {
    res.end(e.toString());
  });
}
