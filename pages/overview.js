import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Overview() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Head>
        <title>LETF Overview - Spacify</title>
        <meta name="description" content="Overview of LETF capabilities and test coordination process" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">LETF Capabilities Overview</h1>
        <p className="mb-4">
          Welcome to Spacify, the platform designed to streamline the process of booking and managing tests at the Launch Equipment Test Facility (LETF).
          Here you can find detailed views of available tests, scheduling interfaces, and real-time updates on test progress.
        </p>
        <p className="mb-4">
          Select the type of test you need to conduct, input specific test details, choose your preferred test dates, and confirm your booking with ease.
          Our system will provide you with a summary of your booking, confirmation, and synchronization to your calendar.
        </p>
        <p>
          Begin by selecting the test type that suits your project's needs and follow the steps to complete your test coordination.
        </p>
      </main>
    </div>
  );
}
