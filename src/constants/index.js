import {
    mobile,
    backend,
    creator,
    web,
    cpp,
  Flask,
  Java,
  mysql,PostgreSQL,python,Tensorflow,springboot,
  githublogo,instagram,leetcode,linkedin,
    mongodb,

    docker,
    belzabar,
    Chandigarh_University,
stocktrainer,signify,smartwaste,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Structures and Algorithm",
      icon: web,
    },
    {
      title: "Machine Learning",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Management",
      icon: creator,
    },
  ];
  const socials = [
    {
      title: "Github",
      icon: githublogo,
      link:"https://github.com/Yogesh-janghel"
    },
    {
      title: "linkedin",
      icon: linkedin,
      link:"https://www.linkedin.com/in/yogesh-janghel-ba2246228/"
    },
    {
      title: "instagram",
      icon: instagram,
      link:"https://www.instagram.com/yogesh__janghel/?hl=en"
    },
    {
      title: "leetcode",
      icon: leetcode,
      link:"https://leetcode.com/u/yogeshjanghel/"
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "Cpp",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
    {
      name: "Flask",
      icon: Flask,
    },
    {
      name: "Tensorflow",
      icon: Tensorflow,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "PostgreSQL",
      icon: PostgreSQL,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Science Engineering",
      company_name: "Chandigarh University",
      icon: Chandigarh_University,
      iconBg: "#383E56",
      date: "2021 - 2025",
      points: [
        "Final Year Computer Science Student",
        
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Belzabar Software",
      icon: belzabar,
      iconBg: "#E6DEDD",
      date: "Sep 2024 - Present",
      points: [
        "Software Design & Development: Conceptualize architecture and write efficient code for features.",
        "Quality Assurance: Conduct testing to ensure functionality and performance.",
        "Debugging & Maintenance: Identify and resolve defects to enhance software reliability."
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Signify Text",
      description:
        "A machine learning model that translates text into sign language using an ensemble approach can combine the strengths of multiple individual models to improve the overall accuracy and robustness of the translation process.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "machine learning",
          color: "green-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
      ],
      image: signify,
      source_code_link: "https://github.com/Yogesh-janghel/Sign-language-Minor-project",
    },
    {
      name: "Stock Trainer Application",
      description:
      "The application simulates a stock trading environment where users can buy, sell stocks, track portfolio performance, and analyze market trends, helping them improve decision-making and gain insights into stock market dynamics.",
      tags: [
        {
          name: "MySQL",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: stocktrainer,
      source_code_link: "https://github.com/Yogesh-janghel/Stock-Trainer-application",
    },
    {
      name: "Smart Waste Management System",
      description:
      "An AI model classifies waste as biodegradable or non-biodegradable, automating waste management in industries like recycling, waste collection, and environmental sustainability.",
      tags: [
        {
          name: "CNN",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: smartwaste,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,socials };