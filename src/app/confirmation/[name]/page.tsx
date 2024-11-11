type ConfirmationPageProps = {
    params: {
      name: string;
    };
  };
  
  // Function to decode the slug
  function decodeSlug(slug: string): string {
    return slug.replace(/-/g, ' ').toUpperCase();
  }
  
  async function ConfirmationPage({ params }: ConfirmationPageProps) {
    const { name } = await params;
    const decodedName = decodeSlug(name); // Decode the slug
  
    return (
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="max-w-lg text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Thank You, {decodedName}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your message has been received. Our team will contact you within 2-3 business days.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Have a great day!
          </p>
        </div>
      </div>
    );
  }
  
  export default ConfirmationPage;