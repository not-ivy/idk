import 'dotenv/config';
import cero from '0http';

import Authorization from './routes/post/authorization.js';
import Home from './routes/home.js';
import Data from './routes/post/data.js';
import Mood from './routes/get/mood.js';
import Middleware from './util/middleware.js';
import Quote from './routes/get/quote.js';
import Beat from './routes/get/beat.js';
import Callback from './routes/callback.js';
import Login from './routes/login.js';
import Spotify from './routes/get/spotify.js';

const { router, server } = cero();

const port = process.env.PORT || 32767;

router.get('/', Home);
router.use('/', Middleware);

router.get('/login', Login);
router.use('/callback', Callback);

router.get('/get/mood', Mood);
router.get('/get/mood/:range', Mood);
router.get('/get/quote', Quote);
router.get('/get/quote/:range', Quote);
router.get('/get/beat', Beat);
router.get('/get/beat/:range', Beat);
router.get('/get/spotify/', Spotify);

router.use('/post', Authorization);
router.post('/post/data', Data);

server.listen(port);

// eslint-disable-next-line no-console
console.log(`Listening on port ${port}`);
