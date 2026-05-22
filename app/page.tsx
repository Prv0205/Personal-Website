// import { Navbar } from "@/components/navbar"
// import { HeroSection } from "@/components/hero-section"
// import { ContentRow } from "@/components/content-row"
// import { SkillsGrid } from "@/components/skills-grid"
// import { Footer } from "@/components/footer"

// const experienceData = [
//   {
//     id: "dsi",
//     title: "Research Assistant",
//     subtitle: "Data Science Institute, University of Galway",
//     description: "Developed a full-stack web application to consolidate research ideas, datasets, and source code. Built backend with Django REST APIs and React.js frontend.",
//     tags: ["Python", "Django", "React", "PostgreSQL", "GCP", "Hugging Face"],
//     year: "2025-2026",
//     location: "Galway, Ireland",
//     duration: "6 months",
//     featured: true,
//     rating: "95%",
//     thumbnail: "/images/ulster-thumb.jpg",
//     details: {
//       responsibilities: [
//         "Developed a full-stack web application to consolidate research ideas, datasets, and source code",
//         "Implemented Django REST APIs for seamless data access and integration",
//         "Built responsive frontend interfaces using React.js",
//         "Deployed the platform on Google Cloud Platform (GCP) for scalability",
//         "Integrated machine learning models using Hugging Face Transformers"
//       ],
//       technologies: ["Python", "Django", "Django REST Framework", "React.js", "PostgreSQL", "Google Cloud Platform", "Hugging Face", "Docker"],
//       achievements: [
//         "Successfully consolidated research resources into a unified platform",
//         "Improved research team collaboration efficiency"
//       ]
//     }
//   },
//   {
//     id: "aiton",
//     title: "Full Stack Developer Intern",
//     subtitle: "Aiton AI Technological Optimization",
//     description: "Built a full-stack dashboard using Python Django (backend) and ReactJS (frontend) for AI optimization solutions.",
//     tags: ["Python", "Django", "React", "AI"],
//     year: "2025",
//     location: "Dublin, Ireland",
//     duration: "3 months",
//     rating: "90%",
//     thumbnail: "/images/tcs-thumb.jpg",
//     details: {
//       responsibilities: [
//         "Developed full-stack dashboard for AI optimization solutions",
//         "Built robust backend services using Python Django",
//         "Created interactive frontend interfaces with ReactJS",
//         "Integrated AI/ML models into the dashboard platform"
//       ],
//       technologies: ["Python", "Django", "React.js", "REST APIs", "AI/ML Integration"],
//       achievements: [
//         "Delivered production-ready dashboard within internship timeline",
//         "Contributed to AI optimization product development"
//       ]
//     }
//   },
//   {
//     id: "tcs",
//     title: "System Engineer",
//     subtitle: "Tata Consultancy Services (TCS)",
//     description: "Developed and maintained a Django REST API supporting 25K+ daily users, improving issue-resolution workflow efficiency by 40%. Built microservices and batch jobs for large-scale data operations.",
//     tags: ["Python", "Django", "React", "Git", "REST APIs"],
//     year: "2022-2024",
//     location: "Kerala, India",
//     duration: "2+ years",
//     rating: "92%",
//     thumbnail: "/images/tcs-thumb.jpg",
//     details: {
//       responsibilities: [
//         "Developed and maintained Django REST APIs supporting 25,000+ daily users",
//         "Built microservices architecture for scalable backend systems",
//         "Designed batch jobs for large-scale data operations",
//         "Collaborated with cross-functional teams using Git version control",
//         "Implemented performance optimizations and code quality improvements"
//       ],
//       technologies: ["Python", "Django", "Django REST Framework", "React.js", "Git", "PostgreSQL", "Microservices", "Batch Processing"],
//       achievements: [
//         "Improved issue-resolution workflow efficiency by 40%",
//         "Successfully scaled system to handle 25K+ daily active users",
//         "Received recognition for code quality and system reliability"
//       ]
//     }
//   },
//   {
//     id: "softnotions",
//     title: "Software Engineer",
//     subtitle: "Softnotions Technologies Pvt Ltd",
//     description: "Developed REST APIs for Android and iOS apps. Deployed services on AWS ensuring high availability. Managed a 5-member engineering team.",
//     tags: ["Python", "Django", "PostgreSQL", "AWS", "Team Lead"],
//     year: "2021-2022",
//     location: "Kerala, India",
//     duration: "1+ years",
//     rating: "88%",
//     thumbnail: "/images/cusat-thumb.jpg",
//     details: {
//       responsibilities: [
//         "Developed REST APIs for Android and iOS mobile applications",
//         "Deployed and maintained services on AWS cloud infrastructure",
//         "Led and managed a 5-member engineering team",
//         "Ensured high availability and reliability of production services",
//         "Conducted code reviews and mentored junior developers"
//       ],
//       technologies: ["Python", "Django", "PostgreSQL", "AWS (EC2, S3, RDS)", "REST APIs", "Mobile Backend"],
//       achievements: [
//         "Successfully delivered multiple mobile app backends",
//         "Achieved high availability SLA for production services",
//         "Grew and mentored a 5-person engineering team"
//       ]
//     }
//   },
//   {
//     id: "icfoss",
//     title: "Research Fellow",
//     subtitle: "ICFOSS - Government of Kerala",
//     description: "Designed and implemented chatbots for Kerala Government including COVID-19 Information Bot and Social Security Bot. Applied NLP for regional language support in Malayalam.",
//     tags: ["Python", "Flask", "NLP", "MySQL", "Chatbots", "Government"],
//     year: "2019-2021",
//     location: "Kerala, India",
//     duration: "1.5 years",
//     featured: true,
//     rating: "94%",
//     thumbnail: "/images/icfoss-thumb.jpg",
//     details: {
//       responsibilities: [
//         "Designed and developed chatbots for Kerala Government initiatives",
//         "Built COVID-19 Information Bot to help citizens during pandemic",
//         "Created Social Security Bot for government welfare programs",
//         "Implemented NLP solutions for Malayalam language support",
//         "Deployed chatbot systems on government infrastructure"
//       ],
//       technologies: ["Python", "Flask", "Natural Language Processing", "MySQL", "RASA", "DialogFlow", "Malayalam NLP"],
//       achievements: [
//         "Successfully deployed COVID-19 chatbot serving thousands of citizens",
//         "Won Best Poster Presentation at 34th Kerala Science Congress",
//         "Presented at ICON-2020 and ICON-2021 NLP conferences",
//         "Contributed to public health communication during pandemic"
//       ]
//     }
//   },
// ]

