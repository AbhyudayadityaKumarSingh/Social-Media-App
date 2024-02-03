import { Box, Container, Flex, VStack ,Image } from "@chakra-ui/react"
import AuthForm from '../../components/AuthForm/AuthForm'

const AuthPage = () => {
    
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
            <Flex >
              {/* Left Hand side*/}
              <Box display={{base:"none", md:"block"}}>
                 {/* <Image src="/social.jpg" h= {250} alt='Phone img'/> */}
              </Box>

              {/*Right hand side*/}
              <VStack spacing={4} align={"stretch"}>
              <AuthForm />
              <Box textAlign={"center"}>Made by Abhyuday Singh</Box>
              <Flex  gap={5} justifyContent={"center"}>
                <Image src="/playstore.jpeg" h={10} alt="Play Store"/>
                <Image src="/microsoft.png"  h={10} alt="MS Store"/>
               
              </Flex>
              </VStack>
              </Flex>
            </Container>
        </Flex>
    )
}

export default AuthPage