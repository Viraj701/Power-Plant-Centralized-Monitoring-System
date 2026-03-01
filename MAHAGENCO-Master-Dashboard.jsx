import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, AlertCircle, CheckCircle, Zap, Activity, TrendingDown, Clock, Calendar, Wrench } from 'lucide-react';

const MAHAGENCOMasterDashboard = () => {
  const [mainTab, setMainTab] = useState('generation');
  const [subTab, setSubTab] = useState({
    generation: 'overview',
    powerplant: 'overview',
    outage: 'summary',
    costrecovery: 'summary',
    mod: 'summary',
    peakoffpeak: 'summary',
    profitability: 'summary',
  });

  // ========== PEAK/OFF-PEAK DATA ==========
  const peakOffPeakComparison = [
    { plant: 'Bhusawal', offPeak: 113, peak: 133, difference: 20 },
    { plant: 'Chandrapur', offPeak: 168, peak: 189, difference: 21 },
    { plant: 'Khaparkheda', offPeak: 173, peak: 182, difference: 9 },
    { plant: 'Koradi', offPeak: 171, peak: 177, difference: 6 },
    { plant: 'Nashik', offPeak: 155, peak: 171, difference: 16 },
    { plant: 'Paras', offPeak: 196, peak: 214, difference: 18 },
    { plant: 'Parli', offPeak: 214, peak: 240, difference: 26 },
  ];

  // ========== GENERATION DATA ==========
  const generationBySource = [
    { name: 'Thermal', value: 12850, capacity: 14000, color: '#ef4444' },
    { name: 'Hydro', value: 3250, capacity: 4500, color: '#3b82f6' },
    { name: 'Gas', value: 2100, capacity: 2500, color: '#f59e0b' },
    { name: 'Solar', value: 1200, capacity: 2000, color: '#eab308' },
  ];

  const generationTrend = [
    { time: '00:00', thermal: 12200, hydro: 2800, gas: 1900, solar: 0 },
    { time: '06:00', thermal: 12400, hydro: 2900, gas: 2000, solar: 50 },
    { time: '12:00', thermal: 12850, hydro: 3250, gas: 2100, solar: 1200 },
    { time: '18:00', thermal: 12850, hydro: 3100, gas: 2100, solar: 200 },
  ];

  // ========== POWER PLANT DATA ==========
  const powerPlantUnits = [
    { name: 'Unit 1', generation: 650, capacity: 660, plf: 98.5, heatRate: 2385, status: 'Running' },
    { name: 'Unit 2', generation: 640, capacity: 660, plf: 96.9, heatRate: 2410, status: 'Running' },
    { name: 'Unit 3', generation: 550, capacity: 660, plf: 83.3, heatRate: 2550, status: 'Running' },
    { name: 'Unit 4', generation: 0, capacity: 660, plf: 0, heatRate: 0, status: 'Outage' },
  ];

  const financialData = [
    { metric: 'Heat Rate Loss', value: -12.5, impact: '₹245 Cr/Year' },
    { metric: 'APC Impact', value: -8.3, impact: '₹165 Cr/Year' },
    { metric: 'DSM Exposure', value: -3.2, impact: '₹64 Cr/Year' },
  ];

  // ========== OUTAGE DATA ==========
  const outageCapacityByCategory = [
    { category: 'Thermal (Planned)', capacity: 2400, color: '#ef4444', units: 2 },
    { category: 'Thermal (Forced)', capacity: 1200, color: '#dc2626', units: 1 },
    { category: 'Hydro (KGSC)', capacity: 500, color: '#3b82f6', units: 1 },
    { category: 'Gas (Shortage)', capacity: 400, color: '#f59e0b', units: 1 },
  ];

  const thermalOutages = [
    { unit: 'Bhusawal TPS Unit 1', capacity: 1200, reason: 'Annual Maintenance', outageDate: '25-Feb-2026 00:00', expectedRestoration: '08-Mar-2026 18:00', status: 'Ongoing', priority: 'High' },
    { unit: 'Koradi STPS Unit 2', capacity: 1200, reason: 'Boiler Tube Replacement', outageDate: '22-Feb-2026 06:00', expectedRestoration: '05-Mar-2026 12:00', status: 'Completed', priority: 'High' },
    { unit: 'Chandrapur STPS Unit 3', capacity: 1200, reason: 'Turbine Blade Damage', outageDate: '24-Feb-2026 14:30', expectedRestoration: '02-Mar-2026 22:00', status: 'Ongoing', priority: 'Critical' },
  ];

  // ========== COST RECOVERY DATA ==========
  const costRecoverySummary = [
    { category: 'Fixed Cost Recovery', amount: 4200, percentage: 81.0 },
    { category: 'Fuel Cost Recovery', amount: 6800, percentage: 89.6 },
    { category: 'DSM Recovery', amount: 850, percentage: 45.0 },
  ];

  const fuelCostBreakdown = [
    { component: 'Heat Rate Impact', allocated: 2400, recovered: 2100 },
    { component: 'APC (Auxiliary Power Consumption)', allocated: 1800, recovered: 1650 },
    { component: 'SOC (Specific Oil Consumption)', allocated: 1600, recovered: 1520 },
    { component: 'TL (Transit Loss via CWS)', allocated: 1000, recovered: 930 },
  ];

  // ========== MOD DATA ==========
  const modData = [
    { unit: 'Bhusawal TPS', actual: 850, projected: 820, normative: 800 },
    { unit: 'Koradi STPS', actual: 920, projected: 930, normative: 900 },
    { unit: 'Khaparkheda STPS', actual: 760, projected: 780, normative: 800 },
  ];

  const coalGCVAnalysis = [
    { mine: 'South Eastern Coalfields (SECL)', avgGCV: 4150, spec: 4200, diff: -50, status: 'Low', rakes: 25 },
    { mine: 'Central Coalfields (CCL)', avgGCV: 4320, spec: 4300, diff: 20, status: 'Match', rakes: 18 },
    { mine: 'Eastern Coalfields (ECL)', avgGCV: 4050, spec: 4200, diff: -150, status: 'Critical', rakes: 22 },
  ];

  const loadingARBData = [
    { date: '21-Feb', actual: 3750, projected: 3720, arb: 8.2, coalStock: 15 },
    { date: '23-Feb', actual: 3720, projected: 3800, arb: 8.1, coalStock: 15.2 },
    { date: '25-Feb', actual: 3900, projected: 3850, arb: 8.7, coalStock: 13.8 },
    { date: '27-Feb', actual: 3850, projected: 3880, arb: 8.4, coalStock: 14.0 },
  ];

  const futurePredictions = [
    { day: 'Day 1', predictedGen: 3880, lowScenario: 3700, highScenario: 4050, coalStock: 13.8 },
    { day: 'Day 2', predictedGen: 3920, lowScenario: 3750, highScenario: 4100, coalStock: 13.2 },
    { day: 'Day 3', predictedGen: 3950, lowScenario: 3800, highScenario: 4150, coalStock: 12.6 },
  ];

  // ========== PROFITABILITY DATA ==========
  const incomeData = [
    { source: 'Power Sales Revenue', amount: 1250, percentage: 94.5 },
    { source: 'Other Income', amount: 73, percentage: 5.5 },
  ];

  const expenditureData = [
    { category: 'Coal Cost (71.11)', amount: 850, percentage: 52.3 },
    { category: 'LDO/FO Cost (71.112)', amount: 120, percentage: 7.4 },
    { category: 'O&M (R&M, Emp, A&G)', amount: 285, percentage: 17.5 },
    { category: 'Depreciation (77)', amount: 180, percentage: 11.1 },
    { category: 'Interest Charges (78)', amount: 95, percentage: 5.8 },
  ];

  const profitTrend = [
    { date: '28-Jan', revenue: 1280, expenditure: 1450, profit: -170 },
    { date: '04-Feb', revenue: 1320, expenditure: 1580, profit: -260 },
    { date: '11-Feb', revenue: 1350, expenditure: 1620, profit: -270 },
    { date: '18-Feb', revenue: 1310, expenditure: 1590, profit: -280 },
    { date: '25-Feb', revenue: 1280, expenditure: 1600, profit: -320 },
    { date: '27-Feb', revenue: 1323, expenditure: 1625, profit: -302 },
  ];

  const unitProfitability = [
    { unit: 'Bhusawal TPS', revenue: 315, cost: 385, profit: -70, margin: -22.2 },
    { unit: 'Koradi STPS', revenue: 340, cost: 365, profit: -25, margin: -7.4 },
    { unit: 'Khaparkheda STPS', revenue: 280, cost: 325, profit: -45, margin: -16.1 },
    { unit: 'Parli STPS', revenue: 205, cost: 240, profit: -35, margin: -17.1 },
    { unit: 'Chandrapur STPS', revenue: 183, cost: 310, profit: -127, margin: -69.4 },
  ];

  // ========== COMPONENT FUNCTIONS ==========

  const setSubTabHandler = (dashboard, tab) => {
    setSubTab(prev => ({ ...prev, [dashboard]: tab }));
  };

  // GENERATION TAB
  const GenerationTab = () => (
    <div className="space-y-6">
      {subTab.generation === 'overview' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-6 text-white shadow-lg">
              <p className="text-blue-200 text-sm font-medium">Total Generation</p>
              <p className="text-3xl font-bold mt-2">19,400 MW</p>
              <p className="text-blue-300 text-xs mt-1">4 sources</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-lg p-6 text-white shadow-lg">
              <p className="text-emerald-200 text-sm font-medium">Fleet Capacity</p>
              <p className="text-3xl font-bold mt-2">23,000 MW</p>
              <p className="text-emerald-300 text-xs mt-1">Utilization: 84.3%</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-6 text-white shadow-lg">
              <p className="text-orange-200 text-sm font-medium">Renewable Share</p>
              <p className="text-3xl font-bold mt-2">23.8%</p>
              <p className="text-orange-300 text-xs mt-1">Hydro + Solar</p>
            </div>
            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-6 text-white shadow-lg">
              <p className="text-green-200 text-sm font-medium">Availability</p>
              <p className="text-3xl font-bold mt-2">97.2%</p>
              <p className="text-green-300 text-xs mt-1">System reliability</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Generation by Source</h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie data={generationBySource} cx="50%" cy="50%" labelLine={false} label={({ name, percentage }) => `${name}`} outerRadius={90} dataKey="value">
                    {generationBySource.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} MW`} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">24-Hour Generation Trend</h3>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={generationTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Area type="monotone" dataKey="thermal" stackId="1" fill="#ef4444" />
                  <Area type="monotone" dataKey="hydro" stackId="1" fill="#3b82f6" />
                  <Area type="monotone" dataKey="gas" stackId="1" fill="#f59e0b" />
                  <Area type="monotone" dataKey="solar" stackId="1" fill="#eab308" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // POWER PLANT TAB
  const PowerPlantTab = () => (
    <div className="space-y-6">
      {subTab.powerplant === 'overview' && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Unit Performance</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Unit</th>
                      <th className="text-right py-2 px-3 font-semibold text-gray-700">Gen (MW)</th>
                      <th className="text-right py-2 px-3 font-semibold text-gray-700">PLF (%)</th>
                      <th className="text-right py-2 px-3 font-semibold text-gray-700">HR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {powerPlantUnits.map((unit, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="py-2 px-3 font-medium text-gray-800">{unit.name}</td>
                        <td className="py-2 px-3 text-right text-gray-700">{unit.generation}</td>
                        <td className="py-2 px-3 text-right text-gray-700">{unit.plf}</td>
                        <td className="py-2 px-3 text-right text-gray-700">{unit.heatRate || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Financial Impact</h3>
              <div className="space-y-2">
                {financialData.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span className="text-gray-700">{item.metric}</span>
                    <span className="text-red-600 font-bold">{item.impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // OUTAGE TAB
  const OutageTab = () => (
    <div className="space-y-6">
      {subTab.outage === 'summary' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <p className="text-red-600 font-bold text-2xl">5,450 MW</p>
              <p className="text-gray-700 text-sm">Total Outage Capacity</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
              <p className="text-orange-600 font-bold text-2xl">3</p>
              <p className="text-gray-700 text-sm">Ongoing Outages</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <p className="text-blue-600 font-bold text-2xl">2</p>
              <p className="text-gray-700 text-sm">Forced Outages</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Outage Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={outageCapacityByCategory} cx="50%" cy="50%" labelLine={false} label={({ category, capacity }) => `${capacity} MW`} outerRadius={100} dataKey="capacity">
                  {outageCapacityByCategory.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Thermal Outages</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-2 px-3 font-semibold">Unit</th>
                    <th className="text-left py-2 px-3 font-semibold">Reason</th>
                    <th className="text-left py-2 px-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {thermalOutages.map((outage, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="py-2 px-3 text-gray-800">{outage.unit}</td>
                      <td className="py-2 px-3 text-gray-700">{outage.reason}</td>
                      <td className="py-2 px-3"><span className={`px-2 py-1 rounded text-xs font-semibold ${outage.status === 'Ongoing' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>{outage.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // COST RECOVERY TAB
  const CostRecoveryTab = () => (
    <div className="space-y-6">
      {subTab.costrecovery === 'summary' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <p className="text-blue-600 font-bold text-2xl">₹12,500 Cr</p>
              <p className="text-gray-700 text-sm">Total Generation Cost</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <p className="text-green-600 font-bold text-2xl">₹10,875 Cr</p>
              <p className="text-gray-700 text-sm">Total Recovered (87%)</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
              <p className="text-orange-600 font-bold text-2xl">₹1,625 Cr</p>
              <p className="text-gray-700 text-sm">Disallowance (13%)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Cost Composition</h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie data={costRecoverySummary} cx="50%" cy="50%" labelLine={false} label={({ category, percentage }) => `${percentage}%`} outerRadius={100} dataKey="amount">
                    <Cell fill="#3b82f6" />
                    <Cell fill="#f59e0b" />
                    <Cell fill="#8b5cf6" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Fuel Cost Breakdown</h3>
              <div className="space-y-2">
                {fuelCostBreakdown.map((item, idx) => (
                  <div key={idx} className="p-2 bg-gray-50 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-800">{item.component}</span>
                      <span className="text-sm text-gray-700">{item.recovered}/{item.allocated}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: `${(item.recovered/item.allocated)*100}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // MOD TAB
  const MODTab = () => (
    <div className="space-y-6">
      {subTab.mod === 'summary' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <p className="text-blue-600 font-bold text-2xl">3,850 MW</p>
              <p className="text-gray-700 text-sm">Today's Generation</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <p className="text-green-600 font-bold text-2xl">4,158 cal/g</p>
              <p className="text-gray-700 text-sm">Avg Coal GCV</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
              <p className="text-orange-600 font-bold text-2xl">14.0 Days</p>
              <p className="text-gray-700 text-sm">Coal Stock</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <p className="text-red-600 font-bold text-2xl">2</p>
              <p className="text-gray-700 text-sm">Critical Alerts</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Daily MOD - Actual vs Projected</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={modData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="unit" fontSize={11} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="actual" fill="#3b82f6" name="Actual" />
                  <Bar dataKey="projected" fill="#f59e0b" name="Projected" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Coal GCV by Mine</h3>
              <div className="space-y-2">
                {coalGCVAnalysis.map((item, idx) => (
                  <div key={idx} className="p-2 bg-gray-50 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-800">{item.mine}</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${item.status === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>{item.status}</span>
                    </div>
                    <div className="text-xs text-gray-600">{item.avgGCV} vs {item.spec} (Diff: {item.diff})</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">7-Day Forecast</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={futurePredictions}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Area type="monotone" dataKey="highScenario" fill="#10b981" opacity={0.3} />
                <Area type="monotone" dataKey="predictedGen" fill="#3b82f6" />
                <Area type="monotone" dataKey="lowScenario" fill="#ef4444" opacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );

  // PEAK/OFF-PEAK TAB
  const PeakOffPeakTab = () => (
    <div className="space-y-6">
      {subTab.peakoffpeak === 'summary' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-6 text-white shadow-lg">
              <p className="text-blue-200 text-sm font-medium">Off-Peak Gross</p>
              <p className="text-2xl font-bold mt-2">6,289 MW</p>
            </div>
            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-6 text-white shadow-lg">
              <p className="text-green-200 text-sm font-medium">Peak Gross</p>
              <p className="text-2xl font-bold mt-2">6,665 MW</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-6 text-white shadow-lg">
              <p className="text-orange-200 text-sm font-medium">Peak Gain</p>
              <p className="text-2xl font-bold mt-2">+376 MW</p>
            </div>
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg p-6 text-white shadow-lg">
              <p className="text-red-200 text-sm font-medium">Total Deviation</p>
              <p className="text-2xl font-bold mt-2">-53 MW</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Peak vs Off-Peak by Plant</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={peakOffPeakComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="plant" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar dataKey="offPeak" fill="#f59e0b" name="Off-Peak (MW)" />
                <Bar dataKey="peak" fill="#10b981" name="Peak (MW)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );

  // PROFITABILITY TAB
  const ProfitabilityTab = () => (
    <div className="space-y-6">
      {subTab.profitability === 'summary' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <p className="text-green-600 font-bold text-2xl">₹1,323 Cr</p>
              <p className="text-gray-700 text-sm">Total Income</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <p className="text-red-600 font-bold text-2xl">₹1,625 Cr</p>
              <p className="text-gray-700 text-sm">Total Expenditure</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
              <p className="text-orange-600 font-bold text-2xl">-₹302 Cr</p>
              <p className="text-gray-700 text-sm">Net Loss</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <p className="text-blue-600 font-bold text-2xl">-22.8%</p>
              <p className="text-gray-700 text-sm">Profit Margin</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Income Breakdown</h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie data={incomeData} cx="50%" cy="50%" labelLine={false} label={({ percentage }) => `${percentage}%`} outerRadius={90} dataKey="amount">
                    <Cell fill="#10b981" />
                    <Cell fill="#3b82f6" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Expenditure Breakdown</h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie data={expenditureData} cx="50%" cy="50%" labelLine={false} label={({ percentage }) => `${percentage.toFixed(1)}%`} outerRadius={90} dataKey="amount">
                    <Cell fill="#ef4444" />
                    <Cell fill="#f97316" />
                    <Cell fill="#eab308" />
                    <Cell fill="#84cc16" />
                    <Cell fill="#22c55e" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">30-Day Profitability Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={profitTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Legend />
                <Line dataKey="revenue" stroke="#10b981" strokeWidth={2} />
                <Line dataKey="expenditure" stroke="#ef4444" strokeWidth={2} />
                <Line dataKey="profit" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Unit-wise Profitability</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-2 px-3 font-semibold">Unit</th>
                    <th className="text-right py-2 px-3 font-semibold">Revenue</th>
                    <th className="text-right py-2 px-3 font-semibold">Cost</th>
                    <th className="text-right py-2 px-3 font-semibold">Profit</th>
                    <th className="text-right py-2 px-3 font-semibold">Margin %</th>
                  </tr>
                </thead>
                <tbody>
                  {unitProfitability.map((unit, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="py-2 px-3 text-gray-800">{unit.unit}</td>
                      <td className="py-2 px-3 text-right text-gray-700">₹{unit.revenue} Cr</td>
                      <td className="py-2 px-3 text-right text-gray-700">₹{unit.cost} Cr</td>
                      <td className="py-2 px-3 text-right font-semibold text-red-600">₹{unit.profit} Cr</td>
                      <td className="py-2 px-3 text-right text-gray-700">{unit.margin.toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">MAHAGENCO Integrated Analytics Platform</h1>
          <p className="text-blue-200 mt-2">Comprehensive Dashboard Suite for Power Generation Management</p>
          <p className="text-blue-300 text-sm mt-1">Date: 27-Feb-2026 | Real-time Data Integration</p>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto">
            {['generation', 'powerplant', 'outage', 'costrecovery', 'mod', 'peakoffpeak', 'profitability'].map((tab) => (
              <button
                key={tab}
                onClick={() => setMainTab(tab)}
                className={`py-4 px-3 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  mainTab === tab
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab === 'generation' ? 'Generation' : tab === 'powerplant' ? 'Power Plant' : tab === 'outage' ? 'Outage' : tab === 'costrecovery' ? 'Cost Recovery' : tab === 'mod' ? 'MOD & Prediction' : tab === 'peakoffpeak' ? 'Peak/Off-Peak' : 'Profitability'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="bg-gray-750 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto">
            {mainTab === 'generation' && (
              <button onClick={() => setSubTabHandler('generation', 'overview')} className={`py-3 px-2 text-sm ${subTab.generation === 'overview' ? 'text-blue-400 border-b-2 border-blue-500' : 'text-gray-400'}`}>
                Overview
              </button>
            )}
            {mainTab === 'powerplant' && (
              <button onClick={() => setSubTabHandler('powerplant', 'overview')} className={`py-3 px-2 text-sm ${subTab.powerplant === 'overview' ? 'text-blue-400 border-b-2 border-blue-500' : 'text-gray-400'}`}>
                Overview
              </button>
            )}
            {mainTab === 'outage' && (
              <button onClick={() => setSubTabHandler('outage', 'summary')} className={`py-3 px-2 text-sm ${subTab.outage === 'summary' ? 'text-blue-400 border-b-2 border-blue-500' : 'text-gray-400'}`}>
                Summary
              </button>
            )}
            {mainTab === 'costrecovery' && (
              <button onClick={() => setSubTabHandler('costrecovery', 'summary')} className={`py-3 px-2 text-sm ${subTab.costrecovery === 'summary' ? 'text-blue-400 border-b-2 border-blue-500' : 'text-gray-400'}`}>
                Summary
              </button>
            )}
            {mainTab === 'mod' && (
              <button onClick={() => setSubTabHandler('mod', 'summary')} className={`py-3 px-2 text-sm ${subTab.mod === 'summary' ? 'text-blue-400 border-b-2 border-blue-500' : 'text-gray-400'}`}>
                Summary
              </button>
            )}
            {mainTab === 'peakoffpeak' && (
              <button onClick={() => setSubTabHandler('peakoffpeak', 'summary')} className={`py-3 px-2 text-sm ${subTab.peakoffpeak === 'summary' ? 'text-blue-400 border-b-2 border-blue-500' : 'text-gray-400'}`}>
                Summary
              </button>
            )}
            {mainTab === 'profitability' && (
              <button onClick={() => setSubTabHandler('profitability', 'summary')} className={`py-3 px-2 text-sm ${subTab.profitability === 'summary' ? 'text-blue-400 border-b-2 border-blue-500' : 'text-gray-400'}`}>
                Summary
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {mainTab === 'generation' && <GenerationTab />}
        {mainTab === 'powerplant' && <PowerPlantTab />}
        {mainTab === 'outage' && <OutageTab />}
        {mainTab === 'costrecovery' && <CostRecoveryTab />}
        {mainTab === 'mod' && <MODTab />}
        {mainTab === 'peakoffpeak' && <PeakOffPeakTab />}
        {mainTab === 'profitability' && <ProfitabilityTab />}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 bg-gray-900 text-center py-6 text-gray-500 text-sm mt-8">
        <p>Maharashtra State Power Generation Company Limited (MAHAGENCO)</p>
        <p className="mt-2">Integrated Analytics Platform | Data Sources: SAP | CWS | SCADA | Coal Mines</p>
      </div>
    </div>
  );
};

export default MAHAGENCOMasterDashboard;