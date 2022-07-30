import { getLastScore, getRangeScore } from '../../util/prisma.js';
import serialize from '../../util/serialize.js';

export default function Mood(req, res) {
  if (req.params.range) {
    const [upper, lower] = req.params.range.split('-');
    getRangeScore(parseInt(upper, 10), parseInt(lower, 10)).then((data) => {
      res.end(serialize(data));
    }).catch((e) => {
      res.end(e.toString());
    });
    return;
  }
  getLastScore().then((data) => {
    res.end(serialize(data));
  }).catch((e) => {
    res.end(e.toString());
  });
}
