export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
      id: "srm_chennai",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "SRM Institute of Science and Technology, Kattankulathur",
      location: "Chennai, India",
      startDate: "August 2024",
      endDate: "May 2028",
      
  },
  {
      id: "fasn",
      degree: "Higher Secondary (Class 12)",
      institution: "Father Agnel School, Noida",
      location: "Sector-62, Noida",
      startDate: "May 2010",
      endDate: "May 2024",
  }
];
