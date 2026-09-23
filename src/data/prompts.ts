export interface PromptTemplate {
  id: string;
  title: string;
  titleAr: string;
  prompt: string;
  promptAr: string;
  category: string;
}

export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

const prompts: PromptTemplate[] = [
  {
    id: "lp1",
    title: "Lesson Plan Generator",
    titleAr: "مولد خطط الدروس",
    prompt: "Create a detailed lesson plan for teaching [topic] to [grade level] students. Include objectives, materials, step-by-step activities, differentiation strategies, and assessment methods. Duration: [time].",
    promptAr: "أنشئ خطة درس مفصلة لتدريس [الموضوع] لطلاب [المرحلة الدراسية]. تضمن الأهداف والمواد والأنشطة خطوة بخطوة واستراتيجيات التمايز وأساليب التقييم. المدة: [الوقت].",
    category: "Lesson Planning",
  },
  {
    id: "lp2",
    title: "Weekly Plan Builder",
    titleAr: "منشئ الخطة الأسبوعية",
    prompt: "Create a 5-day weekly plan for [subject] covering [unit/topic] for [grade level]. Include daily objectives, activities, and homework.",
    promptAr: "أنشئ خطة أسبوعية من 5 أيام لمادة [المادة] تغطي [الوحدة/الموضوع] لطلاب [المرحلة الدراسية]. تضمن الأهداف اليومية والأنشطة والواجبات المنزلية.",
    category: "Lesson Planning",
  },
  {
    id: "lp3",
    title: "Unit Outline Creator",
    titleAr: "منشئ مخطط الوحدة",
    prompt: "Design a complete unit outline for [topic] for [grade level]. Include essential questions, learning goals, major assignments, and final assessment.",
    promptAr: "صمم مخططًا كاملاً للوحدة حول [الموضوع] لطلاب [المرحلة الدراسية]. تضمن الأسئلة الأساسية وأهداف التعلم والمهام الرئيسية والتقييم النهائي.",
    category: "Lesson Planning",
  },
  {
    id: "lp4",
    title: "Differentiated Lesson Planner",
    titleAr: "مخطط الدرس المتمايز",
    prompt: "Create a differentiated lesson plan for [topic] suitable for low, average, and advanced learners in [grade level].",
    promptAr: "أنشئ خطة درس متمايزة حول [الموضوع] مناسبة للمتعلمين ذوي المستوى المنخفض والمتوسط والمتقدم في [المرحلة الدراسية].",
    category: "Lesson Planning",
  },
  {
    id: "ae1",
    title: "Quiz Generator",
    titleAr: "مولد الاختبارات",
    prompt: "Generate a 10-question quiz about [topic] for [grade level] including multiple choice and short answer questions with an answer key.",
    promptAr: "أنشئ اختبارًا من 10 أسئلة حول [الموضوع] لطلاب [المرحلة الدراسية] بما في ذلك أسئلة الاختيار من متعدد والإجابة القصيرة مع مفتاح الإجابة.",
    category: "Assessments",
  },
  {
    id: "ae2",
    title: "Exam Question Builder",
    titleAr: "منشئ أسئلة الامتحان",
    prompt: "Create exam questions (easy, medium, hard) for [topic] suitable for [grade level] students.",
    promptAr: "أنشئ أسئلة امتحان (سهلة، متوسطة، صعبة) حول [الموضوع] مناسبة لطلاب [المرحلة الدراسية].",
    category: "Assessments",
  },
  {
    id: "ae3",
    title: "Multiple Choice Maker",
    titleAr: "صانع الاختيار من متعدد",
    prompt: "Write 5 multiple choice questions about [topic] with 4 options each and mark the correct answer.",
    promptAr: "اكتب 5 أسئلة اختيار من متعدد حول [الموضوع] مع 4 خيارات لكل سؤال وحدد الإجابة الصحيحة.",
    category: "Assessments",
  },
  {
    id: "ae4",
    title: "Rubric Creator",
    titleAr: "منشئ معايير التقييم",
    prompt: "Create a grading rubric for assessing [assignment/project] for [grade level] students with clear criteria and performance levels.",
    promptAr: "أنشئ معايير تقييم لتقييم [المهمة/المشروع] لطلاب [المرحلة الدراسية] مع معايير واضحة ومستويات الأداء.",
    category: "Assessments",
  },
  {
    id: "ae5",
    title: "Exit Ticket Generator",
    titleAr: "مولد تذاكر الخروج",
    prompt: "Create 3 quick exit ticket questions to assess student understanding of [lesson topic].",
    promptAr: "أنشئ 3 أسئلة سريعة لتذاكر الخروج لتقييم فهم الطلاب لموضوع [الدرس].",
    category: "Assessments",
  },
  {
    id: "act1",
    title: "Interactive Activity Ideas",
    titleAr: "أفكار أنشطة تفاعلية",
    prompt: "Suggest 5 interactive classroom activities to teach [topic] to [grade level] students.",
    promptAr: "اقترح 5 أنشطة فصلية تفاعلية لتدريس [الموضوع] لطلاب [المرحلة الدراسية].",
    category: "Activities",
  },
  {
    id: "act2",
    title: "Icebreaker Generator",
    titleAr: "مولد كسر الجليد",
    prompt: "Create a fun icebreaker activity suitable for [grade level] students at the beginning of a [subject] class.",
    promptAr: "أنشئ نشاط كسر جليد ممتع مناسب لطلاب [المرحلة الدراسية] في بداية حصة [المادة].",
    category: "Activities",
  },
  {
    id: "act3",
    title: "Class Discussion Prompts",
    titleAr: "أسئلة المناقشة الصفية",
    prompt: "Provide 5 engaging discussion questions about [topic] appropriate for [grade level] students.",
    promptAr: "قدم 5 أسئلة مناقشة جذابة حول [الموضوع] مناسبة لطلاب [المرحلة الدراسية].",
    category: "Activities",
  },
  {
    id: "act4",
    title: "Project-Based Learning Ideas",
    titleAr: "أفكار التعلم القائم على المشاريع",
    prompt: "Suggest a project-based learning activity for [topic] for [grade level], including objectives and expected outcomes.",
    promptAr: "اقترح نشاط تعلم قائم على المشاريع حول [الموضوع] لطلاب [المرحلة الدراسية]، بما في ذلك الأهداف والنتائج المتوقعة.",
    category: "Activities",
  },
  {
    id: "act5",
    title: "Gamified Lesson Creator",
    titleAr: "منشئ الدروس المُلعبة",
    prompt: "Design a gamified classroom activity to teach [topic] to [grade level] students.",
    promptAr: "صمم نشاطًا فصليًا مُلعبًا لتدريس [الموضوع] لطلاب [المرحلة الدراسية].",
    category: "Activities",
  },
  {
    id: "cs1",
    title: "Simplify This Text",
    titleAr: "تبسيط هذا النص",
    prompt: "Simplify the following text for [grade level] students while keeping the main ideas clear:\n[Paste text here]",
    promptAr: "بسّط النص التالي لطلاب [المرحلة الدراسية] مع الحفاظ على وضوح الأفكار الرئيسية:\n[الصق النص هنا]",
    category: "Simplification",
  },
  {
    id: "cs2",
    title: "Explain Like I'm 10",
    titleAr: "اشرح وكأنني في العاشرة",
    prompt: "Explain [concept] in a simple way that a 10-year-old can understand.",
    promptAr: "اشرح [المفهوم] بطريقة بسيطة يمكن لطفل في العاشرة فهمها.",
    category: "Simplification",
  },
  {
    id: "cs3",
    title: "Summary Generator",
    titleAr: "مولد الملخصات",
    prompt: "Summarize the following content into key bullet points for [grade level] students:\n[Paste text]",
    promptAr: "لخص المحتوى التالي في نقاط رئيسية لطلاب [المرحلة الدراسية]:\n[الصق النص]",
    category: "Simplification",
  },
  {
    id: "cs4",
    title: "Key Points Extractor",
    titleAr: "مستخرج النقاط الرئيسية",
    prompt: "Extract the most important key points from the following lesson content:\n[Paste content]",
    promptAr: "استخرج أهم النقاط الرئيسية من محتوى الدرس التالي:\n[الصق المحتوى]",
    category: "Simplification",
  },
  {
    id: "cs5",
    title: "Vocabulary List Builder",
    titleAr: "منشئ قائمة المفردات",
    prompt: "Create a vocabulary list with definitions and example sentences for [topic] for [grade level] students.",
    promptAr: "أنشئ قائمة مفردات مع التعريفات وجمل الأمثلة حول [الموضوع] لطلاب [المرحلة الدراسية].",
    category: "Vocabulary",
  },
  {
    id: "diff1",
    title: "Adapt for Different Levels",
    titleAr: "تكييف لمستويات مختلفة",
    prompt: "Adapt this lesson about [topic] for beginner, intermediate, and advanced learners.",
    promptAr: "كيّف هذا الدرس حول [الموضوع] للمتعلمين المبتدئين والمتوسطين والمتقدمين.",
    category: "Differentiation",
  },
  {
    id: "diff2",
    title: "Support Plan Ideas",
    titleAr: "أفكار خطة الدعم",
    prompt: "Suggest classroom strategies to support a student who struggles with [specific challenge] in [subject].",
    promptAr: "اقترح استراتيجيات فصلية لدعم طالب يعاني من [تحدي محدد] في [المادة].",
    category: "Differentiation",
  },
  {
    id: "diff3",
    title: "ELL Support Prompt",
    titleAr: "دعم متعلمي اللغة الإنجليزية",
    prompt: "Adapt this lesson about [topic] to support English Language Learners in [grade level].",
    promptAr: "كيّف هذا الدرس حول [الموضوع] لدعم متعلمي اللغة الإنجليزية في [المرحلة الدراسية].",
    category: "Differentiation",
  },
  {
    id: "diff4",
    title: "Learning Style Adapter",
    titleAr: "مكيّف أنماط التعلم",
    prompt: "Modify this lesson about [topic] to suit visual, auditory, and kinesthetic learners.",
    promptAr: "عدّل هذا الدرس حول [الموضوع] ليناسب المتعلمين البصريين والسمعيين والحركيين.",
    category: "Differentiation",
  },
];

export default prompts;
