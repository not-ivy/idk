import { getlastQuote } from '../../util/prisma.js';
import serialize from '../../util/serialize.js';

export default function Quote(_req, res) {
  getlastQuote().then((data) => {
    res.end(serialize(data));
  }).catch((e) => {
    res.end(e.toString());
  });
}
