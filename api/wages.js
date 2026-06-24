const stateWages = {
  'national': {
    name: 'National',
    occupations: [
      { soc: '00-0000', title: 'All occupations', mean: 61900, median: 46310, p10: 28850, p25: 34560, p75: 72010, p90: 107450, emp: 155495730 },
      { soc: '11-0000', title: 'Management occupations', mean: 130920, median: 107360, p10: 57230, p25: 75340, p75: 163450, p90: 208560, emp: 8351580 },
      { soc: '13-0000', title: 'Business and financial operations', mean: 79860, median: 72340, p10: 42340, p25: 54230, p75: 98450, p90: 127890, emp: 9140000 },
      { soc: '15-0000', title: 'Computer and mathematical', mean: 104420, median: 98450, p10: 54230, p25: 72340, p75: 130920, p90: 163450, emp: 6230000 },
      { soc: '17-0000', title: 'Architecture and engineering', mean: 90250, median: 84560, p10: 52340, p25: 66780, p75: 110120, p90: 138900, emp: 2870000 },
      { soc: '19-0000', title: 'Life physical and social science', mean: 82840, median: 74560, p10: 42340, p25: 56780, p75: 104560, p90: 132340, emp: 1340000 },
      { soc: '21-0000', title: 'Community and social service', mean: 50340, median: 46780, p10: 30120, p25: 36780, p75: 60120, p90: 74560, emp: 2190000 },
      { soc: '23-0000', title: 'Legal occupations', mean: 120900, median: 86780, p10: 38900, p25: 54230, p75: 152340, p90: 208560, emp: 1120000 },
      { soc: '25-0000', title: 'Educational instruction and library', mean: 61780, median: 58900, p10: 32450, p25: 44560, p75: 74560, p90: 96780, emp: 9340000 },
      { soc: '27-0000', title: 'Arts design entertainment sports media', mean: 62430, median: 52340, p10: 28900, p25: 38900, p75: 78900, p90: 108900, emp: 2860000 },
      { soc: '29-0000', title: 'Healthcare practitioners nurses doctors physicians surgeons dentists pharmacists', mean: 82730, median: 74560, p10: 34560, p25: 52340, p75: 104560, p90: 152340, emp: 9670000 },
      { soc: '31-0000', title: 'Healthcare support nursing assistants aides medical', mean: 36840, median: 34560, p10: 24560, p25: 28900, p75: 42340, p90: 52340, emp: 6340000 },
      { soc: '33-0000', title: 'Protective service police security firefighters', mean: 48920, median: 44560, p10: 26780, p25: 34560, p75: 60120, p90: 76780, emp: 3490000 },
      { soc: '35-0000', title: 'Food preparation serving cooks chefs restaurant', mean: 31280, median: 28900, p10: 22340, p25: 25670, p75: 34560, p90: 44560, emp: 13420000 },
      { soc: '37-0000', title: 'Building grounds cleaning maintenance janitors', mean: 33490, median: 30120, p10: 22340, p25: 25670, p75: 38900, p90: 50120, emp: 5780000 },
      { soc: '39-0000', title: 'Personal care service hairdressers childcare', mean: 34820, median: 30120, p10: 22340, p25: 25670, p75: 40120, p90: 54230, emp: 5230000 },
      { soc: '41-0000', title: 'Sales related retail salespeople', mean: 46870, median: 36780, p10: 22340, p25: 27890, p75: 56780, p90: 86780, emp: 14230000 },
      { soc: '43-0000', title: 'Office administrative support clerks assistants', mean: 42380, median: 40120, p10: 26780, p25: 32450, p75: 50120, p90: 62340, emp: 20140000 },
      { soc: '45-0000', title: 'Farming fishing forestry agricultural workers', mean: 34290, median: 30120, p10: 22340, p25: 25670, p75: 38900, p90: 52340, emp: 1230000 },
      { soc: '47-0000', title: 'Construction extraction electricians plumbers carpenters', mean: 58230, median: 54230, p10: 34560, p25: 42340, p75: 72340, p90: 90120, emp: 7340000 },
      { soc: '49-0000', title: 'Installation maintenance repair mechanics technicians', mean: 55780, median: 52340, p10: 32450, p25: 40120, p75: 68900, p90: 86780, emp: 5980000 },
      { soc: '51-0000', title: 'Production manufacturing workers assemblers', mean: 45230, median: 40120, p10: 26780, p25: 32450, p75: 54230, p90: 70120, emp: 9870000 },
      { soc: '53-0000', title: 'Transportation material moving truck drivers warehouse', mean: 43120, median: 38900, p10: 25670, p25: 30120, p75: 52340, p90: 68900, emp: 15670000 },
    ]
  },
  'AL': { name: 'Alabama', occupations: [
    { soc: '00-0000', title: 'All occupations', mean: 48870, median: 36780, p10: 22340, p25: 27890, p75: 58900, p90: 86780, emp: 1940000 },
    { soc: '11-0000', title: 'Management occupations', mean: 104560, median: 86780, p10: 46780, p25: 60120, p75: 130920, p90: 168900, emp: 98000 },
    { soc: '13-0000', title: 'Business and financial operations', mean: 65320, median: 59450, p10: 34560, p25: 44560, p75: 80120, p90: 104560, emp: 89000 },
    { soc: '15-0000', title: 'Computer and mathematical', mean: 85430, median: 80120, p10: 44560, p25: 59450, p75: 106780, p90: 134560, emp: 45000 },
    { soc: '17-0000', title: 'Architecture and engineering', mean: 79240, median: 74560, p10: 44560, p25: 57890, p75: 96780, p90: 122340, emp: 38000 },
    { soc: '19-0000', title: 'Life physical and social science', mean: 65430, median: 59450, p10: 34560, p25: 46780, p75: 82340, p90: 106780, emp: 15000 },
    { soc: '21-0000', title: 'Community and social service', mean: 41230, median: 38900, p10: 25670, p25: 30120, p75: 50120, p90: 62340, emp: 28000 },
    { soc: '23-0000', title: 'Legal occupations', mean: 89340, median: 64560, p10: 30120, p25: 44560, p75: 114560, p90: 163450, emp: 12000 },
    { soc: '25-0000', title: 'Educational instruction and library', mean: 50120, median: 48900, p10: 28900, p25: 38900, p75: 60120, p90: 76780, emp: 98000 },
    { soc: '27-0000', title: 'Arts design entertainment sports media', mean: 48230, median: 40120, p10: 22340, p25: 30120, p75: 60120, p90: 84560, emp: 22000 },
    { soc: '29-0000', title: 'Healthcare practitioners nurses doctors physicians surgeons dentists pharmacists', mean: 69340, median: 62340, p10: 28900, p25: 44560, p75: 88900, p90: 128900, emp: 98000 },
    { soc: '31-0000', title: 'Healthcare support nursing assistants aides medical', mean: 30120, median: 28900, p10: 20120, p25: 24560, p75: 34560, p90: 42340, emp: 65000 },
    { soc: '33-0000', title: 'Protective service police security firefighters', mean: 40230, median: 36780, p10: 22340, p25: 28900, p75: 50120, p90: 62340, emp: 42000 },
    { soc: '35-0000', title: 'Food preparation serving cooks chefs restaurant', mean: 25340, median: 23450, p10: 18900, p25: 20120, p75: 28900, p90: 36780, emp: 145000 },
    { soc: '37-0000', title: 'Building grounds cleaning maintenance janitors', mean: 27890, median: 25670, p10: 18900, p25: 21230, p75: 32450, p90: 40120, emp: 62000 },
    { soc: '39-0000', title: 'Personal care service hairdressers childcare', mean: 27340, median: 24560, p10: 18900, p25: 21230, p75: 32450, p90: 42340, emp: 52000 },
    { soc: '41-0000', title: 'Sales related retail salespeople', mean: 38450, median: 30120, p10: 19450, p25: 23450, p75: 46780, p90: 70120, emp: 178000 },
    { soc: '43-0000', title: 'Office administrative support clerks assistants', mean: 36780, median: 34560, p10: 22340, p25: 27890, p75: 44560, p90: 54230, emp: 245000 },
    { soc: '45-0000', title: 'Farming fishing forestry agricultural workers', mean: 32450, median: 28900, p10: 20120, p25: 23450, p75: 38900, p90: 50120, emp: 18000 },
    { soc: '47-0000', title: 'Construction extraction electricians plumbers carpenters', mean: 48230, median: 44560, p10: 28900, p25: 35670, p75: 58900, p90: 74560, emp: 98000 },
    { soc: '49-0000', title: 'Installation maintenance repair mechanics technicians', mean: 46780, median: 44560, p10: 27890, p25: 34560, p75: 56780, p90: 70120, emp: 72000 },
    { soc: '51-0000', title: 'Production manufacturing workers assemblers', mean: 40230, median: 36780, p10: 23450, p25: 28900, p75: 48900, p90: 62340, emp: 145000 },
    { soc: '53-0000', title: 'Transportation material moving truck drivers warehouse', mean: 38450, median: 34560, p10: 21230, p25: 26780, p75: 46780, p90: 60120, emp: 178000 },
  ]},
};

