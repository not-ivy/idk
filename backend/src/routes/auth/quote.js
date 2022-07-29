import addDataSafe from '../../util/prisma.js';

export default function Quote(req, res) {
  let data = '';
  req.on('data', (chunk) => { data += chunk; });

  req.on('end', async () => {
    await addDataSafe('quote', data, res);
  });
}
