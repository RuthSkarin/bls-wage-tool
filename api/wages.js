export default async function handler(req, res) {
  const apiKey = process.env.BLS_API_KEY;
  const { industry } = req.query;

  const seriesIds = [
    `OEUM${industry || '000000'}000000`,
    `OEUM${industry || '000000'}110000`,
    `OEUM${industry || '000000'}130000`,
    `OEUM${industry || '000000'}150000`,
    `OEUM${industry || '000000'}170000`,
    `OEUM${industry || '000000'}190000`,
    `OEUM${industry || '000000'}210000`,
    `OEUM${industry || '000000'}230000`,
    `OEUM${industry || '000000'}250000`,
    `OEUM${industry || '000000'}270000`,
    `OEUM${industry || '000000'}290000`,
    `OEUM${industry || '000000'}310000`,
    `OEUM${industry || '000000'}330000`,
    `OEUM${industry || '000000'}350000`,
    `OEUM${industry || '000000'}370000`,
    `OEUM${industry || '000000'}390000`,
    `OEUM${industry || '000000'}410000`,
    `OEUM${industry || '000000'}430000`,
    `OEUM${industry || '000000'}450000`,
    `OEUM${industry || '000000'}470000`,
    `OEUM${industry || '000000'}490000`,
    `OEUM${industry || '000000'}510000`,
    `OEUM${industry || '000000'}530000`,
  ];

  try {
    const response = await fetch('https://api.bls.gov/publicAPI/v2/timeseries/data/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        seriesid: seriesIds,
        registrationkey: apiKey
      })
    });

    const data = await response.json();

    if (data.status !== 'REQUEST_SUCCEEDED') {
      return res.status(400).json({
        error: 'BLS API error',
        message: data.message
      });
    }

    const results = data.Results.series
      .filter(s => s.data && s.data.length > 0)
      .map(series => ({
        seriesId: series.seriesID,
        latestValue: series.data[0].value,
        period: series.data[0].periodName + ' ' + series.data[0].year
      }));

    res.status(200).json({
      status: 'success',
      results
    });

  } catch(error) {
    res.status(500).json({
      error: 'Failed to fetch BLS data',
      details: error.message
    });
  }
}
