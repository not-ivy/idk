import { getLastScore } from '../util/prisma.js';

export default function Mood(req, res) {
  getLastScore().then((data) => {
    res.end(JSON.stringify(data));
  }).catch((e) => {
    res.end(e.toString());
  });
}
