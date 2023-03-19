import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  Text,
  Input,
  Spinner,
  Button,
  Link,
  InputGroup,
  InputLeftElement,
  Image,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import SingInPicture from "../../../icons/Exercise/SingInPicture.png";
import { useSelector } from "react-redux";

const PTLogIn = () => {
  const language = useSelector((state) => state.language.value);

  return (
    <Grid
      w="100%"
      templateColumns="7fr 5fr"
      h="700px"
      px={8}
      py={10}
      borderRadius="lg"
    >
      <GridItem
        w="100%"
        bgColor="gray.100"
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <GridItem
          w="100%"
          bgColor="blue.300"
          h="full"
          justifyContent="center"
          display="flex"
          alignItems="center"
          borderLeftRadius="lg"
          borderRightRadius="18rem"
          pr={16}
        >
          <Flex flexDir="column" w="100%" alignItems="center">
            <Image src={SingInPicture} px={20} py={16} />
          </Flex>
        </GridItem>
      </GridItem>

      <GridItem
        w="100%"
        bgColor="gray.100"
        justifyContent="center"
        display="flex"
        alignItems="center"
        borderRightRadius="lg"
      >
        <Flex flexDir="column" w="100%" alignItems="center" px={16} py={4}>
          <Text fontSize="3xl" fontWeight="bold" mb={2}>
            Sign in to Physiopal
          </Text>
          <Text fontWeight="semibold" mb={6} py={4}>
            {/*language === 'English' ? 'Your email account' : 'บัญชีของคุณ'*/}
            Your email account
          </Text>

          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              children={<MdEmail color="gray.300" />}
            />
            <Input
              variant="filled"
              type="email"
              placeholder="Email"
              required
              bgColor="white"
              borderColor="gray.300"
              mb={8}
            />
          </InputGroup>

          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              children={<RiLockPasswordFill color="gray.300" />}
            />
            <Input
              variant="filled"
              type="password"
              placeholder="Password"
              required
              bgColor="white"
              borderColor="gray.300"
              mb={16}
            />
          </InputGroup>

          <Button
            /*onClick={() => navigate('/patient/register')}*/
            bgColor="blue.400"
            color="white"
            type="submit"
            w={24}
            _hover={{
              textDecoration: "none",
              bg: "blue.300",
            }}
          >
            {" "}
            {language === "English" ? "SIGN IN" : "เข้าสู่ระบบ"}
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default PTLogIn;
