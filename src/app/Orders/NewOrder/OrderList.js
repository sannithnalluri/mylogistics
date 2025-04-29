import React from 'react';
import { useState } from 'react';

export default function OrderList({data,handleDelete}) {      
  return (
    <div>
        <div className='bg-white shadow-md rounded item-start justify-around py-4 px-2 text-black flex flex-col mt-2'>
      

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='px-4 py-2 text-left text-sm font-medium text-gray-700'>S.No</th>
              <th className='px-4 py-2 text-left text-sm font-medium text-gray-700'>ArticleName</th>
              <th className='px-4 py-2 text-left text-sm font-medium text-gray-700'>Quantity</th>
              <th className='px-4 py-2 text-left text-sm font-medium text-gray-700'>Total Weight</th>
              <th className='px-4 py-2 text-left text-sm font-medium text-gray-700'>Total Freight</th>
              <th className='px-4 py-2 text-left text-sm font-medium text-gray-700'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className='px-4 py-2'>{index + 1}</td>
                <td className='px-4 py-2'>{item.articleName}</td>
                <td className='px-4 py-2'>{item.noOfArticles}</td>
                <td className='px-4 py-2'>{item.netWeight}</td>
                <td className='px-4 py-2'>{item.freight}</td>
                <td className='px-4 py-2 flex gap-2'>
            
                  <button
                    className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      
    </div>
  )
}
