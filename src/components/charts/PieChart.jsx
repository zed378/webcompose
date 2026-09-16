"use client";

import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = (props) => {
  const { series, options } = props;

  return (
    <Chart
      options={options}
      type="pie"
      width="100%"
      height="100%"
      series={series}
    />
  );
};

export default PieChart;
