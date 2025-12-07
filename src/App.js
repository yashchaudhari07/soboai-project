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
import AIInsightsPage from "./Pages/aiinsight/AIInsightsPage";
import ExpertsPage from "./Pages/Expertspage/ExpertsPage";


function AppContent() {
  const location = useLocation();

  const hideSidebarRoutes = ["/signup", "/login"];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideSidebar && <Slidebar />}

      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/experts" element={<ExpertsPage />} />
        <Route path="/ai-insights" element={<AIInsightsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
