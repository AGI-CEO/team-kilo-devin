import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Head>
        <title>Spacify Home</title>
        <meta name="description" content="Welcome to Spacify, the platform for managing tests at the LETF." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Welcome to Spacify</h1>
        <p className="mb-4">
          Your centralized platform for scheduling and managing tests at the Launch Equipment Test Facility (LETF).
        </p>
        <p className="mb-4">
          Begin by navigating to the dashboard to select the type of test you need to conduct, or check the status of your scheduled tests.
        </p>
      </main>
    </div>
  );
}
