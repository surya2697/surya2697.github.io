import {
  Box,
  Container,
  Flex,
  Heading,
  Table,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import "aos/dist/aos.css";


export function About() {
    
  return (
    <>
      <Heading textAlign={"center"}mb={"25px"}  >
        ABOUT ME
      </Heading>
      <Flex
        justifyContent={["center", "center", "space-evenly"]}
        alignItems="center"
        direction={["column", "column", "row"]}
        gap="50px"
        // border={"1px solid green"}
      >
        <Box>
        <Table
          variant="simple"
          size={"md"}
          width={["12rem", "32rem", "32rem"]}
          className="aboutTable"
          margin="auto"
          data-aos="zoom-in-right"
        >
          <Tr>
            <Th>Name</Th>
            <Td>Surya Ahire</Td>
          </Tr>
          <Tr>
            <Th>Date of birth</Th>
            <Td>26 November, 1997</Td>
          </Tr>
          
          <Tr>
            <Th>Address</Th>
            <Td>
              Vijay Nagar Devlali Camp, <br /> Nasik, Maharashtra
              India.
            </Td>
          </Tr>
          <Tr>
            <Th>Pincode</Th>
            <Td>422401</Td>
          </Tr>
          <Tr>
            <Th>Contact NO.</Th>
            <Td>8698080956</Td>
          </Tr>
          <Tr>
            <Th>Email ID</Th>
            <Td>suryaahire97@gmail.com</Td>
          </Tr>
        </Table>
        </Box>
        <Box>
          <Container
            textAlign={"justify"}
            maxHeight={["20rem", "20rem", "33rem"]}
            overflowY={["scroll", "scroll", "hidden"]}
            p={"0px 20px 0px 20px"}
            data-aos="zoom-in-left"
          >
            Hello, I am Surya Ahire from Nasik and I was keen to buil
            a career in coding. But I didn't have
            relevant skills. So, I joined Masai school, which offers a 30-week
            of full-time course on a full-stack web development program. At
            Masai school, we get hands-on experience to learn front-end and
            back-end technologies. And also works 600 hours of coding and 60
            hours of building logical abilities and builds a minimum of 5-6
            collaborative projects. About my family, my father is a goverment servent
            and mother is a house wife and i have 3 sisters. My hobbies and leisure interests include
          coding and travelling. And have a keen
            interest in watching documentary movies.
          </Container>
        </Box>
      </Flex>
    </>
  );
}
