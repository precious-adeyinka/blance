import React, { PureComponent } from 'react';

// redux
import {connect} from 'react-redux'

// Charts
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

let chartData = [
  { name: 'Male', value: 200 },
  { name: 'Females', value: 300 },
  { name: 'Total', value: 500 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

const ActivityIndex = (props) => {
  // store
  const {peoples} = props;

  const dataProcessing = () => {
    let maleCount = peoples.filter(people => people.gender.toLowerCase() === 'male').length;
    let femaleCount = peoples.filter(people => people.gender.toLowerCase() === 'female').length;
    let totalCount = maleCount + femaleCount;
    let newChartData = [
      { name: 'Male', value: maleCount/100 },
      { name: 'Females', value: femaleCount/100 },
      { name: 'Total', value: totalCount/100 },
    ];
    chartData = newChartData;
  }

  dataProcessing();

  return (
    <section className="h-full w-full flex flex-col items-start justify-start space-y-10 bg-[#fafafa] p-5">
        <div>
           <h1 className="text-2xl text-black font-medium">Activity</h1>
        </div>

        {/* Stats */}
        <div className="h-96 w-full rounded-md shadow-lg bg-white flex flex-col items-center justify-center p-5">
          {/* Chart */}
          <div className="h-full w-full flex items-center justify-center">
            <Chart />
          </div>
          {/* Keys */}
          <div className="mt-5 h-12 w-full flex items-center justify-start space-x-3">
            {/* Male key */}
            <div className="h-full w-full flex items-center justify-start space-x-2">
              <div className="h-2 w-4 bg-[#00c49f]"></div>
              <span className="text-gray-500">Male</span>
            </div>
            {/* Female key */}
            <div className="h-full w-full flex items-center justify-start space-x-2">
              <div className="h-2 w-4 bg-[#0088fe]"></div>
              <span className="text-gray-500">Female</span>
            </div>
            {/* Total key */}
            <div className="h-full w-full flex items-center justify-start space-x-2">
              <div className="h-2 w-4 bg-[#ffbb28]"></div>
              <span className="text-gray-500">Total</span>
            </div>
          </div>
        </div>
    </section>
  )
}


const MapStateToProps = state => ({peoples: state.people});
const MapDispatchToProps = null;

export default connect(MapStateToProps, MapDispatchToProps)(ActivityIndex);