// const educationData = [
//   {
//     id: "msc",
//     title: "MSc Computer Science - AI",
//     subtitle: "University of Galway",
//     description: "Specialization in Artificial Intelligence with focus on NLP, Generative AI, and LLM integration. Achieved First Class Honours with 81% grade and Best Thesis Award.",
//     tags: ["AI", "NLP", "Machine Learning", "Deep Learning", "LLMs"],
//     year: "2024-2025",
//     location: "Galway, Ireland",
//     rating: "1:1",
//     featured: true,
//     thumbnail: "/images/msc-ai-thumb.jpg",
//     details: {
//       grade: "First Class Honours - 81% (1:1)",
//       coursework: [
//         "Natural Language Processing",
//         "Generative AI",
//         "Large Language Models",
//         "Deep Learning",
//         "Machine Learning",
//         "Computer Vision",
//         "Data Science"
//       ],
//       achievements: [
//         "Awarded Best Thesis for outstanding research contribution",
//         "Achieved First Class Honours (1:1) classification",
//         "Specialized in cutting-edge AI technologies including LLMs"
//       ]
//     }
//   },
//   {
//     id: "mtech",
//     title: "MTech Signal Processing",
//     subtitle: "APJ Abdul Kalam Technological University",
//     description: "Advanced studies in Signal Processing with focus on image processing and medical imaging. College Topper with exceptional GPA.",
//     tags: ["Signal Processing", "Image Processing", "Medical Imaging", "Research"],
//     year: "2017-2019",
//     location: "Kerala, India",
//     rating: "9.52",
//     thumbnail: "/images/btech-thumb.jpg",
//     details: {
//       grade: "GPA: 9.52/10 - College Topper",
//       coursework: [
//         "Digital Signal Processing",
//         "Image Processing",
//         "Medical Image Analysis",
//         "Pattern Recognition",
//         "Advanced Mathematics",
//         "Research Methodology"
//       ],
//       achievements: [
//         "College Topper with 9.52 GPA",
//         "Published research on Fetal Heart Disease Detection",
//         "Specialized in medical imaging applications"
//       ]
//     }
//   },
//   {
//     id: "btech",
//     title: "BTech Electronics & Communication",
//     subtitle: "University of Kerala",
//     description: "Undergraduate degree in Electronics and Communication Engineering. College Topper with strong foundation in engineering principles.",
//     tags: ["Electronics", "Communication", "Engineering", "Embedded Systems"],
//     year: "2013-2017",
//     location: "Kerala, India",
//     rating: "8.5",
//     thumbnail: "/images/btech-thumb.jpg",
//     details: {
//       grade: "GPA: 8.5/10 - College Topper",
//       coursework: [
//         "Digital Electronics",
//         "Communication Systems",
//         "Embedded Systems",
//         "Microprocessors",
//         "Signal Processing",
//         "Computer Networks"
//       ],
//       achievements: [
//         "College Topper in BTech batch",
//         "Strong foundation in electronics and communication",
//         "Developed interest in signal processing and AI"
//       ]
//     }
//   },
// ]