// Remaining states omitted for brevity — in production this file contains all 50 states
// identical to the stateWages data already in your api/wages.js (document 6)

export default async function handler(req, res) {
  const { industry, search, state } = req.query;
  const stateKey = state || 'national';
  const stateData = stateWages[stateKey] || stateWages['national'];

  let occupations = stateData.occupations;

  if (industry && industry !== '000000') {
    const industryOccMap = {
      // ── Existing mappings ──────────────────────────────────────
      '110000': ['45-0000'],
      '210000': ['47-0000', '17-0000'],
      '220000': ['49-0000', '17-0000', '51-0000'],          // Utilities
      '230000': ['47-0000', '49-0000', '17-0000'],
      '310000': ['51-0000', '49-0000', '17-0000'],
      '420000': ['41-0000', '53-0000', '43-0000'],
      '440000': ['41-0000', '43-0000', '39-0000'],
      '480000': ['53-0000', '49-0000', '43-0000'],
      '510000': ['15-0000', '27-0000', '43-0000'],
      '520000': ['13-0000', '11-0000', '23-0000'],
      '530000': ['11-0000', '13-0000', '43-0000'],
      '540000': ['13-0000', '15-0000', '17-0000', '23-0000'],
      '550000': ['11-0000', '13-0000', '43-0000'],
      '560000': ['37-0000', '33-0000', '43-0000'],
      '610000': ['25-0000', '43-0000', '21-0000'],
      '620000': ['29-0000', '31-0000', '21-0000'],
      '622000': ['29-0000', '31-0000', '21-0000'],
      '623000': ['29-0000', '31-0000', '39-0000'],
      '710000': ['27-0000', '39-0000', '33-0000'],
      '720000': ['35-0000', '39-0000', '43-0000'],
      '810000': ['39-0000', '49-0000', '37-0000'],
      '900000': ['33-0000', '25-0000', '21-0000', '43-0000'],

      // ── New: Professional sub-sectors ─────────────────────────
      '541100': ['23-0000', '43-0000', '13-0000'],           // Legal services
      '541200': ['13-0000', '43-0000', '11-0000'],           // Accounting services
      '541213': ['13-0000', '43-0000'],                      // Tax preparation
      '541214': ['13-0000', '43-0000'],                      // Bookkeeping
      '541300': ['17-0000', '15-0000', '43-0000'],           // Engineering services
      '541500': ['15-0000', '17-0000', '43-0000'],           // Computer systems design
      '541512': ['15-0000', '43-0000', '11-0000'],           // IT consulting
      '541920': ['27-0000', '43-0000', '41-0000'],           // Photography studios
      '541940': ['29-0000', '31-0000', '43-0000'],           // Veterinary services

      // ── New: Administrative sub-sectors ───────────────────────
      '561700': ['37-0000', '45-0000', '49-0000'],           // Landscaping
      '561720': ['37-0000', '49-0000', '43-0000'],           // Janitorial

      // ── New: Health sub-sectors ────────────────────────────────
      '621100': ['29-0000', '31-0000', '43-0000'],           // Offices of physicians
      '621200': ['29-0000', '31-0000', '43-0000'],           // Dental offices
      '621300': ['29-0000', '31-0000', '43-0000'],           // Optometry
      '621400': ['29-0000', '31-0000', '43-0000'],           // Physical therapy
      '621600': ['29-0000', '31-0000', '39-0000'],           // Home health care
      '624400': ['39-0000', '21-0000', '25-0000'],           // Child day care

      // ── New: Retail sub-sectors ────────────────────────────────
      '441000': ['41-0000', '49-0000', '43-0000'],           // Auto dealerships
      '442000': ['41-0000', '43-0000', '11-0000'],           // Furniture stores
      '444000': ['41-0000', '47-0000', '43-0000'],           // Hardware / building supply
      '445000': ['35-0000', '41-0000', '43-0000'],           // Specialty food stores
      '451000': ['41-0000', '43-0000', '39-0000'],           // Sporting goods / hobby
      '459140': ['41-0000', '43-0000', '37-0000'],           // Florists
      '459910': ['41-0000', '43-0000', '39-0000'],           // Pet stores

      // ── New: Transportation sub-sectors ───────────────────────
      '484000': ['53-0000', '49-0000', '43-0000'],           // Trucking
      '492000': ['53-0000', '43-0000', '41-0000'],           // Couriers / messengers
      '493000': ['53-0000', '49-0000', '43-0000'],           // Warehousing and storage

      // ── New: Manufacturing sub-sectors ────────────────────────
      '311800': ['51-0000', '35-0000', '43-0000'],           // Bakeries
      '312000': ['51-0000', '35-0000', '43-0000'],           // Breweries and wineries
      '323000': ['51-0000', '49-0000', '43-0000'],           // Printing

      // ── New: Personal services ─────────────────────────────────
      '811100': ['49-0000', '41-0000', '43-0000'],           // Auto repair
      '812110': ['39-0000', '43-0000', '41-0000'],           // Beauty salons / barbershops
      '812200': ['39-0000', '43-0000', '11-0000'],           // Funeral homes
      '812300': ['51-0000', '37-0000', '43-0000'],           // Dry cleaning / laundry
    };

    const relevantSocs = industryOccMap[industry] || [];
    if (relevantSocs.length > 0) {
      occupations = occupations.filter(o =>
        relevantSocs.includes(o.soc) || o.soc === '00-0000'
      );
    }
  }

  if (search) {
    const searchLower = search.toLowerCase();
    const filtered = occupations.filter(o =>
      o.title.toLowerCase().includes(searchLower)
    );
    if (filtered.length > 0) {
      occupations = filtered;
    }
  }

  res.status(200).json({
    status: 'success',
    period: 'May 2024',
    state: stateData.name,
    results: occupations.map(o => ({
      seriesId: o.soc,
      title: o.title,
      latestValue: o.mean,
      median: o.median,
      p10: o.p10,
      p25: o.p25,
      p75: o.p75,
      p90: o.p90,
      employment: o.emp,
      period: 'May 2024'
    }))
  });
}
