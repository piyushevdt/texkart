import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Box, Typography, Rating, Paper } from "@mui/material";
import { motion } from "framer-motion";
import testimonials from "./HomeData/OurBuyersData";

const TestimonialTab = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  cursor: "pointer",
  transition: "all 0.3s ease",
  borderRadius: "8px",
  border: "1px solid #F2F2F2",
  boxShadow: isActive ? "none" : theme.shadows[3],
  backgroundColor: theme.palette.background.default,
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
  },
}));

const TestimonialContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "8px",
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[3],
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100%",
}));

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const OurBuyers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Box mt={6}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Typography
          variant="h1"
          sx={{
            color: (theme) => theme.palette.text.secondary,
            fontSize: { xs: "28px", sm: "30px", md: "34px", lg: "36px" },
          }}
        >
          What Our Buyers have to say
        </Typography>
      </motion.div>

      <Box className="flex flex-col md:flex-row gap-6 p-4 max-w-6xl mx-auto" mt={2}>
        <Box className="w-full md:w-2/5 space-y-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              custom={index}
              style={{
                marginBottom: index === testimonials.length - 1 ? "0px" : "24px",
              }}
            >
              <TestimonialTab
                onClick={() => handleTabClick(index)}
                isActive={activeTab === index}
                elevation={activeTab === index ? 1 : 3}
              >
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16"
                />
                <Box className="ml-4" ml={2}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                        lg: "18px",
                      },
                      fontWeight: 400,
                      color: "#000000",
                    }}
                  >
                    {testimonial.name} - {testimonial.role}
                  </Typography>
                </Box>
              </TestimonialTab>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={testimonials.length}
          className="w-full md:w-3/5 flex"
        >
          <TestimonialContent>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "24px", lg: "26px" },
                fontWeight: 400,
                color: (theme) => theme.palette.text.disabled,
                mb: 2,
              }}
            >
              {testimonials[activeTab].testimonialText[0]}
            </Typography>

            <Rating
              value={testimonials[activeTab].rating}
              readOnly
              className="mb-4"
              size="large"
            />

            {testimonials[activeTab].testimonialText.slice(1).map((paragraph, idx) => (
              <Typography
                key={idx}
                variant="body2"
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "18px" },
                  fontWeight: 400,
                  color: (theme) => theme.palette.text.disabled,
                  mt: 2,
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </TestimonialContent>
        </motion.div>
      </Box>
    </Box>
  );
};

export default OurBuyers;