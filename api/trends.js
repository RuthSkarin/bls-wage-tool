export default async function handler(req, res) {
  const apiKey = process.env.BLS_API_KEY;
  const { industry, occ } = req.query;

  const industryCode = industry || '000000';
  const occCode = occ || '000000';

  const seriesIdsToTry = [
    `OEUN${industryCode}${occCode}03`,
    `OEUN${industryCode}${occCode}01`,
    `OEUN${industryCode}${occCode}02`,
    `OEUS${industryCode}${occCode}03`,
    `OEUS${industryCode}${occCode}01`,
  ];

  try {
    const response = await fetch('https://api.bls.gov/publicAPI/v2/timeseries/data/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        seriesid: seriesIdsToTry,
        registrationkey: apiKey,
        startyear: '2019',
        endyear: '2025'
      })
    });

    const data = await response.json();

    if (data.status !== 'REQUEST_SUCCEEDED') {
      return res.status(400).json({
        error: 'BLS API error',
        message: data.message,
        tried: seriesIdsToTry
      });
    }

    const validSeries = data.Results.series.find(
      s => s.data && s.data.length > 0
    );

    if (!validSeries) {
      return res.status(200).json({
        points: [],
        tried: seriesIdsToTry,
        message: data.message
      });
    }

    const points = validSeries.data.map(d => ({
      period: d.periodName + ' ' + d.year,
      value: d.value
    }));

    res.status(200).json({
      points,
      seriesId: validSeries.seriesID
    });

  } catch(error) {
    res.status(500).json({
      error: 'Failed to fetch trend data',
      details: error.message
    });
  }
}
