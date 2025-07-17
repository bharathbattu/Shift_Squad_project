import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="container mx-auto px-4 py-8 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Cookie Policy</h1>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Introduction</h2>
        <p>
          This Cookie Policy outlines how SwiftSquad uses cookies and similar tracking technologies on our website. By using our website, you consent to our use of cookies as described in this policy.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">What Are Cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device when you visit a website. They are used to remember your preferences, improve your browsing experience, and analyze website traffic.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Types of Cookies</h2>
        <p>
          We use different types of cookies on our website:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Session Cookies:</strong> These are temporary and are deleted when you close your browser. They help us remember your actions during your visit.
          </li>
          <li>
            <strong>Persistent Cookies:</strong> These remain on your device after you close your browser. They help us remember your preferences and recognize you when you return to our website.
          </li>
          <li>
            <strong>Third-Party Cookies:</strong> These are set by third-party services or websites and are used for advertising and analytics purposes.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">How We Use Cookies</h2>
        <p>
          We use cookies for the following purposes:
        </p>
        <ul className="list-disc ml-6 space-y-2">
            <li>To enhance your browsing experience and personalize the content you see on our website.</li>
            <li>To analyze website traffic and usage patterns to improve our website and services.</li>
            <li>To provide targeted advertising based on your interests and browsing history.</li>
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Managing Cookies</h2>
        <p>
          You can manage your cookie preferences through your browser settings. Most browsers allow you to accept, reject, or delete cookies.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900">Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Any changes will be posted on this page.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy; 