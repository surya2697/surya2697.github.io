import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { BiShowAlt } from 'react-icons/bi';
import { Link } from "react-scroll";
import { Title } from "./Title";
import download from './download/Surya_Ahire_Resume.pdf'
export function Home() {
  function handleClick(){
    window.open('https://drive.google.com/file/d/14peSTf_tL9pbklBrpUBLNj0YDxfKQ8kT/view?usp=sharing','_blank')
   
  }
  
  return (
    <>
      <Box className="home" >
        <HStack
         
          justifyContent="space-evenly"
          width="88%"
          margin="auto"
          mt="50px"
        >
          <VStack
          
            alignItems={"flex-start"}
          >
            <Text fontSize={{ base: "md", sm: "2xl", md: "4xl" }}>
              Hi <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> I'm
            </Text>
            <Heading
              fontSize={{ base: "xl", sm: "3xl", md: "6xl" }}
              pt="5px"
              pb="5px"
            >
              Surya Ahire
            </Heading>
            <Text
              fontSize={{ base: "md", sm: "2xl", md: "4xl" }}
              paddingBottom="-30px"
              color={"orange.400"}
            >
              <Title/>
            </Text>
            <Text
              align={"start"}
              fontSize={{ base: "10px", sm: "15px", md: "sm" }}
              style={{ marginTop: "0px" }}
            >
              Intermidiate at - ReactJS, NodeJS, MongoDB. love to play with
              DOMS.
              <br /> Cloning some E-commerse Websites{" "}
            </Text>
            <HStack>
              <Link to="contact">
              <Button
                fontSize={["12px", "12px", "18px"]}
                width={["60px", "60px", "100px"]}
                color={"black"}
                bgColor="blue.300"
                _hover={"none"}
              >
                Hire Me
              </Button>
              </Link>
              <Button
                width={["80px", "80px", "120px"]}
                fontSize={["12px", "12px", "18px"]}
                onClick={handleClick}
              ><a href={download} download="fp05_147-Surya-Ahire-Resume"> Resume </a>
               
                &nbsp;
                <span><BiShowAlt/></span>
              </Button>
              <Button><a href={download} download="fp05_147-Surya-Ahire-Resume"><FaCloudDownloadAlt/></a></Button>
            </HStack>
          </VStack>
          <Box>
            <Image
              src={require("../files/profile.png")}
              borderRadius="50%"
              width={["200px", "200px", "300px"]}
            />
          </Box>
        </HStack>
      </Box>
    </>
  );
}
