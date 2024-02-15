import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

function Home() {
  const data = [
    { name: "IgnAite", uv: 500, pv: 3000, amt: 2210 },
    { name: "Infosys", uv: 500, pv: 2350, amt: 2210 },
    { name: "Reliance", uv: 500, pv: 2100, amt: 2290 },
    { name: "Amdocs", uv: 500, pv: 540, amt: 2000 },
    { name: "Tata Motors", uv: 500, pv: 1100, amt: 2181 },
    { name: "Nykaa", uv: 500, pv: 860, amt: 2500 },
    { name: "Lenskart", uv: 500, pv: 510, amt: 2100 },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Top Company</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>IgnAite</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Funds</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>300 Cr.</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Profit Rate</h3>
            <BsPeopleFill className='card_icon'/> 
            {/* Icon need to be changed */}
          </div>
          <h1>42%</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Shareholders</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>15</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="pv" nameKey="name" fill="#8884d8" label />
            {/* <Pie data={data} dataKey="uv" nameKey="name" fill="#82ca9d" label /> */}
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
