import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useState, useEffect, useRef } from 'react';

export default function ScheduleTest() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [payloadType, setPayloadType] = useState('');
  const [payloadName, setPayloadName] = useState('');
  const [payloadDescription, setPayloadDescription] = useState('');
  const [payloadWeight, setPayloadWeight] = useState('');
  const [payloadDimensions, setPayloadDimensions] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Ref to store timeout IDs for cleanup
  const timeoutIds = useRef([]);

  const payloadTypes = [
    { id: 'cryogenic', name: 'Cryogenic Testing' },
    { id: 'vehicle-motion', name: 'Vehicle Motion Simulator' },
    { id: 'hydraulic-systems', name: 'Hydraulic Systems Testing' },
    { id: 'pneumatic-systems', name: 'Pneumatic Systems Testing' },
    { id: 'structural-load', name: 'Structural Load Testing' },
    { id: 'environmental-control', name: 'Environmental Control Testing' },
    // ... other payload types
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Clear previous timeouts
    timeoutIds.current.forEach(clearTimeout);

    // Validate the form inputs
    if (!payloadType || !payloadName || !payloadDescription || !payloadWeight || !payloadDimensions) {
      setError('Please fill in all fields.');
      return;
    }
    // Assuming the API endpoint for fetching available slots is '/api/slots'
    try {
      const response = await fetch('/api/slots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payloadType,
          payloadName,
          payloadDescription,
          payloadWeight: Number(payloadWeight),
          payloadDimensions,
          selectedDate: selectedDate.toISOString(),
        }),
      });
      const data = await response.json();
      if (response.ok) {
        // Handle successful fetching of available slots
        setSuccess('Available slots fetched successfully.');
        console.log(data); // Placeholder for actual implementation

        // Save timeout ID for success message
        const successTimeoutId = setTimeout(() => {
          setSuccess('');
        }, 5000);
        timeoutIds.current.push(successTimeoutId);
      } else {
        // Handle errors from the server
        setError(data.message || 'An error occurred while fetching available slots.');

        // Save timeout ID for error message
        const errorTimeoutId = setTimeout(() => {
          setError('');
        }, 5000);
        timeoutIds.current.push(errorTimeoutId);
      }
    } catch (error) {
      // Handle errors from the fetch operation
      console.error('Fetch error:', error);
      setError('An error occurred while fetching available slots.');

      // Save timeout ID for fetch error
      const fetchErrorTimeoutId = setTimeout(() => {
        setError('');
      }, 5000);
      timeoutIds.current.push(fetchErrorTimeoutId);
    }
  };

  // useEffect hook for cleanup
  useEffect(() => {
    // Cleanup function to clear timeouts
    return () => {
      timeoutIds.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Head>
        <title>Schedule Test - Spacify</title>
        <meta name="description" content="Schedule a payload test at LETFs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Schedule Your Test</h1>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Select Payload Type</h2>
            <select
              value={payloadType}
              onChange={(e) => setPayloadType(e.target.value)}
              className="bg-gray-700 text-white p-2 rounded"
            >
              {payloadTypes.map((type) => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Enter Payload Details</h2>
            <input
              type="text"
              value={payloadName}
              onChange={(e) => setPayloadName(e.target.value)}
              placeholder="Payload Name"
              className="bg-gray-700 text-white p-2 rounded"
              required
            />
            <textarea
              value={payloadDescription}
              onChange={(e) => setPayloadDescription(e.target.value)}
              placeholder="Payload Description"
              className="bg-gray-700 text-white p-2 rounded"
              required
            />
            <input
              type="number"
              value={payloadWeight}
              onChange={(e) => setPayloadWeight(e.target.value)}
              placeholder="Payload Weight (kg)"
              className="bg-gray-700 text-white p-2 rounded"
              required
            />
            <input
              type="text"
              value={payloadDimensions}
              onChange={(e) => setPayloadDimensions(e.target.value)}
              placeholder="Dimensions (LxWxH)"
              className="bg-gray-700 text-white p-2 rounded"
              required
            />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Select Preferred Dates</h2>
            <input
              type="date"
              value={selectedDate.toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              className="bg-gray-700 text-white p-2 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Fetch Available Slots
          </button>
        </form>
        {error && <div className="text-red-500 p-2 bg-red-100 rounded">{error}</div>}
        {success && <div className="text-green-500 p-2 bg-green-100 rounded">{success}</div>}
      </main>
    </div>
  );
}
