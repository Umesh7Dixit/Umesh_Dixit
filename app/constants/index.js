import company1 from "../../public/c1.jpeg";
import company2 from "../../public/c2.jpeg";

import project1 from "../../public/project1.jpeg";
import project2 from "../../public/project2.jpeg";
import project3 from "../../public/project3.jpeg";

export const PROFILE = {
  name: "Umesh Dixit",
  city: "Ghaziabad,UP",
  greet: "Nice to Meet you!",
};

export const PROJECTS = [
  {
    name: "Project 1",
    image: project1,
    url: "https://github.com/Umesh7Dixit/PeerPulse_With_RealTime_Chat",
  },
  {
    name: "Project 2",
    image: project2,
    url: "https://github.com/Umesh7Dixit/TaskEase-WithBackend",
  },
  {
    name: "Project 3",
    image: project3,
    url: "https://github.com/Umesh7Dixit/crypto_Exchange_WebApp",
  },
  
];

export const SKILLS = [
  " C++, Python, HTML, CSS, JavaScript, SQL",
  "VS Code, Git/GitHub, MongoDB, MySQL",
  "React.js, Next.js, Express, Tailwind CSS, Chakra UI",
  "Data Structures and Algorithms, Database Management System, OOPS",
];

export const EXPERIENCES = [
  {
    img: company1,
    year: "May 2024",
    role: "open-source contribution",
    company: "StartConnect-Hub",
    description: `Build the Explore-Us page with image integration and component alignment.`,
    technologies: [ "HTML", "CSS","Javascript", "React.js"],
  },
  {
    img: company2,
    year: "Oct 2023",
    role: "open-source contribution",
    company: "Review App",
    description: `Developed a responsive About page for the review application.`,
    technologies: ["HTML", "Tailwind CSS", "JavaScript", " React.js"],
  },
   
 
];
