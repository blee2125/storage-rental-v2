import React from "react";
import { Chart } from 'react-chartjs-2'
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import DateFunc from "../../functions/DateFunc";

function LeasePieChart(props) {
  const leases = useSelector((state) => state.leaseState.leaseArray)
  const units = useSelector((state) => state.storageUnitState.storageUnitArray)

  const calcLeased = () => {
    const dataArray = []
    let count = 0
    leases.forEach(l => {
      const pcf = DateFunc.returnPastCurrentFuture(l.startDate, l.endDate)
      if (pcf === 'Current') {
        count = count + 1
      }
    })
    dataArray.push(count)
    dataArray.push(units.length - count)
    return dataArray
  }

  const calcPercent = () => {
    const array = calcLeased()
    const data = array.map(a => {
      return Number(a / units.length *100).toFixed(1)
    })
    return data
  }

  const graphData = {
    labels: [
      `Leased ${calcPercent()[0]}%`,
      `Available ${calcPercent()[1]}%`
    ],
    datasets: [{
      label: 'Units',
      data: calcLeased(),
      backgroundColor: [
        'lightgreen',
        'pink'
      ],
      hoverOffset: 4
    }]
  };

  const plugins2 = [
    {
      afterDraw: function (chart) {
        if (chart.config._config.data.datasets[0].data.filter(d => d>0).length < 1) {
          let ctx = chart.ctx;
          let width = chart.width;
          let height = chart.height;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = "30px Arial";
          ctx.fillText("No data to display", width / 2, height / 2);
          ctx.restore();
        }
      },
    },
  ];

  return (
    <>
      <Card bg='light' border="secondary" style={{ width: '400px', padding: '25px', margin: "25px"}}>
        <Chart
          type="pie"
          data={graphData}
          plugins={plugins2}
          options={{
            plugins: {
              title:{
                display:true,
                text:`Current Lease/Unit Percentage`,
                fontSize:20
              },
              legend:{
                display:true,
                position:'bottom'
              }
            }
          }}
        />
      </Card>
    </>
  )
}

export default (LeasePieChart)