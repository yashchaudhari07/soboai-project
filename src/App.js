import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import Slidebar from "./components/Slidebar";
import SignupPage from "./Pages/Signup/SignupPage";
import LoginPage from "./Pages/Login/LoginPage";
import ExpertsPage from "./Pages/Expertspage/ExpertsPage";
import AIInsightsPage from "./Pages/aiinsight/AIInsightsPage";



function AppContent() {
  const location = useLocation();

  const hideSidebarRoutes = ["/signup", "/login"];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex min-h-screen">
      {!shouldHideSidebar && <Slidebar />}

      <div className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/experts" element={<ExpertsPage />} />
          <Route path="/ai-insights" element={<AIInsightsPage />} />
          <Route path="*" element={<Navigate to="/signup" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
