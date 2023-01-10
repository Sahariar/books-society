import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Saturday',
    minutes: 40 ,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Sunday',
    minutes: 30,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Monday',
    minutes: 20,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Tuesday',
    minutes: 27,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Wednesday',
    minutes: 18,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Thursday',
    minutes: 23,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Friday',
    minutes: 34,
    pv: 4300,
    amt: 2100,
  },
];

const Cate = () => {
    return (
        <div>
            <div className="chart-ar h-96 mx-auto ">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="minutes" stroke="#FFCA42" fill="#E9F3FB" />
          </AreaChart>
        </ResponsiveContainer>
      </div>  
        </div>
    );
};

export default Cate;