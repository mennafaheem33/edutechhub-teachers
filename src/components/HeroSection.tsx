import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../data/translations";
import { SUBJECTS } from "../data/tools";
import { CATEGORY_PAGES } from "../data/categories";

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val) {
      navigate(`/subject/${val.toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-10 space-y-8 overflow-hidden">
      {/* Background Graphic Floating in Top-Right */}
      <img
        src="/assets/edu-illustration-B0YkYgAb.png"
        alt=""
        aria-hidden="true"
        className="absolute right-0 -top-16 w-72 md:w-96 opacity-20 dark:opacity-10 pointer-events-none select-none -z-10"
      />

      <h2 className="font-display text-2xl md:text-3xl font-bold text-primary relative z-10">
        {t.categoryFilter}
      </h2>

      {/* 11 Category Cards Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {CATEGORY_PAGES.map((item) => {
          const label = t.categories[item.category as keyof typeof t.categories] || item.category;
          return (
            <Link key={item.category} to={item.path} className="category-card">
              <span className="flex-shrink-0 rounded-lg bg-muted p-2">
                {item.icon}
              </span>
              <span className="font-medium text-sm text-foreground">
                {label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Subject Dropdown Section */}
      <div className="relative z-10 flex flex-col items-start gap-3 pt-4">
        <p className="text-sm md:text-base font-medium text-primary">
          {t.subjectDropdownLabel}
        </p>
        <div className="relative w-60">
          <select
            onChange={handleSubjectChange}
            defaultValue=""
            className="w-full appearance-none rounded-full border border-primary/20 bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
            aria-label={t.subjectDropdownLabel}
          >
            <option value="" disabled>
              {t.subjectDropdownDefault}
            </option>
            {SUBJECTS.map((subj) => (
              <option key={subj} value={subj}>
                {t.subjects[subj as keyof typeof t.subjects] || subj}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground rtl:right-auto rtl:left-4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
