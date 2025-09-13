import { Icon } from '@iconify/react/dist/iconify.js'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const stats = [
    {
      title: "Total Revenue",
      value: "15 Lakhs",
      icon: "mdi:graph-box",
      color: "#F7CECF",
      iconColor: "#952C2E",
      change: "+8% from yesterday",
    },
    {
      title: "Total Product Listed",
      value: "50",
      icon: "mdi:package-variant",
      color: "#F7E5CD",
      iconColor: "#EC860C",
      change: "+5% from yesterday",
    },
    {
      title: "Total User",
      value: "100",
      icon: "mdi:account-group",
      color: "#CDD1F7",
      iconColor: "#2F43F1",
      change: "+1.2% from yesterday",
    },
    {
      title: "New User",
      value: "8",
      icon: "mingcute:user-add-fill",
      color: "#CDE6F7",
      iconColor: "#3FA9F0",
      change: "0.5% from yesterday",
    },
    {
      title: "Transactions",
      value: "20",
      icon: "uil:transaction",
      color: "#F3E8FF",
      iconColor: "#D91577",
      change: "0.5% from yesterday",
    },
  ];
  

export default function TodaysStats() {
  return (
    <Box>
      <Box
        sx={{
          mb: 4,
          borderRadius: "12px",
          background: "#FFF",
          p: 3,
          pr: { xs: 3, lg: 8 },
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h5" component="h1" color="#05004E">
            Today&apos;s Stats
          </Typography>
          <Button
            variant="outlined"
            startIcon={<Icon icon="uil:export" width={20} height={20} />}
            sx={{
              color: "#0F3659",
              borderColor: "#0F3659",
              "&:hover": {
                backgroundColor: "rgba(15, 54, 89, 0.1)", 
                borderColor: "#0F3659",
              },
            }}
          >
            Export
          </Button>
        </Box>
        <Typography variant="body2" color="#737791" sx={{ mb: 4 }}>
          Portal Summary
        </Typography>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Box
                sx={{
                  p: 2,
                  height: "100%",
                  bgcolor: stat.color,
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    bgcolor: stat.iconColor,
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    mb: 1,
                  }}
                >
                  <Icon icon={stat.icon} width={24} height={24} />
                </Box>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    color: "#151D48",
                    fontSize: {
                      xs: "16px",
                      sm: "18px",
                      md: "20px",
                      lg: "22px",
                    },
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#425166",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "14px",
                      lg: "16px",
                    },
                  }}
                >
                  {stat.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ mt: "auto", color: "#4079ED" }}
                >
                  {stat.change}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
