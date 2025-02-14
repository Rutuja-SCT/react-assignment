import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import { ProductViewsData } from "../../../../utils/constants/data";

const ProductViewsChart = () => {
  return (
    <Box sx={{ p: 3  ,width:"100%", backgroundColor:"",borderRadius:"30px",boxShadow: 5}}>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">
          Product views
        </Typography>
        <Select size="small" defaultValue="all">
          <MenuItem value="all">All time</MenuItem>
          <MenuItem value="year">Last Year</MenuItem>
          <MenuItem value="month">Last Month</MenuItem>
        </Select>
      </Box>

      {/* Bar Chart */}
      <Box sx={{ mt: 3, height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ProductViewsData.data}>
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis domain={[8, 9]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="LifetimeValue" fill="#6366F1" barSize={40} />
            <Bar dataKey="CustomerCost" fill="#FBBF24" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ProductViewsChart
