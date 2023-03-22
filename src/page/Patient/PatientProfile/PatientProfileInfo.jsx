import React, { useRef } from "react";
import {
  Grid,
  GridItem,
  Text,
  Flex,
  Input,
  Button,
  Select,
  Avatar,
  AvatarBadge,
  Badge,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import PatientProfileMenu from "../../../component/PatientProfile/PatientProfileMenu";
import Profile1 from "../../../icons/Exercise/Profile1.png";

const PatientProfileInfo = () => {
  const [userProfile, setUserProfile] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const profileImage = useRef(null);

  const openChooseImage = () => {
    profileImage.current.click();
  };

  const changeProfileImage = (event) => {
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    const selected = event.target.files[0];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => setUserProfile(reader.result);
      return reader.readAsDataURL(selected);
    }
    onOpen();
  };

  return (
    <Grid h="max" w="100%" templateColumns="2fr 10fr">
      <GridItem bgColor="teal.100" w="100%">
        <PatientProfileMenu />
      </GridItem>
      <GridItem w="100%" bgColor="gray.100">
        <Flex flexDir="column" w="100%" alignItems="center" py={10} px={10}>
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" mb={2} mt={5}>
              Profile
            </Text>
          </VStack>
          <VStack spacing={3} py={5}>
            <Avatar
              size="2xl"
              cursor="pointer"
              onClick={openChooseImage}
              src={userProfile ? userProfile : "/img/tim-cook.jpg"}
              mb={6}
            >
              {/* ปุ่มกดเพื่อเปลี่ยนรูป */}
              <AvatarBadge bg="teal.300" boxSize="0.9em">
                <svg width="0.4em" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>
              </AvatarBadge>
            </Avatar>
            <input
              hidden
              type="file"
              ref={profileImage}
              onChange={changeProfileImage}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Something went wrong</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>File not supported!</Text>
                  <HStack mt={1}>
                    <Text color="brand.cadet" fontSize="sm">
                      Supported types:
                    </Text>
                    <Badge colorScheme="green">PNG</Badge>
                    <Badge colorScheme="green">JPG</Badge>
                    <Badge colorScheme="green">JPEG</Badge>
                  </HStack>
                </ModalBody>

                {/* <ModalFooter>
                                <Button onClick={onClose}>Close</Button>
                                </ModalFooter> */}
              </ModalContent>
            </Modal>
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
          <Flex flexDir="row" gap={8} mb={10}>
            <Button colorScheme="teal" variant="outline" mt={10} size="lg">
              Cancel
            </Button>
            <Button colorScheme="teal" variant="solid" mt={10} size="lg">
              Save
            </Button>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default PatientProfileInfo;
