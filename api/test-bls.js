// api/test-bls.js
// Temporary test endpoint - delete after testing
export default async function handler(req, res) {
  const apiKey = process.env.BLS_API_KEY;
  
  if (!apiKey) {
    return res.status(200).json({ error: 'No BLS_API_KEY found in environment' });
  }

  try {
    const response = await fetch('https://api.bls.gov/publicAPI/v2/timeseries/data/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        seriesid: ['OEUM000000000000011100003'],
        startyear: '2024',
        endyear: '2024',
        registrationkey: apiKey
      })
    });

    const data = await response.json();
    return res.status(200).json({ 
      success: true, 
      status: response.status,
      blsStatus: data.status,
      message: data.message,
      hasData: !!(data.Results && data.Results.series)
    });

  } catch(e) {
    return res.status(200).json({ 
      success: false, 
      error: e.message,
      note: 'Network likely blocked — api.bls.gov not in allowlist'
    });
  }
}
