/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Wacims's Portfolio",
  description:
    "AI and Data Science enthusiast 🤖📊 with hands-on experience building intelligent systems using Python, Machine Learning, and Deep Learning. Skilled in data analysis, predictive modeling, and computer vision, with a passion for solving real-world problems through actionable data insights.",
  og: {
    title: "Wacim Halit Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Wacim Sidali Halit",
  logo_name: "Wacim",
  subTitle:
    "AI and Data Science enthusiast 🤖📊 with hands-on experience building intelligent systems, with a passion for solving real-world problems through actionable data insights.",
  resumeLink:
    "https://drive.google.com/file/d/1whAQ88eC_RIt3OEYih-XhtgnRiDWEdq9/view?usp=sharing",
  githubProfile: "https://github.com/whalit",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/whalit",
  // linkedin: "https://www.linkedin.com/in/wacim-sidali-halit-197a761b6/",
  // gmail: "halit.wacim@gmail.com",
  {
    name: "Github",
    link: "https://github.com/ashutosh1919",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh1919/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ashutoshhathidara98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
  "🔶Build and deploy scalable machine learning models for various business use cases",
  "🔶Design and implement robust data pipelines for ETL processes and real-time data streaming",
  "🔶Extract actionable insights from complex datasets through advanced data analysis, visualization, and statistical modeling", 
  "🔶Hands-on experience developing Computer Vision solutions and time series analytical models"
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "vscode-icons:file-type-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "devicon:tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
                {
          skillName: "Keras",
          fontAwesomeClassname: "devicon-plain:opencv-wordmark",
          style: {
            backgroundColor: "white",
            color: "#000000ff",
          },
        },

        {
          skillName: "PyTorch",
          fontAwesomeClassname: "material-icon-theme:pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Anaconda",
          fontAwesomeClassname: "devicon:anaconda",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },

        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
        {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "🔶Host and maintain websites on virtual machine instances along with integration of databases",
        "🔶Deploying deep learning models on cloud to use on mobile devices",
        "🔶Setting up streaming jobs from DB to Server or vice-versa on Azure",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
                {
          skillName: "SQL",
          fontAwesomeClassname: "vscode-icons:file-type-plsql",
          style: {
            color: "#78abeb",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "skill-icons:mysql-dark",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "🔶Build responsive websites using JavaScript and Scala with modern frontend frameworks and robust backend services",
        "🔶Develop mobile applications including native Android apps in Java/Kotlin",
        "🔶Design and implemented complete digital solutions from concept to deployment, handling both client-side and server-side architecture"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
                {
          skillName: "Java",
          fontAwesomeClassname: "skill-icons:java-dark",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Scala",
          fontAwesomeClassname: "material-icon-theme:scala",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Koltin",
          fontAwesomeClassname: "material-icon-theme:kotlin",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Android SDK",
          fontAwesomeClassname: "skill-icons:androidstudio-dark",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "🔶Design intuitive interfaces for mobile and web applications",
        "🔶Map application workflows to enhance user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page


const degrees = {
  degrees: [
    {
      title: "Vrije Universiteit Brussels (VUB)",
      subtitle: "Master in Applied Science and Engineering : Artificial intelligence",
      logo_path: "vub.png",
      duration: "2022 - 2025",
      descriptions: [

        "🎯Mastered statistical machine learning, reinforcement learning, and current AI trends through comprehensive coursework and hands-on research training",
        "🎯Gained expertise in advanced areas like computer vision, natural language processingand bioinformatics through diverse electives",
        "🎯Developed research capabilities and strategic vision through thesis work, scientific methodology training, and hands-on experience implementing AI and Data use cases across different industry sectors and companies",
      ],
    },
    {
      title: "Université Libre de Bruxelles (ULB)",
      subtitle: "Bachelor in Computer Science",
      logo_path: "ulb.png",
      alt_name: "Indiana University Bloomington",
      duration: "2019 - 2023",
      descriptions: [
        "🎯Mastered end-to-end project development through programming, algorithms, software engineering, and hands-on experience with diverse systems including databases, networks, and operating systems architecture",
        "🎯Gained proficiency in multiple computer science domains (bioinformatics, programming languages, system administration) with strategic application across various industries including biology, electronics, and business management",
        "🎯Developed professional skills through team software development, cross-functional collaboration, and preparation for IT executive roles"
      ],
    },

        {
      title: "Université des Sciences et de la Technologie Houari Boumediene (USTHB)",
      subtitle: "Bachelor in System Information & Software Engineering",
      logo_path: "usthb.jpg",
      duration: "2017 - 2019",
      descriptions: [
        "🎯Mastered complete software development lifecycle from needs analysis to implementation, including modern design methodologies, database management, software testing, and project management across various application types (web, enterprise systems, control software)",
        "🎯 Gained expertise in analyzing and improving company information systems, implementing ERP solutions, managing integrated software packages, and conducting IT procurement operations with hands-on industry project experience",
        "🎯 Developed managerial competencies, organizational knowledge, communication techniques, and the ability to collaborate across disciplines while understanding enterprise functions and strategic IT decision-making processes",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "LightHouse Bootcamp",
      subtitle: "KPMG",
      logo_path: "kpmg.jpg",
      color_code: "#ffffffff",
    },
    {
      title: "Data Analysis with Python",
      subtitle: "Free Code Camp",
      logo_path: "fcc.webp",
      color_code: "#0a0a23",
    },
    {
      title: "Complete Web Developper Training",
      subtitle: "Udemy",
      logo_path: "udemy.webp",
      color_code: "#350c50",
    },
  ],
};

// Experience Page
const experience = {
  title: "Internships & Work Experience",
  subtitle: "Throughout my academic journey, I was proactive in gaining diverse work experience through internships, freelance projects, and student jobs, which helped me develop professional skills and work ethic",
  sections: [
     {
      title: "Internships",
      experiences: [
        {
          title: "Data Engineer & Computer Vision Intern",
          company: "Puratos",
          company_url: "https://www.puratos.be/fr",
          logo_path: "puratos.jpg",
          duration: "March 2023 - September 2023",
          location: "Brussels, Belgium",
descriptions: [
  "I was Responsible for implementing a computer vision solution aimed at automating quality product analysis and streamlining manufacturing processes to enable faster recipe adaptation to client formulations using Python and Azure Data Services",
  "🎯 Developed computer vision data pipelines with OpenCV and Python, reducing quality evaluation time by 40%",
  "🎯 Created automated ETL workflows for multi-source inputs using SQL and Azure Data Services, standardizing R&D data",
  "🎯 Built Streamlit web portal improving model accessibility for 10 teams with interactive visualizations using Matplotlib",
  "🎯 Structured and maintained SQL databases for efficient data storage and retrieval operations"
],
        },
        {
          title: "Machine Learning Intern",
          company: "Jumia Group",
          logo_path: "jumia.jpg",
          duration: "February 2019 - September 2019",
          location: "Algiers, Algeria",
        descriptions: [
  "🎯 Integrated ML forecasts into executive dashboards using Python and SQL in collaboration with BI team for data-driven decision making",
  "🎯 Developed recommendation engine with Python and machine learning algorithms, increasing customer basket value by 15%", 
  "🎯 Created comprehensive technical documentation for model architectures and maintenance procedures using collaborative tools"
],
        },
      ],
    },
    { title : "Work",
      work: true,
      experiences: [
        {
          title: "Freelance : Front-end Designer",
          company: "Fiverr",
          logo_path: "fiverr.png",
          duration: "June 2021 - April 2022",
          descriptions: ["I have worked as a freelancer in front-end design, translating client requirements into technical design solutions using Figma and Adobe XD. Through various freelance projects, I have developed strong skills in understanding business needs, creating prototypes and delivering designs within tight deadlines."],
          color: "#000000",
        },
        {
          title: "Programming and Algorithms Teaching Assistant",
          company: "Reussit' School",
          company_url: "https://www.reussitschool.be/",
          logo_path: "rs.jpg",
          duration: "December 2020 - August 2021",
          location: "Brussels, Belgium",
          description:
            "I served as a programming and algorithms instructor for first-year university students, teaching fundamental computer science concepts including data structures, algorithm design, and programming logic. My role involved developing comprehensive lesson plans, creating practical coding exercises, and providing personalized guidance to help students transition from theoretical concepts to hands-on implementation.",
        },
          {
          title: "Sales Advisor",
          company: "UNIQLO",
          company_url: "https://about.google/",
          logo_path: "uql.png",
          duration: "November 2022 - December 2024",
          location: "Brussels, Belgium",
          description : "Worked as a sales advisor providing customer service, managing inventory, and supporting daily store operations while balancing academic commitments. Developed strong communication skills and experience in a fast-paced international retail environment.",
        },

      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",

};



const contactInfo = {
  title: "Contact Me",
  phone: "+32 493 84 42 74", // Replace with your actual phone number
  email: "halit.wacim@gmail.com", // Your actual email
};

export {
  certifications, contactInfo, degrees, experience, greeting, projectsHeader, seo, settings, skills, socialMediaLinks
};

