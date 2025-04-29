'use client'
import React, { useState } from 'react';

const branchReportsData = {
  totalOrders: 150,
  completedOrders: 120,
  pendingOrders: 30,
  totalPayments: 20000,
  totalDispatchCost: 5000,
  totalHamaliCost: 2000,
  totalDiscount: 1000,
  orders: [
    { orderId: 'ORD12345', fromBranch: 'Mumbai', toBranch: 'Delhi', dispatchCost: 200, hamaliCost: 50, paymentStatus: 'Paid', status: 'Completed' },
    { orderId: 'ORD12346', fromBranch: 'Delhi', toBranch: 'Chennai', dispatchCost: 300, hamaliCost: 75, paymentStatus: 'Pending', status: 'Pending' },
    { orderId: 'ORD12347', fromBranch: 'Mumbai', toBranch: 'Bangalore', dispatchCost: 400, hamaliCost: 100, paymentStatus: 'Paid', status: 'Completed' },
    // More orders...
  ],
};

export default function BranchReport() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter orders based on the search query (order ID or branch)
  const filteredOrders = branchReportsData.orders.filter(
    (order) =>
      order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.fromBranch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.toBranch.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Branch Activity Report</h1>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
          <p className="text-2xl font-bold text-gray-800">{branchReportsData.totalOrders}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700">Completed Orders</h3>
          <p className="text-2xl font-bold text-gray-800">{branchReportsData.completedOrders}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700">Pending Orders</h3>
          <p className="text-2xl font-bold text-gray-800">{branchReportsData.pendingOrders}</p>
        </div>
      </div>

      {/* Payment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Payments ($)</h3>
          <p className="text-2xl font-bold text-gray-800">{branchReportsData.totalPayments}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Dispatch Cost ($)</h3>
          <p className="text-2xl font-bold text-gray-800">{branchReportsData.totalDispatchCost}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Hamali Cost ($)</h3>
          <p className="text-2xl font-bold text-gray-800">{branchReportsData.totalHamaliCost}</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by Order ID or Branch..."
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Orders</h2>
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border text-left">Order ID</th>
              <th className="px-4 py-2 border text-left">From Branch</th>
              <th className="px-4 py-2 border text-left">To Branch</th>
              <th className="px-4 py-2 border text-left">Dispatch Cost</th>
              <th className="px-4 py-2 border text-left">Hamali Cost</th>
              <th className="px-4 py-2 border text-left">Payment Status</th>
              <th className="px-4 py-2 border text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.orderId}>
                  <td className="px-4 py-2 border">{order.orderId}</td>
                  <td className="px-4 py-2 border">{order.fromBranch}</td>
                  <td className="px-4 py-2 border">{order.toBranch}</td>
                  <td className="px-4 py-2 border">{order.dispatchCost}</td>
                  <td className="px-4 py-2 border">{order.hamaliCost}</td>
                  <td className="px-4 py-2 border">{order.paymentStatus}</td>
                  <td className="px-4 py-2 border">{order.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-2 text-center">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
