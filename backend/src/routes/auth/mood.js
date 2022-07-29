import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addData(data, res) {
  const score = parseInt(data, 10);
  if (Number.isNaN(score) || score < -5 || score > 5) {
    res.end('Invalid score');
  }
  await prisma.mooddata.create({
    data: {
      date: Date.now(),
      score,
    },
  });
}

export default function Mood(req, res) {
  let data = '';
  req.on('data', (chunk) => { data += chunk; });

  req.on('end', async () => {
    addData(data)
      .then(async () => {
        await prisma.$disconnect();
        res.end('Recorded');
      }).catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        res.end('Recorded');
      });
  });
}
