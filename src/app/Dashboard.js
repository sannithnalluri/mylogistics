import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🚛 Logistics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Shipment Overview */}
        <Card title="Total Shipments" value="1,245" />
        <Card title="In Transit" value="234" />
        <Card title="Delivered" value="890" />
        <Card title="Delayed" value="36" />
        <Card title="Cancelled / Returned" value="85" />

        {/* Warehouse Stats */}
        <Card title="Inventory Items" value="10,000+" />

        {/* Fleet Management */}
        <Card title="Active Vehicles" value="58" />
        <Card title="Drivers Assigned" value="42" />

        {/* Delivery Performance */}

        {/* Finance & Costing */}
        <Card title="Revenue" value="$24,300" />
        <Card title="Top Carrier Cost" value="$5,000" />

        {/* Notifications */}
        <Card title="Low Stock Warnings" value="5" />
        <Card title="Compliance Issues" value="2" />
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
    <h2 className="text-lg font-semibold text-gray-700 mb-2">{title}</h2>
    <p className="text-2xl font-bold text-blue-600">{value}</p>
  </div>
);

export default Dashboard;