'use client'
import React from 'react';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

export default function TopForm({ formData, handleFormDataChange }) {
  const branches = [
    'Branch A', 'Branch B', 'Branch C', 'Branch D', 'Branch E', 'Branch F',
  ];

  const shipment = formData.shipment || {};

  const handleInputChange = (field, value) => {
    handleFormDataChange('shipment', {
      ...shipment,
      [field]: value,
    });
  };

  return (
    <div>
      <div className='bg-white shadow-md rounded item-center justify-around py-4 px-2 text-black flex flex-wrap gap-4'>
        
        <div className="flex flex-col">
          <label className='text-sm py-1'>To Branch*</label>
          <Autocomplete
            className='w-60'
            freeSolo
            options={branches.filter((item) =>
              item.toLowerCase().includes((shipment.toBranch || '').toLowerCase())
            )}
            inputValue={shipment.toBranch || ''}
            onInputChange={(event, newInputValue) => {
              handleInputChange('toBranch', newInputValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: '40px',
                    padding: 0,
                  },
                  '& input': {
                    height: '20px',
                    padding: 0,
                    fontSize: '12px',
                  },
                  '& label': {
                    fontSize: '12px',
                    transform: 'translate(14px, -9px) scale(0.75)',
                  },
                }}
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label className='text-sm py-1'>Payment Type*</label>
          <select
            required
            value={shipment.paymentType || ''}
            onChange={(e) => handleInputChange('paymentType', e.target.value)}
            className="border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">-- Select --</option>
            <option value="to-pay">Prepaid</option>
            <option value="paid">Paid</option>
            <option value="billing">Billing</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className='text-sm py-1'>Offline LR</label>
          <input
            type='checkbox'
            checked={shipment.isOfflineLR || false}
            onChange={(e) => handleInputChange('isOfflineLR', e.target.checked)}
            className='h-4 w-4 my-2'
          />
        </div>

        <div className="flex flex-col">
          <label className='text-sm py-1'>Offline LR Number</label>
          <input
            type='text'
            disabled={!shipment.isOfflineLR}
            value={shipment.offlineLRNumber || ''}
            onChange={(e) => handleInputChange('offlineLRNumber', e.target.value)}
            className='border border-gray-300 h-8 p-1 text-sm rounded'
          />
        </div>

      </div>
    </div>
  );
}
