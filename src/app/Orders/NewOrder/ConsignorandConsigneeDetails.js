import React from 'react';

export default function ConsignorandConsigneeDetails({ formData, handleFormDataChange }) {
  const consignor = formData.consignorDetails || {};
  const consignee = formData.consigneeDetails || {};

  const handleConsignorChange = (e) => {
    const { name, value } = e.target;
    handleFormDataChange('consignorDetails', {
      ...consignor,
      [name]: value,
    });
  };

  const handleConsigneeChange = (e) => {
    const { name, value } = e.target;
    handleFormDataChange('consigneeDetails', {
      ...consignee,
      [name]: value,
    });
  };

  return (
    <div className="p-4 flex bg-white shadow-md rounded-lg mt-4 text-gray-800">
      {/* Consignor Details Form */}
      <div >
      <h2 className='text-gray-500 text-xl font-semibold pt-4 ml-4'>Consignor Details</h2>
      <div className='p-4 grid grid-cols-1 md:grid-cols-2 gap-1'>
      <lable>ConsignorName</lable>
      <input
        type="text"
        name="consignorName"
        value={consignor.consignorName || ''}
        onChange={handleConsignorChange}
        placeholder="Consignor Name"
        className="border p-2 h-10 mb-4"
      />
      <lable>ConsignorPhone</lable>

      <input
        type="text"
        name="consignorPhone"
        value={consignor.consignorPhone || ''}
        onChange={handleConsignorChange}
        placeholder="Consignor Address"
        className="border p-2 w-full h-10 mb-4"
      />
      <lable>consignorGST_AdhaarNo</lable>

         <input
        type="text"
        name="consignorGST_Adhaar"
        value={consignor.consignorGST_Adhaar || ''}
        onChange={handleConsignorChange}
        placeholder="consignorGST_Adhaar"
        className="border p-2 w-full mb-4 h-10"
      />

      </div>
      

      </div>
      

    <div className='p-4 '>
      {/* Consignee Details Form */}
      <h2 className='text-gray-500 text-xl font-semibold ml-4'>Consignee Details</h2>
      <div className='p-4 grid grid-cols-1 md:grid-cols-2 gap-1'>
        <lable>ConsigneeName</lable>
      <input
        type="text"
        name="consigneeName"
        value={consignee.consigneeName || ''}
        onChange={handleConsigneeChange}
        placeholder="Consignee Name"
        className="border p-2 w-full mb-4 h-10"
      />
      <lable>ConsigneePhone</lable>
      <input
        type="text"
        name="consigneePhone"
        value={consignee.consigneePhone || ''}
        onChange={handleConsigneeChange}
        placeholder="consigneePhone"
        className="border p-2 w-full mb-4"
      />
      <label>consigneeGST_AdhaarNo</label>
      <input
        type="text"
        name="consigneeGST_Adhaar"
        value={consignee.consigneeGST_Adhaar || ''}
        onChange={handleConsigneeChange}
        placeholder="Consignee Address"
        className="border p-2 w-full mb-4"
      />

    </div>
      </div>
    </div>
  );
}
