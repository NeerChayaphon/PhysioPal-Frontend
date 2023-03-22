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
} from "@chakra-ui/react";
import PTDashboardMenu from "../../../component/PTDashboard/PTDashboardMenu";
import Profile1 from "../../../icons/Exercise/Profile1.png";
import { MdHourglassDisabled } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";

const PTTherapeuticalExercise = () => {
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
        <Text fontSize="15px" fontWeight={"semibold"} mb={4}>
          The sets of exercise have been assigned to this patient.
        </Text>
        {/* หน้า therapeutical exercise: empty list exercise  */}
        {/* <VStack
          bgColor="white"
          px="4"
          py="4"
          borderRadius={"lg"}
          boxShadow="lg"
          w="full"
          spacing={4}
        >
          <Text
            fontSize="md"
            fontWeight="semibold"
            mt={4}
            mb={4}
            px={10}
            color="gray"
          >
            The set of exercise hasn't been assigned to this patient yet.
          </Text>
          <Icon as={MdHourglassDisabled} boxSize={6} color="gray" />
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            leftIcon={<BsPlusLg />}
          >
            Add a new set
          </Button>
        </VStack> */}

        {/* หน้า therapeutical exercise: list exercise  */}
        <TableContainer
          borderRadius="lg"
          boxShadow="lg"
          px={2}
          py={2}
          bgColor="white"
        >
          <Table
            variant="striped"
            colorScheme="blue"
            bgColor="white"
            borderRadius="lg"
          >
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>NO.</Th>
                <Th>PICTURE</Th>
                <Th>EXERCISE</Th>
                <Th>ILLNESS</Th>
                <Th>TIME PERIOD ANS REPS</Th>
                <Th>ACTION</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1.</Td>
                <Td>
                  <Square size="60px" color="white" borderRadius="lg">
                    <Image src={Profile1} />
                  </Square>
                </Td>
                <Td>Exercise1</Td>
                <Td>Lower back pain</Td>
                <Td>
                  10 Second for each reps <br /> 10 reps
                </Td>
                <Td>
                  <HStack spacing="4">
                    <Button colorScheme="teal" variant="solid" size="xs">
                      Edit detail
                    </Button>
                    <Button colorScheme="red" variant="solid" size="xs">
                      Delete
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>2.</Td>
                <Td>
                  <Square size="60px" color="white" borderRadius="lg">
                    <Image src={Profile1} />
                  </Square>
                </Td>
                <Td>Exercise1</Td>
                <Td>Lower back pain</Td>
                <Td>
                  10 Second for each reps <br /> 10 reps
                </Td>
                <Td>
                  <HStack spacing="4">
                    <Button colorScheme="teal" variant="solid" size="xs">
                      Edit detail
                    </Button>
                    <Button colorScheme="red" variant="solid" size="xs">
                      Delete
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>3.</Td>
                <Td>
                  <Square size="60px" color="white" borderRadius="lg">
                    <Image src={Profile1} />
                  </Square>
                </Td>
                <Td>Exercise1</Td>
                <Td>Lower back pain</Td>
                <Td>
                  10 Second for each reps <br /> 10 reps
                </Td>
                <Td>
                  <HStack spacing="4">
                    <Button colorScheme="teal" variant="solid" size="xs">
                      Edit detail
                    </Button>
                    <Button colorScheme="red" variant="solid" size="xs">
                      Delete
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>4.</Td>
                <Td>
                  <Square size="60px" color="white" borderRadius="lg">
                    <Image src={Profile1} />
                  </Square>
                </Td>
                <Td>Exercise1</Td>
                <Td>Lower back pain</Td>
                <Td>
                  10 Second for each reps <br /> 10 reps
                </Td>
                <Td>
                  <HStack spacing="4">
                    <Button colorScheme="teal" variant="solid" size="xs">
                      Edit detail
                    </Button>
                    <Button colorScheme="red" variant="solid" size="xs">
                      Delete
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <VStack py={4}>
            <Button
              colorScheme="teal"
              variant="solid"
              size="sm"
              leftIcon={<BsPlusLg />}
            >
              Add a new exercise
            </Button>
          </VStack>
        </TableContainer>
        <VStack py={8}>
          <Button
            colorScheme="teal"
            variant="solid"
            size="md"
            leftIcon={<BsCheckLg />}
          >
            Assign to the patient
          </Button>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default PTTherapeuticalExercise;
