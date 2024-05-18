import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import BookingContext from '../contexts/BookingContext';

export default function SelectCapabilities() {
  const { bookingDetails, setBookingDetails } = useContext(BookingContext);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setBookingDetails({
      ...bookingDetails,
      capabilities: {
        ...bookingDetails.capabilities,
        [name]: checked
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the submission to an API endpoint
    console.log(bookingDetails.capabilities);
    // Redirect to the next step in the booking process
    router.push('/choose-date'); // Assuming 'choose-date' is the next step
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Select LETF Capabilities - Spacify</title>
        <meta name="description" content="Select specific LETF capabilities for the test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <h1 className="text-4xl font-bold mb-6">Select LETF Capabilities</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="loadCapacity" className="block text-sm font-medium text-gray-700">
              Load Capacity
            </label>
            <input
              type="checkbox"
              name="loadCapacity"
              id="loadCapacity"
              checked={bookingDetails.capabilities.loadCapacity || false}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="temperatureControl" className="block text-sm font-medium text-gray-700">
              Temperature Control
            </label>
            <input
              type="checkbox"
              name="temperatureControl"
              id="temperatureControl"
              checked={bookingDetails.capabilities.temperatureControl || false}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="motionSimulation" className="block text-sm font-medium text-gray-700">
              Motion Simulation
            </label>
            <input
              type="checkbox"
              name="motionSimulation"
              id="motionSimulation"
              checked={bookingDetails.capabilities.motionSimulation || false}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          {/* Add other capabilities as needed */}
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Submit Capabilities
          </button>
        </form>
      </main>
    </div>
  );
}
