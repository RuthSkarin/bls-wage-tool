export default async function handler(req, res) {
  const apiKey = process.env.BLS_API_KEY;
  const { industry, search } = req.query;
  const seriesId = `OEUM${industry || '000000'}000000`;

  try {
    const response = await fetch('https://api.bls.gov/publicAPI/v2/timeseries/data/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        seriesid: [seriesId],
        registrationkey: apiKey
      })
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch(error) {
    res.status(500).json({ error: 'Failed to fetch BLS data' });
  }
}
