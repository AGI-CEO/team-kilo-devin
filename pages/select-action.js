import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function SelectAction() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Head>
        <title>Select Action - Spacify</title>
        <meta name="description" content="Select an action to either schedule a test or view test status" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Select Action</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <Link href="/schedule-test">
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Schedule Test
            </a>
          </Link>
          <Link href="/view-test-status">
            <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              View Test Status
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
