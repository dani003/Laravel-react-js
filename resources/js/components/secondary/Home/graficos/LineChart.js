import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  datasets: [
    {
      label: 'Cantidad de reservas',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20, 25, 15, 23, 10, 5, 3]
    }
  ]
};

class LineChart extends Component {
  render() {
    return(
        <div>
            <h4>Reservas de la semana</h4>
            <Line ref="chart" data={data} />
          </div>
    );
  }
}

export default LineChart;
