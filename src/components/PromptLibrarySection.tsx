import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  Calendar,
  List,
  Users,
  CircleHelp,
  FilePen,
  SquareCheckBig,
  ChartColumn,
  Ticket,
  Lightbulb,
  Snowflake,
  MessageSquare,
  FolderKanban,
  Gamepad2,
  FileText,
  BookOpen,
  FileSearch,
  ListChecks,
  Languages,
  Layers,
  HeartHandshake,
  Eye,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../data/translations";
import prompts, { toSlug } from "../data/prompts";

const promptIcons: Record<string, React.ReactNode> = {
  "Lesson Plan Generator": <ClipboardList className="h-5 w-5 text-primary" />,
  "Weekly Plan Builder": <Calendar className="h-5 w-5 text-primary" />,
  "Unit Outline Creator": <List className="h-5 w-5 text-primary" />,
  "Differentiated Lesson Planner": <Users className="h-5 w-5 text-secondary" />,
  "Quiz Generator": <CircleHelp className="h-5 w-5 text-accent" />,
  "Exam Question Builder": <FilePen className="h-5 w-5 text-accent" />,
  "Multiple Choice Maker": <SquareCheckBig className="h-5 w-5 text-accent" />,
  "Rubric Creator": <ChartColumn className="h-5 w-5 text-primary" />,
  "Exit Ticket Generator": <Ticket className="h-5 w-5 text-secondary" />,
  "Interactive Activity Ideas": <Lightbulb className="h-5 w-5 text-secondary" />,
  "Icebreaker Generator": <Snowflake className="h-5 w-5 text-secondary" />,
  "Class Discussion Prompts": <MessageSquare className="h-5 w-5 text-primary" />,
  "Project-Based Learning Ideas": <FolderKanban className="h-5 w-5 text-primary" />,
  "Gamified Lesson Creator": <Gamepad2 className="h-5 w-5 text-accent" />,
  "Simplify This Text": <FileText className="h-5 w-5 text-secondary" />,
  "Explain Like I'm 10": <BookOpen className="h-5 w-5 text-secondary" />,
  "Summary Generator": <FileSearch className="h-5 w-5 text-primary" />,
  "Key Points Extractor": <ListChecks className="h-5 w-5 text-primary" />,
  "Vocabulary List Builder": <Languages className="h-5 w-5 text-accent" />,
  "Adapt for Different Levels": <Layers className="h-5 w-5 text-secondary" />,
  "Support Plan Ideas": <HeartHandshake className="h-5 w-5 text-primary" />,
  "ELL Support Prompt": <Languages className="h-5 w-5 text-secondary" />,
  "Learning Style Adapter": <Eye className="h-5 w-5 text-accent" />,
};

const INITIAL_PROMPTS_COUNT = 2;

const PromptLibrarySection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isExpanded, setIsExpanded] = useState(false);

  const visiblePrompts = isExpanded ? prompts : prompts.slice(0, INITIAL_PROMPTS_COUNT);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">
        {t.promptLibrary}
      </h2>

      <div className="grid gap-3 sm:grid-cols-2">
        {visiblePrompts.map((prompt) => {
          const title = language === "ar" ? prompt.titleAr : prompt.title;
          const icon = promptIcons[prompt.title] || <FileText className="h-5 w-5 text-primary" />;

          return (
            <Link
              key={prompt.id}
              to={`/prompt/${toSlug(prompt.title)}`}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-secondary/40"
            >
              <div className="flex-shrink-0 rounded-lg bg-muted p-2.5">
                {icon}
              </div>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {title}
              </span>
            </Link>
          );
        })}
      </div>

      {prompts.length > INITIAL_PROMPTS_COUNT && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 rounded-full border border-secondary px-8 py-2.5 text-sm font-medium text-secondary transition-all duration-200 hover:bg-secondary hover:text-secondary-foreground cursor-pointer"
          >
            {isExpanded ? (
              <>
                <span>{language === "ar" ? "عرض أقل" : "Show Less"}</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span>{language === "ar" ? "عرض المزيد" : "Show More"}</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default PromptLibrarySection;
