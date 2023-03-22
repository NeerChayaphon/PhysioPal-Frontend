import React from "react";
import {
  Heading,
  Grid,
  Image,
  Flex,
  Text,
  Card,
  CardBody,
  Stack,
  Button,
  WrapItem,
  Avatar,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Picture from "../../icons/Exercise/Picture.png";
import Exercise1 from "../../icons/Exercise/Exercise1.png";
import { MdOutlineNavigateNext } from "react-icons/md";

const GeneralExerciseInfo = () => {
  return (
    <Grid h="max" w="100%">
      <Heading size="lg" px={10} mt={8}>
        Exercise 1
      </Heading>
      <Grid px={10} py={8}>
        <Image src={Picture} borderTopRadius="lg" w="100%" />
        <Flex
          flexDir="column"
          bgColor="gray.100"
          px={10}
          py={8}
          borderBottomRadius="lg"
          boxShadow="lg"
        >
          <Heading size="lg" mt={8} mb={5}>
            Physiotherapist
          </Heading>

          <HStack>
            <WrapItem>
              <Avatar
                size="xl"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
            </WrapItem>
            <VStack alignItems="start" pl={4}>
              <Heading size="md">DR. KAMADO TANJIRO</Heading>
              <Text fontSize="20px">Physioterapist, arm</Text>
            </VStack>
          </HStack>

          <Flex flexDir="column">
            <Heading size="lg" mt={8} mb={5}>
              Exercise
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                boxShadow="lg"
                w="max"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Stack>
                  <CardBody boxSize="md">
                    <Heading size="md">Exercise 1</Heading>
                    <Text py="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
                      Etiam eu turpis molestie, dictum est a, mattis tellus.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                boxShadow="lg"
                w="max"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Stack>
                  <CardBody boxSize="md">
                    <Heading size="md">Exercise 1</Heading>
                    <Text py="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
                      Etiam eu turpis molestie, dictum est a, mattis tellus.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                boxShadow="lg"
                w="max"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Stack>
                  <CardBody boxSize="md">
                    <Heading size="md">Exercise 1</Heading>
                    <Text py="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
                      Etiam eu turpis molestie, dictum est a, mattis tellus.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                boxShadow="lg"
                w="max"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Stack>
                  <CardBody boxSize="md">
                    <Heading size="md">Exercise 1</Heading>
                    <Text py="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
                      Etiam eu turpis molestie, dictum est a, mattis tellus.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                boxShadow="lg"
                w="max"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={Exercise1}
                />
                <Stack>
                  <CardBody boxSize="md">
                    <Heading size="md">Exercise 1</Heading>
                    <Text py="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
                      Etiam eu turpis molestie, dictum est a, mattis tellus.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Grid>
          </Flex>
          <Flex flexDir="row" justifyContent="center">
            <Button
              colorScheme="teal"
              variant="solid"
              mt={10}
              size="lg"
              height="60px"
              width="300px"
              mb={5}
              leftIcon={<MdOutlineNavigateNext />}
            >
              Start from begining
            </Button>
          </Flex>
        </Flex>
      </Grid>
    </Grid>
  );
};

export default GeneralExerciseInfo;
