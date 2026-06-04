export default async function handler(req, res) {
  const apiKey = process.env.BLS_API_KEY;
  const { industry } = req.query;
  const industryCode = industry || '000000';

  const seriesIds = [
    `OEUM${industryCode}000000`,
    `OEUM${industryCode}110000`,
    `OEUM${industryCode}130000`,
    `OEUM${industryCode}150000`,
    `OEUM${industryCode}170000`,
    `OEUM${industryCode}190000`,
    `OEUM${industryCode}210000`,
    `OEUM${industryCode}230000`,
    `OEUM${industryCode}250000`,
    `OEUM${industryCode}270000`,
    `OEUM${industryCode}290000`,
    `OEUM${industryCode}310000`,
    `OEUM${industryCode}330000`,
    `OEUM${industryCode}350000`,
    `OEUM${industryCode}370000`,
    `OEUM${industryCode}390000`,
    `OEUM${industryCode}410000`,
    `OEUM${industryCode}430000`,
    `OEUM${industryCode}450000`,
    `OEUM${industryCode}470000`,
    `OEUM${industryCode}490000`,
    `OEUM${industryCode}510000`,
    `OEUM${industryCode}530000`,
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

    res.status(200).json(data);

  } catch(error) {
    res.status(500).json({
      error: 'Failed to fetch BLS data',
      details: error.message
    });
  }
}
