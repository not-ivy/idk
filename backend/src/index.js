import 'dotenv/config';
import cero from '0http';
import Authorization from './routes/post/authorization.js';
import Home from './routes/home.js';
import Data from './routes/post/data.js';

const { router, server } = cero();

const port = process.env.PORT || 8080;

router.get('/', Home);

router.use('/post', Authorization);
router.post('/post/data', Data);

server.listen(port);

// eslint-disable-next-line no-console
console.log(`Listening on port ${port}`);
