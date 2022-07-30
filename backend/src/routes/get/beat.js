import { getLastBeat } from '../../util/prisma.js';
import serialize from '../../util/serialize.js';

export default function Beat(req, res) {
  getLastBeat().then((data) => {
    res.end(serialize(data));
  }).catch((e) => {
    res.end(e.toString());
  });
}