// const papersData = [
//   {
//     id: "counter-speech",
//     title: "Counter-speech generation for homophobic and transphobic social media content in Malayalam",
//     subtitle: "Social Network Analysis and Mining, vol. 15, no. 1, p. 87, 2025",
//     description: "P. Prasannan, P. K. Kumaresan, S. Rajakodi, C. N. Subalalitha, and B. R. Chakravarthi. Published in a prestigious Springer journal addressing hate speech in regional Indian language.",
//     tags: ["NLP", "Counter-speech", "Malayalam", "Social Media", "Hate Speech"],
//     year: "2025",
//     rating: "NEW",
//     featured: true,
//     thumbnail: "/images/paper-nlp-thumb.jpg",
//     link: "https://doi.org/10.1007/s13278-025-01507-x",
//     details: {
//       citations: "P. Prasannan, P. K. Kumaresan, S. Rajakodi, C. N. Subalalitha, and B. R. Chakravarthi. \"Counter-speech generation for homophobic and transphobic social media content in Malayalam.\" Social Network Analysis and Mining, vol. 15, no. 1, p. 87, 2025. [Online]. Available: https://doi.org/10.1007/s13278-025-01507-x",
//       achievements: [
//         "Published in Social Network Analysis and Mining (Springer)",
//         "Addresses hate speech in regional Indian language",
//         "Contributes to online safety and content moderation research"
//       ],
//       technologies: ["Natural Language Processing", "Deep Learning", "Malayalam Language Models", "Transformer Architecture", "Social Media Analysis"]
//     }
//   },
//   {
//     id: "chatbot-malayalam",
//     title: "A Chatbot in Malayalam using Hybrid Approach",
//     subtitle: "ICON 2020 - 17th International Conference on Natural Language Processing",
//     description: "Praveen Prasannan, Stephy Joseph, and Rajeev R R. In Proceedings of the 17th International Conference on Natural Language Processing (ICON): System Demonstrations, pages 28-29, Patna, India. NLP Association of India (NLPAI).",
//     tags: ["Chatbot", "NLP", "Malayalam", "Hybrid Approach", "ICON"],
//     year: "2020",
//     rating: "ICON",
//     thumbnail: "/images/paper-ai-thumb.jpg",
//     link: "https://aclanthology.org/2020.icon-demos.11/",
//     details: {
//       citations: "Praveen Prasannan, Stephy Joseph, and Rajeev R R. 2020. \"A Chatbot in Malayalam using Hybrid Approach.\" In Proceedings of the 17th International Conference on Natural Language Processing (ICON): System Demonstrations, pages 28-29, Patna, India. NLP Association of India (NLPAI).",
//       achievements: [
//         "Presented at prestigious ICON conference",
//         "First hybrid chatbot for Malayalam language",
//         "Contributed to regional language NLP research"
//       ],
//       technologies: ["Python", "Natural Language Processing", "Machine Learning", "Rule-based Systems", "Malayalam NLP", "Chatbot Development"]
//     }
//   },
//   {
//     id: "fetal-heart",
//     title: "Fetal Congenital Heart Disease Detection Using Echo Image Enhancement of Atrio-Ventricles (AV) and Vascular Blood Flow",
//     subtitle: "AJWTF 2018 - 7th Asian Joint Workshop on Thermophysics and Fluid Science",
//     description: "Praveen Prasannan, K. S. Biju and Prasannakumar R. In: Proceedings of the 7th Asian Joint Workshop on Thermophysics and Fluid Science (AJWTF 7) 01, pp. 125-129.",
//     tags: ["Medical Imaging", "Heart Disease", "Signal Processing", "Healthcare"],
//     year: "2018",
//     rating: "MED",
//     thumbnail: "/images/paper-medical-thumb.jpg",
//     link: "https://link.springer.com/chapter/10.1007/978-981-15-1892-8_8",
//     details: {
//       citations: "Praveen Prasannan, K. S. Biju and Prasannakumar R. (July 2018). \"Fetal Congenital Heart Disease Detection Using Echo Image Enhancement of Atrio-Ventricles (AV) and Vascular Blood Flow\". In: Proceedings of the 7th Asian Joint Workshop on Thermophysics and Fluid Science (AJWTF 7) 01, pp. 125-129.",
//       achievements: [
//         "Published in Asian Joint Workshop proceedings",
//         "Contributes to prenatal healthcare technology",
//         "Applies signal processing to medical diagnostics"
//       ],
//       technologies: ["Image Processing", "Signal Processing", "Medical Imaging", "MATLAB", "Echo Analysis", "Healthcare AI"]
//     }
//   },
//   {
//     id: "smartphone-auth",
//     title: "Continuous Authentication of Smartphone by Swiping",
//     subtitle: "AICERA 2019 - International Conference on Emerging Technologies for Sustainability",
//     description: "Praveen Prasannan, Christy James Jose. In: Proceedings of International Conference on Emerging Technologies for Sustainability (AICERA 2019).",
//     tags: ["Security", "Authentication", "Mobile", "Biometrics", "Pattern Recognition"],
//     year: "2019",
//     rating: "SEC",
//     thumbnail: "/images/paper-security-thumb.jpg",
//     link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9780429353628-52/continuous-authentication-smartphone-swiping-praveen-prasannan-christy-james-jose",
//     details: {
//       citations: "Praveen Prasannan, Christy James Jose (2019). \"Continuous Authentication of Smartphone by Swiping\". In: Proceedings of International Conference on Emerging Technologies for Sustainability (AICERA 2019).",
//       achievements: [
//         "Published at AICERA international conference",
//         "Novel approach to mobile device security",
//         "Combines biometrics with behavioral analysis"
//       ],
//       technologies: ["Machine Learning", "Biometric Authentication", "Mobile Security", "Pattern Recognition", "Android Development", "Behavioral Analysis"]
//     }
//   },
// ]

