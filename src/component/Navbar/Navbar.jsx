import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';

import Logo from '../../icons/Logo.png';

const Links = [
  'Home',
  'General Exercise',
  'Telemedicine',
  'My Exercise',
  'About us',
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('teal.300', 'teal.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Navbar({ Links, HomePageLink }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (HomePageLink === undefined) {
    HomePageLink = '/';
  }
  return (
    <>
      <Box bg='teal.400' px={8} py={2}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link href={HomePageLink}>
              <Image w={24} src={Logo} alt='Logo' />
            </Link>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={5}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link.name} href={link.url}>
                  {' '}
                  <Text fontWeight='medium'>{link.name}</Text>
                </NavLink>
              ))}

              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme='none'
                  color='black'
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('teal.300', 'teal.700'),
                  }}
                  leftIcon={
                    <Avatar
                      size={'sm'}
                      src={
                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      }
                    />
                  }
                  rightIcon={<ChevronDownIcon />}
                >
                  <Text fontWeight='normal' fontSize='md'>
                    Chayaphon Bunyakan
                  </Text>
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
