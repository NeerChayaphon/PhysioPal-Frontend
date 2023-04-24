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
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../slice/user/userSlice';
import { setEnglish, setThai } from '../../slice/language/languageSlice';

const Links = [
  'Home',
  'General Exercise',
  'Telemedicine',
  'My Exercise',
  'About us',
];

const Navbar = ({ Links, HomePageLink, User, UserLinks, SignoutLink }) => {
  const dispatch = useDispatch();
  const refresh = () => window.location.reload(true);

  const { isOpen, onOpen, onClose } = useDisclosure();
  if (HomePageLink === undefined) {
    HomePageLink = '/';
  }

  const signout = () => {
    dispatch(logout());
    sessionStorage.removeItem('token');
    // refresh();
  };
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
            {User && (
              <HStack
                as={'nav'}
                spacing={5}
                display={{ base: 'none', md: 'flex' }}
              >
                {Links.map((link) => (
                  <NavLink key={link.name} link={link.url}>
                    {' '}
                    <Text fontWeight='medium'>{link.name}</Text>
                  </NavLink>
                ))}

                {User && (
                  <Menu>
                    <MenuButton
                      as={Button}
                      colorScheme='none'
                      color='black'
                      _hover={{
                        textDecoration: 'none',
                        bg: 'teal.300',
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
                        {User.data.Name.En_Name}
                      </Text>
                    </MenuButton>
                    <MenuList>
                      {UserLinks.map((link) => (
                        <MenuItem>
                          <Link
                            w='full'
                            _hover={{
                              textDecoration: 'none',
                            }}
                            href={link.url}
                          >
                            {' '}
                            {link.name}
                          </Link>
                        </MenuItem>
                      ))}

                      <MenuItem>
                        <Link
                          w='full'
                          _hover={{
                            textDecoration: 'none',
                          }}
                          href='/patient/profile'
                        >
                          Profile
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={() => dispatch(setThai())}>
                        THAI
                      </MenuItem>
                      <MenuItem onClick={() => dispatch(setEnglish())}>
                        ENG
                      </MenuItem>
                      <MenuItem onClick={signout}>Sign Out</MenuItem>
                    </MenuList>
                  </Menu>
                )}
              </HStack>
            )}
            {!User && (
              <HStack
                as={'nav'}
                spacing={5}
                display={{ base: 'none', md: 'flex' }}
              >
                <Link
                  px={4}
                  py={2}
                  borderRadius='md'
                  href={'/patient/login'}
                  bg='teal.400'
                  _hover={{
                    textDecoration: 'none',
                    bg: 'teal.300',
                  }}
                >
                  <Text fontWeight='medium'>Login</Text>
                </Link>

                <Link
                  px={4}
                  py={2}
                  borderRadius='md'
                  href={'/patient/register'}
                  bg='teal.300'
                  _hover={{
                    textDecoration: 'none',
                    bg: 'teal.100',
                  }}
                >
                  <Text fontWeight='medium'>Sign Up</Text>
                </Link>
              </HStack>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} link={link.url}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

const NavLink = ({ link, children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('teal.300', 'teal.700'),
    }}
    href={link}
  >
    {children}
  </Link>
);

export default Navbar;
