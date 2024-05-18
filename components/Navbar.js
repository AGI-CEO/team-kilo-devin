import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-semibold">
          <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Spacify
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/overview" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Overview
          </Link>
          <Link href="/select-test" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Select Test Type
          </Link>
          <Link href="/input-details" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Input Test Details
          </Link>
          <Link href="/choose-date" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Choose Test Date
          </Link>
          <Link href="/confirm-booking" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Confirm Booking
          </Link>
          <Link href="/test-status" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Test Status
          </Link>
          <Link href="/real-time-updates" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Real-Time Updates
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
