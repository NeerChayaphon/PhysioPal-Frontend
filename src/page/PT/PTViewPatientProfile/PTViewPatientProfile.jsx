import React from "react";
import {
  Grid,
  GridItem,
  Text,
  Flex,
  Input,
  Select,
  VStack,
  Image,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import PTViewPatientProfileMenu from "../../../component/PTViewPatientProfile/PTViewPatientProfileMenu";
import { MdArrowDropDown } from "react-icons/md";
import Profile1 from "../../../icons/Exercise/Profile1.png";

const PTViewPatientProfile = () => {
  return (
    <Grid h="max" w="100%" templateColumns="2fr 10fr">
      <GridItem bgColor="blue.100" w="100%">
        <PTViewPatientProfileMenu />
      </GridItem>
      <GridItem w="100%" bgColor="gray.100">
        <Flex flexDir="column" w="100%" alignItems="center" py={10} px={10}>
          <VStack mb={10}>
            <Text fontSize="3xl" fontWeight="bold" mb={2} mt={5}>
              Profile
            </Text>
            <Image borderRadius="full" boxSize="xxs" src={Profile1} />
          </VStack>

          <Flex flexDir="row" gap={14} w="100%" px="20">
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                variant="filled"
                type="name"
                placeholder="Nezuko"
                required
                bgColor="white"
                mb={6}
                w="md"
                boxShadow="lg"
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                variant="filled"
                type="name"
                placeholder="Kamado"
                required
                bgColor="white"
                mb={6}
                w="md"
                boxShadow="lg"
                size="lg"
              />
            </FormControl>
          </Flex>
          <Flex flexDir="row" gap={14} w="100%" px="20">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                variant="filled"
                type="email"
                placeholder="example1234@gmail.com"
                required
                bgColor="white"
                mb={6}
                w="md"
                boxShadow="lg"
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                variant="filled"
                type="password"
                placeholder="xxxxxxxxx"
                required
                bgColor="white"
                mb={6}
                w="md"
                boxShadow="lg"
                size="lg"
              />
            </FormControl>
          </Flex>
          <Flex flexDir="row" gap={14} w="100%" px="20">
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                variant="filled"
                type="tel"
                placeholder="084-xxx-xxxx"
                required
                bgColor="white"
                mb={6}
                w="md"
                boxShadow="lg"
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Select
                variant="filled"
                type="Gender"
                placeholder="Male"
                icon={<MdArrowDropDown />}
                required
                bgColor="white"
                mb={6}
                w="md"
                boxShadow="lg"
                size="lg"
                // textColor='gray.500'
              >
                <option value="option1">Male</option>
                <option value="option2">Female</option>
                <option value="option3">Other</option>
              </Select>
            </FormControl>
          </Flex>
          <Flex flexDir="column" w="100%" px="20">
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                variant="filled"
                type="address"
                placeholder="288 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                required
                bgColor="white"
                mb={6}
                w="100%"
                boxShadow="lg"
                size="lg"
              />
            </FormControl>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default PTViewPatientProfile;
