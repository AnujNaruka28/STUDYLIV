
interface FooterItem {
  name: string;
  to: string;
}

interface FooterSection {
  heading: string;
  subheadings: FooterItem[];
}


export const footerData: FooterSection[][] = [
  [
    {
      heading: "Company",
      subheadings: [
        { name: "About", to: "/about" },
        { name: "Careers", to: "/careers" },
        { name: "Affiliates", to: "/affiliates" }
      ]
    }
  ],
  [
    {
      heading: "Resources",
      subheadings: [
        { name: "Article", to: "/articles" },
        { name: "Blog", to: "/blog" },
        { name: "Chart Sheet", to: "/chartsheet" },
        { name: "Code challenges", to: "/codechallenges" },
        { name: "Docs", to: "/docs" },
        { name: "Projects", to: "/projects" },
        { name: "Videos", to: "/videos" },
        { name: "Workspaces", to: "/workspaces" }
      ]
    },
    {
      heading: "Support",
      subheadings: [
        { name: "Help Center", to: "/contactus" }
      ]
    }
  ],
  [
    {
      heading: "Plans",
      subheadings: [
        { name: "Paid memberships", to: "/pricing" },
        { name: "For students", to: "/pricing?student=true" },
        { name: "Business solutions", to: "/pricing?enterprise=true" }
      ]
    },
    {
      heading: "Community",
      subheadings: [
        { name: "Forums", to: "/forums" },
        { name: "Channels", to: "/channels" },
        { name: "Events", to: "/events" }
      ]
    }
  ],
  [
    {
      heading: "Subjects",
      subheadings: [
        { name: "Al", to: "/category/al" },
        { name: "Cloud Computing", to: "/category/cloud-computing" },
        { name: "Code Foundations", to: "/category/code-foundations" },
        { name: "Computer Science", to: "/category/computer-science" },
        { name: "Cybersecurity", to: "/category/cybersecurity" },
        { name: "Data Analytics", to: "/category/data-analytics" },
        { name: "Data Science", to: "/category/data-science" },
        { name: "Data Visualization", to: "/category/data-visualization" },
        { name: "Developer Tools", to: "/category/developer-tools" },
        { name: "DevOps", to: "/category/devops" },
        { name: "Game Development", to: "/category/game-development" },
        { name: "IT", to: "/category/it" },
        { name: "Machine Learning", to: "/category/machine-learning" },
        { name: "Math", to: "/category/math" },
        { name: "Mobile Development", to: "/category/mobile-development" },
        { name: "Web Design", to: "/category/web-design" },
        { name: "Web Development", to: "/category/web-development" },
      ],
    }
  ],
  [
    {
      heading: "Languages",
      subheadings: [
        { name: "Bash", to: "/tag/bash" },
        { name: "C++", to: "/tag/c++" },
        { name: "C#", to: "/tag/csharp" },
        { name: "Go", to: "/tag/go" },
        { name: "HTML & CSS", to: "/tag/html-css" },
        { name: "Java", to: "/tag/java" },
        { name: "JavaScript", to: "/tag/javascript" },
        { name: "Kotlin", to: "/tag/kotlin" },
        { name: "PHP", to: "/tag/php" },
        { name: "Python", to: "/tag/python" },
        { name: "R", to: "/tag/r" },
        { name: "Ruby", to: "/tag/ruby" },
        { name: "SQL", to: "/tag/sql" },
        { name: "Swift", to: "/tag/swift" },
      ],
    }
  ],
  [
    {
      heading: "Career building",
      subheadings: [
        { name: "Career paths", to: "/career-paths" },
        { name: "Career services", to: "/career-services" },
        { name: "Interview prep", to: "/interview-prep" },
        { name: "Professional certification", to: "/professional-certification" },
        { name: "-", to: "/hi" },
        { name: "Full Catalog", to: "/full-catalog" },
        { name: "Beta Content", to: "/beta-content" }
      ]
    }
  ]
];
