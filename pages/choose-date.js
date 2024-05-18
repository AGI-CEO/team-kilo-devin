import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BookingContext from '../contexts/BookingContext';
import { useRouter } from 'next/router';

export default function ChooseDate() {
  const { bookingDetails, setBookingDetails } = useContext(BookingContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const router = useRouter();

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the global bookingDetails state with the selected date
    setBookingDetails({
      ...bookingDetails,
      testDate: selectedDate.toISOString().split('T')[0] // Format the date as YYYY-MM-DD
    });
    // Redirect to the next step in the booking process
    router.push('/confirm-booking');
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Choose Test Date - Spacify</title>
        <meta name="description" content="Choose a date for the test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <h1 className="text-4xl font-bold mb-6">Choose Test Date</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="testDate" className="block text-sm font-medium text-gray-700">
              Test Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              placeholderText="Select a date"
            />
          </div>
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Submit Date
          </button>
        </form>
      </main>
    </div>
  );
}
