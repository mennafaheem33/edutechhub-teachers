import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../data/translations";
import {
  FileText, BookOpen, HelpCircle, Presentation, Image, Video, BookMarked,
  Mic, Smile, Globe, Gamepad2, Zap, MessageSquare, Wand2, GraduationCap
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Text Generation": <FileText className="w-6 h-6" />,
  "Lesson Planning": <BookOpen className="w-6 h-6" />,
  "Quizzes and Worksheets": <HelpCircle className="w-6 h-6" />,
  "Presentation": <Presentation className="w-6 h-6" />,
  "Image Generation": <Image className="w-6 h-6" />,
  "Video Generation": <Video className="w-6 h-6" />,
  "Story Book Creation": <BookMarked className="w-6 h-6" />,
  "Text to Speech": <Mic className="w-6 h-6" />,
  "Lip Sync": <Smile className="w-6 h-6" />,
  "VR and AR": <Globe className="w-6 h-6" />,
  "Gamification": <Gamepad2 className="w-6 h-6" />,
  "Quick Prompts": <Zap className="w-6 h-6" />,
  "Chatbots": <MessageSquare className="w-6 h-6" />,
  "Prompt Maker": <Wand2 className="w-6 h-6" />,
  "Courses": <GraduationCap className="w-6 h-6" />,
};

const categoryColors = [
  "from-violet-500 to-purple-600",
  "from-indigo-500 to-blue-600",
  "from-blue-500 to-cyan-600",
  "from-emerald-500 to-teal-600",
  "from-pink-500 to-rose-600",
  "from-orange-500 to-amber-600",
  "from-purple-500 to-pink-600",
  "from-teal-500 to-green-600",
  "from-rose-500 to-red-600",
  "from-amber-500 to-yellow-600",
  "from-cyan-500 to-sky-600",
  "from-fuchsia-500 to-purple-600",
  "from-green-500 to-emerald-600",
  "from-sky-500 to-indigo-600",
  "from-red-500 to-orange-600",
];

const CATEGORIES = [
  "Text Generation", "Lesson Planning", "Quizzes and Worksheets", "Presentation",
  "Image Generation", "Video Generation", "Story Book Creation", "Text to Speech",
  "Lip Sync", "VR and AR", "Gamification", "Quick Prompts", "Chatbots",
  "Prompt Maker", "Courses"
];

const HomeCategoryNav: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {t.learningSection}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Browse tools by creation goal
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {CATEGORIES.map((cat, index) => {
          const label = t.categories[cat as keyof typeof t.categories] || cat;
          const icon = categoryIcons[cat];
          const gradient = categoryColors[index % categoryColors.length];

          return (
            <Link
              key={cat}
              to={`/?category=${encodeURIComponent(cat)}`}
              className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                {icon}
              </div>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default HomeCategoryNav;
