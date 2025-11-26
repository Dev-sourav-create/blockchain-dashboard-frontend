import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
export const Piechart = () => {
  return (
    <div className="h-52">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={[
              { name: "Bitcoin", value: 45 },
              { name: "Ethereum", value: 30 },
              { name: "Others", value: 25 },
            ]}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={70}
            label
          >
            <Cell fill="#10b981" />
            <Cell fill="#3b82f6" />
            <Cell fill="#f97316" />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
