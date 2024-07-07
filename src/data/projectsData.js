import jateImg from "../assets/images/jateeditor.png";
import readsImg from "../assets/images/betterreads.png";
import teamImg from "../assets/images/teamgen.png";
import taskImg from "../assets/images/taskmaster.png";
import eatImg from "../assets/images/eatdrink.png";
import apiImg from "../assets/images/socialapi.png";
import poweruppizza from "../assets/images/poweruppizza.png";
import serenesoulImg from "../assets/images/serenesoulmassage.png";
import marsroverImg from "../assets/images/marsrover.png";
import astroaiImg from "../assets/images/astroai.png";

const projects = [
  {
    category: "Websites",
    title: "SereneSoul Massage",
    text: "Website for a massage business",
    image: serenesoulImg,
    link: "https://www.wir3s.com/serenesoul",
  },
  {
    category: "Websites",
    title: "Power-Up Pizzeria",
    text: "Website for a pizza restaurant",
    image: poweruppizza,
    link: "https://www.wir3s.com/powerup",
  },
  {
    category: "Current Projects",
    title: "Mars Rover App",
    text: "A fun little app that displays photos taken by the Mars Rovers using NASA's API.",
    image: marsroverImg,
    link1: "https://mars-viewer.vercel.app/",
    link2: "https://github.com/Wir3s/mars_viewer",
  },
  {
    category: "Current Projects",
    title: "AstroAI",
    text: "A horoscope app with AI integration",
    image: astroaiImg,
    link1: "https://astro-ai-rho.vercel.app/",
    link2: "https://github.com/Wir3s/astro_ai",
  },
  {
    category: "Older Projects",
    title: "TaskMaster",
    text: "A task organizer, with lists and tasks to help you organize your life and productivity. Built using the MERN stack, GraphQL and Material UI",
    image: taskImg,
    link1: "https://github.com/Wir3s/taskmaster",
    link2: "https://sal-task-master.herokuapp.com/",
  },
  {
    category: "Older Projects",
    title: "Better Reads",
    text: "Create an account to keep up with your favorite authors and books. Search for books and save your favorites, utilizing the Google Books API.",
    image: readsImg,
    link: "https://github.com/Wir3s/better_reads",
  },
  {
    category: "Older Projects",
    title: "Team Profile Generator",
    text: "A Node.js command line application using the Inquirer package and Jest tests. The application takes infomration about employees and generates an HTML page.",
    image: teamImg,
    link: "https://github.com/Wir3s/team-profile-generator",
  },
  {
    category: "Older Projects",
    title: "Social Network API",
    text: "An API for a social network web application utilizing MongoDB, Express.js and the Mongoose ODM. Users can share thoughts, create a friend list and react to thoughts.",
    image: apiImg,
    link: "https://github.com/Wir3s/social-network-api",
  },
  {
    category: "Older Projects",
    title: "Eat Drink & Be Merry",
    text: "Search for food and beverage recipes when you're entertaining dinner guests. Add ingredients directly to a list for easier shopping.",
    image: eatImg,
    link: "https://github.com/Wir3s/eat-drink-be-merry",
  },
  {
    category: "Older Projects",
    title: "JATE",
    text: "A progressive web application (PWA) that can be installed, works offline, and utilizes Babel and Workbox. It automatically saves text when the DOM window is unfocused.",
    image: jateImg,
    link: "https://github.com/Wir3s/progressive-text-editor",
  },
];

export default projects;
