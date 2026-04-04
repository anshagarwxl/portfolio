export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/anshagarwxl",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anshagarwxl/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:agansh06@gmail.com",
      icon: "mail"
    }
  ];
