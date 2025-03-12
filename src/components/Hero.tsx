'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FileText, GitCompare, Shield, BarChart2, Search } from 'lucide-react';

const Hero: React.FC = () => {
    const [activeTab, setActiveTab] = useState('analysis');
  
    const tabs = [
        {
            id: 'analysis',
            label: 'Document Analysis',
            icon: <FileText size={24} />,
            imageSrc: '/api/placeholder/800/500' // Replace with actual image
        },
        {
            id: 'comparison',
            label: 'Smart Comparison',
            icon: <GitCompare size={24} />,
            imageSrc: '/api/placeholder/800/500' // Replace with actual image
        },
        {
            id: 'compliance',
            label: 'Compliance Check',
            icon: <Shield size={24} />,
            imageSrc: '/api/placeholder/800/500' // Replace with actual image
        },
        {
            id: 'insights',
            label: 'Visual Insights',
            icon: <BarChart2 size={24} />,
            imageSrc: '/api/placeholder/800/500' // Replace with actual image
        },
        {
            id: 'extraction',
            label: 'Data Extraction',
            icon: <Search size={24} />,
            imageSrc: '/api/placeholder/800/500' // Replace with actual image
        }
    ];

    return (
        <div className="relative min-h-screen">
            {/* Combined Background Pattern */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                
                {/* Radial Gradient Overlay */}
                <div className="absolute inset-0 -z-5 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-60"></div>
            </div>
            
            {/* Hero Content */}
            <div className="relative z-10 pt-16 lg:pt-32 px-4">
                <div className="mx-auto max-w-7xl text-center">
                    <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl pt-12 text-white">
                        Transform Documents into
                        <span className="text-yellow-400"> Insights</span>
                    </h1>
                    
                    <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-300">
                        Analyze, compare, and validate your documents with Tracesphere AI-powered precision. Extract key details, ensure compliance, and identify risks in seconds instead of hours.
                    </p>
                    
                    {/* Feature Tabs Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex flex-col items-center justify-center px-6 py-4 rounded-lg transition-all ${
                                    activeTab === tab.id 
                                    ? 'bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white' 
                                    : 'text-gray-300 hover:bg-white hover:bg-opacity-5'
                                }`}
                            >
                                <div className="text-center">
                                    {tab.icon}
                                    <div className={`mt-2 text-sm ${activeTab === tab.id ? 'font-medium' : ''}`}>
                                        {tab.label}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content as Image */}
                    <div className="mx-auto max-w-4xl">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`absolute inset-0 transition-opacity duration-300 ${
                                        activeTab === tab.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                                >
                                    <Image
                                        src={tab.imageSrc}
                                        alt={`${tab.label} interface`}
                                        fill
                                        className="object-cover rounded-xl border border-gray-700"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;