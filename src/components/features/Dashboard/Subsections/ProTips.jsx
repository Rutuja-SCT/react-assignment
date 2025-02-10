import React from "react";
import { Box, Typography, Chip, Avatar, Grid } from "@mui/material";
import { ProTipsData } from "../../../../utils/data";


const ProTips = () => {
  return (
    <Box sx={{ p: 3,width:"90%"  }}>
      {/* Section Title */}
      <Typography variant="h6" fontWeight="bold">
        Pro tips
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Need some ideas for the next product?
      </Typography>

      {/* Tips List */}
      <Grid container spacing={2}>
        {ProTipsData.map((tip, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box display="flex" alignItems="center" gap={2}>
              {/* Icon */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  bgcolor: "#f5f5f5"
                }}
              >
                {tip.icon}
              </Box>

              {/* Content */}
              <Box>
                <Typography fontWeight="bold">{tip.title}</Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  {/* Badge */}
                  {tip.badge && (
                    <Chip
                      label={tip.badge.label}
                      color={tip.badge.color}
                      size="small"
                      sx={{ fontSize: 12 }}
                    />
                  )}

                  {/* Date */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      bgcolor: "#f5f5f5",
                      px: 1,
                      py: 0.5,
                      borderRadius: 1
                    }}
                  >
                    <Avatar src={tip.userAvatar} sx={{ width: 18, height: 18 }} />
                    <Typography fontWeight="bold" sx={{color:"primary.main",background:"transparent"}}>{tip.date}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProTips
