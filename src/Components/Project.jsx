import { Heading, VStack } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import GitHubCalendar from "react-github-calendar";

const data = [
  {
    title: "SNEAKYOURS",
    desc: "Sneakyours is an e-commerce website where you can get various types of sneakers based on you likes and you can purchase them accordingly.",
    techStack:
      "Mongo DB | Node Js | Express | ReactJS | ChakraUI | NPM Packages | Redux | React-Router-dom  ",
    feature:
      "Authentication, Admin Panel, CRUD operations, Landing Page , Search Functionality,Filtering , Sorting & Single Page Website, Responsive for all devices",
    img: "sneakyours.png",
    GitHub: "https://github.com/surya2697/Sneak-Yours",
    deploy: "https://sneak-yours.vercel.app/",
  },
  {
    title: "QUICK CART",
    desc: "Quick Cart is a clone of tatacliq E-commerce website,Where you can buy clothes,electronics,accessiories and many more.",
    techStack:
      "HTML | CSS | JS | ReactJS | ChakraUI | NPM Packages | Redux | React-Router-dom  ",
    feature:
      "Sign In, Sign Up, Search Functionality,Filtering , Sorting & Single Page Website, Responsive for all devices",
    img: "Quick cart.png",
    GitHub: "https://github.com/surya2697/grieving-caption-9781",
    deploy: "https://grieving-caption-9781.vercel.app/",
  },
  {
    title: "WEATHER APP",
    desc: "Implemented Easy, Fast way to check for the weather nearby your places, with an Auto GPS feature which can Detect your Current Location.",
    techStack: "HTML | CSS | JS | API | NPM Packages |  ",
    img: "weather_app.png",
    GitHub: "https://github.com/surya2697/WeatherApp",
    deploy: "https://weather-app-sepia-five.vercel.app/",
  },
  {
    title: "EXPEDIA",
    desc: "Expedia is one of the best website for booking your flights and hotels",
    techStack: "HTML | CSS | JS | ReactJS | ChakraUI | NPM Packages ",
    feature:
      "Sign In, Sign Up, Hotels Page,Search Functionality, Sorting & Single Page Website, Responsive for all devices",
    img: "expedia.png",
    GitHub: "https://github.com/surya2697/expensive-afterthought-589",
    deploy: "https://meek-shortbread-95e253.netlify.app/",
  },
  {
    title: "KIMAYE",
    desc: "Kimaye is an E-Commerce Website from where you can order fruits and fruits gift baskets at your door step.",
    techStack: "HTML | CSS | JS | Browser Local Storage",
    feature:
      "Sign up, Sign In, Sign Out, Navbar, Products Page, Dynamic Individual Product Page, Dynamic Cart Page.",
    img: "Kimaye.com.png",
    GitHub: "https://github.com/surya2697/dull-party-2583",
    deploy: "https://gleaming-tapioca-0d3279.netlify.app/",
  },
  {
    title: "INDUSTRYBUYING",
    desc: "Industrybuying.com is a leading Business e-commerce platform, selling a wide range of business and industrial products to SMEs as well as large businesses. It has over 5,000 registered sellers and more than 85,000 registered businesses - SMEs and large corporates, procuring online from Industrybuying",
    techStack:
      "HTML | CSS | JS | API | React.js | React-Redux | Chakra-UI | Node js | MongoDB ",
    feature:
      "Signup ,Login,Products-page,Single product page,Sorting,Filtering ",
    img: "industrybuying.png",
    GitHub: "https://github.com/Prashant1562/IndustryBuying-Clone",
    deploy: "https://tooler-unit-6.netlify.app/",
  },
  {
    title: "MAILCHIMP",
    desc: "This project is a replica of Mailchimp.com website. It features some of the webpages from the original website.",
    techStack: "HTML | CSS | JS | React.js",
    feature: "Signup,Login,Pick any mail plans,checkout page,account setting",
    img: "mailchimp.png",
    GitHub: "https://github.com/sanket-potdar563/JS-201-Project",
    deploy: "https://storied-conkies-af82f4.netlify.app/",
  },
];

export function Project() {
  return (
    <>
      <Heading mb="50px">MY PROJECTS</Heading>
      {data.map((el, i) => {
        return <ProjectCard key={i} data={{ ...el }} />;
      })}
    </>
  );
}
