import React, { useState } from 'react';

const TableData = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');

  console.log("TableData:", data);

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // Filter the data based on search input
  const filteredData = data.filter((row) => {
    const lrNumber = row.shipmentDetails?.lr?.toLowerCase() || '';
    const consignor = row.consigneer?.consigneerName?.toLowerCase() || '';
    const consignee = row.consigneer?.consignieeName?.toLowerCase() || '';
    const query = searchQuery.toLowerCase();

    return (
      lrNumber.includes(query) ||
      consignor.includes(query) ||
      consignee.includes(query)
    );
  });

  return (
    <div className="container mx-auto p-4">
      
      {/* Search Bar */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by LR Number, Consignor or Consignee"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">LR Number</th>
            <th className="px-4 py-2 text-left">To</th>
            <th className="px-4 py-2 text-left">Payment Type</th>
            <th className="px-4 py-2 text-left">Booking Date</th>
            <th className="px-4 py-2 text-left">Consignor</th>
            <th className="px-4 py-2 text-left">Consignee</th>
            <th className="px-4 py-2 text-left">Qty</th>
            <th className="px-4 py-2 text-left">Total</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className="odd:bg-gray-50 even:bg-white">
              <td className="px-4 py-2">{row.shipmentDetails?.lr}</td>
              <td className="px-4 py-2">{row.shipmentDetails?.toBranch}</td>
              <td className="px-4 py-2">{row.shipmentDetails?.paymentType}</td>
              <td className="px-4 py-2">{new Date(row.shipmentDetails?.bookingDate).toLocaleDateString()}</td>
              <td className="px-4 py-2">{row.consigneer?.consigneerName}</td>
              <td className="px-4 py-2">{row.consigneer?.consignieeName}</td>
              <td className="px-4 py-2">{row.articles?.length}</td>
              <td className="px-4 py-2">{row.shipmentDetails?.totalCost}</td>
              <td className="px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* No results found */}
      {filteredData.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          No matching records found.
        </div>
      )}
    </div>
  );
};

export default TableData;
