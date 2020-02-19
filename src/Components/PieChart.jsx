import React from "react";
import { useAppState } from "../appContext";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

export default function _PieChart() {
  let { ritualData } = useAppState();
  const orderFreq = { "🛒": 1 };
  const foodFreq = { "🍔": 1 };

  if (ritualData) {
    ritualData.order.forEach(item => {
      orderFreq[item.merchant_name] = (orderFreq[item.merchant_name] || 0) + 1;
      item.order_item.forEach(foodItem => {
        foodFreq[foodItem.item_name] = (foodFreq[foodItem.item_name] || 0) + 1;
      });
    });
  }

  const orderFreqParsed = Object.keys(orderFreq).map(key => ({
    name: key,
    value: orderFreq[key]
  }));

  const foodFreqParsed = Object.keys(foodFreq).map(key => ({
    name: key,
    value: foodFreq[key]
  }));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ width: "100%", height: 600, display: "flex" }}>
        <h3 style={{ color: "white" }}>Restaurants</h3>
        <ResponsiveContainer aspect={1}>
          <PieChart>
            <Pie dataKey="value" data={orderFreqParsed} fill="#00A7C4" />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ width: "100%", height: 600, display: "flex" }}>
        <h3 style={{ color: "white" }}>Food</h3>
        <ResponsiveContainer aspect={1}>
          <PieChart>
            <Pie dataKey="value" data={foodFreqParsed} fill="#00A7C4" />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
