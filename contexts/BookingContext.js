import { createContext } from 'react';

// Create a context for booking details
const BookingContext = createContext({
  bookingDetails: {
    testType: '',
    payloadName: '',
    testDate: '',
    capabilities: [],
  },
  setBookingDetails: () => {},
});

export default BookingContext;
