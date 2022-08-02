import { getLastData, getRangeData } from '../../util/prisma.js';
import serialize from '../../util/serialize.js';

export default function Mood(req, res) {
  if (req.params.range) {
    const [upper, lower] = req.params.range.split('-');
    getRangeData('mooddata', parseInt(upper, 10), parseInt(lower, 10)).then((data) => {
      res.end(serialize(data));
    }).catch((e) => {
      res.end(e.toString());
    });
    return;
  }
  getLastData('mooddata').then((data) => {
    res.end(serialize(data));
  }).catch((e) => {
    res.end(e.toString());
  });
}
