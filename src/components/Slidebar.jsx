import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { User, Settings, LogOut, BarChart3, Zap, ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 hover:bg-[#1F1F1F] rounded transition-colors bg-[#161616]"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${isMobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 fixed md:relative transition-transform duration-300 z-40 ${isMinimized ? "md:w-20" : "md:w-64"} w-64 bg-[#161616] text-gray-200 min-h-screen flex flex-col`}>
        <div className="flex items-center justify-between p-4">
          {!isMinimized && <div className="text-2xl font-bold text-white">Sobo</div>}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 hover:bg-[#1F1F1F] rounded transition-colors hidden md:block"
            title={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-2 hover:bg-[#1F1F1F] rounded transition-colors md:hidden"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      <nav className="flex-1">
        <NavLink
          to="/experts"
          className="flex items-center gap-3 px-4 py-3 hover:bg-[#1F1F1F] rounded"
          title="Experts"
        >
          <User size={20} /> {!isMinimized && <span>Experts</span>}
        </NavLink>
        <NavLink
          to="/engagements"
          className="flex items-center gap-3 px-4 py-3 hover:bg-[#1F1F1F] rounded"
          title="Engagements"
        >
          <BarChart3 size={20} /> {!isMinimized && <span>Engagements</span>}
        </NavLink>
        <NavLink
          to="/ai-insights"
          className="flex items-center gap-3 px-4 py-3 hover:bg-[#1F1F1F] rounded"
          title="AI Insights"
        >
          <Zap size={20} /> {!isMinimized && <span>AI Insights</span>}
        </NavLink>
      </nav>
      <div className="p-4 border-t border-[#2A2A2A]">
        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 hover:bg-[#1F1F1F] rounded"
          title="Settings"
        >
          <Settings size={20} /> {!isMinimized && <span>Settings</span>}
        </NavLink>
        <NavLink
          to="/logout"
          className="flex items-center gap-3 px-4 py-3 hover:bg-[#1F1F1F] rounded"
          title="Sign Out"
        >
          <LogOut size={20} /> {!isMinimized && <span>Sign Out</span>}
        </NavLink>
      </div>
    </div>
    </>
  );
}
