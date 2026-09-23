import React from "react";
import {
  BookOpen,
  ClipboardList,
  Presentation,
  Image,
  Video,
  BookText,
  AudioLines,
  Smile,
  Glasses,
  Gamepad2,
  WandSparkles,
} from "lucide-react";

export interface CategoryPageConfig {
  category: string;
  path: string;
  titleEn: string;
  titleAr: string;
  icon: React.ReactNode;
}

export const CATEGORY_PAGES: CategoryPageConfig[] = [
  {
    category: "Lesson Planning",
    path: "/lesson-planning-tools",
    titleEn: "Lesson Planning AI Tools",
    titleAr: "أدوات الذكاء الاصطناعي لتخطيط الدروس",
    icon: <BookOpen className="h-5 w-5 text-primary" />,
  },
  {
    category: "Quizzes and Worksheets",
    path: "/quiz-worksheet-tools",
    titleEn: "Quiz & Worksheet Creation Tools",
    titleAr: "أدوات إنشاء الاختبارات وأوراق العمل",
    icon: <ClipboardList className="h-5 w-5 text-primary" />,
  },
  {
    category: "Presentation",
    path: "/presentation-tools",
    titleEn: "AI Presentation Tools",
    titleAr: "أدوات العروض التقديمية الذكية",
    icon: <Presentation className="h-5 w-5 text-accent" />,
  },
  {
    category: "Image Generation",
    path: "/ai-image-tools",
    titleEn: "AI Image Generation Tools",
    titleAr: "أدوات توليد الصور بالذكاء الاصطناعي",
    icon: <Image className="h-5 w-5 text-accent" />,
  },
  {
    category: "Video Generation",
    path: "/ai-video-tools",
    titleEn: "AI Video Creation Tools",
    titleAr: "أدوات إنشاء الفيديو الذكية",
    icon: <Video className="h-5 w-5 text-accent" />,
  },
  {
    category: "Story Book Creation",
    path: "/story-book-tools",
    titleEn: "Story Book Creation Tools",
    titleAr: "أدوات إنشاء كتب القصص",
    icon: <BookText className="h-5 w-5 text-primary" />,
  },
  {
    category: "Text to Speech",
    path: "/text-to-speech-tools",
    titleEn: "Text to Speech Tools",
    titleAr: "أدوات تحويل النص إلى كلام",
    icon: <AudioLines className="h-5 w-5 text-accent" />,
  },
  {
    category: "Lip Sync",
    path: "/lip-sync-tools",
    titleEn: "AI Lip Sync Tools",
    titleAr: "أدوات مزامنة الشفاه الذكية",
    icon: <Smile className="h-5 w-5 text-primary" />,
  },
  {
    category: "VR and AR",
    path: "/vr-ar-tools",
    titleEn: "VR & AR Educational Tools",
    titleAr: "أدوات الواقع الافتراضي والمعزز التعليمية",
    icon: <Glasses className="h-5 w-5 text-primary" />,
  },
  {
    category: "Gamification",
    path: "/gamification-tools",
    titleEn: "Gamification Tools for Education",
    titleAr: "أدوات التلعيب للتعليم",
    icon: <Gamepad2 className="h-5 w-5 text-accent" />,
  },
  {
    category: "Prompt Maker",
    path: "/prompt-maker-tools",
    titleEn: "Prompt Maker Tools",
    titleAr: "أدوات صانع الأوامر",
    icon: <WandSparkles className="h-5 w-5 text-primary" />,
  },
];

export function getCategoryByPath(path: string): CategoryPageConfig | undefined {
  return CATEGORY_PAGES.find((p) => p.path === path);
}
