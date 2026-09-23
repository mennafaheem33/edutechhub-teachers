import React, { useMemo } from "react";
import ToolCard from "./ToolCard";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../data/translations";
import tools from "../data/tools";
import type { FilterState } from "../hooks/useFilterState";
import { Search } from "lucide-react";

interface ToolGridProps {
  filters: FilterState;
  onResultsChange?: (count: number) => void;
}

const ToolGrid: React.FC<ToolGridProps> = ({ filters, onResultsChange }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const filteredTools = useMemo(() => {
    let result = [...tools];

    if (filters.subject) {
      result = result.filter((tool) =>
        tool.subjects.includes(filters.subject) || tool.subjects.length === 0
      );
    }

    if (filters.category) {
      result = result.filter((tool) =>
        tool.categories.includes(filters.category)
      );
    }

    if (filters.type) {
      result = result.filter((tool) => tool.type === filters.type);
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchLower) ||
          tool.description.toLowerCase().includes(searchLower) ||
          tool.descriptionAr.includes(filters.search)
      );
    }

    if (filters.sort === "az") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sort === "za") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      // Top Picks first
      result.sort((a, b) => {
        if (a.topPick && !b.topPick) return -1;
        if (!a.topPick && b.topPick) return 1;
        return a.name.localeCompare(b.name);
      });
    }

    return result;
  }, [filters]);

  React.useEffect(() => {
    onResultsChange?.(filteredTools.length);
  }, [filteredTools.length, onResultsChange]);

  if (filteredTools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-4">
          <Search className="w-8 h-8 text-gray-300 dark:text-gray-600" />
        </div>
        <p className="text-gray-500 dark:text-gray-400 font-medium">{t.noToolsFound}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {filteredTools.map((tool, index) => (
        <div
          key={tool.id}
          className="animate-fade-in"
          style={{ animationDelay: `${Math.min(index * 30, 400)}ms` }}
        >
          <ToolCard tool={tool} />
        </div>
      ))}
    </div>
  );
};

export default ToolGrid;
