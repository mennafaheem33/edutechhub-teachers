import React, { useMemo } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToolCard from "../components/ToolCard";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../data/translations";
import tools from "../data/tools";
import { getCategoryByPath } from "../data/categories";

const CategoryPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPath = location.pathname;
  const categoryConfig = getCategoryByPath(currentPath);

  const subject = searchParams.get("subject") || "";
  const sort = searchParams.get("sort") || "top-picks";
  const type = searchParams.get("type") || "";

  const updateParam = (key: string, value: string) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value) {
          next.set(key, value);
        } else {
          next.delete(key);
        }
        return next;
      },
      { replace: true }
    );
  };

  const filteredTools = useMemo(() => {
    if (!categoryConfig) return [];

    let result = tools.filter((tool) =>
      tool.categories.includes(categoryConfig.category)
    );

    if (subject) {
      result = result.filter((tool) => tool.subjects.includes(subject));
    }

    if (type) {
      result = result.filter((tool) => tool.type === type);
    }

    switch (sort) {
      case "a-z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // top-picks
        result.sort((a, b) => {
          if (a.topPick && !b.topPick) return -1;
          if (!a.topPick && b.topPick) return 1;
          return a.name.localeCompare(b.name);
        });
        break;
    }

    return result;
  }, [categoryConfig, subject, sort, type]);

  if (!categoryConfig) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">404</h1>
            <p className="text-muted-foreground mb-6">Page not found</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              {t.backToHome}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const title = language === "ar" ? categoryConfig.titleAr : categoryConfig.titleEn;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-4 py-8">
          {/* Back to Home Link */}
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {t.backToHome}
          </Link>

          {/* Title */}
          <h1 className="font-display text-3xl font-bold text-foreground mb-6">
            {title}
          </h1>

          {/* Filter Bar: Sort & Tool Type */}
          <div className="space-y-5 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <label htmlFor="category-sort-select" className="text-sm font-semibold text-foreground font-display">
                  {t.sortBy}:
                </label>
                <div className="relative">
                  <select
                    id="category-sort-select"
                    value={sort}
                    onChange={(e) => updateParam("sort", e.target.value)}
                    className="appearance-none rounded-lg border border-border bg-card px-4 py-2 pr-8 rtl:pr-4 rtl:pl-8 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
                  >
                    <option value="top-picks">{t.topPicks}</option>
                    <option value="a-z">{t.aToZ}</option>
                    <option value="z-a">{t.zToA}</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground rtl:right-auto rtl:left-2.5" />
                </div>
              </div>

              {/* Tool Type Filter Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground font-display">
                  {t.toolType}:
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => updateParam("type", "")}
                    className={`filter-btn ${type === "" ? "filter-btn-active" : ""}`}
                  >
                    {t.all}
                  </button>
                  <button
                    type="button"
                    onClick={() => updateParam("type", type === "ai" ? "" : "ai")}
                    className={`filter-btn ${type === "ai" ? "filter-btn-active" : ""}`}
                  >
                    {t.aiTools}
                  </button>
                  <button
                    type="button"
                    onClick={() => updateParam("type", type === "edtech" ? "" : "edtech")}
                    className={`filter-btn ${type === "edtech" ? "filter-btn-active" : ""}`}
                  >
                    {t.edtechTools}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-8">
            {filteredTools.length} {t.results}
          </p>

          {/* Tools Grid or Empty State */}
          {filteredTools.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[200px] items-center justify-center text-muted-foreground">
              {t.noToolsFound}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
