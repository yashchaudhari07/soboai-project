import React, { useState } from "react";

const mockRequests = [
  {
    id: 1,
    title: "Technology",
    submittedOn: "06 December, 2025",
    engagementType: "Coaching",
    status: "Requested",
    description:
      "We are searching for an expert for your business. We will notify you once an expert is assigned to you.",
  },
  {
    id: 2,
    title: "Marketing Strategy",
    submittedOn: "03 December, 2025",
    engagementType: "Consulting",
    status: "Rejected",
    description: "Your request was rejected due to incomplete information.",
  },
  {
    id: 3,
    title: "UI/UX Review",
    submittedOn: "28 November, 2025",
    engagementType: "Design",
    status: "Deleted",
    description: "This request was removed as per your action.",
  },
  // more mock requests...
];

export default function ExpertsPage() {
  const [tab, setTab] = useState("All"); // All, Requested, Rejected, Deleted
  const [search, setSearch] = useState("");

  const filtered = mockRequests.filter((r) => {
    const matchesTab = tab === "All" || r.status === tab;
    const matchesSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.engagementType.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex">
      {/* Sidebar handled by parent layout */}
      <div className="flex-1 p-6 bg-[#0F0F0F] min-h-screen">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-8 rounded-lg mb-6">
          <h1 className="text-3xl font-semibold mb-2">Find your Expert</h1>
          <p className="text-gray-100 mb-4">
            Share your challenge, and we’ll connect you with the right expert to quickly assess the situation and deliver the outcomes your business needs.
          </p>
          <button className="px-5 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
            Find an expert
          </button>
        </div>

        {/* Tabs + Search */}
        <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
          <div className="flex space-x-2">
            {["All", "Requested", "Rejected", "Deleted"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-lg ${
                  tab === t
                    ? "bg-blue-600 text-white"
                    : "bg-[#161616] text-gray-300 hover:bg-[#1E1E1E]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search requests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg bg-[#161616] text-white border border-[#2A2A2A] focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Request Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((r) => (
            <div
              key={r.id}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {r.title.charAt(0)}
                  </div>
                  <h2 className="text-xl font-semibold text-white">{r.title}</h2>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    r.status === "Requested"
                      ? "bg-green-500/60 text-green-100"
                      : r.status === "Rejected"
                      ? "bg-red-500/60 text-red-100"
                      : r.status === "Deleted"
                      ? "bg-gray-500/60 text-gray-100"
                      : ""
                  }`}
                >
                  {r.status}
                </span>
              </div>
              <p className="text-gray-400 mb-1">Submitted on: {r.submittedOn}</p>
              <p className="text-gray-400 mb-1">
                Engagement type: {r.engagementType}
              </p>
              <p className="text-gray-300">{r.description}</p>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-gray-400 text-center py-10">
              No requests found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
