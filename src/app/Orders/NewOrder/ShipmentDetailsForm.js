import React, { useState } from 'react';

export default function ShipmentDetailsForm({ formData, handleFormDataChange,handlesetData }) {
  const [shipmentDetails, setShipmentDetails] = useState({
    shipmentType: '',
    articleName: '',
    noOfArticles: '',
    freight: '',
    uh: '',
    lh: '',
    grossWeight: '',
    netWeight: '',
  });

  const handleShipmentChange = (e) => {
    const { name, value } = e.target;
    setShipmentDetails((prev) => {
      const updated = { ...prev, [name]: value };
      handleFormDataChange('shipmentDetails', updated);
      return updated;
    });
  };

  // ✅ New handlers for dropdowns
  const handleShipmentTypeChange = (e) => {
    const value = e.target.value;
    setShipmentDetails((prev) => {
      const updated = { ...prev, shipmentType: value };
      handleFormDataChange('shipmentDetails', updated);
      return updated;
    });
  };

  const handleArticleNameChange = (e) => {
    const value = e.target.value;
    setShipmentDetails((prev) => {
      const updated = { ...prev, articleName: value };
      handleFormDataChange('shipmentDetails', updated);
      return updated;
    });
  };

  const handleAddArticle = () => {
    handlesetData((prevData) => [...prevData, shipmentDetails]);
    setShipmentDetails({
      id: Math.random(), // Generate a random ID for the new shipment
      shipmentType: '',
      articleName: '',
      noOfArticles: '',    
      byQuantity: '',
      uh: '',
      netWeight: '',
      freight: '',
      lh: '',
      grossWeight: '',    
    })
  };

  return (
    <div className='bg-white shadow-md rounded item-start justify-around py-4 px-2 text-black flex flex-col mt-2'>
      <div className='flex flex-col md:flex-row'>
        {/* Left side */}
        <div className='flex flex-col grid grid-cols-2 px-4'>
          <label className='text-sm py-2'>Shipment Type*</label>
          <select
            value={shipmentDetails.shipmentType}
            onChange={handleShipmentTypeChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">-- Select --</option>
            <option value="By Quantity">By Quantity</option>
            <option value="By Articles">By Articles</option>
          </select>

          <label className='text-sm py-2'>No of Articles*</label>
          <input  
            value={shipmentDetails.noOfArticles}
            onChange={handleShipmentChange}
            name='noOfArticles'
            type='number'
            className='border border-gray-300 h-8' 
          />

          <label className='text-sm py-2'>UH</label>
          <input
            value={shipmentDetails.uh}
            onChange={handleShipmentChange}
            name='uh'
            type='text'
            className='border border-gray-300 h-8'
          />

          <label className='text-sm py-2'>Net Weight</label>
          <input
            value={shipmentDetails.netWeight}
            onChange={handleShipmentChange}
            name='netWeight'
            type='text'
            className='border border-gray-300 h-8'
          />
        </div>

        {/* Right side */}
        <div className='flex flex-col grid grid-cols-2 px-4'>
          <label className='text-sm py-2'>Article Name</label>
          <select
            value={shipmentDetails.articleName}
            onChange={handleArticleNameChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">-- Select --</option>
            <option value="PolyBag">PolyBag</option>
            <option value="Cotton Box">Cotton Box</option>
            <option value="Rolls">Rolls</option>
          </select>

          <label className='text-sm py-2'>Freight*</label>
          <input  
            value={shipmentDetails.freight}
            onChange={handleShipmentChange}
            name='freight'
            type='text'
            className='border border-gray-300 h-8' 
          />

          <label className='text-sm py-2'>LH</label>
          <input
            value={shipmentDetails.lh}
            onChange={handleShipmentChange}
            name='lh'
            type='text'
            className='border border-gray-300 h-8'
          />

          <label className='text-sm py-2'>Gross Weight</label>
          <input
            value={shipmentDetails.grossWeight}
            onChange={handleShipmentChange}
            name='grossWeight'
            type='text'
            className='border border-gray-300 h-8'
          />
        </div>
      </div>

      <button 
        onClick={handleAddArticle}
        className='bg-blue-500 text-white px-4 py-2 rounded-md ml-4 mt-4 self-center'
      >
        Add Article
      </button>
    </div>
  );
}
