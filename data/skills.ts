// data/skills.ts
export type SkillCategory = 
  | 'Languages' 
  | 'Frameworks/Libraries' 
  | 'Cloud/DevOps' 
  | 'Concepts' 
  | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string;
}

export const skills: Partial<Record<SkillCategory, Skill[]>> = {
  'Languages': [
    { name: 'C', category: 'Languages', logoKey: 'c' },
    { name: 'C++', category: 'Languages', logoKey: 'cplusplus' },
    { name: 'Java', category: 'Languages', logoKey: 'java' },
    { name: 'Python', category: 'Languages', logoKey: 'python' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
  
  ],

  'Frameworks/Libraries': [

    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' },
    { name: 'Spring Boot', category: 'Frameworks/Libraries', logoKey: 'spring' },

    { name: 'JDBC', category: 'Frameworks/Libraries', logoKey: 'java' },
    { name: 'Streamlit', category: 'Frameworks/Libraries', logoKey: 'streamlit' },
    { name: 'scikit-learn', category: 'Frameworks/Libraries', logoKey: 'python' }
  ],

  'Concepts': [
    { name: 'OOP', category: 'Concepts', logoKey: 'java' },
    { name: 'Data Structures & Algorithms', category: 'Concepts', logoKey: 'github' },
    { name: 'API Design', category: 'Concepts', logoKey: 'swagger' },

    { name: 'DBMS Concepts', category: 'Concepts', logoKey: 'mysql' },
    { name: 'RAG (Retrieval-Augmented Generation)', category: 'Concepts', logoKey: 'ai' }
  ],

  'Tools': [
    { name: 'Git', category: 'Tools', logoKey: 'git' },
    { name: 'GitHub', category: 'Tools', logoKey: 'github' },
{ name: 'AWS', category: 'Tools', logoKey: 'amazonwebservices' },
    { name: 'VS Code', category: 'Tools', logoKey: 'vscode' },
    { name: 'IntelliJ IDEA', category: 'Tools', logoKey: 'intellij' },
    { name: 'Figma', category: 'Tools', logoKey: 'figma' },
    { name: 'JUnit', category: 'Tools', logoKey: 'java' },

  ]
};

// Helpers
export const getAllSkills = () => Object.values(skills).flat();
export const getCategories = () => Object.keys(skills) as SkillCategory[];
