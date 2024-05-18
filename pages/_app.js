import '../styles/globals.css';
import { useState, useMemo } from 'react';
import BookingContext from '../contexts/BookingContext';

function MyApp({ Component, pageProps }) {
  const [bookingDetails, setBookingDetails] = useState({
    testType: '',
    payloadName: '',
    testDate: '',
    capabilities: [],
  });

  const providerValue = useMemo(() => ({ bookingDetails, setBookingDetails }), [bookingDetails]);

  return (
    <BookingContext.Provider value={providerValue}>
      <Component {...pageProps} />
    </BookingContext.Provider>
  );
}

export default MyApp;
