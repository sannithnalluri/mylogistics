'use client'
import React, { useEffect, useState } from 'react';
import TableData from './DisplayData'

export default function page() {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Example of fetching data from the backend
    const fetchOrderData = async () => {
      const response = await fetch('http://localhost:5000/all_order/all_order-details'); // API endpoint for orders
      const data = await response.json();
      console.log("Order Data:", data);
      setOrderData(data);
    };

    fetchOrderData();
  }, []);

  if (!orderData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='flex justify-center items-center'>
        <TableData data={orderData}/>
      </div>
    </div>
  )
}
