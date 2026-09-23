import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, Copy } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../data/translations";
import prompts, { toSlug } from "../data/prompts";

const PromptPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const prompt = prompts.find((p) => toSlug(p.title) === slug);

  if (!prompt) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Prompt not found
            </h1>
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

  const title = language === "ar" ? prompt.titleAr : prompt.title;
  const promptText = language === "ar" ? prompt.promptAr : prompt.prompt;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-8">
          {/* Back to Home Link */}
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {t.backToHome}
          </Link>

          <div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              {title}
            </h1>
            <span className="inline-block text-xs text-muted-foreground bg-muted rounded-full px-3 py-1 mb-6">
              {prompt.category}
            </span>

            {/* Prompt Content Card */}
            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="text-foreground leading-relaxed whitespace-pre-wrap text-base md:text-lg max-h-[60vh] overflow-y-auto">
                {promptText}
              </div>
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>{t.promptCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>{t.copyPrompt}</span>
                </>
              )}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PromptPage;
