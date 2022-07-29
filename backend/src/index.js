import 'dotenv/config'
import cero from '0http'
import Mood from './routes/mood.js'
import Authorization from './routes/authorization.js'
const { router, server } = cero()

const port = process.env.PORT || 8080

router.use('/post', Authorization)
router.post('/post/mood', Mood)

server.listen(port)

console.log(`Listening on port ${port}`)
