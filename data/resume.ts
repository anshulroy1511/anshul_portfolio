import {
  Code,
  HomeIcon,
  NotebookIcon,
} from "lucide-react";
import { FaAws, FaRobot } from "react-icons/fa";
import {
  SiCss3,
  SiDocker,
  SiGit,
  SiShadcnui,
  SiGreensock,
  SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiExpress,
  SiClerk,
  SiJira,
  SiOpenjdk,
  SiReact,
  SiSwagger,
  SiTailwindcss,
  SiFastapi,
  SiMongodb,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { TbBrandVisualStudio } from "react-icons/tb";
import { Icons } from "@/components/icons";
import type { ResumeData } from "@/types";

export const DATA: ResumeData = {
  name: "Anshul",
  initials: "DJ",
  url: "https://www.deepakjangra.com",
  location: "Gurugram, India",
  locationLink: "https://www.google.com/maps/place/gurugram",
  description:
    "AI Full Stack Developer specializing in MERN, Next.js, and AI-powered applications. I build scalable web platforms, intelligent automation systems, and real-world products that solve problems and create impact 🚀",
  summary:
    "I'm a **AI Full Stack Developer** with **1 year of internship experience** building and shipping scalable products across fintech and startup ecosystems—not just learning, but contributing to real production codebases. My expertise includes  **MERN Stack, Next.js, PostgreSQL, REST APIs**, and AI technologies like **LLMs, RAG, Prompt Engineering, LangChain, Ollama, OpenAI API, Vapi AI, and ElevenLabs**. I have solved **400+ DSA problems** in Java across platforms like LeetCode and GeeksforGeeks, strengthening my problem-solving skills and core understanding of Data Structures, Algorithms, OOPs, DBMS, OS, and Computer Networks.",
  avatarUrl: "/anshull.png",
  skills: [
    {
      category: "Languages",
      items: [
        { title: "JavaScript", icon: SiJavascript },
        { title: "Java", icon: SiOpenjdk },
        { title: "Python", icon: SiPython },
      ],
    },
    {
      category: "Backend",
      items: [
        { title: "Node.js", icon: SiNodedotjs },
        { title: "Express.js", icon: SiExpress },
        { title: "FastApi", icon: SiFastapi },
        { title: "REST Api", icon: Code },
        { title: "JWT", icon: Code },
        { title: "OpenAPI", icon: SiSwagger },
      ],
    },
    {
      category: "Frontend",
      items: [
        { title: "Next.js", icon: SiNextdotjs },
        { title: "React.js", icon: SiReact },
        { title: "HTML", icon: SiHtml5 },
        { title: "CSS", icon: SiCss },
        { title: "TailwindCSS", icon: SiTailwindcss },
        { title: "Shadcn", icon: SiShadcnui },
        { title: "GSAP", icon: SiGreensock },
      ],
    },
    {
      category: "Databases",
      items: [
        { title: "MongoDB", icon: SiMongodb },
        { title: "MySQL", icon: SiMysql },
        { title: "Postgres", icon: SiPostgresql },
        { title: "Qdrant", icon: Code },
        
      ],
    },
    {
      category: "Tools & Practices",
      items: [
        { title: "Git", icon: SiGit },
        { title: "GitHub", icon: SiGithub },
        { title: "VS Code", icon: TbBrandVisualStudio },
        { title: "Docker", icon: SiDocker },
        { title: "Clerk", icon: SiClerk },
        { title: "Agile", icon: SiJira },
        { title: "SDLC", icon: SiJira },
      ],
    },
    {
      category: "Clouds",
      items: [
        { title: "GCP", icon: SiGooglecloud },
        { title: "AWS Basics", icon: FaAws },
        { title: "Vercel", icon: SiVercel },
        { title: "Netlify", icon: SiNetlify },
      ],
    },
    {
      category: "AI",
      items: [
        { title: "LLMs", icon: SiOpenai },
        { title: "RAG", icon: FaRobot },
        { title: "Vapi AI", icon: FaRobot },
        { title: "Voice Agent", icon: FaRobot },
        { title: "Ollama", icon: FaRobot },
        { title: "LangChain", icon: FaRobot },
        { title: "OpenAI", icon: SiOpenai },
        { title: "Claude", icon: FaRobot },
      ],
    },
    // {
    //   category: "Standards",
    //   items: [
    //     { title: "Design Patterns", icon: Settings },
    //     { title: "Serverless Architecture", icon: Cloud },
    //     { title: "Clean Architecture", icon: Code },
    //     { title: "Microservices", icon: Settings },
    //     { title: "Event Driven Architecture", icon: Settings },
    //   ],
    // },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blogs", icon: NotebookIcon, label: "Blogs" },
  ],
  contact: {
    email: "royanshul151103@gmail.com",
    tel: "+91 9053584891",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anshulroy1511",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anshul-roy-593005257/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AnshulRoy144525",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@heydeepakjangra",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:royanshul151103@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "JobLuxe",
      href: "https://www.jobluxe.in/",
      badges: [],
      location: "Remote",
      title: "AI + Full Stack Developer intern",
      logoUrl: "/job.png",
      start: "Jan 2026",
      end: "Mar 2026",
      highlights: [
        "Built an AI voice agent using Vapi AI + ElevenLabs, automating outbound campaigns and increasing outreach efficiency by nearly 3x for students and hiring partners.",
        "Designed optimized conversation flows, prompts, and call scripts, improving engagement and response rates in voice campaigns.",
        "Developed an AI chatbot using MERN + OpenAI with system prompts and context handling, reducing manual support queries by nearly 60% and improving response accuracy.",
        "Created a Python-based email automation system, streamlining client outreach and significantly reducing manual campaign effort.",
        "Led end-to-end development and launch of JobLuxe, successfully onboarding 1000+ users within 3 months.",
        "Architected and deployed the complete system including frontend, backend, authentication, and database, ensuring scalability and smooth user onboarding.",
        "Worked closely with leadership on business strategy, company registration, revenue models, and go-to-market execution.",
        "Established intern hiring pipelines and onboarding workflows, enabling scalable team growth and contributing to monetization strategy and long-term product roadmap decisions."
      ],
    },
    {
      company: "Fundfina",
      badges: [],
      href: "https://www.fundfina.com/",
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/fundfina_logo.jpg",
      start: "Jul 2025",
      end: "Nov 2025",
      highlights: [
        "Built and scaled secure fintech workflows for a Qatar-based invoice discounting platform using Next.js, Node.js, Express.js, and MongoDB, delivering high-performance REST APIs and seamless user journeys.",
        "Developed and optimized backend services and frontend integrations, ensuring smooth platform performance and reliable business operations.",
        "Resolved production issues in a GCP environment through root cause analysis, improving system stability, reliability, and performance.",
        "Ensured regulatory compliance by preparing monthly reports for QCB and proactively monitoring audit logs for secure financial operations."
      ],
    },
    {
      company: "RARO Professionals",
      badges: [],
      href: "https://www.raroprofessional.in/",
      location: "Remote",
      title: "Freelancer Web Developer",
      logoUrl: "/raro.png",
      start: "May 2025",
      end: "Jun 2025",
      highlights: [
        "Developed a responsive parlour and salon website using React.js, Node.js, Express.js, and MongoDB for seamless service management.",
        "Implemented secure authentication, real-time booking functionality, and optimized backend performance for smooth user experience.",
        "Created an attractive and modern UI with smooth animations and interactive elements to improve customer engagement and retention.",
        "Ensured full cross-device compatibility and continuously improved features based on user feedback and business requirements."
      ],
    },
    {
      company: "Tastezy Marketplace",
      badges: [],
      href: "https://www.neuxaglobal.com/",
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/tastezy.jpg",
      start: "Jan 2025",
      end: "Apr 2025",
      highlights: [
        "Built and optimized a scalable web platform using React.js and Tailwind CSS, delivering responsive and high-performance user experiences with GSAP animations.",
        "Developed secure RESTful APIs using Node.js, Express.js, and MongoDB, ensuring smooth frontend-backend integration and reliable data flow.",
        "Resolved production bugs, improved application stability, and enhanced overall platform performance in an Agile development environment.",
        "Collaborated with cross-functional teams to deliver business-focused features and improve user experience across multiple devices."
      ],
    }
  ],
  education: [
    {
      school: "Guru jambheshwar university of science and technology",
      href: "https://www.gjust.ac.in/",
      degree: "Bachelor's of Technology in Computer Science (B.Tech) - 7.65 CGPA",
      logoUrl: "/gju.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "The Heights School",
      href: "",
      degree: "Higher Secondary (12th) - 98.2%",
      logoUrl: "/skol.jpg",
      start: "2020",
      end: "2021",
    },
    {
      school: "Brigadier Ran Singh Public School",
      href: "",
      degree: "Higher Secondary (12th) - 92.6%",
      logoUrl: "/skol.jpg",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "PocketGuard",
      href: "https://pocket-guard-smoky.vercel.app/",
      dates: "Mar 2025",
      status: "active",
      description:
        "An AI-powered personal finance tracker that helps users manage expenses, analyze spending patterns, receive smart financial insights, and get real-time alerts for better financial decisions.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Prisma",
        "Clerk",
        "Inngest",
        "Arcjet",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://pocket-guard-smoky.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/anshulroy1511/pocketguard",
          icon: Icons.github,
        },
      ],
      image: "/pocket.png",
      video: "",
    },
   {
    title: "BidVerse — Auction Platform",
    href: "#",
    dates: "Feb 2025",
    status: "active",
    description:
      "A full-stack MERN auction platform with secure JWT authentication and role-based access control for admins, auctioneers, and bidders. Built with real-time bidding workflows, live updates, interactive dashboards, and a fully responsive UI for seamless auction experiences.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Tailwind CSS"
    ],
    links: [
      {
        type: "Website",
        href: "https://bidverse-dwcj.onrender.com/",
        icon: Icons.globe,
      },
      {
        type: "Source",
        href: "https://github.com/anshulroy1511/BidVerse",
        icon: Icons.github,
      },
    ],
    image: "/bid.webp",
    video: "",
},
  ],
} as const;
