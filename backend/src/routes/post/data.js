import { addDataSafe } from '../../util/prisma.js';

export default function Data(req, res) {
  let body = '';
  req.on('data', (chunk) => { body += chunk; });

  req.on('end', async () => {
    const data = JSON.parse(body);
    console.log(`[Time: ${Date.now()}] ${JSON.stringify(data)}`);
    await addDataSafe(data.type, data, res);
  });
}
