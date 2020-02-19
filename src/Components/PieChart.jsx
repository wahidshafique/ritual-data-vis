import React from "react";
import { useAppState } from "../appContext";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

export default function _PieChart() {
  const { ritualData } = useAppState();
  const orderFreq = {};
  ritualData.order.forEach(item => {
    orderFreq[item.merchant_name] = (orderFreq[item.merchant_name] || 0) + 1;
  });

  const orderFreqParsed = Object.keys(orderFreq).map(key => ({
    name: key,
    value: orderFreq[key]
  }));

  //console.log(ritualData);
  console.log("rr", orderFreq);
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer aspect={1}>
        <PieChart>
          <Pie dataKey="value" data={orderFreqParsed} fill="#00A7C4" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
