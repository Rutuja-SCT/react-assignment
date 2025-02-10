import React from 'react';
import { Box } from '@mui/material';
import TotalCustomersChart from './Subsections/TotalCustomersChart';
import ProductViewsChart from './Subsections/ProductViewsChart';
import ProTips from './Subsections/ProTips';
import NewCustomer from './Subsections/NewCustomer';
import Comments from './Subsections/Comments';
import PopularProducts from './Subsections/PopularProducts';

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on medium and larger
        width: '100%',
        gap: 2,
      }}
    >
      {/* Left section containing the first 3 components */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: { xs: '100%', md: '60%' }, // Full width on mobile, 60% on medium and larger
        }}
      >
        <Box sx={{ width: '100%' }}>
          <TotalCustomersChart />
        </Box>

        <Box sx={{ width: '100%' }}>
          <ProductViewsChart />
        </Box>

        <Box sx={{ width: '100%' }}>
          <ProTips />
        </Box>
      </Box>

      {/* Right section with the NewCustomer component */}
      <Box
        sx={{
          width: { xs: '100%', md: '40%' }, // Full width on mobile, 40% on medium and larger
        }}
      >
        <NewCustomer />
        <Comments />
        <PopularProducts />
      </Box>
    </Box>
  );
};

export default Dashboard;
