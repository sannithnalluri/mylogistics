'use client'
import React, { useState } from 'react';
import OrderSummaryCard from './OrderSummaryCart';
import TopForm from './TopForm';
import ConsignorandConsigneeDetails from './ConsignorandConsigneeDetails';
import ShipmentDetailsForm from './ShipmentDetailsForm';
import OrderList from './OrderList';

export default function Page() {

  const [data, setOrderData] = useState([]);

  const handlesetData = (newData) => {
    setOrderData(newData);
  }
  const handleDeleteOrder = (id) => {
    setOrderData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const [formData, setFormData] = useState({
    consignorDetails: {
    consignorName: '',
    consignorPhone: '',
    consignorGst_AdhaarNo: '',
     },
    consigneeDetails: {  
    consigneeName: '',
    consigneePhone: '',
    consigneeGst_AdhaarNo: '',
    },
    shipmentDetails: {},
    shipment: {},
    totalExpense: {},
  });

  console.log("Form Data", formData);

  const handleFormDataChange = (formName, data) => {
    setFormData(prev => ({
      ...prev,
      [formName]: data
    }));
  };

  const resetFormData = () => {
    setFormData({
      consignorDetails: {},
      consigneeDetails: {},
      shipmentDetails: {},
      shipment: {},
      totalExpense: {},
    });
    setOrderData([]); // If you also want to clear order list after booking
  };

  

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-3/4'>
        <TopForm formData={formData} handleFormDataChange={handleFormDataChange} />
        <ConsignorandConsigneeDetails formData={formData} handleFormDataChange={handleFormDataChange} />
        <ShipmentDetailsForm formData={formData} handleFormDataChange={handleFormDataChange}  handlesetData={handlesetData}/>
        <OrderList formData={formData} handleFormDataChange={handleFormDataChange} data={data}  handleDelete={handleDeleteOrder} />
      </div>

      {/* Sidebar/Extra Card */}
      <div className='p-6 w-full md:w-1/4 mt-4'>
        <OrderSummaryCard data={data} formData={formData} resetFormData={resetFormData} />
        
      </div>
    </div>
  );
}
