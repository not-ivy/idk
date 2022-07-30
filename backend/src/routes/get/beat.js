import { getLastBeat, getRangeBeat } from '../../util/prisma.js';
import serialize from '../../util/serialize.js';

export default function Beat(req, res) {
  if (req.params.range) {
    const [upper, lower] = req.params.range.split('-');
    getRangeBeat(parseInt(upper, 10), parseInt(lower, 10)).then((data) => {
      res.end(serialize(data));
    }).catch((e) => {
      res.end(e.toString());
    });
    return;
  }
  getLastBeat().then((data) => {
    res.end(serialize(data));
  }).catch((e) => {
    res.end(e.toString());
  });
}
