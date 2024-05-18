import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function SelectTest() {
  const testTypes = [
    { name: 'Cryogenic Testing', description: 'Evaluate materials and systems in extreme cold conditions.', link: '/cryogenic' },
    { name: 'Vehicle Motion Simulator', description: 'Simulate vehicle motion and stress to assess structural integrity.', link: '/vehicle-motion' },
    { name: 'Hydraulic Systems Testing', description: 'Test and calibrate hydraulic systems for optimal performance.', link: '/hydraulic-systems' },
    { name: 'Pneumatic Systems Testing', description: 'Ensure the reliability and efficiency of pneumatic systems.', link: '/pneumatic-systems' },
    { name: 'Structural Load Testing', description: 'Determine the load capacity and endurance of structural components.', link: '/structural-load' },
    { name: 'Environmental Control Testing', description: 'Assess systems performance in controlled environmental conditions.', link: '/environmental-control' },
    // ... other test types can be added here
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Head>
        <title>Select Test Type - Spacify</title>
        <meta name="description" content="Select the type of test for LETF capabilities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Select Test Type</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testTypes.map((testType) => (
            <div key={testType.name} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{testType.name}</h2>
              <p className="mb-4">{testType.description}</p>
              <Link href={testType.link}>
                <a className="text-blue-400 hover:text-blue-300">Learn More</a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
