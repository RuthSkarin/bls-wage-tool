export default async function handler(req, res) {
  const apiKey = process.env.BLS_API_KEY;
  const { series } = req.query;

  if (!series) {
    return res.status(400).json({ error: 'Series ID required' });
  }

  try {
    const response = await fetch('https://api.bls.gov/publicAPI/v2/timeseries/data/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        seriesid: [series],
        registrationkey: apiKey,
        startyear: '2019',
        endyear: '2025'
      })
    });

    const data = await response.json();

    if (data.status !== 'REQUEST_SUCCEEDED') {
      return res.status(400).json({
        error: 'BLS API error',
        message: data.message
      });
    }

    const seriesData = data.Results.series[0];

    if (!seriesData || !seriesData.data || seriesData.data.length === 0) {
      return res.status(200).json({ points: [] });
    }

    const points = seriesData.data.map(d => ({
      period: d.periodName + ' ' + d.year,
      value: d.value
    }));

    res.status(200).json({ points });

  } catch(error) {
    res.status(500).json({
      error: 'Failed to fetch trend data',
      details: error.message
    });
  }
}
