import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../data/translations";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="border-t border-border bg-card/50 py-6">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-sm text-muted-foreground font-medium">
          {t.footer}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
