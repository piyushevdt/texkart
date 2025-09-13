import React from 'react';
import { Box, Typography, Grid, Card, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';
import { motion } from 'framer-motion'; 

interface FeatureItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(6),
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  border: '1px solid #f0f0f0',
  borderRadius: "12px",
  background: "#fff"
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const WhyChooseUs: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features: FeatureItem[] = [
    {
      id: 1,
      icon: '/images/choose1.svg',
      title: 'Helpline number',
      description: 'Call: +1234567890\n(Mon-sun: 9am - 8pm)',
    },
    {
      id: 2,
      icon: '/images/choose2.svg',
      title: 'Return within 7 days',
      description: 'of receiving your order',
    },
    {
      id: 3,
      icon: '/images/choose3.svg',
      title: '100% Original',
      description: 'guarantee for all products',
    },
    {
      id: 4,
      icon: '/images/choose4.svg',
      title: 'Complete products',
      description: '20,00,000+ products from 1200+ Brands',
    },
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            mb: 6,
            fontSize: { xs: '32px', sm: '34px', md: '36px', lg: '38px' },
            color: (theme) => theme.palette.text.disabled,
          }}
        >
          Why to choose us?
        </Typography>
      </motion.div>

      <Grid container spacing={2}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={feature.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <StyledCard elevation={1}>
                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left' }}>
                  <IconWrapper sx={{ mr: isMobile ? 0 : 3 }}>
                    <Box sx={{ position: 'relative', width: 64, height: 64 }}>
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                  </IconWrapper>
                  <Box>
                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.text.disabled, fontSize: { xs: "24px", sm: "26px", md: "28px", lg: "30px" } }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ whiteSpace: 'pre-line', color: (theme) => theme.palette.text.disabled }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </StyledCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;