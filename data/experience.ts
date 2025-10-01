// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: 'work' | 'internship' | 'program' | 'leadership';
}

export const experiences: Experience[] = [
  {
      id: "infogain-internship",
      title: "Software Engineering Intern",
      company: "Infogain",
      location: "On-Site/Noida",
      startDate: "June 2025",
      endDate: "July 2025",
      description: "Worked on internal software solutions and automation tasks during the summer internship program.",
      achievements: [
          "Developed features for internal web applications using Java and Spring Boot",
          "Collaborated with cross-functional teams to implement automated testing pipelines",
          "Contributed to code optimization, improving system performance by 20%"
      ],
      type: 'internship'
  },
  {
      id: "hr-associate-cherry",
      title: "HR Associate",
      company: "Cherry+ Network",
      location: "Hybrid ",
      startDate: "September 2024",
      endDate: "Present",
      description: "Handled HR operations including candidate outreach, recruitment coordination, and talent management.",
      achievements: [
          "Managed end-to-end recruitment process for multiple roles, improving hiring efficiency",
          "Streamlined candidate communication and onboarding processes",
          "Assisted in creating HR documentation and reporting for management review"
      ],
      type: 'work'
  },
  {
      id: "mckinsey-forward",
      title: "Participant - McKinsey Forward Program",
      company: "McKinsey & Company",
      location: "Online / Global",
      startDate: "September 2025",
      endDate: "Present",
      description: "Selected as a participant in the highly competitive McKinsey Forward Program to build essential skills for future work.",
      achievements: [
          "Focused on problem solving, structured thinking, and digital collaboration",
          "Developed adaptability, self-leadership, and growth mindset through case-based learning",
          "Engaged with global peers for real-world projects"
      ],
      type: 'program'
  },
  {
      id: "campus-partner-perplexity",
      title: "Campus Partner",
      company: "Perplexity AI",
      location: "Online / Global",
      startDate: "August 2025",
      endDate: "Present",
      description: "Represented Perplexity AI at SRM University, driving engagement and awareness of AI tools among students.",
      achievements: [
          "Organized workshops and demo sessions for AI adoption on campus",
          "Collected user feedback to improve Perplexity AI campus experience"
      ],
      type: 'leadership'
  }
];
