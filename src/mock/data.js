import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Profile_.jpg',
  paragraphOne: 'I am a final year computing student, specialising in Business Information Systems, on track for a 1:1. Previously, I have six months work experience as a Web Development intern.',
  paragraphTwo: 'I have a huge interest in software development, web technologies and working with databases. My key technical skills include: modern JavaScript (ES6), HTML5, CSS/SCSS/SASS, SQL/NoSQL databases, with experience using front end frameworks such as React.',
  paragraphThree: 'Outside of development, my hobbies include rugby, reading and PC hardware. For more detail please see my CV below!',
  resume: 'https://drive.google.com/file/d/1UdXmxp61XGgy2qox2pnbkrlSlVY-_zA3/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'React-Covid.PNG',
    title: 'Covid Tracker',
    info: 'This project was created using React, with Firebase on the back-end, and makes use of a publicly available API to capture and display data with regards to COVID-19 cases.',
    info2: '',
    url: 'https://covid-tracker-f9913.web.app/',
    repo: 'https://github.com/NathanHodgkiss447/covid-tracker-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'News-Voice.PNG',
    title: 'News Web Application',
    info: 'This project was created using React, and makes use of a publicly available News API to display the latest news. Implemented AlanAI voice assistant to be able to navigate the application using voice.',
    info2: '',
    url: 'https://confident-payne-deb259.netlify.app/',
    repo: 'https://github.com/NathanHodgkiss447/news-web-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'journal.PNG',
    title: 'Smart Programming Journal (Ongoing)',
    info: 'This is my fourth year Software Project, created using React on the front-end, with Firebase on the back-end. This project also makes use of the natural language processing library Compromise to analyse user input, and uses AlanAI for a custom voice assistant. The project digitalises the concept of a programming journal while adding additional useful fuctionality such as chat, a resource section & a notes section.',
    info2: '',
    url: 'https://github.com/NathanHodgkiss447',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Great!',
  btn: '',
  email: 'nathanhodgkiss447@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nathanhodgkiss/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/NathanHodgkiss447',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
