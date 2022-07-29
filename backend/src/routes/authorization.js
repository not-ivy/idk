export default function Authorization(req, res, next) {
  if (process.env.TOKEN !== req.headers.token) {
    res.writeHead(401)
    res.end('Incorrect token')
    return
  }
  next();
}