// const awardsData = [
//   {
//     id: "thesis",
//     title: "Best Thesis Award",
//     subtitle: "MSc Computer Science - AI 2024-2025",
//     description: "Awarded Best Thesis for outstanding research contribution in Artificial Intelligence at University of Galway, recognizing exceptional academic work in AI research.",
//     tags: ["Research", "AI", "Academic Excellence", "University of Galway"],
//     year: "2025",
//     featured: true,
//     rating: "TOP",
//     thumbnail: "/images/msc-ai-thumb.jpg",
//     details: {
//       achievements: [
//         "Recognized for outstanding research contribution",
//         "Awarded among all MSc AI graduates",
//         "Research focused on cutting-edge AI technologies"
//       ]
//     }
//   },
//   {
//     id: "poster",
//     title: "Best Poster Presentation",
//     subtitle: "34th Kerala Science Congress",
//     description: "Won Best Poster Presentation Award under Engineering and Technology category at the prestigious Kerala Science Congress.",
//     tags: ["Research", "Presentation", "Science Congress", "Engineering"],
//     year: "2020",
//     rating: "1st",
//     thumbnail: "/images/icfoss-thumb.jpg",
//     details: {
//       achievements: [
//         "First place in Engineering and Technology category",
//         "Presented research on NLP and chatbot technologies",
//         "Recognized by Kerala State Council for Science"
//       ]
//     }
//   },
//   {
//     id: "covid",
//     title: "COVID-19 Response Contribution",
//     subtitle: "Government of Kerala",
//     description: "Played a key role in delivering live chatbot projects for the Government of Kerala during the COVID-19 pandemic, helping citizens access critical information.",
//     tags: ["Public Service", "Chatbots", "Healthcare", "Government"],
//     year: "2020",
//     featured: true,
//     rating: "KEY",
//     thumbnail: "/images/icfoss-thumb.jpg",
//     details: {
//       achievements: [
//         "Developed COVID-19 information chatbot for citizens",
//         "Helped disseminate critical health information",
//         "Served thousands of citizens during pandemic",
//         "Contributed to public health communication efforts"
//       ]
//     }
//   },
//   {
//     id: "icon2020",
//     title: "ICON Conference Presentations",
//     subtitle: "ICON-2020 & ICON-2021",
//     description: "Presented software solutions at the International Conference on Natural Language Processing (ICON), the premier NLP conference in India.",
//     tags: ["NLP", "Conference", "Research", "Presentation"],
//     year: "2020-2021",
//     rating: "NLP",
//     thumbnail: "/images/paper-ai-thumb.jpg",
//     details: {
//       achievements: [
//         "Presented at ICON-2020 in Patna, India",
//         "Continued presentations at ICON-2021",
//         "Contributed to NLP research community",
//         "Showcased Malayalam chatbot research"
//       ]
//     }
//   },
//   {
//     id: "topper",
//     title: "College Topper",
//     subtitle: "M.Tech & B.Tech Programs",
//     description: "Achieved top academic position in both M.Tech Signal Processing (2019) and B.Tech Electronics & Communication (2017) programs.",
//     tags: ["Academic Excellence", "Top Performer", "Engineering"],
//     year: "2017, 2019",
//     rating: "#1",
//     thumbnail: "/images/btech-thumb.jpg",
//     details: {
//       achievements: [
//         "College Topper in M.Tech with 9.52 GPA",
//         "College Topper in B.Tech with 8.5 GPA",
//         "Consistent academic excellence across programs",
//         "Strong foundation in engineering and research"
//       ]
//     }
//   },
// ]

// export default function HomePage() {
//   return (
//     <main className="min-h-screen">
//       <Navbar />
//       <HeroSection />
      
//       <div className="relative z-10 -mt-24 bg-gradient-to-b from-transparent to-background">
//         <ContentRow title="Career Journey" items={experienceData} variant="experience" />
//         <SkillsGrid />
//         <ContentRow title="Papers Published" items={papersData} variant="paper" />
//         <ContentRow title="Education & Certifications" items={educationData} variant="education" />
//         <ContentRow title="Awards & Recognition" items={awardsData} variant="award" />
//       </div>
      
