import React from "react";
import {
  Grid,
  GridItem,
  Text,
  Flex,
  Input,
  Button,
  Image,
  VStack,
  Textarea,
  Square,
  Center,
  Box,
  Icon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  Checkbox,
  Stack,
  CheckboxGroup,
  Card,
  CardBody,
  Heading,
  MenuButton,
  Menu,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import PTDashboardMenu from "../../../component/PTDashboard/PTDashboardMenu";
import Profile1 from "../../../icons/Exercise/Profile1.png";
import { MdHourglassDisabled } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import Exercise1 from "../../../icons/Exercise/Exercise1.png";

const PTTherapeuticalExerciseShopping = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid h="680px" w="100%" templateColumns="2fr 10fr">
      <GridItem bgColor="blue.100" w="100%">
        <PTDashboardMenu />
      </GridItem>
      <GridItem w="100%" bgColor="gray.100" px="14" py="10">
        <VStack>
          <Text fontSize="3xl" fontWeight="bold" py={10} px={10}>
            Therapeutical Exercise
          </Text>
        </VStack>
        <Flex
          flexDir="row"
          bgColor="white"
          px="4"
          py="4"
          borderRadius={"lg"}
          boxShadow="lg"
          mb={8}
        >
          <Center w="80px">
            <Text fontSize="15px" fontWeight={"semibold"}>
              1.
            </Text>
          </Center>
          <Center w="140px">
            <Square size="60px" bgColor="white" borderRadius="lg">
              <Image src={Profile1} />
            </Square>
          </Center>
          <Center w="200px">
            <Text fontSize="15px" fontWeight={"semibold"}>
              Kamado Nezuko
            </Text>
          </Center>
          <Center w="196px">
            <Text fontSize="15px" fontWeight={"semibold"}>
              Lower back pain
            </Text>
          </Center>
          <Center w="220px">
            <Text fontSize="15px" fontWeight={"semibold"}>
              Monday, 11/11/2022
            </Text>
          </Center>
          <Center w="176px">
            <Text fontSize="15px" fontWeight={"semibold"}>
              11.30 - 12.00
            </Text>
          </Center>
        </Flex>
        <Flex flexDir="column" bgColor={"white"} px="8" py="4" mb="8">
          <Text fontWeight="semibold" mb="4">
            Filter Section
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <GridItem w="100%">
              <Checkbox value="Back">Back</Checkbox>
            </GridItem>
            <GridItem w="100%">
              <Checkbox value="Elbow">Elbow</Checkbox>
            </GridItem>
            <GridItem w="100%">
              <Checkbox value="Knee">Knee</Checkbox>
            </GridItem>
            <GridItem w="100%">
              <Checkbox value="Hip">Hip</Checkbox>
            </GridItem>
            <GridItem w="100%">
              <Checkbox value="Ankle">Ankle</Checkbox>
            </GridItem>
            <GridItem w="100%">
              <Checkbox value="Neck">Neck</Checkbox>
            </GridItem>
            <GridItem w="100%">
              <Checkbox value="Shoulder">Shoulder</Checkbox>
            </GridItem>
            <GridItem w="100%">
              <Checkbox value="Achiles tendon">Achiles tendon</Checkbox>
            </GridItem>
            <GridItem w="100%">
              <Checkbox value="Heel or foot sole">Heel or foot sole</Checkbox>
            </GridItem>
          </Grid>
        </Flex>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Menu isOpen={isOpen}>
            <MenuButton
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              boxShadow="lg"
              w="lg"
              bgColor="white"
              borderRadius="lg"
              _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
            >
              <Flex flexDir="row">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Flex flexDir="column" alignItems="flex-start" ml={4} py={4}>
                  <Heading size="md">Exercise 1</Heading>
                  <Text textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </Text>
                </Flex>
              </Flex>
            </MenuButton>

            <MenuButton
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              boxShadow="lg"
              w="lg"
              bgColor="white"
              borderRadius="lg"
              _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
            >
              <Flex flexDir="row">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Flex flexDir="column" alignItems="flex-start" ml={4} py={4}>
                  <Heading size="md">Exercise 1</Heading>
                  <Text textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </Text>
                </Flex>
              </Flex>
            </MenuButton>

            <MenuButton
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              boxShadow="lg"
              w="lg"
              bgColor="white"
              borderRadius="lg"
              _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
            >
              <Flex flexDir="row">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Flex flexDir="column" alignItems="flex-start" ml={4} py={4}>
                  <Heading size="md">Exercise 1</Heading>
                  <Text textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </Text>
                </Flex>
              </Flex>
            </MenuButton>

            <MenuButton
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              boxShadow="lg"
              w="lg"
              bgColor="white"
              borderRadius="lg"
              _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
            >
              <Flex flexDir="row">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Flex flexDir="column" alignItems="flex-start" ml={4} py={4}>
                  <Heading size="md">Exercise 1</Heading>
                  <Text textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </Text>
                </Flex>
              </Flex>
            </MenuButton>
            <MenuButton
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              boxShadow="lg"
              w="lg"
              bgColor="white"
              borderRadius="lg"
              _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
            >
              <Flex flexDir="row">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Flex flexDir="column" alignItems="flex-start" ml={4} py={4}>
                  <Heading size="md">Exercise 1</Heading>
                  <Text textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </Text>
                </Flex>
              </Flex>
            </MenuButton>

            <MenuButton
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              boxShadow="lg"
              w="lg"
              bgColor="white"
              borderRadius="lg"
              _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
            >
              <Flex flexDir="row">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Flex flexDir="column" alignItems="flex-start" ml={4} py={4}>
                  <Heading size="md">Exercise 1</Heading>
                  <Text textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </Text>
                </Flex>
              </Flex>
            </MenuButton>
            <MenuButton
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              boxShadow="lg"
              w="lg"
              bgColor="white"
              borderRadius="lg"
              _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
            >
              <Flex flexDir="row">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Flex flexDir="column" alignItems="flex-start" ml={4} py={4}>
                  <Heading size="md">Exercise 1</Heading>
                  <Text textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </Text>
                </Flex>
              </Flex>
            </MenuButton>
            <MenuButton
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              boxShadow="lg"
              w="lg"
              bgColor="white"
              borderRadius="lg"
              _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
            >
              <Flex flexDir="row">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Flex flexDir="column" alignItems="flex-start" ml={4} py={4}>
                  <Heading size="md">Exercise 1</Heading>
                  <Text textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </Text>
                </Flex>
              </Flex>
            </MenuButton>
          </Menu>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default PTTherapeuticalExerciseShopping;
