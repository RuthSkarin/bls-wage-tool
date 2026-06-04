export default async function handler(req, res) {
  const { industry, search } = req.query;

  const occupations = [
    { soc: '00-0000', title: 'All occupations', wage: 61900, emp: 155495730, industries: ['000000'] },
    { soc: '11-0000', title: 'Management occupations', wage: 130920, emp: 8351580, industries: ['000000', '520000', '540000', '550000'] },
    { soc: '13-0000', title: 'Business and financial operations', wage: 79860, emp: 9140000, industries: ['000000', '520000', '540000'] },
    { soc: '15-0000', title: 'Computer and mathematical', wage: 104420, emp: 6230000, industries: ['000000', '510000', '540000'] },
    { soc: '17-0000', title: 'Architecture and engineering', wage: 90250, emp: 2870000, industries: ['000000', '230000', '310000', '540000'] },
    { soc: '19-0000', title: 'Life physical and social science', wage: 82840, emp: 1340000, industries: ['000000', '540000'] },
    { soc: '21-0000', title: 'Community and social service', wage: 50340, emp: 2190000, industries: ['000000', '620000', '900000'] },
    { soc: '23-0000', title: 'Legal occupations', wage: 120900, emp: 1120000, industries: ['000000', '540000', '900000'] },
    { soc: '25-0000', title: 'Educational instruction and library', wage: 61780, emp: 9340000, industries: ['000000', '610000', '900000'] },
    { soc: '27-0000', title: 'Arts design entertainment sports media', wage: 62430, emp: 2860000, industries: ['000000', '710000', '510000'] },
    { soc: '29-0000', title: 'Healthcare practitioners nurses doctors physicians surgeons dentists pharmacists', wage: 82730, emp: 9670000, industries: ['000000', '620000'] },
    { soc: '31-0000', title: 'Healthcare support nursing assistants aides medical', wage: 36840, emp: 6340000, industries: ['000000', '620000'] },
    { soc: '33-0000', title: 'Protective service police security firefighters', wage: 48920, emp: 3490000, industries: ['000000', '900000'] },
    { soc: '35-0000', title: 'Food preparation serving cooks chefs restaurant', wage: 31280, emp: 13420000, industries: ['000000', '720000'] },
    { soc: '37-0000', title: 'Building grounds cleaning maintenance janitors', wage: 33490, emp: 5780000, industries: ['000000', '560000'] },
    { soc: '39-0000', title: 'Personal care service hairdressers childcare', wage: 34820, emp: 5230000, industries: ['000000', '810000'] },
    { soc: '41-0000', title: 'Sales related retail salespeople', wage: 46870, emp: 14230000, industries: ['000000', '440000', '420000'] },
    { soc: '43-0000', title: 'Office administrative support clerks assistants', wage: 42380, emp: 20140000, industries: ['000000', '540000', '520000'] },
    { soc: '45-0000', title: 'Farming fishing forestry agricultural workers', wage: 34290, emp: 1230000, industries: ['000000', '110000'] },
    { soc: '47-0000', title: 'Construction extraction electricians plumbers carpenters', wage: 58230, emp: 7340000, industries: ['000000', '230000'] },
    { soc: '49-0000', title: 'Installation maintenance repair mechanics technicians', wage: 55780, emp: 5980000, industries: ['000000', '310000', '480000'] },
    { soc: '51-0000', title: 'Production manufacturing workers assemblers', wage: 45230, emp: 9870000, industries: ['000000', '310000'] },
    { soc: '53-0000', title: 'Transportation material moving truck drivers warehouse', wage: 43120, emp: 15670000, industries: ['000000', '480000', '420000'] },
  ];

  let results = occupations;

  if (industry && industry !== '000000') {
    results = results.filter(o => o.industries.includes(industry));
    if (results.length === 0) {
      results = occupations.filter(o => o.soc !== '00-0000');
    }
  }

  if (search) {
    const filtered = results.filter(o =>
      o.title.toLowerCase().includes(search.toLowerCase())
    );
    if (filtered.length > 0) {
      results = filtered;
    }
  }

  res.status(200).json({
    status: 'success',
    period: 'May 2024',
    results: results.map(o => ({
      seriesId: o.soc,
      title: o.title,
      latestValue: o.wage,
      employment: o.emp,
      period: 'May 2024'
    }))
  });
}