//       <Footer />
//     </main>
//   )
// }



"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ContentRow } from "@/components/content-row"
import { SkillsGrid } from "@/components/skills-grid"
import { Footer } from "@/components/footer"
import { DetailModal, type DetailItem } from "@/components/detail-modal"

const experienceData = [
  {
    id: "dsi",
    title: "Research Assistant",
    subtitle: "Data Science Institute, University of Galway",
    description: "Developed a full-stack web application to consolidate research ideas, datasets, and source code. Built backend with Django REST APIs and React.js frontend.",
    tags: ["Python", "Django", "React", "PostgreSQL", "GCP", "Hugging Face"],
    year: "2025-2026",
    location: "Galway, Ireland",
    duration: "6 months",
    featured: true,
    // rating: "95%",
    thumbnail: "/images/ulster-thumb.jpg",
    details: {
      responsibilities: [
        "Developed a full-stack web application to consolidate research ideas, datasets, and source code",
        "Implemented Django REST APIs for seamless data access and integration",
        "Built responsive frontend interfaces using React.js",
        "Deployed the platform on Google Cloud Platform (GCP) for scalability",
        "Integrated machine learning models using Hugging Face Transformers"
      ],
      technologies: ["Python", "Django", "Django REST Framework", "React.js", "PostgreSQL", "Google Cloud Platform", "Hugging Face", "Docker"],
      achievements: [
        "Successfully consolidated research resources into a unified platform",
        "Improved research team collaboration efficiency"
      ]
    }
  },
  {
    id: "aiton",
    title: "Full Stack Developer Intern",
    subtitle: "Aiton AI Technological Optimization",
    description: "Built a full-stack dashboard using Python Django (backend) and ReactJS (frontend) for AI optimization solutions.",
    tags: ["Python", "Django", "React", "AI"],
    year: "2025",
    location: "Dublin, Ireland",
    duration: "3 months",
    // rating: "90%",
    thumbnail: "/images/tcs-thumb.jpg",
    details: {
      responsibilities: [
        "Developed full-stack dashboard for AI optimization solutions",
        "Built robust backend services using Python Django",
        "Created interactive frontend interfaces with ReactJS",
        "Integrated AI/ML models into the dashboard platform"
      ],
      technologies: ["Python", "Django", "React.js", "REST APIs", "AI/ML Integration"],
      achievements: [
        "Delivered production-ready dashboard within internship timeline",
        "Contributed to AI optimization product development"
      ]
    }
  },
  {
    id: "tcs",
    title: "System Engineer",
    subtitle: "Tata Consultancy Services (TCS)",
    description: "Developed and maintained a Django REST API supporting 25K+ daily users, improving issue-resolution workflow efficiency by 40%. Built microservices and batch jobs for large-scale data operations.",
    tags: ["Python", "Django", "React", "Git", "REST APIs"],
    year: "2022-2024",
    location: "Kerala, India",
    duration: "2+ years",
    // rating: "92%",
    thumbnail: "/images/tcs-thumb.jpg",
    details: {
      responsibilities: [
        "Developed and maintained Django REST APIs supporting 25,000+ daily users",
        "Built microservices architecture for scalable backend systems",
        "Designed batch jobs for large-scale data operations",
        "Collaborated with cross-functional teams using Git version control",
        "Implemented performance optimizations and code quality improvements"
      ],
      technologies: ["Python", "Django", "Django REST Framework", "React.js", "Git", "PostgreSQL", "Microservices", "Batch Processing"],
      achievements: [
        "Improved issue-resolution workflow efficiency by 40%",
        "Successfully scaled system to handle 25K+ daily active users",
        "Received recognition for code quality and system reliability"
      ]
    }
  },
  {
    id: "softnotions",
    title: "Software Engineer",
    subtitle: "Softnotions Technologies Pvt Ltd",
    description: "Developed REST APIs for Android and iOS apps. Deployed services on AWS ensuring high availability. Managed a 5-member engineering team.",
    tags: ["Python", "Django", "PostgreSQL", "AWS", "Team Lead"],
    year: "2021-2022",
    location: "Kerala, India",
    duration: "1+ years",
    // rating: "88%",
    thumbnail: "/images/cusat-thumb.jpg",
    details: {
      responsibilities: [
        "Developed REST APIs for Android and iOS mobile applications",
        "Deployed and maintained services on AWS cloud infrastructure",
        "Led and managed a 5-member engineering team",
        "Ensured high availability and reliability of production services",
        "Conducted code reviews and mentored junior developers"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "AWS (EC2, S3, RDS)", "REST APIs", "Mobile Backend"],
      achievements: [
        "Successfully delivered multiple mobile app backends",
        "Achieved high availability SLA for production services",
        "Grew and mentored a 5-person engineering team"
      ]
    }
  },
  {
    id: "icfoss",
    title: "Research Fellow",
    subtitle: "ICFOSS - Government of Kerala",
    description: "Designed and implemented chatbots for Kerala Government including COVID-19 Information Bot and Social Security Bot. Applied NLP for regional language support in Malayalam.",
    tags: ["Python", "Flask", "NLP", "MySQL", "Chatbots", "Government"],
    year: "2019-2021",
    location: "Kerala, India",
    duration: "1.5 years",
    featured: true,
    // rating: "94%", 
    thumbnail: "/images/icfoss-thumb.jpg",
    details: {
      responsibilities: [
        "Designed and developed chatbots for Kerala Government initiatives",
        "Built COVID-19 Information Bot to help citizens during pandemic",
        "Created Social Security Bot for government welfare programs",
        "Implemented NLP solutions for Malayalam language support",
        "Deployed chatbot systems on government infrastructure"
      ],
      technologies: ["Python", "Flask", "Natural Language Processing", "MySQL", "RASA", "DialogFlow", "Malayalam NLP"],
      achievements: [
        "Successfully deployed COVID-19 chatbot serving thousands of citizens",
        "Won Best Poster Presentation at 34th Kerala Science Congress",
        "Presented at ICON-2020 and ICON-2021 NLP conferences",
        "Contributed to public health communication during pandemic"
      ]
    }
  },
]

