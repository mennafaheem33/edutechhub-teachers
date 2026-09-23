import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PromptPage from "./pages/PromptPage";
import SubjectPage from "./pages/SubjectPage";
import CategoryPage from "./pages/CategoryPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prompt/:slug" element={<PromptPage />} />
        <Route path="/subject/:subject" element={<SubjectPage />} />
        <Route path="/*" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
