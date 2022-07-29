import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addMoodData(data) {
  const mood = JSON.parse(data);
  const { score } = mood;
  if (Number.isNaN(score) || score < -5 || score > 5) {
    throw Error('Invalid score');
  }
  await prisma.mooddata.create({
    data: {
      date: Date.now(),
      score: parseInt(score, 10),
    },
  });
}

async function addQuoteData(data) {
  const quoteObj = JSON.parse(data);
  const { quote, citation } = quoteObj;
  await prisma.quotes.create({
    data: {
      quote,
      citation,
    },
  });
}

async function addDataSafe(type, data, res) {
  if (type !== 'mood' || type !== 'quote') return;
  try {
    if (type === 'mood') await addMoodData(data);
    if (type === 'quote') await addQuoteData(data);
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.end(e.toString());
    return;
  }
  await prisma.$disconnect();
  res.end('Recorded');
}

export default addDataSafe;
