import React from "react";
import { Button, Image, Text, Grid, Flex, GridItem } from "@chakra-ui/react";
import { BsFillTelephoneFill } from "react-icons/bs";

const TelemedicineCardInfo = () => {
  return (
    <Grid w="100%" h="80vh" px={8} py={10}>
      <Flex flexDir="row" bgColor="gray.100" borderRadius="lg" boxShadow="lg">
        <GridItem
          w="max"
          justifyContent="center"
          display="flex"
          alignItems="center"
        >
          <Image
            src="https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb"
            boxSize="450px"
            py={10}
            px={12}
            borderRadius="lg"
          />
        </GridItem>
        <GridItem w="max" px={10}>
          <Flex flexDir="column" mt={10}>
            <Text fontSize="15px" fontWeight="semibold">
              Name
            </Text>
            <Text
              fontSize="15px"
              bgColor="white"
              padding={3}
              borderRadius="lg"
              mt={2}
              w="sm"
            >
              Dr. KAMADO TANJIRO
            </Text>
          </Flex>
          <Flex flexDir="column" mt={5}>
            <Text fontSize="15px" fontWeight="semibold">
              Department
            </Text>
            <Text
              fontSize="15px"
              bgColor="white"
              padding={3}
              borderRadius="lg"
              mt={2}
              w="sm"
            >
              Physioterapist, arm
            </Text>
          </Flex>
          <Flex flexDir="column" mt={5}>
            <Text fontSize="15px" fontWeight="semibold">
              About
            </Text>
            <Text
              fontSize="15px"
              bgColor="white"
              padding={3}
              borderRadius="lg"
              mt={2}
              w="3xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              convallis venenatis nam dignissim tortor integer imperdiet
              dignissim ac. Urna aenean cras eget orci, augue nisl nunc, vitae
              odio. Tellus tincidunt facilisi dui nisi, volutpat enim ultricies.
              Faucibus nec fermentum elementum morbi tempor molestie egestas
              sem.
            </Text>
          </Flex>
          <Button
            leftIcon={<BsFillTelephoneFill />}
            colorScheme="teal"
            variant="solid"
            mt={10}
            size="lg"
          >
            Make a video call
          </Button>
        </GridItem>
      </Flex>
    </Grid>
  );
};

export default TelemedicineCardInfo;
