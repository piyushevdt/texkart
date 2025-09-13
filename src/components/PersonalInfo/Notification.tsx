import React from 'react';
import { 
  Typography, 
  Paper, 
  Container, 
  Stack,
  styled
} from '@mui/material';

interface NotificationData {
  id: string;
  title: string;
  productName: string;
  message: string;
}

const NotificationCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "20px",
  border: `1px solid #F7233C`,
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[3],
  },
  marginBottom: theme.spacing(2),
  background: "#FFF",
  color: "#383838",
}));

const Notification: React.FC = () => {
  const notifications: NotificationData[] = [
    {
      id: '1',
      title: 'New Bulk Discount',
      productName: 'Premium Headphones',
      message: 'Enjoy special bulk pricing for a limited time! Order now and save on your next purchase.'
    },
    {
      id: '2',
      title: 'New Bulk Discount',
      productName: 'Wireless Chargers',
      message: 'Enjoy special bulk pricing for a limited time! Order now and save on your next purchase.'
    },
    {
      id: '3',
      title: 'New Bulk Discount',
      productName: 'Smart Watches',
      message: 'Enjoy special bulk pricing for a limited time! Order now and save on your next purchase.'
    },
    {
      id: '4',
      title: 'New Bulk Discount',
      productName: 'Bluetooth Speakers',
      message: 'Enjoy special bulk pricing for a limited time! Order now and save on your next purchase.'
    },
    {
      id: '5',
      title: 'New Bulk Discount',
      productName: 'Power Banks',
      message: 'Enjoy special bulk pricing for a limited time! Order now and save on your next purchase.'
    }
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography sx={{color: "#000000",  fontSize: "24px", mb: 2}}>Notification</Typography>
      
      <Stack spacing={2}>
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} elevation={1}>
            <Typography 
              variant="body2" 
              sx={{ fontWeight: 800, mb: 0.5 }}
            >
              {notification.title}
            </Typography>
            <Typography variant="body2" >
              Bulk discount alert on {notification.productName}
            </Typography>
            <Typography variant="body2" >
              {notification.message}
            </Typography>
          </NotificationCard>
        ))}
      </Stack>
    </Container>
  );
};

export default Notification;