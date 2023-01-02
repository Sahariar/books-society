import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, LineChart } from 'recharts';

const data = [
  {
    subject: 'Teachers Picks',
    A: 2,
    fullMark: 10,
  },
  {
    subject: ' Most Popular',
    A: 8,

    fullMark: 10,
  },
  {
    subject: ' Personal Growth',
    A: 6,

    fullMark: 10,
  },
  {
    subject: 'Lifestyle',
    A: 9,
    fullMark: 10,
  },
  {
    subject: ' Health & Fitness',
    A: 8,
    fullMark: 10,
  },
  {
    subject: 'Technology',
    A:5,
    fullMark: 10,
  },
  {
    subject: 'Science & Research',
    A:5,
    fullMark: 10,
  },
];

const Books = () => {
    return (
        <div className="h-96 mx-auto w-96 chart-ar ">
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#268dd6" fill="#FFCA42" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Books;