import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import BookingContext from '../contexts/BookingContext';

export default function InputTestDetails() {
  const { bookingDetails, setBookingDetails } = useContext(BookingContext);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any existing errors

    try {
      const response = await fetch('/api/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // For debugging purposes
      router.push('/select-capabilities'); // Navigate to the next step
    } catch (error) {
      setError('Failed to submit test details. Please try again.');
      console.error('There was an error submitting the form', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Input Test Details - Spacify</title>
        <meta name="description" content="Input details for the test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <h1 className="text-4xl font-bold mb-6">Input Test Details</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-4">
            <label htmlFor="payloadName" className="block text-sm font-medium text-gray-700">Payload Name</label>
            <input
              type="text"
              name="payloadName"
              id="payloadName"
              value={bookingDetails.payloadName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter payload name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="payloadDescription" className="block text-sm font-medium text-gray-700">Payload Description</label>
            <textarea
              name="payloadDescription"
              id="payloadDescription"
              value={bookingDetails.payloadDescription}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter payload description"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="payloadWeight" className="block text-sm font-medium text-gray-700">Payload Weight (kg)</label>
            <input
              type="number"
              name="payloadWeight"
              id="payloadWeight"
              value={bookingDetails.payloadWeight}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter payload weight"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="payloadDimensions" className="block text-sm font-medium text-gray-700">Payload Dimensions (LxWxH)</label>
            <input
              type="text"
              name="payloadDimensions"
              id="payloadDimensions"
              value={bookingDetails.payloadDimensions}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter payload dimensions"
              required
            />
          </div>
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Submit Details
          </button>
        </form>
      </main>
    </div>
  );
}
