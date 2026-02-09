import { useState } from 'react';

import { CreditCard, Clock, Moon } from 'lucide-react';


const Booking = () => {
    const [serviceType, setServiceType] = useState('local');
    const [hours, setHours] = useState(2);
    const [isNight, setIsNight] = useState(false);
    const [loading, setLoading] = useState(false);

    // Pricing Logic matching Tariff.tsx
    const calculateTotal = () => {
        let base = 250; // First hour
        let hourlyRate = 100;

        // Calculate additional hours cost
        let additionalHours = Math.max(0, hours - 1);
        let hourlyCost = additionalHours * hourlyRate;

        let nightCharge = isNight ? 200 : 0;

        return base + hourlyCost + nightCharge;
    };

    const totalAmount = calculateTotal();

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        setLoading(true);
        const res = await loadRazorpay();

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            setLoading(false);
            return;
        }

        try {
            // Create Order on Backend
            const response = await fetch('http://localhost:5000/api/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: totalAmount,
                    currency: 'INR',
                }),
            });

            const order = await response.json();

            if (!order.id) {
                alert('Server error. Are you sure the backend is running?');
                setLoading(false);
                return;
            }

            // Initialize Razorpay
            const options = {
                key: 'rzp_live_SDvyv1FnhtSDVK', // Enter the Key ID generated from the Dashboard
                amount: order.amount,
                currency: order.currency,
                name: 'Farmer Driver',
                description: 'Driver Service Payment',
                order_id: order.id,
                handler: function (response: any) {
                    alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                    // Here you would typically save the booking to your database
                },
                prefill: {
                    name: 'Customer Name',
                    email: 'customer@example.com',
                    contact: '9999999999',
                },
                theme: {
                    color: '#0891b2', // Cyan-600 matching the theme
                },
            };

            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error('Payment Error:', error);
            alert('Something went wrong with the payment request.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-32 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-8 text-white text-center">
                        <h1 className="text-3xl font-bold mb-2">Book a Driver</h1>
                        <p className="text-cyan-100">Calculate fare and pay securely</p>
                    </div>

                    <div className="p-8">
                        <div className="space-y-6">
                            {/* Service Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                                <select
                                    value={serviceType}
                                    onChange={(e) => setServiceType(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-cyan-500 focus:border-cyan-500"
                                >
                                    <option value="local">Local City Drive</option>
                                    <option value="outstation">Outstation</option>
                                    <option value="airport">Airport Pickup/Drop</option>
                                </select>
                            </div>

                            {/* Hours */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-2" />
                                        Duration (Hours)
                                    </div>
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    value={hours}
                                    onChange={(e) => setHours(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                                <p className="text-xs text-gray-500 mt-1">First hour ₹250, then ₹100/hr</p>
                            </div>

                            {/* Night Charge */}
                            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
                                <div className="flex items-center">
                                    <Moon className="w-5 h-5 text-indigo-600 mr-3" />
                                    <span className="text-gray-700 font-medium">Night Driving (10 PM - 6 AM)</span>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={isNight}
                                    onChange={(e) => setIsNight(e.target.checked)}
                                    className="h-5 w-5 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                                />
                            </div>

                            {/* Summary */}
                            <div className="border-t border-gray-200 pt-6 mt-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">Base Fare (1st Hour)</span>
                                    <span className="font-medium">₹250</span>
                                </div>
                                {hours > 1 && (
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-600">Additional {hours - 1} Hours</span>
                                        <span className="font-medium">₹{(hours - 1) * 100}</span>
                                    </div>
                                )}
                                {isNight && (
                                    <div className="flex justify-between items-center mb-2 text-indigo-600">
                                        <span className="flex items-center"><Moon className="w-3 h-3 mr-1" /> Night Charge</span>
                                        <span className="font-medium">₹200</span>
                                    </div>
                                )}

                                <div className="flex justify-between items-center mt-4 pt-4 border-t border-dashed border-gray-300 text-xl font-bold">
                                    <span>Total Amount</span>
                                    <span className="text-cyan-600">₹{totalAmount}</span>
                                </div>
                            </div>

                            <button
                                onClick={handlePayment}
                                disabled={loading}
                                className={`w-full flex justify-center items-center bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 rounded-md transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                            >
                                {loading ? (
                                    <span>Processing...</span>
                                ) : (
                                    <>
                                        <CreditCard className="w-5 h-5 mr-2" />
                                        Pay Now ₹{totalAmount}
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs text-gray-500 mt-4">
                                Secure payment powered by Razorpay
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
