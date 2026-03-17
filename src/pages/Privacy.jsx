import { useState } from "react";

export default function Privacy() {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect basic user information such as name, contact details, and donation-related data to improve our services.",
    },
    {
      title: "How We Use Your Data",
      content:
        "Your data is used to connect donors with receivers, improve platform performance, and ensure smooth operations.",
    },
    {
      title: "Data Protection",
      content:
        "We store your data securely and take necessary measures to protect it from unauthorized access or misuse.",
    },
    {
      title: "Sharing of Information",
      content:
        "We do not sell or share your personal information with third parties except when required for service functionality.",
    },
    {
      title: "Your Rights",
      content:
        "You can request to view, update, or delete your data anytime by contacting us through the platform.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      
      {/* Header */}
<header className="bg-emerald-900 py-16 md:py-20 px-6 md:px-12 text-center text-white relative overflow-hidden">  
  {/* Background effect */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

  {/* Content */}
  <div className="relative z-10">
<h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">      Privacy Policy
    </h1>

<p className="text-lg md:text-xl text-emerald-100 max-w-xl mx-auto leading-relaxed">    
      Your privacy matters to us. Here's how we collect, use, and protect your information.
    </p>
  </div>
</header>

      {/* Accordion */}

<div className="max-w-3xl mx-auto space-y-4 mt-12 md:mt-16 transition-all duration-300">     
       {sections.map((section, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggle(index)}
className={`w-full flex justify-between items-center p-5 text-left font-semibold transition 
${
  openIndex === index
    ? "text-emerald-600 bg-emerald-50 border-l-4 border-emerald-500"
    : "text-gray-800 hover:bg-emerald-50 hover:text-emerald-600"
}`}            >
              {section.title}
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Content */}
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-400 text-sm">
        Last updated: 2026
      </div>
    </div>
  );
}