import React from "react";
import { Button, Image, Text, Grid, Flex, GridItem } from "@chakra-ui/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const TelemedicineCardInfo = ({ PT, videoCall }) => {
  const language = useSelector((state) => state.language.value);
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
            src={PT.photo}
            boxSize="450px"
            py={10}
            px={12}
            borderRadius="lg"
          />
        </GridItem>
        <GridItem w="max" px={10}>
          <Flex flexDir="row">
            <Flex flexDir="column" mt={10} mr={10}>
              <Text
                lang="th"
                fontSize="15px"
                fontWeight="semibold"
                fontFamily=""
              >
                {language === "English" ? "Name" : "ชื่อ"}
              </Text>
              <Text
                fontSize="15px"
                bgColor="white"
                padding={3}
                borderRadius="lg"
                mt={2}
                w="sm"
              >
                {language === "English"
                  ? PT.Details.En_Description.Name
                  : PT.Details.Th_Description.Name}
              </Text>
            </Flex>
            <Flex flexDir="column" mt={10}>
              <Text fontSize="15px" fontWeight="semibold">
                {language === "English" ? "Department" : "เเผนก"}
              </Text>
              <Text
                fontSize="15px"
                bgColor="white"
                padding={3}
                borderRadius="lg"
                mt={2}
                w="sm"
              >
                {language === "English"
                  ? PT.Details.En_Description.Specialization
                  : PT.Details.Th_Description.Specialization}
              </Text>
            </Flex>
          </Flex>
          <Flex flexDir="row">
            <Flex flexDir="column" mt={5} mr={10}>
              <Text
                lang="th"
                fontSize="15px"
                fontWeight="semibold"
                fontFamily=""
              >
                {language === "English" ? "Hospital" : "โรงพยาบาล"}
              </Text>
              <Text
                fontSize="15px"
                bgColor="white"
                padding={3}
                borderRadius="lg"
                mt={2}
                w="sm"
              >
                {language === "English"
                  ? PT.Details.En_Description.Hospital
                  : PT.Details.Th_Description.Hospital}
              </Text>
            </Flex>
            <Flex flexDir="column" mt={5}>
              <Text fontSize="15px" fontWeight="semibold">
                {language === "English" ? "Education" : "การศึกษา"}
              </Text>
              <Text
                fontSize="15px"
                bgColor="white"
                padding={3}
                borderRadius="lg"
                mt={2}
                w="sm"
              >
                {language === "English"
                  ? PT.Details.En_Description.Background
                  : PT.Details.Th_Description.Background}
              </Text>
            </Flex>
          </Flex>

          <Flex flexDir="column" mt={5}>
            <Text fontSize="15px" fontWeight="semibold">
              {language === "English"
                ? "Specialization detail Example"
                : "ความเชี่ยวชาญ"}
            </Text>
            <Text
              fontSize="15px"
              bgColor="white"
              padding={3}
              borderRadius="lg"
              mt={2}
              w="sm"
            >
              {language === "English"
                ? PT.Details.En_Description.Specialization
                : PT.Details.Th_Description.Specialization}
            </Text>
          </Flex>
          <Button
            leftIcon={<BsFillTelephoneFill />}
            colorScheme="teal"
            variant="solid"
            mt={10}
            size="lg"
            onClick={videoCall}
          >
            {language === "English" ? "Make a video call" : "เริ่มโทรแบบวิดีโอ"}
          </Button>
        </GridItem>
      </Flex>
    </Grid>
  );
};

export default TelemedicineCardInfo;
