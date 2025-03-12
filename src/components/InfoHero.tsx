import React from 'react';
import { FaChrome, FaFirefox, FaEdge, FaAndroid, FaApple } from 'react-icons/fa';
import { BiGlobe } from 'react-icons/bi';

const InfoHero = () => {
  const platforms = [
    { name: 'Android', icon: <FaAndroid size={24} /> },
    { name: 'iOS', icon: <FaApple size={24} /> },
    { name: 'Web App', icon: <BiGlobe size={24} /> },
    { name: 'Chrome', icon: <FaChrome size={24} /> },
    { name: 'Firefox', icon: <FaFirefox size={24} /> },
    { name: 'Edge', icon: <FaEdge size={24} /> }
  ];

  return (
<div className="bg-black text-white w-full min-h-screen">
  {/* Brand logo */}
  <div className="absolute top-12 left-12">
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-12 h-6 bg-blue-500 rounded-tl-full rounded-tr-full"></div>
      <div className="absolute bottom-0 left-0 w-12 h-6 border-2 border-white rounded-bl-full rounded-br-full"></div>
    </div>
  </div>

  {/* Download banner */}
  <div className="w-full bg-black pt-4 pb-8 text-center border-b border-gray-800">
    <h2 className="text-lg font-bold text-gray-300 mb-6">ACCESS TRACESPHERE ACROSS ALL YOUR DEVICES</h2>
    
    <div className="flex justify-center space-x-6 px-4">
      {platforms.map((platform, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-gray-900 p-4 rounded-lg w-14 h-14 flex items-center justify-center mb-2">
            {platform.icon}
          </div>
          <p className="text-xs text-gray-400">{platform.name}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Hero section */}
  <div className="w-full py-32 px-4 text-center bg-gradient-to-br from-black via-blue-950/30 to-black">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-5xl mx-auto">
      Transform Documents into
      <br />
      Actionable <span className="text-blue-300">Insights.</span>
    </h1>
    
    <p className="text-gray-400 text-xl max-w-3xl mx-auto">
      Analyze, compare, and validate your documents with Tracesphere AI-powered precision. Extract key details, ensure compliance, and identify risks in seconds instead of hours.
    </p>
  </div>
</div>
  );
};

export default InfoHero;