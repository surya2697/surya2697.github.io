import { Heading, VStack } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import GitHubCalendar from "react-github-calendar";

const data = [
  {
    title: "QUICK CART",
    desc: "Quick Cart is a clone of tatacliq E-commerce website,Where you can buy clothes,electronics,accessiories and many more.",
    techStack:
      "HTML | CSS | JS | ReactJS | ChakraUI | NPM Packages | Redux | React-Router-dom  ",
    feature:
      "Sign In, Sign Up, Search Functionality,Filtering , Sorting & Single Page Website, Responsive for all devices",
    img: 'Quick cart.png',
    clone: "https://github.com/surya2697/grieving-caption-9781",
    deploy: "https://gilded-churros-f3dbe4.netlify.app/",
  },
  {
    title: "EXPEDIA",
    desc: "Expedia is one of the best website for booking your flights and hotels",
    techStack:
      "HTML | CSS | JS | ReactJS | ChakraUI | NPM Packages ",
    feature:
      "Sign In, Sign Up, Hotels Page,Search Functionality, Sorting & Single Page Website, Responsive for all devices",
    img: "expedia.png",
    clone: "https://github.com/surya2697/expensive-afterthought-589",
    deploy: "https://meek-shortbread-95e253.netlify.app/",
  },
  {
    title: "KIMAYE",
    desc: "Kimaye is an E-Commerce Website from where you can order fruits and fruits gift baskets at your door step.",
    techStack: "HTML | CSS | JS | Browser Local Storage",
    feature:
      "Sign up, Sign In, Sign Out, Navbar, Products Page, Dynamic Individual Product Page, Dynamic Cart Page.",
    img: "Kimaye.com.png",
    clone: "https://github.com/surya2697/dull-party-2583",
    deploy: "https://gleaming-tapioca-0d3279.netlify.app/",
  },
  {
    title: "INDUSTRYBUYING",
    desc: 
    "Industrybuying.com is a leading Business e-commerce platform, selling a wide range of business and industrial products to SMEs as well as large businesses. It has over 5,000 registered sellers and more than 85,000 registered businesses - SMEs and large corporates, procuring online from Industrybuying",
    techStack: "HTML | CSS | JS | API | React.js | React-Redux | Chakra-UI | Node js | MongoDB ",
    feature:
      "Signup ,Login,Products-page,Single product page,Sorting,Filtering ",
    img: "industrybuying.png",
    clone: "https://github.com/Prashant1562/IndustryBuying-Clone",
    deploy: "https://tooler-unit-6.netlify.app/",
  },
  {
    title: "MAILCHIMP",
    desc: "This project is a replica of Mailchimp.com website. It features some of the webpages from the original website.",
    techStack: "HTML | CSS | JS | React.js",
    feature:
      "Signup,Login,Pick any mail plans,checkout page,account setting",
    img: "mailchimp.png",
    clone: "https://github.com/sanket-potdar563/JS-201-Project",
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
