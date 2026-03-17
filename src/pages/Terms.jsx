export default function Terms() {
  const sections = [
    {
      title: "Platform Usage",
      icon: "🌐",
      points: [
        "Use only for food donation & recovery",
        "No fake listings or spam allowed",
      ],
    },
    {
      title: "User Responsibilities",
      icon: "👤",
      points: [
        "Ensure food quality & hygiene",
        "Provide correct pickup details",
      ],
    },
    {
      title: "Restrictions",
      icon: "⛔",
      points: [
        "No illegal or harmful activities",
        "Account may be banned on misuse",
      ],
    },
    {
      title: "Liability",
      icon: "⚖️",
      points: [
        "Platform not responsible for damages",
        "Users act at their own responsibility",
      ],
    },
  ];

  return (
        <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-3">Terms of Use</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Please read these terms carefully before using FoodRecovery platform
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:shadow-lg"
          >
            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{section.icon}</span>
              <h2 className="text-xl font-semibold text-emerald-500 group-hover:text-emerald-600 transition">
                {section.title}
              </h2>
            </div>

            {/* Points */}
            <ul className="space-y-2 text-gray-700">
              {section.points.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-emerald-500">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500 text-sm">
        Last updated: 2026
      </div>
    </div>
  );
}