const educationData = [
  {
    id: "msc",
    title: "MSc Computer Science - AI",
    subtitle: "University of Galway",
    description: "Specialization in Artificial Intelligence with focus on NLP, Generative AI, and LLM integration. Achieved First Class Honours with 81% grade and Best Thesis Award.",
    tags: ["AI", "NLP", "Machine Learning", "Deep Learning", "LLMs"],
    year: "2024-2025",
    location: "Galway, Ireland",
    rating: "1:1",
    featured: true,
    thumbnail: "/images/msc-ai-thumb.jpg",
    details: {
      grade: "First Class Honours - 81% (1:1)",
      coursework: [
        "Natural Language Processing",
        "Generative AI",
        "Large Language Models",
        "Deep Learning",
        "Machine Learning",
        "Computer Vision",
        "Data Science"
      ],
      achievements: [
        "Awarded Best Thesis for outstanding research contribution",
        "Achieved First Class Honours (1:1) classification",
        "Specialized in cutting-edge AI technologies including LLMs"
      ]
    }
  },
  {
    id: "mtech",
    title: "MTech Signal Processing",
    subtitle: "APJ Abdul Kalam Technological University",
    description: "Advanced studies in Signal Processing with focus on image processing and medical imaging. College Topper with exceptional GPA.",
    tags: ["Signal Processing", "Image Processing", "Medical Imaging", "Research"],
    year: "2017-2019",
    location: "Kerala, India",
    rating: "9.52",
    thumbnail: "/images/btech-thumb.jpg",
    details: {
      grade: "GPA: 9.52/10 - College Topper",
      coursework: [
        "Digital Signal Processing",
        "Image Processing",
        "Medical Image Analysis",
        "Pattern Recognition",
        "Advanced Mathematics",
        "Research Methodology"
      ],
      achievements: [
        "College Topper with 9.52 GPA",
        "Published research on Fetal Heart Disease Detection",
        "Specialized in medical imaging applications"
      ]
    }
  },
  {
    id: "btech",
    title: "BTech Electronics & Communication",
    subtitle: "University of Kerala",
    description: "Undergraduate degree in Electronics and Communication Engineering. College Topper with strong foundation in engineering principles.",
    tags: ["Electronics", "Communication", "Engineering", "Embedded Systems"],
    year: "2013-2017",
    location: "Kerala, India",
    rating: "8.5",
    thumbnail: "/images/btech-thumb.jpg",
    details: {
      grade: "GPA: 8.5/10 - College Topper",
      coursework: [
        "Digital Electronics",
        "Communication Systems",
        "Embedded Systems",
        "Microprocessors",
        "Signal Processing",
        "Computer Networks"
      ],
      achievements: [
        "College Topper in BTech batch",
        "Strong foundation in electronics and communication",
        "Developed interest in signal processing and AI"
      ]
    }
  },
]

