import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dasari Bhargavi",
  title: "Hi all, I'm Bhargavi",
  subTitle: emoji(
    "A passionate Mern Stack Software Developer 🚀 having an experience of building Websites interactive with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1btCV67x7a9QDBuePykIwtaeR1PuD4yLb/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Bhavi-13",
  linkedin: "https://www.linkedin.com/in/dasaribhargavi/",
  gmail: "dasaribhargavi35@gmail.com",
  facebook: "https://www.facebook.com/dasari.bhargavi.581/",
  instagram: "https://www.instagram.com/mithali.raj2000/",
  twitter: "https://twitter.com/DasariBhargavi4",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY MERN STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) with a flair for exploring diverse technologies."
    ),
    emoji(
      "⚡ Develop highly interactive and responsive user interfaces for web and mobile applications using HTML5, CSS3, Sass, Bootstrap, and advanced JavaScript libraries/frameworks like React.js"
    ),
    emoji(
      "⚡ Build robust server-side applications with Node.js and Express.js, ensuring efficient RESTful API design and secure authentication method."
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-mdb"
    }
   
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Priyadarshini Institute of Technology and Science for Women",
      logo: require("./assets/images/pitw-logo.png"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "July 2018 - June 2022",
      desc: "Got 8.47 CGPA"
    },
    {
      schoolName: "Seetha Ramaiah Junior College",
      logo: require("./assets/images/InterClg_logo.jpg"),
      subHeader: "Intermediate",
      duration: "June 2016 - May 2018",
      desc: "Got 968 Marks",
    },
    {
      schoolName: "B.S.R MPL Girls High School",
      logo: require("./assets/images/10th_logo.jpg"),
      subHeader: "SSC",
      duration: "June 2015 - May 2016",
      desc: "Got 9.0 GPA",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false 
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer Intern",
      company: "Tech Synergia",
      companylogo: require("./assets/images/tech synergia-logo.png"),
      date: "July 2023 - September 2023",
      desc: "I am grateful for the opportunity to contribute to the innovative projects at Tech Synergia and look forward to leveraging this experience in my future endeavors.",
      descBullets: [
        "Successful Implementation of Various Projects",
        "Continuous Learning and Skill Development",
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true", 
  display: true 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Live Project",
  subtitle: "I HAVE DONE THESE PROJECTS FOR TECH SYNERGIA COMPANY",
  projects: [
    {
      image: require("./assets/images/sattonjanam.png"),
      projectName: "Sattonjanam Matrimonial Website",
      projectDesc: "Contributed as a Front-End Developer to the creation of Sattonjanam Matrimonial Website, seamlessly blending design and functionality for an engaging user experience during my internship.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://sattonjanam.com/"
        }
      ]
    },
  ],
  display: true
};

// open source projects
const openSourceProjects = {
  title: "Open Source Projects",
  subtitle: "I HAVE DONE THESE PROJECTS FOR IMPROVEMENT OF CODING SKILLS",
  projects: [
    {
      image: require("./assets/images/e-shop.png"),
      projectName: "E-Commerce Shopping Website",
      projectDesc: "Developing a cutting-edge e-commerce application that seamlessly integrates user-friendly interfaces for a streamlined online shopping experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://e-shop-context-kappa.vercel.app/cart"
        }
      ]
    },
    {
      image: require("./assets/images/expense.png"),
      projectName: "Expense Manager",
      projectDesc: "Creating an intuitive expense manager website that empowers users to efficiently track, categorize, and analyze their financial transactions for improved budgeting and financial management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://expense-manager-iota.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/chuck_norries.png"),
      projectName: "Chuck Norries",
      projectDesc: "Creating a Chuck Norris jokes website, delivering laughter through a curated collection of legendary and entertaining anecdotes about the iconic martial artist through interactive elements.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cendrol-react-inter-task.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/todo.png"),
      projectName: "TODO List",
      projectDesc: "Developing a streamlined, user-friendly todo list application to enhance productivity, organization, and collaboration through efficient task management and intuitive user interfaces",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://todo-list-app-bhavi-13.vercel.app/"
        }
      ]
    },
 
  ],
  display: true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MERN Stack Developer",
      subtitle:
        "Completed Course from Be-Practical Tech Solutions",
      image: require("./assets/images/bePractical.jpg"),
      imageAlt: "Course",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },

    {
      title: "Software Developer Intern",
      subtitle: "Completed Internship from Tech Synergia",
      image: require("./assets/images/tech synergia-logo.png"),
      imageAlt: "Internship",
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1-fYdm0-SiqIH9sPUzyj24plPpIUgixmi/view?usp=sharing"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to reach out. I'm always open to new opportunities and collaborations!",
  number: "+917997184945",
  email_address: "dasaribhargavi35@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  openSourceProjects,
  achievementSection,
  contactInfo,
  isHireable
};
