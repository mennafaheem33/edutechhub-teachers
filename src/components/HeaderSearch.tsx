import React, { useState, useRef, useEffect, useMemo } from "react";
import { Search, X, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../data/translations";
import tools from "../data/tools";
import prompts, { toSlug } from "../data/prompts";

const HeaderSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { tools: [], prompts: [] };
    const matchingTools = tools
      .filter(
        (tool) =>
          tool.name.toLowerCase().includes(q) ||
          tool.description.toLowerCase().includes(q) ||
          tool.descriptionAr.includes(q)
      )
      .slice(0, 5);
    const matchingPrompts = prompts
      .filter(
        (p) =>
          (language === "ar" ? p.titleAr : p.title).toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q)
      )
      .slice(0, 5);
    return { tools: matchingTools, prompts: matchingPrompts };
  }, [query, language]);

  const hasResults = results.tools.length > 0 || results.prompts.length > 0;
  const showDropdown = isOpen && query.trim().length > 0;

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleToolClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setQuery("");
    setIsOpen(false);
  };

  const handlePromptClick = (title: string) => {
    navigate(`/prompt/${toSlug(title)}`);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative flex-1 max-w-md mx-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={t.searchToolsOrPrompts || (language === "ar" ? "ابحث عن أدوات أو قوالب..." : "Search tools or prompts...")}
          className="w-full rounded-full border border-border bg-background pl-10 pr-10 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow search-input"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="absolute top-full mt-2 w-full rounded-xl border border-border bg-card shadow-lg z-[60] max-h-80 overflow-y-auto">
          {!hasResults && (
            <div className="p-4 text-center text-sm text-muted-foreground">
              {t.noResultsFound || (language === "ar" ? "لا توجد نتائج" : "No results found")}
            </div>
          )}

          {results.tools.length > 0 && (
            <div className="p-2">
              <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {t.tools || (language === "ar" ? "أدوات" : "Tools")}
              </p>
              {results.tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => handleToolClick(tool.url)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors text-left"
                >
                  <div className="flex-shrink-0 rounded-lg bg-primary/10 p-1.5">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <span className="flex-1 truncate">{tool.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
              ))}
            </div>
          )}

          {results.prompts.length > 0 && (
            <div className="p-2 border-t border-border">
              <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {t.prompts || (language === "ar" ? "قوالب" : "Prompts")}
              </p>
              {results.prompts.map((prompt) => (
                <button
                  key={prompt.id}
                  onClick={() => handlePromptClick(prompt.title)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors text-left"
                >
                  <div className="flex-shrink-0 rounded-lg bg-primary/10 p-1.5">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <span className="flex-1 truncate">
                    {language === "ar" ? prompt.titleAr : prompt.title}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
