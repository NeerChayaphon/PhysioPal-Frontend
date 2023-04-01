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
  FormControl,
  FormLabel,
  InputGroup,
} from "@chakra-ui/react";
import PTDashboardMenu from "../../../component/PTDashboard/PTDashboardMenu";
import Profile1 from "../../../icons/Exercise/Profile1.png";

const PTAppointmentDetail = () => {
  return (
    <Grid h="max" w="100%" templateColumns="2fr 10fr">
      <GridItem bgColor="blue.100" w="100%">
        <PTDashboardMenu />
      </GridItem>
      <GridItem w="100%" bgColor="gray.100">
        <VStack>
          <Text fontSize="3xl" fontWeight="bold" py={10} px={10}>
            Appointment Detail
          </Text>
        </VStack>
        <Grid templateColumns="5fr 7fr">
          <GridItem px={3} py={10}>
            <VStack spacing={10}>
              <Image borderRadius="full" boxSize="xxs" src={Profile1} />
              <Text fontSize="20px" fontWeight="bold">
                Kamado Nezuko
              </Text>
              <Button
                colorScheme="blue"
                variant="outline"
                mt={10}
                size="lg"
                mb={5}
              >
                View patient profile
              </Button>
            </VStack>
          </GridItem>
          <GridItem px={6} mt={5}>
            <FormControl>
              <FormLabel>Date appointment</FormLabel>
              <InputGroup size="lg">
                <Input
                  variant="filled"
                  type="name"
                  // value={input}
                  // onChange={handleInputChange}
                  placeholder="Monday"
                  required
                  bgColor="white"
                  mb={4}
                  w="lg"
                  boxShadow="lg"
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Time appointment</FormLabel>
              <InputGroup size="lg">
                <Input
                  variant="filled"
                  type="name"
                  // value={input}
                  // onChange={handleInputChange}
                  placeholder="11.00 - 11.30"
                  required
                  bgColor="white"
                  mb={4}
                  w="lg"
                  boxShadow="lg"
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Illness</FormLabel>
              <InputGroup size="lg">
                <Input
                  variant="filled"
                  type="name"
                  // value={input}
                  // onChange={handleInputChange}
                  placeholder="Lower back pain"
                  required
                  bgColor="white"
                  mb={4}
                  w="lg"
                  boxShadow="lg"
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                fusce quis suspendisse erat. Feugiat ipsum fusce ante nec
                feugiat nunc, convallis suscipit. Ornare sit scelerisque nunc
                eu, id auctor quis amet. Faucibus eget dictumst odio dolor
                vivamus maecenas suspendisse egestas. Aliquam a ultricies nulla
                lacus, ut. Adipiscing sed cras velit dui cras bibendum laoreet
                velit. Imperdiet scelerisque rhoncus in molestie. Pellentesque
                ullamcorper nulla non sed. Dignissim euismod feugiat sagittis
                morbi vel purus. Sed amet, libero feugiat fames ultrices.
                Ridiculus elementum ut viverra gravida ut facilisi at suscipit
                sem. Vel consequat orci, vitae laoreet faucibus donec. Eu, quis
                at ac ultrices. Amet est porttitor dictum aliquam ac."
                required
                bgColor="white"
                mb={12}
                w="lg"
                h="sm"
                boxShadow="lg"
              />
            </FormControl>
            <Flex flexDir="row" mb={5}>
              <Button
                colorScheme="teal"
                variant="solid"
                mt={10}
                size="lg"
                //height='60px'
                width="100px"
                mb={5}
                mr={6}
              >
                Edit
              </Button>

              {/* <Button 
                                    colorScheme='red' 
                                    variant='solid'
                                    mt={10}
                                    size='lg'
                                    //height='60px'
                                    width='100px'
                                    mb={5}
                                    mr={6}
                                >
                                    Cancel
                                </Button>
                                <Button 
                                    colorScheme='teal' 
                                    variant='solid'
                                    mt={10}
                                    size='lg'
                                    //height='60px'
                                    width='100px'
                                    mb={5}
                                >
                                    Confirm
                                </Button> */}
            </Flex>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default PTAppointmentDetail;