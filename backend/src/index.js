import 'dotenv/config';
import cero from '0http';

import Authorization from './routes/post/authorization.js';
import Home from './routes/home.js';
import Data from './routes/post/data.js';
import Mood from './routes/mood.js';
import Middleware from './routes/Middleware.js';
import Quote from './routes/quote.js';
import Beat from './routes/beat.js';
import Presence from './routes/presence.js';
import startDiscordBot from './util/discord.js';

const { router, server } = cero();

const port = process.env.PORT || 8080;

router.use('/', Middleware);
router.get('/', Home);
router.get('/mood', Mood);
router.get('/quote', Quote);
router.get('/beat', Beat);
router.get('/presence', Presence);

router.use('/post', Authorization);
router.post('/post/data', Data);

server.listen(port);
startDiscordBot();

// eslint-disable-next-line no-console
console.log(`Listening on port ${port}`);
