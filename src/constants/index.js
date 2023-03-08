import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  bosch,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  python,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  lego,
  student,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Designer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mindstorms EV3 / Lego Boost (Block) Programmer",
    company_name: "Student",
    icon: lego,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Proficient in programming Mindstorms EV3 and Lego Boost robots using block-based programming and Python.",
      "Designed and created several robotics projects, including Vernie (humanoid robot), a gripper robot (for holding things), and a robo snake.",
      "Implemented innovative ideas and concepts to enhance the functionality and design of the robots.",
    ],
  },
  {
    title: "Python Programmer",
    company_name: "Student",
    icon: python,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Experienced Python programmer with a focus on robotics and AI development",
      "Proficient in using Python and Mindstorms to create functional robotics projects",
      "Extensive knowledge in AI and machine learning, with experience using Keras, OpenCV, TensorFlow, and GPT for various projects",
      "Developed Anistories, a project that utilizes GPT to generate stories, demonstrating skills in natural language processing and AI",
      "Created Toonify, a project that transforms faces into cartoon characters using computer vision techniques and image processing algorithms",
    ],
  },
  {
    title: "Fullstack / Powerapps Developer",
    company_name: "Student",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Designed and developed Maskio, a web-based game using model-driven apps and JavaScript that has received positive feedback and helped improve my skills as a developer.",
      "Participated in a game jam on GitHub jam where I got the idea to build Maskio in the first place.",
      "Earned certifications in Azure AI and Microsoft PowerApps, becoming the youngest person in the world to achieve these certifications.",
      "Showcased my custom-built apps using PowerApps, a low-code development platform, and presented them at PowerApps4Kids to inspire and motivate young people to explore technology and coding.",
      "Created AniKode Landing Page Builder, a web-based tool that makes it easy to create landing pages using Nocode/Low code editors, and published it on Product Hunt to share with the wider web development community.",
    ],
  },
  {
    title: "Collaboration Project With Bosch",
    company_name: "Bosch",
    icon: bosch,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    name: "Bosch Collaboration",
    description:
      "When training autonomous cars, it records the faces of the people. This paper outlines the possible solutions to the privacy challenges. This project was a result of a collboration with Bosch. Click to view the research paper.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mediapipe",
        color: "green-text-gradient",
      },

      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "AniKode Website Builder",
    description:
      "AniKode Website Builder is a website builder that allows you to create landing pages using drag and drop. There are also Low Code / No Code editors built into it. This product was also launched in Product Hunt.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "fontawesome",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "AniSlides",
    description:
      "AniSlides is a presentation maker that allows you to create presentations using drag and drop.  There are also Low Code / No Code editors built into it. This product is still in beta.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "fontawesome",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "AniStories",
    description:
      "AniStories is a story generator that uses GPT2 (AI) to generate stories. You can also add your own stories to the database.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "gpt2",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Classnotes Buddy",
    description:
      "Notes Buddy is an app that helps children to share notes with each other using Notes Buddy through crowdsourcing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Daily Diary",
    description:
      "Daily Diary is a virtual diary that allows you to write your daily thoughts and feelings. You can also share your diary to other people.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },

  {
    name: "AniScreenRecorder",
    description:
      "AniScreenRecorder is a screen recorder that allows you to record your screen and save it as a video. You do not need to install any software.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "AniMeet",
    description:
      "AniMeet is an app like Zoom, where participants can chat, share their screen, and participate in meetings. It is a web app, so you can use it on your phone, tablet, or computer.",
    tags: [
      {
        name: "agora",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "PowerApps4Kids Europe/USA Session",
    description:
      "This is a session I presented on PowerApps4Kids. This walks through how to create a Mario game using PowerApps.",
    tags: [
      {
        name: "powerapps",
        color: "blue-text-gradient",
      },
      {
        name: "microsoft",
        color: "green-text-gradient",
      },
      {
        name: "maskio",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "AniDrive",
    description:
      "Ani Drive is a cloud storage service that allows you to store your files online. You can also share your files with others. It uses Firebase to store data and also authenticate. The frontend is built with React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "AniMarioGame",
    description:
      "AniMarioGame is a game where you have to help Mario to collect all the coins and reach the flag. You have to avoid the enemies and the obstacles. Use the arrow keys to move Mario. It is built with kaboom.js.",
    tags: [
      {
        name: "kaboomjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Maskio",
    description:
      "Maskio is a coronavirus adventure game. The player shoots vaccines to kill the virus. Use the arrow keys to move Maskio. This was submitted to Github Gameoff 2021. It is built with kaboom.js.",
    tags: [
      {
        name: "kaboomjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
