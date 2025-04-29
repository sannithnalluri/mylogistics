import React, {useState, useMemo } from 'react';
import formatData from './Dataformat';

const OrderSummaryCard = ({ data ,formData,resetFormData}) => {
    const [disabledbutton,setDisablebutton] = useState(false);
    const [loading, setLoading] = useState(false);

    const [extracost, setExtracost] = useState({
        withPassCharges: '0',
        transitCharges: '0',
        pickupCharges: '0',
        doorDelivery: '0',
        ewayBill: '',
        invoice: '',
        goodsValue: '',
        totalGST: '0',
    });

    const summary = useMemo(() => {
        const totalFreight = data.reduce((acc, item) => acc + parseFloat(item.freight || 0), 0);
        const totalhamaliL = data.reduce((acc, item) => acc + parseFloat(item.lh || 0), 0);
        const totalhamaliU = data.reduce((acc, item) => acc + parseFloat(item.uh || 0), 0);
        const totalWeight = data.reduce((acc, item) => acc + parseFloat(item.netWeight || 0), 0);
        const totalQuantity = data.reduce((acc, item) => acc + parseFloat(item.noOfArticles || 0), 0);
        const LRCharges = 20; // static LR charges
        const extraCharges = 
            parseFloat(extracost.withPassCharges || 0) +
            parseFloat(extracost.transitCharges || 0) +
            parseFloat(extracost.pickupCharges || 0) +
            parseFloat(extracost.doorDelivery || 0) +
            parseFloat(extracost.totalGST || 0);

        const totalCost = totalFreight + totalhamaliL + totalhamaliU + LRCharges + extraCharges;

        return {
            totalFreight,
            totalhamaliL,
            totalhamaliU,
            totalCost,
            totalQuantity,
            totalWeight
        };
    }, [data, extracost]); // recalculates when either data or extracost changes

    const handleChange = (e) => {
        const { name, value } = e.target;

        setExtracost((prevInputs) => {
            const updatedInputs = {
                ...prevInputs,
                [name]: value,
            };           
            return updatedInputs;
        });
    };

   
    
    const BookShipment = async () => {
       const formattedData = formatData({formData,extracost,summary,data});

        try {
            setDisablebutton(true);
            setLoading(true);
          const response = await fetch('https://logisticsapi-lk2p.onrender.com/order/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formattedData }),
          });
    
          if (!response.ok) {
            throw new Error('Failed to book shipment');
          }
    
          const result = await response.json();
          console.log('Shipment booked:', result);
          alert('Shipment booked successfully!');
          resetFormData(); // Reset the form data after booking
          console.log('Booking shipment with data:', formData);
        } catch (error) {
         
          console.error('Error booking shipment:', error);
          alert('Failed to book shipment. Please try again.');
        }
        finally{
            setDisablebutton(false);
            setLoading(false)
        }
      }

    return (<>
    
        <div className='bg-white shadow-lg rounded-lg p-4 w-full max-w-md mt-4 text-gray-800'>
            <h2 className='text-xl font-semibold mb-4 border-b pb-2'>Order Summary</h2>

            {/* Predefined Fields */}
            <div className='space-y-2 mb-4'>
                <div className='flex justify-between'>
                    <span>Freight</span>
                    <span>{summary.totalFreight.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Hamali - L</span>
                    <span>{summary.totalhamaliL.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Hamali - U</span>
                    <span>{summary.totalhamaliU.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                    <span>LR Charges</span>
                    <span>{20}</span> {/* Static */}
                </div>
                <div className='flex justify-between'>
                    <span>Total Quantity</span>
                    <span>{summary.totalQuantity}</span> {/* Static */}
                </div>
            </div>

            {/* Editable Input Fields */}
            <div className='grid grid-cols-1 gap-3'>
                {Object.entries(extracost).map(([key, value]) => (
                    <div key={key} className='flex items-center justify-between'>
                        <label className='text-sm font-medium mr-2 whitespace-nowrap capitalize'>
                            {key.replace(/([A-Z])/g, ' $1')}
                        </label>
                        <input
                            type='text'
                            name={key}
                            value={value}
                            onChange={handleChange}
                            className='w-28 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400'
                        />
                    </div>
                ))}
            </div>

            {/* Grand Total */}
            <div className='flex justify-between mt-6'>
                <span className='text-xl font-bold py-2'>GRAND TOTAL</span>
                <span className='text-xl font-bold py-2'>
                    {summary.totalCost.toFixed(2)}
                </span>
            </div>
        </div>

        <button
      disabled={disabledbutton || loading}
      onClick={BookShipment}
      className={`bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full ${
        (disabledbutton || loading) && 'opacity-50 cursor-not-allowed'
      }`}
    >
      {loading ? 'Booking...' : 'Book Shipment'}
    </button>
      </>
    );
};

export default OrderSummaryCard;
