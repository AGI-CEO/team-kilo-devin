import { useRouter } from 'next/router';

const TestTypeDetails = () => {
  const router = useRouter();
  const { testType } = router.query;

  // Placeholder content for test type details
  const testDetailsContent = {
    'cryogenic': {
      title: 'Cryogenic Testing',
      description: 'Evaluate materials and systems in extreme cold conditions.'
    },
    'vehicle-motion': {
      title: 'Vehicle Motion Simulator',
      description: 'Simulate vehicle motion and stress to assess structural integrity.'
    },
    'hydraulic-systems': {
      title: 'Hydraulic Systems Testing',
      description: 'Test and calibrate hydraulic systems for optimal performance.'
    },
    // Add more test types and their details here
  };

  const details = testDetailsContent[testType] || {
    title: 'Test Type Not Found',
    description: 'The details for the selected test type are not available.'
  };

  return (
    <div>
      <h1>{details.title}</h1>
      <p>{details.description}</p>
      {/* Additional content such as images, videos, or data charts related to the test type can be added here */}
    </div>
  );
};

export default TestTypeDetails;
