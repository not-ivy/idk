export default function Middleware(req, res, next) {
  res.setHeader('Cache-Control', 'max-age=1, stale-while-revalidate=10');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Max-Age', 2592000);
  next();
}
