// AIInsightsPage.jsx
import React, { useState } from "react";
import QuestionForm from "../../components/QuestionForm";

const mockData = [
  {
    id: 1,
    area: "Technology",
    status: "Completed",
    date: "Dec 7, 2025",
    summary:
      "Shree Ram Furnitures faces critical digital gaps: no website and no automation. Addressing these through expert engagement will unlock new customer channels and improve internal efficiency, delivering up to $20,000 in new value annually."
  }
];

const AREAS = [
  { name: "Finance", desc: "Understand budgets, cash flow, and financial health.", color: "bg-green-100", icon: "💰" },
  { name: "Hr", desc: "Enhance people management and HR processes.", color: "bg-purple-200", icon: "🧑‍💼" },
  { name: "Leadership", desc: "Improve leadership capabilities and team growth.", color: "bg-red-200", icon: "👑" },
  { name: "Management", desc: "Optimize processes and management decisions.", color: "bg-pink-200", icon: "📋" },
  { name: "Marketing", desc: "Improve brand growth and marketing performance.", color: "bg-teal-200", icon: "📢" },
  { name: "Operations", desc: "Improve efficiency and operational structure.", color: "bg-purple-300", icon: "⚙️" },
  { name: "Sales", desc: "Boost conversion, pipelines, and revenue outcomes.", color: "bg-indigo-200", icon: "📈" },
  { name: "Strategy", desc: "Plan long-term direction and actionable strategy.", color: "bg-orange-200", icon: "💡" },
  { name: "Technology", desc: "Tech, software, and system improvements.", color: "bg-blue-200", icon: "💻" }
];

export default function AIInsightsPage() {
  const [search, setSearch] = useState("");
  const [showModule, setShowModule] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedAreaConfirmed, setSelectedAreaConfirmed] = useState(false);

  const filtered = mockData.filter((item) =>
    item.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-[#0F0F0F] text-white p-6 md:p-10">
      <main className="w-full max-w-6xl mx-auto">
        {!showModule && (
          <div className="text-center">
            <div className="inline-block bg-blue-900/30 text-blue-400 px-3 py-1 text-xs rounded-full font-medium">
              Business Insights Platform
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white">
              Tell us what you need <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">clarity on</span>
            </h1>
            <p className="mt-4 text-gray-400">
              Choose a business area and answer a few quick questions — our Diagnostic Engine pinpoints the issues and opportunities that matter most.
            </p>
            <button onClick={() => setShowModule(true)} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Start
            </button>
          </div>
        )}

        {!showModule && (
          <div className="mt-10 flex justify-center space-x-12 mb-10 font-bold">
            {["Choose area", "Answer questions", "Get insights"].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-8 h-8 bg-blue-900/30 text-blue-400 rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <p className="text-sm mt-2 text-gray-400">{step}</p>
              </div>
            ))}
          </div>
        )}

        {/* Area selection */}
        {showModule && !selectedAreaConfirmed && (
          <div>
            <h2 className="text-xl font-semibold text-white text-center">Choose your business area</h2>
            <p className="text-sm text-gray-400 text-center mb-8">Select the area where you need expert insights</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {AREAS.map((area, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelected(area.name)}
                  className={`cursor-pointer border rounded-xl p-6 hover:shadow-md transition-all bg-[#161616] ${selected === area.name ? 'border-blue-500' : 'border-[#2A2A2A]'}`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center text-xl rounded-lg mb-4 ${area.color}`}>{area.icon}</div>
                  <h3 className="font-semibold text-white mb-1">{area.name}</h3>
                  <p className="text-sm text-gray-400">{area.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                disabled={!selected}
                onClick={() => setSelectedAreaConfirmed(true)}
                className={`px-6 py-2 rounded-md text-white font-medium ${selected ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}`}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {showModule && selectedAreaConfirmed && selected && (
          <QuestionForm area={selected} />
        )}

        {!showModule && (
          <>
            <hr className="my-10 border-[#2A2A2A]" />
            <div className="mt-14">
              <h2 className="text-xl font-semibold text-white">AI Insights History</h2>
              <p className="text-sm text-gray-400 mt-1">Review all of your past diagnostic reports in one place</p>

              <div className="mt-6 flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border border-[#2A2A2A] bg-[#161616] px-4 py-2 rounded-md w-full md:w-1/3 text-white placeholder-gray-500"
                />
                <select className="border border-[#2A2A2A] bg-[#161616] px-4 py-2 rounded-md text-white">
                  <option>All Areas</option>
                </select>
                <select className="border border-[#2A2A2A] bg-[#161616] px-4 py-2 rounded-md text-white">
                  <option>All Status</option>
                </select>
              </div>

              <div className="mt-8 space-y-4">
                {filtered.map((item) => (
                  <div key={item.id} className="border border-[#2A2A2A] bg-[#161616] p-6 rounded-lg shadow-sm flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.area}</h3>
                      <p className="text-gray-400 text-sm mt-2">{item.summary}</p>
                      <div className="flex flex-wrap mt-3 gap-2 text-sm">
                        <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">{item.area}</span>
                        <span className="bg-green-900/30 text-green-300 px-2 py-1 rounded-full">{item.status}</span>
                        <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full">{item.date}</span>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Open</button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}