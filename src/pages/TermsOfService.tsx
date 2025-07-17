import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="container mx-auto px-4 py-8 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Terms of Service</h1>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Introduction</h2>
        <p>
          These Terms of Service govern your use of our website and services. By accessing or using our site, you agree to comply with these terms.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Eligibility</h2>
        <p>
          You must be at least 18 years old or the legal age to form a binding contract in your jurisdiction to use our services.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">User Conduct</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Prohibited Activities:</strong> You agree not to use our services for any illegal or unauthorized purposes. This includes transmitting harmful content or violating the rights of others.
          </li>
          <li>
            <strong>Intellectual Property:</strong> All content on our website is protected by intellectual property laws. You may not reproduce, modify, or distribute our content without permission.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Service Availability</h2>
        <p>
          We strive to ensure our services are available continuously, but we cannot guarantee uninterrupted access due to technical issues or maintenance.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Disclaimer of Warranties</h2>
        <p>
          Our services are provided "as is" without any warranties, express or implied. We do not guarantee the accuracy, completeness, or reliability of the information provided.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Limitation of Liability</h2>
        <p>
          We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Indemnification</h2>
        <p>
          You agree to indemnify and hold us harmless from any claims, damages, or liabilities resulting from your use of our services or violation of these terms.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Governing Law</h2>
        <p>
          These terms are governed by the laws of [Insert Applicable Jurisdiction], without regard to its conflict of laws principles.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Your continued use of our site following any changes constitutes your acceptance of the revised terms.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Contact Us</h2>
        <p>
          For any questions regarding these Terms of Service, please contact us at Email: vikramchand02vc@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService; 