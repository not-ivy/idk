import { getLastData } from '../../util/prisma.js';
import serialize from '../../util/serialize.js';

export default function Quote(_req, res) {
  getLastData('quotes').then((data) => {
    res.end(serialize(data));
  }).catch((e) => {
    res.end(e.toString());
  });
}
