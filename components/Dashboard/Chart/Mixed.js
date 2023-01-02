import {
	ComposedChart,
	Line,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Scatter,
	ResponsiveContainer,
} from "recharts";
const data = [
	{
        name: 'January',
		uv: 590,
		pv: 800,
		amt: 1400,
		cnt: 490,
	},
	{
		name: 'February',
		uv: 868,
		pv: 967,
		amt: 1506,
		cnt: 590,
	},
	{
        name: 'March',
		uv: 1397,
		pv: 1098,
		amt: 989,
		cnt: 350,
	},
	{
        name: 'April',
		uv: 1480,
		pv: 1200,
		amt: 1228,
		cnt: 480,
	},
	{
        name: 'May',
		uv: 1520,
		pv: 1108,
		amt: 1100,
		cnt: 460,
	},
	{
		name: 'June',
		uv: 1400,
		pv: 680,
		amt: 1700,
		cnt: 380,
	},
];

const Mixed = () => {
	return (
		<div className="are chart-ar h-96 mx-auto">
			<ResponsiveContainer width="100%" height="100%">
				<ComposedChart
					width={500}
					height={400}
					data={data}
					margin={{
						top: 20,
						right: 20,
						bottom: 20,
						left: 20,
					}}
				>
					<CartesianGrid stroke="#F6F8FC" />
					<XAxis dataKey="name" scale="band" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Area type="monotone" dataKey="amt" fill="#FFCA42" stroke="#F6F8FC" />
					<Bar dataKey="pv" barSize={20} fill="#222222" />
					<Line type="monotone" dataKey="uv" stroke="#FFCA42" />
					<Scatter dataKey="cnt" fill="#28B8A5" />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Mixed;
