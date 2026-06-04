export default async function handler(req, res) {
  const apiKey = process.env.BLS_API_KEY;

  const seriesIds = [
    'OEUN000000000000',
    'OEUN000000110000',
    'OEUN000000130000',
    'OEUN000000150000',
    'OEUN000000170000',
    'OEUN000000190000',
    'OEUN000000210000',
    'OEUN000000230000',
    'OEUN000000250000',
    'OEUN000000270000',
    'OEUN000000290000',
    'OEUN000000310000',
    'OEUN000000330000',
    'OEUN000000350000',
    'OEUN000000370000',
    'OEUN000000390000',
    'OEUN000000410000',
    'OEUN000000430000',
    'OEUN000000450000',
    'OEUN000000470000',
    'OEUN000000490000',
    'OEUN000000510000',
    'OEUN000000530000',
  ];

  try {
    const response = await fetch('https://api.bls.gov/publicAPI/v2/timeseries/data/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        seriesid: seriesIds,
        registrationkey: apiKey,
        startyear: '2024',
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
