import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Box, Typography, Paper } from "@mui/material";
import { NewCustomerData } from "../../../../utils/data";


const NewCustomer = () => {
  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="h6" fontWeight="bold">
        New customer
      </Typography>

      <ResponsiveContainer width="90%" height={250}>
        <PieChart>
          <Pie
            data={NewCustomerData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {NewCustomerData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>

          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  )
}
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Paper sx={{ p: 1.5, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="body2" fontWeight="bold">
            {payload[0].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {payload[0].value.toLocaleString()} customers
          </Typography>
        </Paper>
      );
    }
    return null;
  };
export default NewCustomer
