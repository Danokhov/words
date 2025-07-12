export default async function handler(req, res) {
  const targetUrl = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';

  const response = await fetch(targetUrl, {
    method: req.method,
    headers: { 'Content-Type': 'application/json' },
    body: req.method === 'POST' ? JSON.stringify(req.body) : undefined
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
