import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import SignupPage from "./Pages/Signup/SignupPage";
import LoginPage from "./Pages/Login/LoginPage";
import ExpertsPages from "./Pages/Expertspage/ExpertsPage";
import Slidebar from "./components/Slidebar";
import AIInsightsPage from "./Pages/aiinsight/AIInsightsPage";

function AppContent() {
  const location = useLocation();
  const hideSlidebarRoutes = ["/signup", "/login"];
  const showSidebar = !hideSlidebarRoutes.includes(location.pathname);

  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      {showSidebar && <Slidebar />}
      <div className="flex-1 w-full md:w-auto">
        <Routes>
          {/* Default page */}
          <Route path="/" element={<Navigate to="/signup" replace />} />

           <Route path="/" element={<SignupPage />} />

          {/* Signup */}
          <Route path="/signup" element={<SignupPage />} />

          {/* Login */}
          <Route path="/login" element={<LoginPage />} />

          <Route path="/experts" element={<ExpertsPages />} />

          {/* Fallback */}
          <Route path="/ai-insights" element={<AIInsightsPage/>} />
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
