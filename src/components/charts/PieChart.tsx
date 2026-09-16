"use client";

import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export interface PieChartProps {
  series: any[];
  options: any;
}

const PieChart: React.FC<PieChartProps> = ({ series, options }) => {
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
