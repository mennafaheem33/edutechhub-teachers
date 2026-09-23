export type ToolType = "ai" | "edtech";

export interface Tool {
  id: string;
  name: string;
  url: string;
  description: string;
  descriptionAr: string;
  subjects: string[];
  categories: string[];
  type: ToolType;
  topPick?: boolean;
  gradeLevel?: "kg" | "upper" | "both";
}

export const SUBJECTS = [
  "Arabic", "English", "German", "French", "Math", "Science", "ICT",
  "Religion", "Christianity", "Philosophy", "Montessori", "Social Studies",
  "Business", "Skills", "Art", "Music", "PE", "Library"
] as const;

export const CATEGORIES = [
  "Text Generation", "Lesson Planning", "Quizzes and Worksheets", "Presentation",
  "Image Generation", "Video Generation", "Story Book Creation", "Text to Speech",
  "Lip Sync", "VR and AR", "Gamification", "Quick Prompts", "Chatbots",
  "Prompt Maker", "Courses"
] as const;

export type Subject = typeof SUBJECTS[number];
export type Category = typeof CATEGORIES[number];

const tools: Tool[] = [
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "url": "https://chat.openai.com/",
    "description": "AI chatbot for generating text, answering questions, and assisting with lesson plans.",
    "descriptionAr": "روبوت ذكاء اصطناعي لتوليد النصوص والإجابة على الأسئلة والمساعدة في خطط الدروس.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Text Generation",
      "Chatbots"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "gemini",
    "name": "Google Gemini",
    "url": "https://gemini.google.com/app",
    "description": "Google's AI assistant for research, writing, and creative tasks in education.",
    "descriptionAr": "مساعد جوجل الذكي للبحث والكتابة والمهام الإبداعية في التعليم.",
    "subjects": [
      "Business",
      "Music"
    ],
    "categories": [
      "Text Generation",
      "Chatbots",
      "Image Generation"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "magicschool",
    "name": "MagicSchool AI",
    "url": "https://www.magicschool.ai/",
    "description": "AI platform designed specifically for teachers to create lesson plans and assessments.",
    "descriptionAr": "منصة ذكاء اصطناعي مصممة خصيصًا للمعلمين لإنشاء خطط الدروس والتقييمات.",
    "subjects": [
      "Business",
      "Math"
    ],
    "categories": [
      "Lesson Planning",
      "Text Generation"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "edcafe",
    "name": "Edcafe AI",
    "url": "https://www.edcafe.ai/",
    "description": "AI-powered platform to brew teaching materials including quizzes and lesson content.",
    "descriptionAr": "منصة مدعومة بالذكاء الاصطناعي لإعداد المواد التعليمية بما في ذلك الاختبارات والمحتوى.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Lesson Planning"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "schoolai",
    "name": "SchoolAI",
    "url": "https://schoolai.com/",
    "description": "AI assistant for schools offering personalized tutoring and classroom tools.",
    "descriptionAr": "مساعد ذكاء اصطناعي للمدارس يقدم دروسًا خصوصية وأدوات للفصول الدراسية.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Lesson Planning",
      "Chatbots",
      "Text Generation"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "perplexity",
    "name": "Perplexity",
    "url": "https://www.perplexity.ai/",
    "description": "AI-powered search engine that provides cited answers for research and learning.",
    "descriptionAr": "محرك بحث مدعوم بالذكاء الاصطناعي يقدم إجابات موثقة للبحث والتعلم.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Text Generation",
      "Chatbots"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "deepseek",
    "name": "DeepSeek",
    "url": "https://www.deepseek.com/",
    "description": "Advanced AI model for deep reasoning, coding, and academic research tasks.",
    "descriptionAr": "نموذج ذكاء اصطناعي متقدم للتفكير العميق والبرمجة والبحث الأكاديمي.",
    "subjects": [],
    "categories": [
      "Text Generation",
      "Chatbots"
    ],
    "type": "ai"
  },
  {
    "id": "grok",
    "name": "Grok",
    "url": "https://grok.com/",
    "description": "AI chatbot with real-time information and creative content generation.",
    "descriptionAr": "روبوت ذكاء اصطناعي مع معلومات فورية وتوليد محتوى إبداعي.",
    "subjects": [],
    "categories": [
      "Text Generation",
      "Chatbots",
      "Image Generation",
      "Video Generation"
    ],
    "type": "ai"
  },
  {
    "id": "claude",
    "name": "Claude",
    "url": "https://claude.com/",
    "description": "AI assistant by Anthropic for writing, analysis, and complex reasoning tasks.",
    "descriptionAr": "مساعد ذكاء اصطناعي من Anthropic للكتابة والتحليل والتفكير المعقد.",
    "subjects": [],
    "categories": [
      "Text Generation",
      "Chatbots"
    ],
    "type": "ai"
  },
  {
    "id": "z-ai",
    "name": "Z AI",
    "url": "https://chat.z.ai/",
    "description": "AI chat assistant for conversations, writing, and problem solving.",
    "descriptionAr": "مساعد ذكاء اصطناعي للمحادثات والكتابة وحل المشكلات.",
    "subjects": [],
    "categories": [
      "Text Generation",
      "Chatbots"
    ],
    "type": "ai"
  },
  {
    "id": "felo",
    "name": "Felo",
    "url": "https://felo.ai/search",
    "description": "AI search assistant for finding accurate and cited information quickly.",
    "descriptionAr": "مساعد بحث ذكي للعثور على معلومات دقيقة وموثقة بسرعة.",
    "subjects": [],
    "categories": [
      "Text Generation",
      "Chatbots"
    ],
    "type": "ai"
  },
  {
    "id": "ithy",
    "name": "Ithy",
    "url": "https://ithy.com/",
    "description": "AI search and research assistant for educational content discovery.",
    "descriptionAr": "مساعد بحث ذكي لاكتشاف المحتوى التعليمي.",
    "subjects": [],
    "categories": [
      "Text Generation",
      "Chatbots"
    ],
    "type": "ai"
  },
  {
    "id": "manus",
    "name": "Manus AI",
    "url": "https://manus.im/",
    "description": "AI agent for automating complex tasks and workflows.",
    "descriptionAr": "عميل ذكاء اصطناعي لأتمتة المهام وسير العمل المعقد.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Text Generation"
    ],
    "type": "ai"
  },
  {
    "id": "notebooklm",
    "name": "NotebookLM",
    "url": "https://notebooklm.google/",
    "description": "Google's AI notebook for summarizing and querying documents and sources.",
    "descriptionAr": "دفتر ملاحظات جوجل الذكي لتلخيص المستندات والمصادر والاستعلام عنها.",
    "subjects": [],
    "categories": [
      "Text Generation",
      "Lesson Planning"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "aistudio",
    "name": "Google AI Studio",
    "url": "https://aistudio.google.com/",
    "description": "Build and experiment with Google's generative AI models for education.",
    "descriptionAr": "بناء وتجربة نماذج جوجل التوليدية للذكاء الاصطناعي في التعليم.",
    "subjects": [],
    "categories": [
      "Text Generation",
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "to-teach",
    "name": "To Teach AI",
    "url": "https://to-teach.ai/",
    "description": "AI tool to create personalized exercises and lesson materials for any subject.",
    "descriptionAr": "أداة ذكاء اصطناعي لإنشاء تمارين ومواد دراسية مخصصة لأي مادة.",
    "subjects": [],
    "categories": [
      "Lesson Planning"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "teachy",
    "name": "Teachy",
    "url": "https://teachy.ai/",
    "description": "AI teaching assistant for creating lesson plans, activities, and assessments.",
    "descriptionAr": "مساعد تدريس ذكي لإنشاء خطط الدروس والأنشطة والتقييمات.",
    "subjects": [],
    "categories": [
      "Lesson Planning"
    ],
    "type": "ai"
  },
  {
    "id": "studybites",
    "name": "StudyBites",
    "url": "https://studybites.ai/en#flashcards",
    "description": "AI study assistant with flashcards, quizzes, and personalized learning tools.",
    "descriptionAr": "مساعد دراسة ذكي مع بطاقات تعليمية واختبارات وأدوات تعلم مخصصة.",
    "subjects": [],
    "categories": [
      "Lesson Planning"
    ],
    "type": "ai"
  },
  {
    "id": "chalkie",
    "name": "Chalkie",
    "url": "https://chalkie.ai/en",
    "description": "AI-powered lesson planning and resource creation for teachers.",
    "descriptionAr": "تخطيط الدروس وإنشاء الموارد المدعومة بالذكاء الاصطناعي للمعلمين.",
    "subjects": [],
    "categories": [
      "Lesson Planning"
    ],
    "type": "ai"
  },
  {
    "id": "conker",
    "name": "Conker AI",
    "url": "https://www.conker.ai/",
    "description": "AI quiz generator for teachers to create assessments in seconds.",
    "descriptionAr": "مولد اختبارات ذكي للمعلمين لإنشاء تقييمات في ثوانٍ.",
    "subjects": [],
    "categories": [
      "Lesson Planning"
    ],
    "type": "ai"
  },
  {
    "id": "diffit",
    "name": "Diffit",
    "url": "https://web.diffit.me/",
    "description": "AI tool for differentiating content at any reading level.",
    "descriptionAr": "أداة ذكاء اصطناعي لتمييز المحتوى في أي مستوى قراءة.",
    "subjects": [],
    "categories": [
      "Lesson Planning",
      "Text Generation"
    ],
    "type": "ai"
  },
  {
    "id": "questionwell",
    "name": "QuestionWell",
    "url": "https://questionwell.org/",
    "description": "AI-powered question generator from any text or topic for assessments.",
    "descriptionAr": "مولد أسئلة مدعوم بالذكاء الاصطناعي من أي نص أو موضوع للتقييمات.",
    "subjects": [],
    "categories": [
      "Lesson Planning"
    ],
    "type": "ai"
  },
  {
    "id": "gamma",
    "name": "Gamma",
    "url": "https://gamma.app/",
    "description": "AI presentation maker that creates beautiful slides and websites instantly.",
    "descriptionAr": "صانع عروض تقديمية ذكي ينشئ شرائح ومواقع ويب جميلة فوريًا.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Presentation"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "napkin",
    "name": "Napkin AI",
    "url": "https://www.napkin.ai/",
    "description": "Visual AI tool for creating diagrams and business storytelling visuals.",
    "descriptionAr": "أداة ذكاء اصطناعي بصرية لإنشاء الرسوم البيانية والعروض المرئية.",
    "subjects": [
      "Business",
      "Library"
    ],
    "categories": [
      "Presentation"
    ],
    "type": "ai"
  },
  {
    "id": "canva-ai",
    "name": "Canva AI",
    "url": "https://www.canva.com/ai",
    "description": "AI-powered design tool for creating presentations, social media, and visuals.",
    "descriptionAr": "أداة تصميم مدعومة بالذكاء الاصطناعي لإنشاء العروض والتصاميم المرئية.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Presentation"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "playground",
    "name": "Playground AI",
    "url": "https://playground.com/",
    "description": "Free AI design tool for logos, t-shirts, social media graphics, and more.",
    "descriptionAr": "أداة تصميم ذكية مجانية للشعارات والرسومات والوسائط الاجتماعية.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "krea",
    "name": "Krea AI",
    "url": "https://www.krea.ai/",
    "description": "AI creative suite for generating and editing images, videos, and 3D content.",
    "descriptionAr": "مجموعة إبداعية ذكية لتوليد وتعديل الصور والفيديوهات والمحتوى ثلاثي الأبعاد.",
    "subjects": [],
    "categories": [
      "Video Generation"
    ],
    "type": "ai"
  },
  {
    "id": "perchance-img",
    "name": "Perchance Image Generator",
    "url": "https://perchance.org/ai-text-to-image-generator",
    "description": "Free unlimited AI image generator with no sign-up required.",
    "descriptionAr": "مولد صور ذكي مجاني وغير محدود بدون تسجيل.",
    "subjects": [],
    "categories": [
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "recraft",
    "name": "Recraft",
    "url": "https://www.recraft.ai/",
    "description": "AI design tool for designers, creatives, and teams to generate visuals.",
    "descriptionAr": "أداة تصميم ذكية للمصممين والمبدعين والفرق لتوليد المرئيات.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "microsoft-designer",
    "name": "Microsoft Designer",
    "url": "https://designer.microsoft.com/",
    "description": "AI-powered design tool by Microsoft for stunning visual designs.",
    "descriptionAr": "أداة تصميم مدعومة بالذكاء الاصطناعي من مايكروسوفت للتصاميم المرئية المذهلة.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "autodraw",
    "name": "AutoDraw",
    "url": "https://www.autodraw.com/",
    "description": "Google's AI drawing tool that turns rough sketches into professional icons.",
    "descriptionAr": "أداة رسم ذكية من جوجل تحول الرسومات التقريبية إلى رموز احترافية.",
    "subjects": [
      "Art"
    ],
    "categories": [
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "art-coloring-book",
    "name": "Google Arts & Culture Coloring Book",
    "url": "https://artsandculture.google.com/experiment/art-coloring-book/1QGsh6vSfAQBgQ",
    "description": "Interactive art coloring book experiment from Google Arts & Culture.",
    "descriptionAr": "تجربة كتاب تلوين فني تفاعلي من Google Arts & Culture.",
    "subjects": [
      "Art"
    ],
    "categories": [
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "i2img",
    "name": "i2IMG",
    "url": "https://www.i2img.com/",
    "description": "Free online image tools for editing, converting, and enhancing images.",
    "descriptionAr": "أدوات صور مجانية عبر الإنترنت لتعديل وتحويل وتحسين الصور.",
    "subjects": [],
    "categories": [
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "adobe-express",
    "name": "Adobe Express",
    "url": "https://www.adobe.com/express/",
    "description": "AI-powered creative tool for quick design, video, and content creation.",
    "descriptionAr": "أداة إبداعية مدعومة بالذكاء الاصطناعي للتصميم السريع وإنشاء المحتوى.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "heygen",
    "name": "HeyGen",
    "url": "https://www.heygen.com/",
    "description": "AI video generator that creates professional videos with AI avatars.",
    "descriptionAr": "مولد فيديو ذكي ينشئ فيديوهات احترافية باستخدام صور رمزية ذكية.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Video Generation",
      "Lip Sync"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "runway",
    "name": "Runway",
    "url": "https://runwayml.com/",
    "description": "AI creative platform for video generation, editing, and visual effects.",
    "descriptionAr": "منصة إبداعية ذكية لتوليد الفيديو والتعديل والمؤثرات البصرية.",
    "subjects": [],
    "categories": [
      "Video Generation"
    ],
    "type": "ai"
  },
  {
    "id": "vheer",
    "name": "Vheer",
    "url": "https://www.vheer.com/",
    "description": "Free AI image & video generator online — unlimited with no signup.",
    "descriptionAr": "مولد صور وفيديوهات ذكي مجاني عبر الإنترنت بدون تسجيل.",
    "subjects": [],
    "categories": [
      "Video Generation"
    ],
    "type": "ai"
  },
  {
    "id": "dreamface",
    "name": "Dreamface",
    "url": "https://dreamfaceapp.com/",
    "description": "Fast AI video generator for creating lip-sync and avatar videos.",
    "descriptionAr": "مولد فيديو ذكي سريع لإنشاء فيديوهات مزامنة الشفاه والصور الرمزية.",
    "subjects": [],
    "categories": [
      "Video Generation",
      "Lip Sync"
    ],
    "type": "ai"
  },
  {
    "id": "unscreen",
    "name": "Unscreen",
    "url": "https://www.unscreen.com/",
    "description": "Remove video backgrounds automatically using AI technology.",
    "descriptionAr": "إزالة خلفيات الفيديو تلقائيًا باستخدام تقنية الذكاء الاصطناعي.",
    "subjects": [],
    "categories": [
      "Video Generation"
    ],
    "type": "ai"
  },
  {
    "id": "hailo",
    "name": "Hailo AI",
    "url": "https://hailo.ai/",
    "description": "AI video generation platform for creating educational video content.",
    "descriptionAr": "منصة توليد فيديو ذكية لإنشاء محتوى فيديو تعليمي.",
    "subjects": [],
    "categories": [
      "Video Generation"
    ],
    "type": "ai"
  },
  {
    "id": "kreadoai",
    "name": "Kreado AI",
    "url": "https://www.kreadoai.com/",
    "description": "AI video creation tool with multilingual digital avatars.",
    "descriptionAr": "أداة إنشاء فيديو ذكية مع صور رمزية رقمية متعددة اللغات.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Video Generation",
      "Lip Sync"
    ],
    "type": "ai"
  },
  {
    "id": "magichour",
    "name": "Magic Hour",
    "url": "https://magichour.ai/",
    "description": "AI video generation and face-swap tool for creative content.",
    "descriptionAr": "أداة توليد فيديو ذكية وتبديل الوجوه للمحتوى الإبداعي.",
    "subjects": [],
    "categories": [
      "Video Generation"
    ],
    "type": "ai"
  },
  {
    "id": "hedra",
    "name": "Hedra",
    "url": "https://www.hedra.com/",
    "description": "AI video platform for creating talking-head videos from text.",
    "descriptionAr": "منصة فيديو ذكية لإنشاء فيديوهات متحدثة من النص.",
    "subjects": [],
    "categories": [
      "Video Generation",
      "Lip Sync"
    ],
    "type": "ai"
  },
  {
    "id": "flow",
    "name": "Flow (Google Labs)",
    "url": "https://labs.google/fx/tools/flow",
    "description": "Google Labs AI tool for creating music, sounds, and video effects.",
    "descriptionAr": "أداة مختبرات جوجل الذكية لإنشاء الموسيقى والأصوات والمؤثرات.",
    "subjects": [],
    "categories": [
      "Video Generation",
      "Text to Speech",
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "onceuponabot",
    "name": "Once Upon a Bot",
    "url": "https://onceuponabot.com/",
    "description": "AI tool to create children's stories with illustrations automatically.",
    "descriptionAr": "أداة ذكاء اصطناعي لإنشاء قصص أطفال مع رسوم توضيحية تلقائيًا.",
    "subjects": [
      "Library"
    ],
    "categories": [
      "Story Book Creation"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "gemini-storybook",
    "name": "Gemini Storybook",
    "url": "https://gemini.google/overview/storybook/",
    "description": "Google Gemini's storybook creator for interactive children's stories.",
    "descriptionAr": "منشئ كتب القصص من جوجل جيميني للقصص التفاعلية للأطفال.",
    "subjects": [
      "Library"
    ],
    "categories": [
      "Story Book Creation"
    ],
    "type": "ai"
  },
  {
    "id": "flipbookpdf",
    "name": "FlipBook PDF",
    "url": "https://www.flipbookpdf.net/",
    "description": "Convert PDFs to interactive flipbooks for engaging reading experiences.",
    "descriptionAr": "تحويل ملفات PDF إلى كتب تفاعلية لتجارب قراءة جذابة.",
    "subjects": [
      "Library"
    ],
    "categories": [
      "Story Book Creation"
    ],
    "type": "edtech"
  },
  {
    "id": "heyzine",
    "name": "Heyzine Flipbooks",
    "url": "https://heyzine.com/",
    "description": "Online flipbook maker to convert PDFs into interactive flipbooks.",
    "descriptionAr": "صانع كتب تفاعلية عبر الإنترنت لتحويل ملفات PDF إلى كتب قابلة للتصفح.",
    "subjects": [
      "Library"
    ],
    "categories": [
      "Story Book Creation"
    ],
    "type": "edtech"
  },
  {
    "id": "book-creator",
    "name": "Book Creator",
    "url": "https://bookcreator.com/",
    "description": "App for creating interactive digital books for education and storytelling.",
    "descriptionAr": "تطبيق لإنشاء كتب رقمية تفاعلية للتعليم وسرد القصص.",
    "subjects": [
      "Library"
    ],
    "categories": [
      "Story Book Creation"
    ],
    "type": "edtech"
  },
  {
    "id": "literacycloud",
    "name": "Literacy Cloud",
    "url": "https://literacycloud.org/stories",
    "description": "Free digital stories library for children in multiple languages.",
    "descriptionAr": "مكتبة قصص رقمية مجانية للأطفال بعدة لغات.",
    "subjects": [
      "Library"
    ],
    "categories": [
      "Story Book Creation"
    ],
    "type": "edtech"
  },
  {
    "id": "hindawi-books",
    "name": "هنداوي - كل الكتب",
    "url": "https://www.hindawi.org/books/",
    "description": "Free Arabic books library from Hindawi Foundation covering all subjects.",
    "descriptionAr": "مكتبة كتب عربية مجانية من مؤسسة هنداوي تغطي جميع المواضيع.",
    "subjects": [
      "Library"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "elevenlabs",
    "name": "ElevenLabs",
    "url": "https://elevenlabs.io/",
    "description": "AI voice generator and text-to-speech platform with realistic voices.",
    "descriptionAr": "مولد صوت ذكي ومنصة تحويل النص إلى كلام بأصوات واقعية.",
    "subjects": [],
    "categories": [
      "Text to Speech"
    ],
    "type": "ai",
    "topPick": true
  },
  {
    "id": "musicgpt",
    "name": "MusicGPT",
    "url": "https://musicgpt.com/",
    "description": "AI music and sound generator for creating educational audio content.",
    "descriptionAr": "مولد موسيقى وأصوات ذكي لإنشاء محتوى صوتي تعليمي.",
    "subjects": [
      "Music"
    ],
    "categories": [
      "Text to Speech"
    ],
    "type": "ai"
  },
  {
    "id": "suno",
    "name": "Suno",
    "url": "https://suno.com/",
    "description": "AI music creation platform for generating songs and audio tracks.",
    "descriptionAr": "منصة إنشاء موسيقى ذكية لتوليد الأغاني والمقاطع الصوتية.",
    "subjects": [
      "Music"
    ],
    "categories": [
      "Text to Speech"
    ],
    "type": "ai"
  },
  {
    "id": "googlelabsfx",
    "name": "Google Labs FX",
    "url": "https://labs.google/fx",
    "description": "Google's experimental AI tools for audio and creative effects.",
    "descriptionAr": "أدوات جوجل التجريبية الذكية للصوت والمؤثرات الإبداعية.",
    "subjects": [
      "Music"
    ],
    "categories": [
      "Text to Speech"
    ],
    "type": "ai"
  },
  {
    "id": "generateprompt",
    "name": "Generate Prompt AI",
    "url": "https://generateprompt.ai/",
    "description": "Free AI prompt generator for ChatGPT, Claude, and Gemini.",
    "descriptionAr": "مولد أوامر ذكاء اصطناعي مجاني لـ ChatGPT وClaude وGemini.",
    "subjects": [],
    "categories": [
      "Prompt Maker"
    ],
    "type": "ai"
  },
  {
    "id": "feedough-prompt",
    "name": "Feedough Prompt Generator",
    "url": "https://www.feedough.com/ai-prompt-generator/",
    "description": "Free unlimited AI prompt generator with no login required.",
    "descriptionAr": "مولد أوامر ذكاء اصطناعي مجاني وغير محدود بدون تسجيل دخول.",
    "subjects": [],
    "categories": [
      "Prompt Maker"
    ],
    "type": "ai"
  },
  {
    "id": "i2pdf",
    "name": "i2PDF",
    "url": "https://www.i2pdf.com/",
    "description": "Free online PDF tools for converting, editing, and managing documents.",
    "descriptionAr": "أدوات PDF مجانية عبر الإنترنت لتحويل وتعديل وإدارة المستندات.",
    "subjects": [],
    "categories": [
      "Text Generation"
    ],
    "type": "ai"
  },
  {
    "id": "colorbliss",
    "name": "ColorBliss",
    "url": "https://app.colorbliss.com/",
    "description": "AI coloring page generator for creative and educational art activities.",
    "descriptionAr": "مولد صفحات تلوين ذكي للأنشطة الفنية الإبداعية والتعليمية.",
    "subjects": [
      "Art"
    ],
    "categories": [
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "sketch-meta",
    "name": "Animated Drawings (Meta)",
    "url": "https://sketch.metademolab.com/",
    "description": "Turn children's drawings into animations using Meta's AI technology.",
    "descriptionAr": "تحويل رسومات الأطفال إلى رسوم متحركة باستخدام تقنية ميتا الذكية.",
    "subjects": [
      "Art"
    ],
    "categories": [
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "kahoot",
    "name": "Kahoot",
    "url": "https://kahoot.com/",
    "description": "Game-based learning platform for creating engaging quizzes and competitions.",
    "descriptionAr": "منصة تعلم قائمة على الألعاب لإنشاء اختبارات ومسابقات تفاعلية.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech",
    "topPick": true
  },
  {
    "id": "ictgames",
    "name": "ICT Games",
    "url": "https://ictgames.com/",
    "description": "Free educational games for primary school children in math and literacy.",
    "descriptionAr": "ألعاب تعليمية مجانية للأطفال في الرياضيات والمحو الأمية.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech",
    "gradeLevel": "kg"
  },
  {
    "id": "canva",
    "name": "Canva",
    "url": "https://www.canva.com/",
    "description": "Online design platform for creating presentations, posters, and educational visuals.",
    "descriptionAr": "منصة تصميم عبر الإنترنت لإنشاء العروض التقديمية والملصقات والمرئيات التعليمية.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Image Generation"
    ],
    "type": "edtech",
    "topPick": true
  },
  {
    "id": "genially",
    "name": "Genially",
    "url": "https://genial.ly/",
    "description": "Create interactive content like presentations, infographics, and gamified experiences.",
    "descriptionAr": "إنشاء محتوى تفاعلي مثل العروض التقديمية والرسوم البيانية والتجارب المُلعبة.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Presentation",
      "Gamification"
    ],
    "type": "edtech",
    "topPick": true
  },
  {
    "id": "wizer",
    "name": "Wizer.me",
    "url": "https://app.wizer.me/",
    "description": "Create interactive digital worksheets with multimedia elements for any subject.",
    "descriptionAr": "إنشاء أوراق عمل رقمية تفاعلية مع عناصر وسائط متعددة لأي مادة.",
    "subjects": [],
    "categories": [
      "Quizzes and Worksheets"
    ],
    "type": "edtech",
    "topPick": true,
    "gradeLevel": "upper"
  },
  {
    "id": "gynzy",
    "name": "Gynzy",
    "url": "https://www.gynzy.com/en",
    "description": "Online teaching platform for interactive whiteboards with ready-made lessons.",
    "descriptionAr": "منصة تدريس عبر الإنترنت للسبورات التفاعلية مع دروس جاهزة.",
    "subjects": [
      "Math",
      "Science"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech",
    "topPick": true
  },
  {
    "id": "liveworksheets",
    "name": "LiveWorksheets",
    "url": "https://www.liveworksheets.com/",
    "description": "Create and search interactive worksheets in 120+ languages.",
    "descriptionAr": "إنشاء والبحث عن أوراق عمل تفاعلية بأكثر من 120 لغة.",
    "subjects": [],
    "categories": [
      "Quizzes and Worksheets"
    ],
    "type": "edtech",
    "topPick": true,
    "gradeLevel": "both"
  },
  {
    "id": "kiddoworksheets",
    "name": "Kiddo Worksheets",
    "url": "https://www.kiddoworksheets.com/",
    "description": "Free printable worksheets for kids covering various subjects and skills.",
    "descriptionAr": "أوراق عمل قابلة للطباعة مجانية للأطفال تغطي مواضيع ومهارات مختلفة.",
    "subjects": [],
    "categories": [
      "Quizzes and Worksheets"
    ],
    "type": "edtech",
    "gradeLevel": "kg"
  },
  {
    "id": "educaplay",
    "name": "Educaplay",
    "url": "https://www.educaplay.com/",
    "description": "Create educational games and multimedia activities for the classroom.",
    "descriptionAr": "إنشاء ألعاب تعليمية وأنشطة وسائط متعددة للفصول الدراسية.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech",
    "topPick": true
  },
  {
    "id": "tinytap",
    "name": "TinyTap",
    "url": "https://www.tinytap.com/",
    "description": "Platform for creating and sharing interactive educational games.",
    "descriptionAr": "منصة لإنشاء ومشاركة الألعاب التعليمية التفاعلية.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "pinkcatgames",
    "name": "Pink Cat Games",
    "url": "https://www.pinkcatgames.com/",
    "description": "Fun educational games that keep learners engaged across subjects.",
    "descriptionAr": "ألعاب تعليمية ممتعة تحافظ على تفاعل المتعلمين عبر المواد.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "typingbird",
    "name": "Typing Bird",
    "url": "https://typingbird.com/",
    "description": "Free online typing games for kids to improve keyboard skills.",
    "descriptionAr": "ألعاب كتابة مجانية عبر الإنترنت للأطفال لتحسين مهارات لوحة المفاتيح.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "typinggameszone",
    "name": "Typing Games Zone",
    "url": "https://www.typinggames.zone/",
    "description": "Collection of typing games to practice and improve typing speed.",
    "descriptionAr": "مجموعة ألعاب كتابة للتدريب وتحسين سرعة الكتابة.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "nearpod",
    "name": "Nearpod",
    "url": "https://nearpod.com/",
    "description": "Interactive lesson platform with real-time student engagement tools.",
    "descriptionAr": "منصة دروس تفاعلية مع أدوات مشاركة الطلاب في الوقت الفعلي.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "blooket",
    "name": "Blooket",
    "url": "https://www.blooket.com/",
    "description": "Gamified quiz platform where students compete while learning.",
    "descriptionAr": "منصة اختبارات مُلعبة حيث يتنافس الطلاب أثناء التعلم.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech",
    "topPick": true
  },
  {
    "id": "baamboozle",
    "name": "Baamboozle",
    "url": "https://www.baamboozle.com/",
    "description": "Free game-based learning platform for classroom engagement.",
    "descriptionAr": "منصة تعلم قائمة على الألعاب مجانية لتفاعل الفصل الدراسي.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "anton",
    "name": "ANTON",
    "url": "https://anton.app/en_us/",
    "description": "Free learning app with lessons in math, science, languages, and more.",
    "descriptionAr": "تطبيق تعلم مجاني مع دروس في الرياضيات والعلوم واللغات والمزيد.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "education-games",
    "name": "Education.com Games",
    "url": "https://www.education.com/resources/games/",
    "description": "Free educational games covering math, reading, and science for kids.",
    "descriptionAr": "ألعاب تعليمية مجانية تغطي الرياضيات والقراءة والعلوم للأطفال.",
    "subjects": [
      "Math",
      "Science"
    ],
    "categories": [
      "Gamification",
      "Quizzes and Worksheets"
    ],
    "type": "edtech",
    "gradeLevel": "kg"
  },
  {
    "id": "sesamestreet",
    "name": "Sesame Street",
    "url": "https://www.sesamestreet.org/",
    "description": "Preschool games, videos, and activities to help kids grow smarter.",
    "descriptionAr": "ألعاب وفيديوهات وأنشطة لمرحلة ما قبل المدرسة لمساعدة الأطفال على النمو.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "pbskids",
    "name": "PBS Kids",
    "url": "https://pbskids.org/",
    "description": "Educational games and videos for children from PBS.",
    "descriptionAr": "ألعاب وفيديوهات تعليمية للأطفال من PBS.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "topmarks",
    "name": "Top Marks",
    "url": "https://www.topmarks.co.uk/",
    "description": "Educational games and resources for primary school students.",
    "descriptionAr": "ألعاب وموارد تعليمية لطلاب المرحلة الابتدائية.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "flippity",
    "name": "Flippity",
    "url": "https://www.flippity.net/",
    "description": "Turn Google Sheets into flashcards, quiz games, and interactive activities.",
    "descriptionAr": "تحويل جداول بيانات جوجل إلى بطاقات تعليمية وألعاب اختبارات وأنشطة تفاعلية.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "roomrecess",
    "name": "Room Recess",
    "url": "https://www.roomrecess.com/",
    "description": "Free educational games for elementary students in various subjects.",
    "descriptionAr": "ألعاب تعليمية مجانية لطلاب المرحلة الابتدائية في مواضيع مختلفة.",
    "subjects": [
      "Math"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "toytheater",
    "name": "Toy Theater",
    "url": "https://toytheater.com/",
    "description": "Free online educational games for early learners and elementary students.",
    "descriptionAr": "ألعاب تعليمية مجانية عبر الإنترنت للمتعلمين الصغار وطلاب المرحلة الابتدائية.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "wayground",
    "name": "Wayground",
    "url": "https://wayground.com/",
    "description": "Interactive educational games platform for classroom engagement.",
    "descriptionAr": "منصة ألعاب تعليمية تفاعلية لتفاعل الفصل الدراسي.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "coolkindergarten",
    "name": "Cool Kindergarten",
    "url": "https://www.coolkindergarten.com/",
    "description": "Fun math, ABC, and learning games for kindergarten kids online.",
    "descriptionAr": "ألعاب رياضيات وحروف وتعلم ممتعة لأطفال الروضة عبر الإنترنت.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "99math",
    "name": "99math",
    "url": "https://99math.com/",
    "description": "Free multiplayer math game for engaging classroom competitions.",
    "descriptionAr": "لعبة رياضيات متعددة اللاعبين مجانية لمسابقات الفصل الدراسي الجذابة.",
    "subjects": [
      "Math"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "phet",
    "name": "PhET Simulations",
    "url": "https://phet.colorado.edu/",
    "description": "Free interactive math and science simulations from University of Colorado.",
    "descriptionAr": "محاكيات رياضيات وعلوم تفاعلية مجانية من جامعة كولورادو.",
    "subjects": [
      "Math",
      "Science"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech",
    "topPick": true
  },
  {
    "id": "assemblr",
    "name": "Assemblr",
    "url": "https://www.assemblrworld.com/",
    "description": "Create augmented reality content easily for education.",
    "descriptionAr": "إنشاء محتوى واقع معزز بسهولة للتعليم.",
    "subjects": [],
    "categories": [
      "VR and AR"
    ],
    "type": "edtech"
  },
  {
    "id": "victoryxr",
    "name": "VictoryXR",
    "url": "https://www.victoryxr.com/",
    "description": "Virtual and augmented reality educational experiences for schools.",
    "descriptionAr": "تجارب تعليمية بالواقع الافتراضي والمعزز للمدارس.",
    "subjects": [],
    "categories": [
      "VR and AR"
    ],
    "type": "edtech"
  },
  {
    "id": "polypad",
    "name": "Polypad",
    "url": "https://mathigon.org/polypad",
    "description": "Virtual math manipulatives for interactive geometry and algebra.",
    "descriptionAr": "أدوات رياضيات افتراضية للهندسة والجبر التفاعلي.",
    "subjects": [
      "Math"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "cymath",
    "name": "Cymath",
    "url": "https://www.cymath.com/",
    "description": "Math problem solver with step-by-step solutions for algebra and calculus.",
    "descriptionAr": "حل مسائل رياضيات مع حلول خطوة بخطوة للجبر والتفاضل.",
    "subjects": [
      "Math"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "oryx",
    "name": "Oryx Learning",
    "url": "https://oryxlearning.com/",
    "description": "Math lessons, practice materials, and interactive activities.",
    "descriptionAr": "دروس رياضيات ومواد تدريب وأنشطة تفاعلية.",
    "subjects": [
      "Math"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "geogebra",
    "name": "GeoGebra",
    "url": "https://www.geogebra.org/classic",
    "description": "Dynamic mathematics software for geometry, algebra, and calculus.",
    "descriptionAr": "برنامج رياضيات ديناميكي للهندسة والجبر والتفاضل والتكامل.",
    "subjects": [
      "Math"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "gliglish",
    "name": "Gliglish",
    "url": "https://gliglish.com/",
    "description": "Free AI language teacher for practicing speaking in multiple languages.",
    "descriptionAr": "معلم لغة ذكي مجاني لممارسة التحدث بلغات متعددة.",
    "subjects": [],
    "categories": [
      "Chatbots"
    ],
    "type": "ai"
  },
  {
    "id": "elsa",
    "name": "ELSA Speak",
    "url": "https://elsaspeak.com/",
    "description": "AI-powered app to improve English speaking and pronunciation.",
    "descriptionAr": "تطبيق مدعوم بالذكاء الاصطناعي لتحسين التحدث والنطق بالإنجليزية.",
    "subjects": [],
    "categories": [
      "Chatbots",
      "Text to Speech"
    ],
    "type": "ai"
  },
  {
    "id": "quickdraw",
    "name": "Quick, Draw!",
    "url": "https://quickdraw.withgoogle.com/",
    "description": "Google's AI drawing game — draw and let AI guess what you drew.",
    "descriptionAr": "لعبة رسم جوجل الذكية — ارسم ودع الذكاء الاصطناعي يخمن ما رسمته.",
    "subjects": [
      "Art"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "ai"
  },
  {
    "id": "musclewiki",
    "name": "MuscleWiki",
    "url": "https://musclewiki.com/",
    "description": "Free exercise library with interactive muscle map for PE teachers.",
    "descriptionAr": "مكتبة تمارين مجانية مع خريطة عضلات تفاعلية لمعلمي التربية البدنية.",
    "subjects": [
      "PE"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "muscleandstrength",
    "name": "Muscle & Strength",
    "url": "https://www.muscleandstrength.com/",
    "description": "Exercise library and workout plans for physical education.",
    "descriptionAr": "مكتبة تمارين وخطط تمارين للتربية البدنية.",
    "subjects": [
      "PE"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "jefit",
    "name": "JEFIT",
    "url": "https://www.jefit.com/",
    "description": "Workout planner and tracking app for fitness and PE programs.",
    "descriptionAr": "تطبيق تخطيط وتتبع التمارين لبرامج اللياقة والتربية البدنية.",
    "subjects": [
      "PE"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "musicca",
    "name": "Musicca",
    "url": "https://www.musicca.com/",
    "description": "Learn music theory for free with interactive exercises and tools.",
    "descriptionAr": "تعلم نظرية الموسيقى مجانًا مع تمارين وأدوات تفاعلية.",
    "subjects": [
      "Music"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "artsandculture",
    "name": "Google Arts & Culture",
    "url": "https://artsandculture.google.com/",
    "description": "Explore art, culture, and history through virtual tours and interactive exhibits.",
    "descriptionAr": "استكشاف الفن والثقافة والتاريخ من خلال الجولات الافتراضية والمعارض التفاعلية.",
    "subjects": [],
    "categories": [
      "VR and AR",
      "Gamification"
    ],
    "type": "edtech",
    "topPick": true
  },
  {
    "id": "natgeomapmaker",
    "name": "National Geographic Map Maker",
    "url": "https://education.nationalgeographic.org/resource/mapmaker/",
    "description": "Create custom maps for geography and social studies lessons.",
    "descriptionAr": "إنشاء خرائط مخصصة لدروس الجغرافيا والدراسات الاجتماعية.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "templatemaker",
    "name": "Template Maker",
    "url": "https://www.templatemaker.nl/en/",
    "description": "Create custom paper toy templates and 3D paper craft designs.",
    "descriptionAr": "إنشاء قوالب ألعاب ورقية مخصصة وتصميمات حرف ورقية ثلاثية الأبعاد.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "edtech"
  },
  {
    "id": "semantris",
    "name": "Semantris (Google)",
    "url": "https://research.google.com/semantris/",
    "description": "Google's AI word association game for vocabulary and language learning.",
    "descriptionAr": "لعبة ربط الكلمات الذكية من جوجل لتعلم المفردات واللغات.",
    "subjects": [],
    "categories": [
      "Gamification"
    ],
    "type": "ai"
  },
  {
    "id": "lovable",
    "name": "Lovable",
    "url": "https://lovable.dev/",
    "description": "AI-powered web app builder for creating websites and applications.",
    "descriptionAr": "أداة بناء تطبيقات ويب مدعومة بالذكاء الاصطناعي لإنشاء مواقع وتطبيقات.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Courses"
    ],
    "type": "ai"
  },
  {
    "id": "google-certs",
    "name": "Grow with Google",
    "url": "https://grow.google/certificates/",
    "description": "Google career certificates and scholarships for professional development.",
    "descriptionAr": "شهادات جوجل المهنية والمنح الدراسية للتطوير المهني.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Courses"
    ],
    "type": "edtech"
  },
  {
    "id": "microsoft-learn",
    "name": "Microsoft Learn",
    "url": "https://learn.microsoft.com/en-us/training/",
    "description": "Free training courses, learning paths, and certifications from Microsoft.",
    "descriptionAr": "دورات تدريبية مجانية ومسارات تعلم وشهادات من مايكروسوفت.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Courses"
    ],
    "type": "edtech"
  },
  {
    "id": "slidesmania-games",
    "name": "SlidesMania Games",
    "url": "https://slidesmania.com/tag/games/",
    "description": "Free interactive game templates for Google Slides and PowerPoint presentations.",
    "descriptionAr": "قوالب ألعاب تفاعلية مجانية لعروض جوجل سلايدز وباوربوينت.",
    "subjects": [],
    "categories": [
      "Presentation"
    ],
    "type": "edtech"
  },
  {
    "id": "anjez",
    "name": "انجز",
    "url": "https://anjez.org/",
    "description": "Arabic PowerPoint templates website for professional presentations.",
    "descriptionAr": "موقع قوالب بوربوينت باللغة العربية للعروض التقديمية الاحترافية.",
    "subjects": [],
    "categories": [
      "Presentation"
    ],
    "type": "edtech"
  },
  {
    "id": "slidesgo",
    "name": "SlidesGo",
    "url": "https://slidesgo.com/",
    "description": "Free Google Slides and PowerPoint templates for stunning presentations.",
    "descriptionAr": "قوالب مجانية لجوجل سلايدز وباوربوينت لعروض تقديمية مذهلة.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Presentation"
    ],
    "type": "edtech"
  },
  {
    "id": "prezi",
    "name": "Prezi",
    "url": "https://prezi.com/",
    "description": "AI presentation maker for engaging, dynamic, and interactive presentations.",
    "descriptionAr": "صانع عروض تقديمية ذكي لعروض جذابة وديناميكية وتفاعلية.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Presentation"
    ],
    "type": "ai"
  },
  {
    "id": "delightex",
    "name": "Delightex Edu",
    "url": "https://edu.delightex.com/",
    "description": "Interactive 3D and VR learning platform for education.",
    "descriptionAr": "منصة تعلم تفاعلية ثلاثية الأبعاد والواقع الافتراضي للتعليم.",
    "subjects": [],
    "categories": [
      "VR and AR"
    ],
    "type": "edtech"
  },
  {
    "id": "abby-the-pup",
    "name": "Abby the Pup",
    "url": "https://www.abbythepup.com/",
    "description": "Free kindergarten and preschool printables for early learners.",
    "descriptionAr": "مطبوعات مجانية لرياض الأطفال وما قبل المدرسة للمتعلمين الصغار.",
    "subjects": [],
    "categories": [
      "Quizzes and Worksheets"
    ],
    "type": "edtech",
    "gradeLevel": "kg"
  },
  {
    "id": "presentations-ai",
    "name": "Presentations.AI",
    "url": "https://www.presentations.ai/",
    "description": "Best AI presentation maker and slide creator for professional presentations.",
    "descriptionAr": "أفضل صانع عروض تقديمية بالذكاء الاصطناعي ومنشئ شرائح للعروض الاحترافية.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Presentation"
    ],
    "type": "ai"
  },
  {
    "id": "taysteachingtoolkit",
    "name": "Tays Teaching Toolkit",
    "url": "https://taysteachingtoolkit.com/collection/free-powerpoint-games",
    "description": "Free PowerPoint games collection for interactive classroom presentations.",
    "descriptionAr": "مجموعة ألعاب باوربوينت مجانية للعروض التقديمية التفاعلية في الفصل.",
    "subjects": [],
    "categories": [
      "Presentation"
    ],
    "type": "edtech"
  },
  {
    "id": "sora",
    "name": "Sora",
    "url": "https://sora.com/",
    "description": "OpenAI's AI model for generating realistic videos and images from text.",
    "descriptionAr": "نموذج الذكاء الاصطناعي من OpenAI لتوليد فيديوهات وصور واقعية من النص.",
    "subjects": [],
    "categories": [
      "Image Generation"
    ],
    "type": "ai"
  },
  {
    "id": "leonardo",
    "name": "Leonardo.Ai",
    "url": "https://leonardo.ai/",
    "description": "AI platform for generating images, videos, and designs with creative control.",
    "descriptionAr": "منصة ذكاء اصطناعي لتوليد الصور والفيديوهات والتصاميم مع تحكم إبداعي.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Image Generation",
      "Video Generation"
    ],
    "type": "ai"
  },
  {
    "id": "roboneo",
    "name": "RoboNeo",
    "url": "https://roboneo.com/",
    "description": "AI visual design agent for creating stunning graphics and video content.",
    "descriptionAr": "عميل تصميم بصري ذكي لإنشاء رسومات ومحتوى فيديو مذهل.",
    "subjects": [
      "Business"
    ],
    "categories": [
      "Video Generation"
    ],
    "type": "ai"
  },
  {
    "id": "movieflow",
    "name": "MovieFlow",
    "url": "https://movieflow.ai/",
    "description": "AI movie studio for creating professional video content easily.",
    "descriptionAr": "استوديو أفلام ذكي لإنشاء محتوى فيديو احترافي بسهولة.",
    "subjects": [],
    "categories": [
      "Video Generation"
    ],
    "type": "ai"
  },
  {
    "id": "biodigital",
    "name": "BioDigital Human",
    "url": "https://human.biodigital.com/login?returnUrl=/explore",
    "description": "Interactive 3D platform exploring human anatomy, health, and disease.",
    "descriptionAr": "منصة ثلاثية الأبعاد تفاعلية لاستكشاف تشريح الإنسان والصحة والأمراض.",
    "subjects": [
      "Science"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "cells-alive",
    "name": "CELLS alive!",
    "url": "https://www.cellsalive.com/",
    "description": "Interactive cell biology and microbiology learning resources.",
    "descriptionAr": "موارد تعليمية تفاعلية لعلم الأحياء الخلوي والميكروبيولوجيا.",
    "subjects": [
      "Science"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "smart-servier",
    "name": "SMART - Servier Medical ART",
    "url": "https://smart.servier.com/",
    "description": "Free medical illustrations and anatomy graphics for educational use.",
    "descriptionAr": "رسوم توضيحية طبية وتشريحية مجانية للاستخدام التعليمي.",
    "subjects": [
      "Science"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "abcya",
    "name": "ABCya!",
    "url": "https://www.abcya.com/",
    "description": "Educational learning games and apps for kids across subjects.",
    "descriptionAr": "ألعاب وتطبيقات تعليمية للأطفال عبر المواد المختلفة.",
    "subjects": [
      "Math"
    ],
    "categories": [
      "Gamification"
    ],
    "type": "edtech",
    "gradeLevel": "kg"
  },
  {
    "id": "labxchange",
    "name": "LabXchange",
    "url": "https://www.labxchange.org/",
    "description": "Free online science education platform with virtual labs and lessons.",
    "descriptionAr": "منصة تعليمية علمية مجانية عبر الإنترنت مع مختبرات افتراضية ودروس.",
    "subjects": [
      "Science"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "vlaby",
    "name": "VLaby",
    "url": "https://vlaby.com/",
    "description": "Virtual science lab platform for interactive experiments and simulations.",
    "descriptionAr": "منصة مختبر علمي افتراضي للتجارب والمحاكاات التفاعلية.",
    "subjects": [
      "Science"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "quivervision",
    "name": "QuiverVision",
    "url": "https://quivervision.com/",
    "description": "3D augmented reality coloring apps that bring drawings to life.",
    "descriptionAr": "تطبيقات تلوين بالواقع المعزز ثلاثي الأبعاد تجعل الرسومات تنبض بالحياة.",
    "subjects": [
      "Science",
      "Art"
    ],
    "categories": [
      "VR and AR"
    ],
    "type": "edtech"
  },
  {
    "id": "pictoblox",
    "name": "PictoBlox",
    "url": "https://thestempedia.com/product/pictoblox/",
    "description": "Block-based coding platform to learn programming and program robots.",
    "descriptionAr": "منصة برمجة قائمة على الكتل لتعلم البرمجة وبرمجة الروبوتات.",
    "subjects": [
      "ICT"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "scratch",
    "name": "Scratch",
    "url": "https://scratch.mit.edu/",
    "description": "Visual programming language for kids to create stories, games, and animations.",
    "descriptionAr": "لغة برمجة مرئية للأطفال لإنشاء القصص والألعاب والرسوم المتحركة.",
    "subjects": [
      "ICT"
    ],
    "categories": [],
    "type": "edtech",
    "topPick": true
  },
  {
    "id": "hour-of-code",
    "name": "Hour of Code",
    "url": "https://hourofcode.com/",
    "description": "One-hour introductions to computer science designed for all ages.",
    "descriptionAr": "مقدمات لمدة ساعة في علوم الكمبيوتر مصممة لجميع الأعمار.",
    "subjects": [
      "ICT"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "minecraft-education",
    "name": "Minecraft Education",
    "url": "https://education.minecraft.net/en-us/get-started/download",
    "description": "Game-based learning platform that promotes creativity and coding.",
    "descriptionAr": "منصة تعلم قائمة على اللعب تعزز الإبداع والبرمجة.",
    "subjects": [
      "ICT"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "makecode-microbit",
    "name": "Microsoft MakeCode for micro:bit",
    "url": "https://makecode.microbit.org/",
    "description": "Block-based and JavaScript coding environment for the micro:bit.",
    "descriptionAr": "بيئة برمجة بالكتل وجافا سكريبت لجهاز micro:bit.",
    "subjects": [
      "ICT"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "tinkercad",
    "name": "Tinkercad",
    "url": "https://www.tinkercad.com/",
    "description": "Free online 3D design, electronics, and coding tool for learners.",
    "descriptionAr": "أداة مجانية للتصميم ثلاثي الأبعاد والإلكترونيات والبرمجة عبر الإنترنت.",
    "subjects": [
      "ICT"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "madinah-arabic-pronoun",
    "name": "Madinah Arabic - Pronoun Quiz",
    "url": "https://mainsite.madinaharabic.com/Arabic_Language_Course/Quizzes/Beg_Q_Pronoun_1.html",
    "description": "Beginner Arabic quiz on pronouns.",
    "descriptionAr": "اختبار مبتدئ في اللغة العربية حول الضمائر.",
    "subjects": [
      "Arabic"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "wordwall-arabic-letters-1",
    "name": "Arabic Letters Game",
    "url": "https://wordwall.net/en/community/arabic-letters",
    "description": "Interactive Arabic letters teaching resources.",
    "descriptionAr": "موارد تعليمية تفاعلية لحروف اللغة العربية.",
    "subjects": [
      "Arabic"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "wordwall-arabic-letters-2",
    "name": "Arabic Letters - موارد تعليمية",
    "url": "https://wordwall.net/ar/community/arabic-letters",
    "description": "Arabic letters interactive teaching resources.",
    "descriptionAr": "موارد تعليمية تفاعلية لحروف اللغة العربية.",
    "subjects": [
      "Arabic"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "wordwall-arabic-game",
    "name": "Arabic Game - Teaching Resources",
    "url": "https://wordwall.net/en/community/arabic",
    "description": "Interactive Arabic games and teaching resources.",
    "descriptionAr": "ألعاب وموارد تعليمية تفاعلية للغة العربية.",
    "subjects": [
      "Arabic"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "numue",
    "name": "NuMUE",
    "url": "https://numue.qcri.org/home/",
    "description": "Arabic language learning and assessment tools for students.",
    "descriptionAr": "أدوات تعلم وتقييم اللغة العربية للطلاب.",
    "subjects": [
      "Arabic"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "conjuguemos",
    "name": "Conjuguemos",
    "url": "https://conjuguemos.com/",
    "description": "Practice verb conjugation and vocabulary in many languages.",
    "descriptionAr": "تدرب على تصريف الأفعال والمفردات في عدة لغات.",
    "subjects": [
      "German",
      "French"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "language-gems",
    "name": "Language Gems",
    "url": "https://www.languagegems.com/",
    "description": "GCSE language learning games for Spanish, French and German.",
    "descriptionAr": "ألعاب تعلم اللغات الإسبانية والفرنسية والألمانية.",
    "subjects": [
      "German",
      "French"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "duolingo",
    "name": "Duolingo",
    "url": "https://www.duolingo.com/",
    "description": "World's most popular way to learn a language.",
    "descriptionAr": "أشهر طريقة لتعلم اللغات في العالم.",
    "subjects": [
      "German",
      "French",
      "English"
    ],
    "categories": [],
    "type": "edtech",
    "topPick": true
  },
  {
    "id": "phonics-stuff",
    "name": "Phonics & Stuff",
    "url": "https://www.phonicsandstuff.com/",
    "description": "Phonics and reading games for early learners.",
    "descriptionAr": "ألعاب الصوتيات والقراءة للمتعلمين الصغار.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech",
    "gradeLevel": "kg"
  },
  {
    "id": "gliglish-en",
    "name": "Gliglish",
    "url": "https://gliglish.com/",
    "description": "Free AI language teacher for speaking practice.",
    "descriptionAr": "معلم لغة بالذكاء الاصطناعي للتحدث.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "ai"
  },
  {
    "id": "elsa-en",
    "name": "ELSA Speak",
    "url": "https://elsaspeak.com/",
    "description": "Improve English speaking and pronunciation.",
    "descriptionAr": "تحسين التحدث والنطق بالإنجليزية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "ai"
  },
  {
    "id": "anton-en",
    "name": "ANTON",
    "url": "https://anton.app/en_us/",
    "description": "Free lessons in English, math, science and more.",
    "descriptionAr": "دروس مجانية في الإنجليزية والرياضيات والعلوم وغيرها.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "tefl-dates",
    "name": "TEFL.net - Dates Games",
    "url": "https://www.tefl.net/games/dates/",
    "description": "Games to practise dates in English.",
    "descriptionAr": "ألعاب للتدريب على التواريخ بالإنجليزية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "test-english-wh",
    "name": "A1 Wh Questions Grammar",
    "url": "https://test-english.com/grammar-points/a1/wh-questions/",
    "description": "Elementary level Wh-questions grammar practice.",
    "descriptionAr": "تدريبات قواعد أسئلة Wh للمستوى المبتدئ.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "test-english-usedto",
    "name": "Used to / Didn't Use to",
    "url": "https://test-english.com/grammar-points/a2/used-to-didnt-use-to/",
    "description": "Past habits and states - Test English.",
    "descriptionAr": "العادات والحالات السابقة - Test English.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "learnenglish-food",
    "name": "Food Names in English",
    "url": "https://7esl.com/food-names/",
    "description": "Food names with pictures and pronunciation.",
    "descriptionAr": "أسماء الأطعمة بالصور والنطق.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "lingoneo-cooking",
    "name": "Lingoneo - Cooking Together",
    "url": "https://www.lingoneo.org/learn-english/page-topic-page/page-cooking-together-1135/overview-of-the-learning-content-1135-30168",
    "description": "Learn English with the Cooking Together topic.",
    "descriptionAr": "تعلم الإنجليزية من خلال موضوع الطهي معًا.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "lingoneo-dialogues",
    "name": "Lingoneo - Dialogues",
    "url": "https://www.lingoneo.org/learn-english",
    "description": "Listen to English dialogues with Lingoneo.",
    "descriptionAr": "استمع إلى حوارات إنجليزية مع Lingoneo.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "ee-presents-future",
    "name": "Presents with Future Meaning",
    "url": "https://www.englishexercises.org/",
    "description": "English exercises on present forms with future meaning.",
    "descriptionAr": "تمارين على صيغ المضارع بمعنى المستقبل.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "natgeo-jane-goodall",
    "name": "Dr Jane Goodall Interview",
    "url": "https://www.natgeokids.com/uk/discover/animals/general-animals/dr-jane-goodall-interview/",
    "description": "National Geographic Kids interview with Jane Goodall.",
    "descriptionAr": "مقابلة ناشيونال جيوغرافيك للأطفال مع جين جودال.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "agendaweb-passive",
    "name": "Passive Voice Worksheets",
    "url": "https://agendaweb.org/verbs/passive-exercises.html",
    "description": "Printable passive voice exercises and handouts.",
    "descriptionAr": "تمارين وأوراق عمل المبني للمجهول.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "liveworksheets",
    "name": "LiveWorksheets",
    "url": "https://www.liveworksheets.com/",
    "description": "Interactive worksheets in 120 languages.",
    "descriptionAr": "أوراق عمل تفاعلية بـ 120 لغة.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "autumn-esl",
    "name": "Autumn ESL Vocabulary Worksheets",
    "url": "https://en.islcollective.com/english-esl-worksheets/search/autumn",
    "description": "Autumn vocabulary ESL worksheets.",
    "descriptionAr": "أوراق عمل مفردات الخريف للغة الإنجليزية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "esl-present-perfect",
    "name": "Present Perfect Ever/Never Games",
    "url": "https://www.teach-this.com/grammar-activities-worksheets/present-perfect-ever-never",
    "description": "Present perfect ever/never ESL games and worksheets.",
    "descriptionAr": "ألعاب وأوراق عمل المضارع التام.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "perfect-english-irregular",
    "name": "Irregular Verbs Exercise",
    "url": "https://www.perfect-english-grammar.com/irregular-verbs-exercise-1.html",
    "description": "Practice irregular verbs in English.",
    "descriptionAr": "تدريب على الأفعال الشاذة في الإنجليزية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "esl-conversation",
    "name": "ESL Conversation Questions",
    "url": "https://iteslj.org/questions/",
    "description": "ESL conversation questions and teacher resources.",
    "descriptionAr": "أسئلة محادثة وموارد للمعلمين.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "esl-printables",
    "name": "ESL Printables",
    "url": "https://www.eslprintables.com/",
    "description": "English worksheets, lesson plans and resources.",
    "descriptionAr": "أوراق عمل وخطط دروس وموارد للغة الإنجليزية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "adj-prepositions",
    "name": "Adjectives and Prepositions",
    "url": "https://www.englisch-hilfen.de/en/exercises/word_order/adjective_preposition.htm",
    "description": "Worksheet on adjectives with prepositions.",
    "descriptionAr": "ورقة عمل على الصفات مع حروف الجر.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "time-clauses",
    "name": "Time Clauses Worksheets",
    "url": "https://www.englishgrammar.org/time-clauses/",
    "description": "Time clauses grammar worksheets.",
    "descriptionAr": "أوراق عمل قواعد جمل الزمن.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "english-exercises",
    "name": "English Exercises",
    "url": "https://www.englishexercises.org/",
    "description": "Learn English with ESL activities.",
    "descriptionAr": "تعلم الإنجليزية بأنشطة ESL.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "learn-english-jobs",
    "name": "Jobs and Work Vocabulary",
    "url": "https://www.learn-english-today.com/vocabulary/work_vocabulary.html",
    "description": "English vocabulary for jobs and work.",
    "descriptionAr": "مفردات الوظائف والعمل بالإنجليزية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "englishclub",
    "name": "EnglishClub",
    "url": "https://www.englishclub.com/",
    "description": "Learn English online: grammar, vocabulary, listening.",
    "descriptionAr": "تعلم الإنجليزية: قواعد ومفردات واستماع.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "online-esl-games",
    "name": "Online ESL Games",
    "url": "https://www.eslgamesplus.com/",
    "description": "Online ESL games for classrooms.",
    "descriptionAr": "ألعاب إنجليزية عبر الإنترنت للفصول الدراسية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "perfect-english",
    "name": "Perfect English Grammar",
    "url": "https://www.perfect-english-grammar.com/",
    "description": "Free grammar, vocabulary and speaking lessons.",
    "descriptionAr": "دروس مجانية في القواعد والمفردات والتحدث.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "eslbuzz",
    "name": "ESLBUZZ",
    "url": "https://www.eslbuzz.com/",
    "description": "Education for students of language.",
    "descriptionAr": "تعليم لطلاب اللغة.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "7esl",
    "name": "7ESL",
    "url": "https://7esl.com/",
    "description": "Your journey to English success.",
    "descriptionAr": "رحلتك إلى النجاح في الإنجليزية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "esolcourses",
    "name": "ESOL Courses",
    "url": "https://www.esolcourses.com/",
    "description": "Free English lessons online.",
    "descriptionAr": "دروس إنجليزية مجانية عبر الإنترنت.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "adj-order-lw",
    "name": "Adjective Order Worksheet",
    "url": "https://www.liveworksheets.com/worksheets/en/English_as_a_Second_Language_(ESL)/Adjectives/Adjective_order_yk52376zo",
    "description": "Free interactive adjective order worksheet.",
    "descriptionAr": "ورقة عمل ترتيب الصفات التفاعلية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "esl-activities-games",
    "name": "ESL Activities Games Worksheets",
    "url": "https://www.teach-this.com/",
    "description": "Activities, games and worksheets for ESL.",
    "descriptionAr": "أنشطة وألعاب وأوراق عمل لتعليم الإنجليزية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "busyteacher",
    "name": "BusyTeacher",
    "url": "https://busyteacher.org/",
    "description": "Free printable worksheets for busy English teachers.",
    "descriptionAr": "أوراق عمل مجانية للمعلمين المنشغلين.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "learnenglish-bc",
    "name": "LearnEnglish - British Council",
    "url": "https://learnenglish.britishcouncil.org/",
    "description": "Grammar, vocabulary, reading, listening from British Council.",
    "descriptionAr": "قواعد ومفردات وقراءة واستماع من المجلس الثقافي البريطاني.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "isl-collective",
    "name": "iSLCollective Worksheets",
    "url": "https://en.islcollective.com/",
    "description": "91,000+ English ESL worksheets pdf & doc.",
    "descriptionAr": "أكثر من 91,000 ورقة عمل بصيغة PDF وWord.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "ego4u",
    "name": "English Grammar - ego4u",
    "url": "https://www.ego4u.com/",
    "description": "Grammar, vocabulary and pronunciation exercises.",
    "descriptionAr": "تمارين قواعد ومفردات ونطق.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "learnenglish-free",
    "name": "Learn English Free",
    "url": "https://www.learnenglish.de/",
    "description": "Free English learning resources online.",
    "descriptionAr": "مصادر مجانية لتعلم الإنجليزية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "engvid",
    "name": "engVid - 182,000+ Worksheets",
    "url": "https://www.engvid.com/",
    "description": "EFL video lessons and free printable worksheets.",
    "descriptionAr": "دروس فيديو وأوراق عمل مجانية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "esl-teacher-resources",
    "name": "ESL Teacher Resources",
    "url": "https://www.eslcafe.com/",
    "description": "ESL teacher resources, jobs and worksheets.",
    "descriptionAr": "موارد ووظائف وأوراق عمل لمعلمي الإنجليزية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "esl-cyber-listening",
    "name": "Randall's ESL Cyber Listening Lab",
    "url": "https://www.esl-lab.com/",
    "description": "English listening practice exercises.",
    "descriptionAr": "تمارين استماع باللغة الإنجليزية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "learnenglishkids-bc",
    "name": "LearnEnglish Kids",
    "url": "https://learnenglishkids.britishcouncil.org/",
    "description": "British Council English learning for kids.",
    "descriptionAr": "تعلم الإنجليزية للأطفال - المجلس الثقافي البريطاني.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech",
    "gradeLevel": "kg"
  },
  {
    "id": "esl-flashcards",
    "name": "ESL Flashcards & Activities",
    "url": "https://www.eslflashcards.com/",
    "description": "ESL lesson plans, flashcards and activity ideas.",
    "descriptionAr": "خطط دروس وبطاقات وأنشطة للإنجليزية.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "english-resources-online",
    "name": "Free English Online Resources",
    "url": "https://www.usingenglish.com/",
    "description": "Free English online resources for learners.",
    "descriptionAr": "مصادر إنجليزية مجانية للمتعلمين.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "abcya-en",
    "name": "ABCya!",
    "url": "https://www.abcya.com/",
    "description": "Learning games and apps for kids.",
    "descriptionAr": "ألعاب وتطبيقات تعليمية للأطفال.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech",
    "gradeLevel": "kg"
  },
  {
    "id": "roomrecess-en",
    "name": "RoomRecess",
    "url": "https://www.roomrecess.com/",
    "description": "Free learning games for kids online.",
    "descriptionAr": "ألعاب تعليمية مجانية للأطفال.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech",
    "gradeLevel": "kg"
  },
  {
    "id": "abby-pup-en",
    "name": "Abby the Pup",
    "url": "https://www.abbythepup.com/",
    "description": "Free Kindergarten & Preschool printables.",
    "descriptionAr": "مطبوعات مجانية لرياض الأطفال.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech",
    "gradeLevel": "kg"
  },
  {
    "id": "education-com-en",
    "name": "Education.com Games",
    "url": "https://www.education.com/resources/games/",
    "description": "Educational games for kids.",
    "descriptionAr": "ألعاب تعليمية للأطفال.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "cool-kindergarten-en",
    "name": "Cool Kindergarten",
    "url": "https://www.coolkindergarten.com/",
    "description": "Fun math games, ABC games, kids games online.",
    "descriptionAr": "ألعاب رياضيات وحروف وألعاب أطفال ممتعة.",
    "subjects": [
      "English"
    ],
    "categories": [],
    "type": "edtech",
    "gradeLevel": "kg"
  },
  {
    "id": "mawdoo3-tadbeer",
    "name": "تصنيف: التدبير المنزلي - موضوع",
    "url": "https://mawdoo3.com/%D8%AA%D8%B5%D9%86%D9%8A%D9%81:%D8%A7%D9%84%D8%AA%D8%AF%D8%A8%D9%8A%D8%B1_%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A",
    "description": "Articles on home management.",
    "descriptionAr": "مقالات عن التدبير المنزلي.",
    "subjects": [
      "Skills"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "mawdoo3-shuoun",
    "name": "تصنيف: شؤون منزلية - موضوع",
    "url": "https://mawdoo3.com/%D8%AA%D8%B5%D9%86%D9%8A%D9%81:%D8%B4%D8%A4%D9%88%D9%86_%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9",
    "description": "Articles on household affairs.",
    "descriptionAr": "مقالات عن الشؤون المنزلية.",
    "subjects": [
      "Skills"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "mawdoo3-tahi",
    "name": "تصنيف: فن الطهي - موضوع",
    "url": "https://mawdoo3.com/%D8%AA%D8%B5%D9%86%D9%8A%D9%81:%D9%81%D9%86_%D8%A7%D9%84%D8%B7%D9%87%D9%8A",
    "description": "Articles on the art of cooking.",
    "descriptionAr": "مقالات عن فن الطهي.",
    "subjects": [
      "Skills"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "natgeo-mapmaker-ss",
    "name": "National Geographic MapMaker",
    "url": "https://education.nationalgeographic.org/resource/mapmaker/",
    "description": "Interactive maps and resources.",
    "descriptionAr": "خرائط وموارد تفاعلية.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "wordwall-egypt-map",
    "name": "خريطة مصر - موارد تعليمية",
    "url": "https://wordwall.net/ar/community/%D8%AE%D8%B1%D9%8A%D8%B7%D8%A9-%D9%85%D8%B5%D8%B1",
    "description": "Egypt map interactive resources.",
    "descriptionAr": "موارد تفاعلية لخريطة مصر.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "visited-countries",
    "name": "Visited Countries Map",
    "url": "https://www.amcharts.com/visited_countries/",
    "description": "Create a map of countries you've visited.",
    "descriptionAr": "أنشئ خريطة للدول التي زرتها.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "amcharts",
    "name": "amCharts - Chart Demos",
    "url": "https://www.amcharts.com/demos/",
    "description": "Interactive chart and map demos.",
    "descriptionAr": "عروض تفاعلية للمخططات والخرائط.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "d-maps",
    "name": "d-maps",
    "url": "https://d-maps.com/index.php?lang=en",
    "description": "Free printable maps of the world.",
    "descriptionAr": "خرائط مجانية للطباعة.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "worldatlas",
    "name": "WorldAtlas",
    "url": "https://www.worldatlas.com/",
    "description": "World maps, atlas and geography facts.",
    "descriptionAr": "خرائط العالم وحقائق جغرافية.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "arce-virtual-tours",
    "name": "ARCE Virtual Tours",
    "url": "https://www.arce.org/virtual-tours/",
    "description": "Virtual tours of Egyptian heritage sites.",
    "descriptionAr": "جولات افتراضية للمواقع الأثرية المصرية.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "hieroglyphic-typewriter",
    "name": "Hieroglyphic Typewriter",
    "url": "https://discoveringegypt.com/egyptian-hieroglyphic-writing/hieroglyphic-typewriter/",
    "description": "Type your name in hieroglyphics.",
    "descriptionAr": "اكتب اسمك بالهيروغليفية.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "discovering-ancient-egypt",
    "name": "Discovering Ancient Egypt",
    "url": "https://discoveringegypt.com/",
    "description": "Hieroglyphs, pharaohs, pyramids, mummification.",
    "descriptionAr": "الهيروغليفية والفراعنة والأهرامات والتحنيط.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "free-world-maps",
    "name": "Free World Maps",
    "url": "https://www.freeworldmaps.net/",
    "description": "Atlas of the world.",
    "descriptionAr": "أطلس العالم.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "geoguessr-seterra",
    "name": "GeoGuessr Seterra Quiz",
    "url": "https://www.geoguessr.com/quiz/seterra",
    "description": "Geography quizzes from Seterra on GeoGuessr.",
    "descriptionAr": "اختبارات جغرافية من سيتيرا على GeoGuessr.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "egymonuments",
    "name": "Egypt Monuments",
    "url": "https://egymonuments.gov.eg/en",
    "description": "Official Egyptian monuments and heritage site information.",
    "descriptionAr": "موقع رسمي للآثار والمعالم المصرية.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "education-com-ss",
    "name": "Education.com Games",
    "url": "https://www.education.com/resources/games/",
    "description": "Educational games for social studies.",
    "descriptionAr": "ألعاب تعليمية للدراسات الاجتماعية.",
    "subjects": [
      "Social Studies"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "haram-virtual-tour",
    "name": "الجولة الافتراضية للمسجد الحرام",
    "url": "https://www.gph.gov.sa/index.php/ar/virtual-tour",
    "description": "Virtual tour of the Grand Mosque.",
    "descriptionAr": "جولة افتراضية في المسجد الحرام.",
    "subjects": [
      "Religion"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "360-riyadh",
    "name": "360 Riyadh",
    "url": "https://www.360riyadh.com/",
    "description": "360 virtual tour of Riyadh landmarks.",
    "descriptionAr": "جولة افتراضية 360 لمعالم الرياض.",
    "subjects": [
      "Religion"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "nabawi-virtual-tour",
    "name": "Virtual Tour in Al-Masjid Al-Nabawi",
    "url": "https://www.gph.gov.sa/index.php/en/virtual-tour-nabawi",
    "description": "Virtual tour of the Prophet's Mosque.",
    "descriptionAr": "جولة افتراضية في المسجد النبوي.",
    "subjects": [
      "Religion"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "mecca-360",
    "name": "360° Virtual Tour - Mecca / Kaaba",
    "url": "https://www.360cities.net/image/holy-kaaba-mecca-saudi-arabia",
    "description": "360 degree virtual tour of Mecca and the Kaaba.",
    "descriptionAr": "جولة افتراضية 360 درجة لمكة والكعبة.",
    "subjects": [
      "Religion"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "mia-doha",
    "name": "Museum of Islamic Art",
    "url": "https://mia.org.qa/",
    "description": "Museum of Islamic Art - متحف الفن الإسلامي.",
    "descriptionAr": "متحف الفن الإسلامي.",
    "subjects": [
      "Religion"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "coptic-museum",
    "name": "The Coptic Museum",
    "url": "https://copticmuseum.gov.eg/",
    "description": "The Coptic Museum - المتحف القبطي.",
    "descriptionAr": "المتحف القبطي.",
    "subjects": [
      "Christianity"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "hindawi-philosophy",
    "name": "هنداوي - كتب الفلسفة",
    "url": "https://www.hindawi.org/books/categories/philosophy/",
    "description": "Philosophy books from Hindawi Foundation.",
    "descriptionAr": "كتب الفلسفة من مؤسسة هنداوي.",
    "subjects": [
      "Philosophy"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "hindawi-psychology",
    "name": "هنداوي - كتب علم النفس",
    "url": "https://www.hindawi.org/books/categories/psychology/",
    "description": "Psychology books from Hindawi Foundation.",
    "descriptionAr": "كتب علم النفس من مؤسسة هنداوي.",
    "subjects": [
      "Philosophy"
    ],
    "categories": [],
    "type": "edtech"
  },
  {
    "id": "belmikri",
    "name": "Belmikri Preschool & Kindergarten Games",
    "url": "https://belmikri.com/",
    "description": "Preschool and kindergarten games.",
    "descriptionAr": "ألعاب رياض الأطفال ومرحلة ما قبل المدرسة.",
    "subjects": [
      "Montessori"
    ],
    "categories": [],
    "type": "edtech",
    "gradeLevel": "kg"
  }
];

export default tools;
