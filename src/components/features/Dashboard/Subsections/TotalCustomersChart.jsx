import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Box, Typography, Select, MenuItem, Button, Avatar, Card, CardContent, Grid } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import {TotalCustomersData as data} from "../../../../utils/data";
import { Strings } from "../../../../utils/constants";


const TotalCustomersChart = () => {
  return (
    <Box sx={{ p: 3  ,width:"90%" }}>
    {/* Header Section */}
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h6" fontWeight="bold">
        {Strings.TOTAL_CUSTOMERS}
      </Typography>
      <Select size="small" defaultValue="all">
        <MenuItem value="all">All time</MenuItem>
        <MenuItem value="year">Last Year</MenuItem>
        <MenuItem value="month">Last Month</MenuItem>
      </Select>
    </Box>

    {/* Customer Count */}
    <Typography variant="h4" fontWeight="bold" mt={1}>
      68,192 {Strings.CUSTOMERS}
    </Typography>
    <Typography color="green">↑ 37.8% vs. Sep 8, 2021</Typography>

    {/* Line Chart */}
    <Box sx={{ mt: 3, height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data?.chartData}>
          <XAxis dataKey="month" stroke="#8884d8" />
          <YAxis domain={[8, 9]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="2022" stroke="#4F46E5" strokeWidth={2} />
          <Line type="monotone" dataKey="2023" stroke="#F59E0B" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </Box>

    {/* Welcome Message */}
    <Typography mt={3}>
      Welcome <b>291 customers</b> with a personal message 😎
    </Typography>

    {/* Customer Avatars */}
    <Grid container spacing={2} alignItems="center" mt={2}>
      {data.messages.customersList.map((customer) => (
        <Grid item key={customer.name}>
          <Card sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <Avatar src={customer.image} sx={{ width: 48, height: 48, mr: 1 }} />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="body2" fontWeight="bold">
                {customer.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item>
        <Button variant="contained" sx={{ borderRadius: "50%" }}>
          <ArrowForward />
        </Button>
      </Grid>
    </Grid>

    {/* Send Message Button */}
    <Box mt={2}>
      <Button variant="outlined" fullWidth>
        Send message
      </Button>
    </Box>
  </Box>
  )
}

export default TotalCustomersChart
