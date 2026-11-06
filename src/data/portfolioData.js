export const portfolioData = {
  personal: {
    name: "Shrri Dharshan D R",
    title: "AI/ML Developer | Software Developer | Cybersecurity Enthusiast",
    tagline: "Building Intelligent Solutions with AI, Software & Security.",
    bio: "Final-year Computer Science Engineering student specializing in Cyber Physical Systems at VIT Chennai. Passionate about Artificial Intelligence, Machine Learning, Generative AI, self-correcting RAG systems, secure document workflows, and high-performance software development.",
    location: "Chennai, Tamil Nadu, India",
    phone: "+91 9360747851",
    email: "shrridharshanravikumar@gmail.com",
    status: "Final-Year B.Tech Student (Graduating 2027)",
    openToRoles: "Open for AI/ML, Generative AI, Software Engineering & Security Roles",
  },
  socials: {
    github: "https://github.com/shrridharshan27",
    linkedin: "https://www.linkedin.com/in/shrri-dharshan-d-r-47ba112b1/",
    instagram: "https://www.instagram.com/shrri.dharshan/",
    email: "mailto:shrridharshanravikumar@gmail.com",
    phone: "tel:+919360747851",
    portfolio: "https://shrri-dharshan-portfolio.vercel.app",
  },
  stats: [
    { label: "OCI AI Score", value: "88%", desc: "Oracle Cloud Certified" },
    { label: "RAG Error Reduction", value: "31.4% → 14.6%", desc: "CorrectiveRAG Benchmark" },
    { label: "Summarization Speed", value: "~8s", desc: "30-Min Audio Processing" },
    { label: "Community Leadership", value: "100+", desc: "Members Led as VP" },
  ],
  education: [
    {
      institution: "Vellore Institute of Technology (VIT)",
      location: "Chennai, Tamil Nadu",
      degree: "B.Tech in Computer Science Engineering",
      specialization: "Cyber Physical Systems",
      period: "2023 – 2027",
      status: "Final-Year Student",
      score: "CGPA: 6.85",
      highlights: [
        "Specialized in Cyber Physical Systems, combining intelligent computing with hardware/network security",
        "Active member and Vice President of VIT Chennai Fitness Club",
        "Built core research and practical pipelines in Generative AI, RAG, and secure application architecture"
      ]
    },
    {
      institution: "Bharathi Vidya Bhavan Matric Hr. Sec. School",
      location: "Thindal, Erode, Tamil Nadu",
      degree: "Higher Secondary (Class XII)",
      specialization: "Tamil Nadu State Board",
      period: "2022 – 2023",
      score: "Percentage: 72.17%",
      highlights: ["Rigorous foundation in mathematics, physics, and computer science principles"]
    },
    {
      institution: "Bharathi Vidya Bhavan Matric Hr. Sec. School",
      location: "Thindal, Erode, Tamil Nadu",
      degree: "Secondary School (Class X)",
      specialization: "Tamil Nadu State Board",
      period: "2020 – 2021",
      score: "Percentage: 100%",
      highlights: ["Achieved perfect 100% academic score in State Board examinations"]
    }
  ],
  skills: {
    "AI & Machine Learning": [
      { name: "Generative AI & LLMs", level: "Advanced" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Advanced" },
      { name: "LangChain & LangGraph", level: "Proficient" },
      { name: "LLaMA 3 & Ollama", level: "Proficient" },
      { name: "ChromaDB & Vector Search", level: "Proficient" },
      { name: "Natural Language Processing (spaCy)", level: "Proficient" },
      { name: "Speech Recognition (Whisper)", level: "Proficient" },
      { name: "Prompt Engineering", level: "Expert" }
    ],
    "Programming Languages": [
      { name: "Python", level: "Expert" },
      { name: "JavaScript", level: "Proficient" },
      { name: "C++", level: "Intermediate" },
      { name: "Java", level: "Foundational" },
      { name: "SQL", level: "Proficient" }
    ],
    "Backend & Cloud": [
      { name: "FastAPI", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "AWS (EC2)", level: "Proficient" },
      { name: "Oracle Cloud Infrastructure (OCI)", level: "Certified" },
      { name: "SQLite & Relational DBs", level: "Proficient" },
      { name: "Groq API & FFmpeg", level: "Proficient" }
    ],
    "Security & Cryptography": [
      { name: "AES-256-GCM Encryption", level: "Advanced" },
      { name: "Role-Based Access Control (RBAC)", level: "Advanced" },
      { name: "TOTP Multi-Factor Authentication", level: "Proficient" },
      { name: "Tamper-Proof Hash Audit Trails", level: "Proficient" },
      { name: "Wireshark Packet Analysis", level: "Certified" },
      { name: "Sensitive Entity Masking", level: "Proficient" }
    ],
    "Frontend & Tools": [
      { name: "React", level: "Proficient" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Expert" },
      { name: "Postman", level: "Proficient" },
      { name: "Figma", level: "Intermediate" }
    ]
  },
  featuredProjects: [
    {
      id: "corrective-rag",
      title: "CorrectiveRAG",
      subtitle: "AI-Powered Self-Correcting Question Answering System",
      period: "Jan – Apr 2025",
      badge: "Major Research Project",
      technologies: ["Python", "LangGraph", "LLaMA 3", "ChromaDB", "Ollama", "AWS EC2"],
      metrics: [
        { label: "Hallucination Reduction", value: "31.4% → 14.6%" },
        { label: "Accuracy Gain", value: "+11.2 pts (PopQA)" },
        { label: "Deployment", value: "AWS EC2 Cloud" }
      ],
      description:
        "Engineered an autonomous self-correcting question-answering pipeline using LangGraph that evaluates retrieved documents before generating responses. When the retrieved context lacks confidence or completeness, it executes dynamic web search fallbacks.",
      bullets: [
        "Built an AI pipeline that automatically grades retrieved documents for relevance, filtering noise before generation.",
        "Evaluated on the PopQA benchmark: slashed hallucination rates from 31.4% to 14.6% and gained +11.2 accuracy points.",
        "Deployed on AWS cloud with a responsive web interface, local LLaMA 3 reasoning through Ollama, and vector similarity indexing via ChromaDB."
      ],
      githubUrl: "https://github.com/shrridharshan27/CorrectiveRAG",
      isFeatured: true
    },
    {
      id: "securedoc-li",
      title: "SecureDoc-LI",
      subtitle: "AI-Enabled Secure Digital Document Management System",
      period: "2026",
      badge: "Enterprise Security & AI",
      technologies: ["Python", "FastAPI", "Machine Learning", "AES-256-GCM", "SQL", "spaCy"],
      metrics: [
        { label: "Encryption", value: "AES-256-GCM" },
        { label: "Security Roles", value: "6 User Tiers" },
        { label: "Audit Integrity", value: "SHA-256 Hash Chain" }
      ],
      description:
        "Designed and implemented a secure document management platform tailored for high-confidentiality legal and investigation records. Combines military-grade encryption with automated NLP sensitive entity detection and risk scoring.",
      bullets: [
        "Implemented end-to-end AES-256-GCM payload encryption and tamper-evident SHA-256 hash-chained audit trails.",
        "Enforced multi-tier Role-Based Access Control (RBAC) across six user privilege tiers paired with TOTP-based Multi-Factor Authentication.",
        "Integrated spaCy-powered document classification, semantic search, sensitive entity redaction, dynamic risk scoring, and automated AI alert triggers for unauthorized access patterns."
      ],
      githubUrl: "https://github.com/shrridharshan27/SecureDoc-LI",
      isFeatured: true
    },
    {
      id: "meeting-summarizer",
      title: "Meeting Summarizer",
      subtitle: "AI Audio Transcription & Intelligent Summarization Tool",
      period: "2026",
      badge: "Fast Audio Intelligence",
      technologies: ["Python", "FastAPI", "Groq API", "Whisper", "LLaMA", "FFmpeg"],
      metrics: [
        { label: "Processing Speed", value: "~8s for 30m audio" },
        { label: "Pipeline", value: "Whisper + LLaMA" },
        { label: "Resilience", value: "Multi-Model Fallback" }
      ],
      description:
        "Created a lightning-fast audio processing pipeline that converts recorded meetings into structured, actionable intelligence—extracting decisions, follow-up action items, attendees, and project blockers.",
      bullets: [
        "Transforms a 30-minute recording into structured markdown minutes in roughly 8 seconds leveraging ultra-fast Groq API inference.",
        "Engineered audio normalization, chunking, and compression using FFmpeg to handle multi-gigabyte audio streams gracefully.",
        "Implemented robust multi-model fallback logic to guarantee uninterrupted transcription during API disruptions."
      ],
      githubUrl: "https://github.com/shrridharshan27/meeting-summarizer",
      isFeatured: true
    }
  ],
  miniProjects: [
    {
      title: "AI Story Generator",
      desc: "Interactive generative AI storytelling application generating rich branching plots and character arcs using LLMs.",
      tags: ["Python", "Generative AI", "Prompt Engineering"],
      githubUrl: "https://github.com/shrridharshan27/Ai-story-generator"
    },
    {
      title: "QR Code Generator",
      desc: "High-resolution custom QR code generator with instant download, error correction tuning, and styling presets.",
      tags: ["JavaScript", "Web App", "Utility"],
      githubUrl: "https://github.com/shrridharshan27/QR-Code-Generator"
    },
    {
      title: "Pixel Art Board",
      desc: "Interactive canvas-based retro art designer with full color palette selection, export options, and grid customization.",
      tags: ["JavaScript", "HTML5 Canvas", "CSS3"],
      githubUrl: "https://github.com/shrridharshan27/Pixel-Art-Board"
    },
    {
      title: "BMI Calculator",
      desc: "Clean responsive health metric calculator providing immediate visual feedback, category breakdowns, and advice.",
      tags: ["JavaScript", "Responsive UI", "Health Tech"],
      githubUrl: "https://github.com/shrridharshan27/BMI-Calculator"
    }
  ],
  certifications: [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Professional",
      organization: "Oracle University",
      badge: "88% Score",
      date: "Jul 2026",
      verified: true,
      desc: "Rigorous certification covering OCI AI Services, generative models, vector search, infrastructure scaling, and enterprise cloud deployments."
    },
    {
      name: "Introduction to Artificial Intelligence",
      organization: "LinkedIn Learning",
      badge: "Verified",
      date: "Sep 2025",
      verified: true,
      desc: "Comprehensive foundation in machine learning paradigms, probabilistic reasoning, neural architectures, and real-world ML deployment."
    },
    {
      name: "Ethics in the Age of Generative AI",
      organization: "LinkedIn Learning",
      badge: "Verified",
      date: "Sep 2025",
      verified: true,
      desc: "In-depth study of ethical considerations in AI: hallucination mitigation, copyright, data privacy, bias reduction, and responsible AI governance."
    },
    {
      name: "Wireshark Crash Course for Beginners",
      organization: "Musab AlZayadneh",
      badge: "Verified",
      date: "Nov 2025",
      verified: true,
      desc: "Practical network protocol inspection, packet capture analysis, network vulnerability detection, and packet-level forensic diagnostics."
    }
  ],
  leadership: [
    {
      role: "Vice President",
      organization: "Fitness Club, VIT Chennai",
      period: "Apr 2025 – Present",
      stats: "100+ Members Led",
      description:
        "Leading operational governance and community growth for a 100+ student wellness collective at VIT Chennai.",
      bullets: [
        "Coordinated fitness workshops, training camps, and wellness initiatives across campus.",
        "Managed cross-functional student teams and balanced logistics for major university fitness challenges.",
        "Liaised between senior university faculty advisors, administrative bodies, and accredited professional fitness coaches."
      ]
    }
  ]
};
