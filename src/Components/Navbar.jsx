import { Link } from "react-scroll";
import {
  Box,
  Button,
  HStack,
  Image,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavDrawer } from "../DrawerNavbar/NavDrawer";
import download from './download/Surya_Ahire_Resume.pdf'
const links = [
  {
    to: "home",
    page: "Home",
  },
  {
    to: "about",
    page: "About",
  },
  {
    to: "skill",
    page: "Skill",
  },
  {
    to: "project",
    page: "Project",
  },
  {
    to: "github",
    page:"Github"
  },
  {
    to: "contact",
    page: "Contact",
  },
];
export function Navbar({sidebar}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const NavBgColor = useColorModeValue("gray.50", "gray.900");
  // const logoImage = ()=>{
  //   if(colorMode=="light"){
  //     return 
  //   }
  //   if(colorMode=="dark"){

  //   }
  // }
    function handleClick(){
            window.open("https://drive.google.com/file/d/1uldTQI827dCYN9OzsM_01hEyMw0tO1OH/view?usp=share_link","_blank")
    }
  return (
    <>
      <Box
        bgColor={NavBgColor}
        position="sticky"
        top={"0px"}
        left="0px"
        zIndex={1}
      >
        <HStack
          justifyContent="space-between"
          paddingLeft={"30px"}
          paddingRight="3rem"
          height="5rem"
        >
          <Box className="home">
            <Link className="navlinks" to="home" >
            
            </Link>
          </Box>
          <Box display={{ base: "none", sm: "none", md: "inline-flex" }}>
            <HStack gap={"30px"} height="5rem">
              {links.map((el, i) => (
                <Link
                key={i}
                className="navlinks"
                  activeClass="active"
                  smooth
                  spy
                  to={el.to}
                  offset={-70}
                  duration={500}
  
                >
                  {el.page}
                </Link>
              ))}
              <Button
                width={["80px", "80px", "120px"]}
                fontSize={["12px", "12px", "18px"]}
                onClick={handleClick}
              ><a href={download} download="fp05_147-Surya-Ahire-Resume"> Resume</a>
               
                &nbsp;
                {/* <span><BiShowAlt/></span> */}
              </Button>
              <Button
                borderRadius={"50%"}
               
                width="42px"
                onClick={toggleColorMode}
              >
                {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              </Button>
            </HStack>
          </Box>
          {/* ----------tablet and mobile hubergicon------------ */}
          <Box display={{ base: "inline-flex", sm: "inline-flex", md: "none" }}>
            <HStack gap={"20px"}>
              <Button
                borderRadius={"50%"}
                width="42px"
                onClick={toggleColorMode}
              >
                {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              </Button>
              <Box>
                <NavDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
