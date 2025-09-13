import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import OrderList from './OrderList';
import OrderDetails from './OrderDetails';
import { OrderType, OrderDetailsType } from './types';

const ordersData: OrderType[] = [
  { 
    id: '0221', 
    invoiceOrCompany: 'Invoice Number', 
    type: 'invoice',
    productCode: '#234052', 
    productName: 'Cotton Yarn', 
    purchaseDate: '27 June 2024', 
    status: 'Pending' 
  },
  { 
    id: '1544', 
    invoiceOrCompany: 'Company Name', 
    type: 'company',
    productCode: '#234052', 
    productName: 'Swiss Yarn', 
    purchaseDate: '27 June 2024', 
    status: 'Dispatched' 
  },
  { 
    id: '4544', 
    invoiceOrCompany: 'Company Name', 
    type: 'company',
    productCode: '#234052', 
    productName: 'Polyester Thread', 
    purchaseDate: '27 June 2024', 
    status: 'Delivered' 
  },
  { 
    id: 'Charlie', 
    invoiceOrCompany: 'Company Name', 
    type: 'company',
    productCode: '#234052', 
    productName: 'Swiss Yarn', 
    purchaseDate: '27 June 2024', 
    status: 'Dispatched' 
  },
  { 
    id: 'Jacob', 
    invoiceOrCompany: 'Company Name', 
    type: 'company',
    productCode: '#234052', 
    productName: 'Polyester Thread', 
    purchaseDate: '27 June 2024', 
    status: 'Delivered' 
  },
];

const orderDetailsData: OrderDetailsType = {
  id: 'Jhon',
  status: 'Delivered',
  deliveryDate: 'Tue, 4 Feb 2025',
  customerName: 'Jhon',
  productCode: '#234052',
  productName: 'Cotton Yarn',
  purchaseDate: '24 Jan 2025',
  deliveryAddress: {
    name: 'Subham',
    phone: '+911234567890',
    address: 'No, Sandhu villa, near Krishna tower, Green valley, Phagwara - 144401'
  },
  payment: {
    total: 20000,
    method: 'Pay on delivery'
  },
  items: [
    {
      name: 'Cotton Yarn',
      quantity: 50,
      unitPrice: 400,
      subtotal: 20000
    }
  ],
  productImage: '/images/Category4.svg'
};

const Order: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<OrderDetailsType | null>(null);

  const handleOrderClick = () => {
    setSelectedOrder(orderDetailsData);
  };

  const handleBackClick = () => {
    setSelectedOrder(null);
  };

  return (
    <Box >
       <Typography sx={{color: "#000000", px: 2, fontSize: "24px"}}>ORDERS</Typography>
      {selectedOrder ? (
        <OrderDetails order={selectedOrder} onBackClick={handleBackClick} />
      ) : (
        <OrderList orders={ordersData} onOrderClick={handleOrderClick} />
      )}
    </Box>
  );
};

export default Order;