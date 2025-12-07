import React from "react";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

/* ✅ IMPORT YOUR PAGES */
import SignupPage from "./Pages/Signup/SignupPage";
import LoginPage from "./Pages/Login/LoginPage";
import AIInsights from "./Pages/aiinsight/AIInsightsPage";
import Slidebar from "./components/Slidebar";
import ExpertsPage from "./Pages/Expertspage/ExpertsPage";
/* ✅ OPTIONAL: Sidebar */

/* ✅ Layout Logic */
function AppContent() {
  const location = useLocation();

  // ✅ Sidebar फक्त signup/login वर hide होईल
  const hideSidebarRoutes = ["/signup", "/login", "/", ""];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0F0F0F]">
      {!shouldHideSidebar && <Slidebar />}

      <div className="flex-1 w-full">
        <Routes>
          {/* ✅ DEFAULT ROOT = LOGIN */}
          <Route path="/" element={<LoginPage />} />

          {/* ✅ AUTH ROUTES */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* ✅ DASHBOARD ROUTES */}
          <Route path="/experts" element={<ExpertsPage />} />
          <Route path="/ai-insights" element={<AIInsights />} />

          {/* ✅ ANY WRONG URL → LOGIN */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </div>
  );
}

/* ✅ ✅ ✅ MAIN APP */
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
