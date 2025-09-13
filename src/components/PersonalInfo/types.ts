export interface OrderType {
    id: string;
    invoiceOrCompany: string;
    type: 'invoice' | 'company';
    productCode: string;
    productName: string;
    purchaseDate: string;
    status: 'Pending' | 'Dispatched' | 'Delivered';
  }
  
  export interface OrderDetailsType {
    id: string;
    status: 'Pending' | 'Dispatched' | 'Delivered';
    deliveryDate: string;
    customerName: string;
    productCode: string;
    productName: string;
    purchaseDate: string;
    deliveryAddress: {
      name: string;
      phone: string;
      address: string;
    };
    payment: {
      total: number;
      method: string;
    };
    items: {
      name: string;
      quantity: number;
      unitPrice: number;
      subtotal: number;
    }[];
    productImage?: string;
  }