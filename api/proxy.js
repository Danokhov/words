export default async function handler(req, res) {
  const targetUrl = 'https://script.google.com/macros/s/AKfycbya9Uxtz5IkICs5IxDRO5jHUYSj_IW-aa4vgbvhAG1RJ-dquH6V2M2QrYlTuNKrfprI/exec';

  const response = await fetch(targetUrl, {
    method: req.method,
    headers: { 'Content-Type': 'application/json' },
    body: req.method === 'POST' ? JSON.stringify(req.body) : undefined
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
