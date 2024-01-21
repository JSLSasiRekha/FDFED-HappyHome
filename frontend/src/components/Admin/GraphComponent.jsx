import React from 'react';
import { useState } from "react";
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [{
      label: 'Dataset 1',
      data: [10, 20, 30, 40],
      backgroundColor: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'],
    }],
  };
  
  const options = {
    title: 'Bar Chart',
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };


const GraphComponent = () => {
  // Sample data (replace with your actual data)
    const [data, setData] = useState({
        labels: ['A', 'B', 'C', 'D'],
        datasets: [
        {
            label: 'Dataset 1',
            data: [10, 20, 30, 40],
            backgroundColor: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'],
        },
        ],
    });

  return (
    <div>
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
};

export default GraphComponent;
