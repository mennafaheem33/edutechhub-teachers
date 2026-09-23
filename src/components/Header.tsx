import React from "react";
import { Link } from "react-router-dom";
import { Globe, Sun, Moon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import translations from "../data/translations";
import HeaderSearch from "./HeaderSearch";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-1">
        <div className="flex items-center justify-between gap-4">
          {/* Exact Lovable Logo Link */}
          <Link to="/" className="flex-shrink-0 overflow-visible ml-4 sm:ml-6 md:ml-8">
            <img
              src={theme === "dark" ? "/assets/logo-dark-GhwGy2jN.svg" : "/assets/logo-light-1Dn4Sv5k.svg"}
              alt="EduTech Hub"
              className="h-36 w-auto sm:h-40 md:h-48 origin-center"
              style={{ transform: "scale(1.5)" }}
            />
          </Link>

          {/* Autocomplete Search Bar */}
          <HeaderSearch />

          {/* Action Buttons: Language & Theme */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{t.language}</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
