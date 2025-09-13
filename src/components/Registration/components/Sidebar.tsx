import { Box, List, ListItem, Typography } from "@mui/material";

const steps = [
  {
    title: "Register yourself",
    description: "Enter your basic details and wait for an OTP.",
  },
  {
    title: "Set password",
    description: "Set a strong alphanumeric password",
  },
];

export default function Sidebar({ activeStep }: { activeStep: number }) {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.backgroundGradient,
        color: "white",
        padding: 2,
        width: "100%",
      }}
    >
      <List sx={{ display: { xs: "none", md: "block" }, mt: 4 }}>
        {steps.map((step, index) => (
          <ListItem
            key={index}
            sx={{
              color: index <= activeStep ? "white" : "rgba(255, 255, 255, 0.6)",
              display: "flex",
              alignItems: "flex-start",
              gap: 4,
              flexDirection: "column",
              position: "relative",
              paddingBottom: 5,
              paddingTop: 0,
            }}
          >
            {index < steps.length - 1 && (
              <Box
                sx={{
                  position: "absolute",
                  left: 26,
                  top: 20,
                  bottom: 0,
                  width: 2,
                  backgroundColor:
                    index + 1 <= activeStep ? "#38BC3D" : "#3E3E3E",
                  zIndex: 0,
                }}
              />
            )}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                position: "relative",
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: index <= activeStep ? "#38BC3D" : "#3E3E3E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {index + 1}
              </Box>
              <Typography variant="body1">{step.title}</Typography>
            </Box>
            <Typography variant="body2" sx={{ ml: 5, mt: -4, opacity: 0.8 }}>
              {step.description}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          gap: 0,
          mt: 2
        }}
      >
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", position: "relative", }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color:
                  index <= activeStep ? "white" : "rgba(255, 255, 255, 0.6)",
                flexDirection: "column",
                paddingX: {xs: 1, sm: 5}, 
              }}
            >
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: index <= activeStep ? "#38BC3D" : "#3E3E3E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                {index + 1}
                {index < steps.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: "100%",
                      top: "50%",
                      width: {xs: "120px", sm: "165px"},
                      height: "2px",
                      backgroundColor:
                        index + 1 <= activeStep ? "#38BC3D" : "#3E3E3E",
                      transform: "translateY(-50%)",
                    }}
                  />
                )}
              </Box>
              <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
                {step.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
