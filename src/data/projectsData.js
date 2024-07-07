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
    link: "https://www.wir3s.com/simple_website_1",
  },
  {
    category: "Websites",
    title: "Power-Up Pizzeria",
    text: "Website for a pizza restaurant",
    image: poweruppizza,
    link: "https://www.wir3s.com/simple_website_2",
  },
  {
    category: "Current Projects",
    title: "Mars Rover App",
    text: "A fun little app that displays photos taken by the Mars Rovers using NASA's API.",
    image: marsroverImg,
    link: "https://mars-viewer.vercel.app/",
  },
  {
    category: "Current Projects",
    title: "AstroAI",
    text: "A horoscope app with AI integration",
    image: astroaiImg,
    link: "https://astro-ai-rho.vercel.app/",
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
    link1: "https://github.com/Wir3s/better_reads",
    link2: "https://better-readss.herokuapp.com/login",
  },
  {
    category: "Older Projects",
    title: "Team Profile Generator",
    text: "A Node.js command line application using the Inquirer package and Jest tests. The application takes infomration about employees and generates an HTML page.",
    image: teamImg,
    link1: "https://github.com/Wir3s/team-profile-generator",
  },
  {
    category: "Older Projects",
    title: "Social Network API",
    text: "An API for a social network web application utilizing MongoDB, Express.js and the Mongoose ODM. Users can share thoughts, create a friend list and react to thoughts.",
    image: apiImg,
    link1: "https://github.com/Wir3s/social-network-api",
  },
  {
    category: "Older Projects",
    title: "Eat Drink & Be Merry",
    text: "Search for food and beverage recipes when you're entertaining dinner guests. Add ingredients directly to a list for easier shopping.",
    image: eatImg,
    link1: "https://github.com/Wir3s/eat-drink-be-merry",
    link2: "https://wir3s.github.io/eat-drink-be-merry/",
  },
  {
    category: "Older Projects",
    title: "JATE",
    text: "A progressive web application (PWA) that can be installed, works offline, and utilizes Babel and Workbox. It automatically saves text when the DOM window is unfocused.",
    image: jateImg,
    link1: "https://github.com/Wir3s/progressive-text-editor",
    link2: "https://warm-badlands-75057.herokuapp.com/",
  }
];

export default projects;