import 'dotenv/config'
import cero from '0http'
const { router, server } = cero()

const port = process.env.PORT || 8080

router.get('/hello', (req, res) => {
  res.end('Hello World!')
})

server.listen(port)
console.log(`Listening on port ${port}`)
