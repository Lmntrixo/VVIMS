import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Chart() {
    const data = [
        {name: 'Mon', uv: 100, pv: 2400, amt: 2400},
        {name: 'Tues', uv: 150, pv: 2400, amt: 2400},
        {name: 'Wed', uv: 90, pv: 2400, amt: 2400},
        {name: 'thur', uv: 120, pv: 2400, amt: 2400},
        {name: 'fri', uv: 175, pv: 2400, amt: 2400},
        {name: 'sat', uv: 200, pv: 2400, amt: 2400},
        {name: 'sun', uv: 300, pv: 2400, amt: 2400}
 ];
    const renderLineChart = (
        <LineChart  width={350} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      );
  return (
    renderLineChart
  )
}

export default Chart