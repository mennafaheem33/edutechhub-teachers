import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PromptLibrarySection from "../components/PromptLibrarySection";
import AIAgentsSection from "../components/AIAgentsSection";
import CoursesSection from "../components/CoursesSection";

const HomePage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PromptLibrarySection />
        <AIAgentsSection />
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