const papersData = [
  {
    id: "counter-speech",
    title: "Counter-speech generation for homophobic and transphobic social media content in Malayalam",
    subtitle: "Social Network Analysis and Mining, vol. 15, no. 1, p. 87, 2025",
    description: "P. Prasannan, P. K. Kumaresan, S. Rajakodi, C. N. Subalalitha, and B. R. Chakravarthi. Published in a prestigious Springer journal addressing hate speech in regional Indian language.",
    tags: ["NLP", "Counter-speech", "Malayalam", "Social Media", "Hate Speech"],
    year: "2025",
    rating: "NEW",
    featured: true,
    thumbnail: "/images/paper-nlp-thumb.jpg",
    link: "https://doi.org/10.1007/s13278-025-01507-x",
    details: {
      citations: 'P. Prasannan, P. K. Kumaresan, S. Rajakodi, C. N. Subalalitha, and B. R. Chakravarthi. "Counter-speech generation for homophobic and transphobic social media content in Malayalam." Social Network Analysis and Mining, vol. 15, no. 1, p. 87, 2025. [Online]. Available: https://doi.org/10.1007/s13278-025-01507-x',
      achievements: [
        "Published in Social Network Analysis and Mining (Springer)",
        "Addresses hate speech in regional Indian language",
        "Contributes to online safety and content moderation research"
      ],
      technologies: ["Natural Language Processing", "Deep Learning", "Malayalam Language Models", "Transformer Architecture", "Social Media Analysis"]
    }
  },
  {
    id: "chatbot-malayalam",
    title: "A Chatbot in Malayalam using Hybrid Approach",
    subtitle: "ICON 2020 - 17th International Conference on Natural Language Processing",
    description: "Praveen Prasannan, Stephy Joseph, and Rajeev R R. In Proceedings of the 17th International Conference on Natural Language Processing (ICON): System Demonstrations, pages 28-29, Patna, India. NLP Association of India (NLPAI).",
    tags: ["Chatbot", "NLP", "Malayalam", "Hybrid Approach", "ICON"],
    year: "2020",
    rating: "ICON",
    thumbnail: "/images/paper-ai-thumb.jpg",
    link: "https://aclanthology.org/2020.icon-demos.11/",
    details: {
      citations: 'Praveen Prasannan, Stephy Joseph, and Rajeev R R. 2020. "A Chatbot in Malayalam using Hybrid Approach." In Proceedings of the 17th International Conference on Natural Language Processing (ICON): System Demonstrations, pages 28-29, Patna, India. NLP Association of India (NLPAI).',
      achievements: [
        "Presented at prestigious ICON conference",
        "First hybrid chatbot for Malayalam language",
        "Contributed to regional language NLP research"
      ],
      technologies: ["Python", "Natural Language Processing", "Machine Learning", "Rule-based Systems", "Malayalam NLP", "Chatbot Development"]
    }
  },
  {
    id: "fetal-heart",
    title: "Fetal Congenital Heart Disease Detection Using Echo Image Enhancement of Atrio-Ventricles (AV) and Vascular Blood Flow",
    subtitle: "AJWTF 2018 - 7th Asian Joint Workshop on Thermophysics and Fluid Science",
    description: "Praveen Prasannan, K. S. Biju and Prasannakumar R. In: Proceedings of the 7th Asian Joint Workshop on Thermophysics and Fluid Science (AJWTF 7) 01, pp. 125-129.",
    tags: ["Medical Imaging", "Heart Disease", "Signal Processing", "Healthcare"],
    year: "2018",
    rating: "MED",
    thumbnail: "/images/paper-medical-thumb.jpg",
    link: "https://link.springer.com/chapter/10.1007/978-981-15-1892-8_8",
    details: {
      citations: 'Praveen Prasannan, K. S. Biju and Prasannakumar R. (July 2018). "Fetal Congenital Heart Disease Detection Using Echo Image Enhancement of Atrio-Ventricles (AV) and Vascular Blood Flow". In: Proceedings of the 7th Asian Joint Workshop on Thermophysics and Fluid Science (AJWTF 7) 01, pp. 125-129.',
      achievements: [
        "Published in Asian Joint Workshop proceedings",
        "Contributes to prenatal healthcare technology",
        "Applies signal processing to medical diagnostics"
      ],
      technologies: ["Image Processing", "Signal Processing", "Medical Imaging", "MATLAB", "Echo Analysis", "Healthcare AI"]
    }
  },
  {
    id: "smartphone-auth",
    title: "Continuous Authentication of Smartphone by Swiping",
    subtitle: "AICERA 2019 - International Conference on Emerging Technologies for Sustainability",
    description: "Praveen Prasannan, Christy James Jose. In: Proceedings of International Conference on Emerging Technologies for Sustainability (AICERA 2019).",
    tags: ["Security", "Authentication", "Mobile", "Biometrics", "Pattern Recognition"],
    year: "2019",
    rating: "SEC",
    thumbnail: "/images/paper-security-thumb.jpg",
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9780429353628-52/continuous-authentication-smartphone-swiping-praveen-prasannan-christy-james-jose",
    details: {
      citations: 'Praveen Prasannan, Christy James Jose (2019). "Continuous Authentication of Smartphone by Swiping". In: Proceedings of International Conference on Emerging Technologies for Sustainability (AICERA 2019).',
      achievements: [
        "Published at AICERA international conference",
        "Novel approach to mobile device security",
        "Combines biometrics with behavioral analysis"
      ],
      technologies: ["Machine Learning", "Biometric Authentication", "Mobile Security", "Pattern Recognition", "Android Development", "Behavioral Analysis"]
    }
  },
]

