import React from 'react';
import Chart from 'react-apexcharts';

const options = {
  labels: ['Income', 'Expense'],
  colors: ['#21BF73', '#FD5E53'],
  chart: {
    width: '50px',
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      labels: {
        show: false,
      },
    },
  },
  fill: {
    colors: ['#21BF73', '#FD5E53'],
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
    stytle: {
      fontsize: '12px',
      fontFamily: undefined,
      backgroundColor: '#000000',
    },
  },
};

const TransactionChart = ({ expense = 100, income = 100 }) => {
  return (
    <Chart
      options={options}
      series={[income, expense]}
      type="pie"
      width={'100%'}
      height={'100%'}
    />
  );
};

export default TransactionChart;
