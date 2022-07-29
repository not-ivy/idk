import 'dotenv/config';
import cero from '0http';
import Authorization from './routes/post/authorization.js';
import Home from './routes/home.js';
import Data from './routes/post/data.js';
import Mood from './routes/mood.js';
import CORS from './routes/cors.js';
import Quote from './routes/quote.js';

const { router, server } = cero();

const port = process.env.PORT || 8080;

router.use('/', CORS);
router.get('/', Home);
router.get('/mood', Mood);
router.get('/quote', Quote);

router.use('/post', Authorization);
router.post('/post/data', Data);

server.listen(port);

// eslint-disable-next-line no-console
console.log(`Listening on port ${port}`);