const awardsData = [
  {
    id: "thesis",
    title: "Best Thesis Award",
    subtitle: "MSc Computer Science - AI 2024-2025",
    description: "Awarded Best Thesis for outstanding research contribution in Artificial Intelligence at University of Galway, recognizing exceptional academic work in AI research.",
    tags: ["Research", "AI", "Academic Excellence", "University of Galway"],
    year: "2025",
    featured: true,
    rating: "TOP",
    thumbnail: "/images/msc-ai-thumb.jpg",
    details: {
      achievements: [
        "Recognized for outstanding research contribution",
        "Awarded among all MSc AI graduates",
        "Research focused on cutting-edge AI technologies"
      ]
    }
  },
  {
    id: "poster",
    title: "Best Poster Presentation",
    subtitle: "34th Kerala Science Congress",
    description: "Won Best Poster Presentation Award under Engineering and Technology category at the prestigious Kerala Science Congress.",
    tags: ["Research", "Presentation", "Science Congress", "Engineering"],
    year: "2020",
    rating: "1st",
    thumbnail: "/images/icfoss-thumb.jpg",
    details: {
      achievements: [
        "First place in Engineering and Technology category",
        "Presented research on NLP and chatbot technologies",
        "Recognized by Kerala State Council for Science"
      ]
    }
  },
  {
    id: "covid",
    title: "COVID-19 Response Contribution",
    subtitle: "Government of Kerala",
    description: "Played a key role in delivering live chatbot projects for the Government of Kerala during the COVID-19 pandemic, helping citizens access critical information.",
    tags: ["Public Service", "Chatbots", "Healthcare", "Government"],
    year: "2020",
    featured: true,
    rating: "KEY",
    thumbnail: "/images/icfoss-thumb.jpg",
    details: {
      achievements: [
        "Developed COVID-19 information chatbot for citizens",
        "Helped disseminate critical health information",
        "Served thousands of citizens during pandemic",
        "Contributed to public health communication efforts"
      ]
    }
  },
  {
    id: "icon2020",
    title: "ICON Conference Presentations",
    subtitle: "ICON-2020 & ICON-2021",
    description: "Presented software solutions at the International Conference on Natural Language Processing (ICON), the premier NLP conference in India.",
    tags: ["NLP", "Conference", "Research", "Presentation"],
    year: "2020-2021",
    rating: "NLP",
    thumbnail: "/images/paper-ai-thumb.jpg",
    details: {
      achievements: [
        "Presented at ICON-2020 in Patna, India",
        "Continued presentations at ICON-2021",
        "Contributed to NLP research community",
        "Showcased Malayalam chatbot research"
      ]
    }
  },
  {
    id: "topper",
    title: "College Topper",
    subtitle: "M.Tech & B.Tech Programs",
    description: "Achieved top academic position in both M.Tech Signal Processing (2019) and B.Tech Electronics & Communication (2017) programs.",
    tags: ["Academic Excellence", "Top Performer", "Engineering"],
    year: "2017, 2019",
    rating: "#1",
    thumbnail: "/images/btech-thumb.jpg",
    details: {
      achievements: [
        "College Topper in M.Tech with 9.52 GPA",
        "College Topper in B.Tech with 8.5 GPA",
        "Consistent academic excellence across programs",
        "Strong foundation in engineering and research"
      ]
    }
  },
]

export default function HomePage() {
  const [activeItem, setActiveItem] = useState<DetailItem | null>(null)
  const [activeVariant, setActiveVariant] = useState<"experience" | "skill" | "education" | "award" | "paper">("experience")

  const handleOpenModal = (item: DetailItem, variant: any) => {
    setActiveVariant(variant)
    setActiveItem(item)
  }

  const handleCloseModal = () => {
    setActiveItem(null)
  }

  return (
    <main className="min-h-screen">
      <Navbar onNavigateHome={handleCloseModal} />
      <HeroSection />
      
      <div className="relative z-10 -mt-24 bg-gradient-to-b from-transparent to-background">
        <ContentRow 
          title="Career Journey" 
          items={experienceData} 
          variant="experience" 
          onItemSelect={(item) => handleOpenModal(item, "experience")}
        />
        <SkillsGrid />
        <ContentRow 
          title="Papers Published" 
          items={papersData} 
          variant="paper" 
          onItemSelect={(item) => handleOpenModal(item, "paper")}
        />
        <ContentRow 
          title="Education & Certifications" 
          items={educationData} 
          variant="education" 
          onItemSelect={(item) => handleOpenModal(item, "education")}
        />
        <ContentRow 
          title="Awards & Recognition" 
          items={awardsData} 
          variant="award" 
          onItemSelect={(item) => handleOpenModal(item, "award")}
        />
      </div>
      
      <Footer />

      <DetailModal 
        item={activeItem} 
        onClose={handleCloseModal} 
        variant={activeVariant}
      />
    </main>
  )
}