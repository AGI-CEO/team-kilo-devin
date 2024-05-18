import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function ConfirmBooking() {
  // This state would ideally be populated with the details from the previous steps
  const [bookingDetails, setBookingDetails] = useState({
    testType: 'Cryogenic Testing',
    payloadName: 'Satellite X',
    testDate: new Date().toDateString(),
    capabilities: ['Load Capacity', 'Temperature Control'],
  });

  // State to handle API response messages
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the booking details to the confirm API endpoint
      const response = await fetch('/api/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      const data = await response.json();

      // Handle the response data
      if (response.ok) {
        setResponseMessage(data.message);
        // Redirect to a confirmation page or display a success message
      } else {
        throw new Error(data.message || 'An error occurred while confirming the booking');
      }
    } catch (error) {
      setResponseMessage(error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Confirm Test Booking - Spacify</title>
        <meta name="description" content="Confirm your test booking details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <h1 className="text-4xl font-bold mb-6">Confirm Test Booking</h1>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">Test Type: {bookingDetails.testType}</p>
          <p className="text-sm font-medium text-gray-700">Payload Name: {bookingDetails.payloadName}</p>
          <p className="text-sm font-medium text-gray-700">Test Date: {bookingDetails.testDate}</p>
          <p className="text-sm font-medium text-gray-700">Capabilities: {bookingDetails.capabilities.join(', ')}</p>
        </div>
        {responseMessage && <p className="text-sm font-medium text-red-500">{responseMessage}</p>}
        <button onClick={handleSubmit} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          Confirm Booking
        </button>
      </main>
    </div>
  );
}
