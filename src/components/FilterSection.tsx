import React from "react";
import { ChevronDown, X, Share2 } from "lucide-react";
import { SUBJECTS, CATEGORIES } from "../data/tools";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../data/translations";
import type { FilterState } from "../hooks/useFilterState";

interface FilterSectionProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  totalResults: number;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  hasActiveFilters,
  totalResults,
}) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const sortOptions = [
    { value: "topPicks", label: t.topPicks },
    { value: "az", label: t.aToZ },
    { value: "za", label: t.zToA },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 space-y-5">
      {/* Subject Filter */}
      <div>
        <h2 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
          {t.subjectFilter}
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilterChange("subject", "")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
              filters.subject === ""
                ? "bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-500/30"
                : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 bg-white dark:bg-gray-900"
            }`}
          >
            {t.all}
          </button>
          {SUBJECTS.map((subject) => (
            <button
              key={subject}
              onClick={() =>
                onFilterChange("subject", filters.subject === subject ? "" : subject)
              }
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                filters.subject === subject
                  ? "bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-500/30"
                  : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 bg-white dark:bg-gray-900"
              }`}
            >
              {t.subjects[subject as keyof typeof t.subjects] || subject}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h2 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
          {t.categoryFilter}
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilterChange("category", "")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
              filters.category === ""
                ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-500/30"
                : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-gray-900"
            }`}
          >
            {t.all}
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                onFilterChange("category", filters.category === cat ? "" : cat)
              }
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                filters.category === cat
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-500/30"
                  : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-gray-900"
              }`}
            >
              {t.categories[cat as keyof typeof t.categories] || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Controls Row: Tool Type + Sort + Actions */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Tool Type */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
          <button
            onClick={() => onFilterChange("type", "")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              filters.type === ""
                ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
          >
            {t.all}
          </button>
          <button
            onClick={() => onFilterChange("type", filters.type === "ai" ? "" : "ai")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              filters.type === "ai"
                ? "bg-violet-600 text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
          >
            🤖 {t.aiTools}
          </button>
          <button
            onClick={() => onFilterChange("type", filters.type === "edtech" ? "" : "edtech")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              filters.type === "edtech"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
          >
            🎓 {t.edtechTools}
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={filters.sort}
            onChange={(e) => onFilterChange("sort", e.target.value)}
            className="appearance-none pl-3 pr-8 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 cursor-pointer transition-all duration-200"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {t.sortBy}: {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        </div>

        {/* Results count */}
        <span className="text-xs text-gray-400 dark:text-gray-500 ml-1">
          {totalResults} {t.results}
        </span>

        {/* Action buttons - right side */}
        <div className="flex items-center gap-2 ml-auto">
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 border border-red-200 dark:border-red-800 transition-all duration-200"
            >
              <X className="w-3 h-3" />
              {t.clearFilters}
            </button>
          )}
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 border border-violet-200 dark:border-violet-800 transition-all duration-200"
          >
            <Share2 className="w-3 h-3" />
            {copied ? t.linkCopied : t.shareFilters}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
