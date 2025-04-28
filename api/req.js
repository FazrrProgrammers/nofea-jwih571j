let requestCount = 0;

export default function handler(req, res) {
  requestCount++;
  res.status(200).json({ count: requestCount });
}
