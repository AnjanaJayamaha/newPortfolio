export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  techStack: string;
  imageUrl: string;
  videoUrl: string;
  githubUrl: string;
  liveDemoUrl: string;
  duration: string;
  isMaintenance: boolean;
  projectType: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Smart Parking with ANPR",
    subtitle: "Computer Vision + IoT + Full Stack",
    description: "An AI-powered smart parking system combining Computer Vision, IoT, and Full-Stack development with ANPR, booking, alerts, and payment integration.",
    techStack: "Python, React, Node.js, Flask, MongoDB, YOLOv8, OpenCV, ESP32",
    imageUrl: "",
    videoUrl: "parking-system.mp4",
    githubUrl: "https://github.com/kalanas210/anpr-ai-parking-system",
    liveDemoUrl: "",
    duration: "9 Months",
    isMaintenance: false,
    projectType: "Group"
  },
  {
    id: 2,
    title: "LittleSparks",
    subtitle: "ChildCare Management System",
    description: "A childcare management platform for admins, staff, and parents with child profiles, attendance, communication, and secure role-based access.",
    techStack: "React, Spring Boot, MySQL, Firebase",
    imageUrl: "",
    videoUrl: "Recording.mp4",
    githubUrl: "https://github.com/DevSpark-LittleSparks",
    liveDemoUrl: "",
    duration: " 12 Months",
    isMaintenance: true,
    projectType: "Group"
  },
  {
    id: 3,
    title: "SpeakUp",
    subtitle: "Blog Website",
    description: "A modern blog-style web platform with a clean interface, user-friendly design, and engaging content presentation.",
    techStack: "HTML, CSS, JavaScript, PHP, MySQL",
    imageUrl: "",
    videoUrl: "speakup.mp4",
    githubUrl: "https://github.com/AnjanaJayamaha/SpeakUp",
    liveDemoUrl: "",
    duration: "2 Months",
    isMaintenance: false,
    projectType: "Individual"
  },
  {
    id: 4,
    title: "Photography Web",
    subtitle: "Service Platform",
    description: "A clean photography website with booking and payment flow and high-resolution galleries for professional photographers.",
    techStack: "React, Material UI, Stripe API, Cloudinary",
    imageUrl: "",
    videoUrl: "",
    githubUrl: "https://github.com",
    liveDemoUrl: "",
    duration: "3 Months",
    isMaintenance: true,
    projectType: "Individual"
  },
  {
    id: 5,
    title: "My Portfolio",
    subtitle: "React • TypeScript",
    description: "A modern personal portfolio website built with React and Framer Motion to showcase my skills, education, and professional projects.",
    techStack: "React, TypeScript, Framer Motion, Vite, .NET Core",
    imageUrl: "portfolio.png",
    videoUrl: "",
    githubUrl: "https://github.com/AnjanaJayamaha/newPortfolio",
    liveDemoUrl: "",
    duration: "2 Months",
    isMaintenance: false,
    projectType: "Individual"
  },
  {
    id: 6,
    title: "ANJ Chatbot",
    subtitle: "Mood-Aware AI Companion",
    description: "A deeply personalized AI companion that shifts its entire vibe and response tone based on the user's emotional state. Features dynamic themes and mindfulness micro-goals.",
    techStack: "React.js, TypeScript, Vite, Vercel Edge API, Groq Cloud, Llama 3.3",
    imageUrl: "",
    videoUrl: "ANJchatbot.mp4",
    githubUrl: "https://github.com/AnjanaJayamaha/ANJ-chatbot",
    liveDemoUrl: "https://anj-chatbot.vercel.app/",
    duration: "",
    isMaintenance: false,
    projectType: "Individual"
  }
];
