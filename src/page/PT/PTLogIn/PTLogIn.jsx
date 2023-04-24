import React from 'react';
import {
  Flex,
  Grid,
  GridItem,
  Text,
  Input,
  Spinner,
  Button,
  Link,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Image,
} from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import SingInPicture from '../../../icons/Exercise/SingInPicture.png';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GetUserInfo from '../../../utils/Auth/GetUserInfo';
import { login } from '../../../slice/user/userSlice';
import { useCookie } from 'react-use';

const PTLogIn = () => {
  const language = useSelector((state) => state.language.value);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [token, updateToken, deleteToken] = useCookie('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email === '' || password === '') {
      setError({ data: 'Please fill in all fields' });
      setLoading(false);
    } else {
      try {
        const response = await fetch(
          'https://physiopal-api-deploy-production.up.railway.app/physiotherapist/login',
          {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          updateToken(data.token);

          const userData = await GetUserInfo(data.token);
          if (userData) {
            dispatch(login(userData));
            navigate('/physiotherapist/dashboard');
          }
        } else {
          setError(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Grid
      w='100%'
      templateColumns='7fr 5fr'
      h='700px'
      px={8}
      py={10}
      borderRadius='lg'
    >
      <GridItem
        w='100%'
        bgColor='gray.100'
        justifyContent='center'
        display='flex'
        alignItems='center'
      >
        <GridItem
          w='100%'
          bgColor='blue.300'
          h='full'
          justifyContent='center'
          display='flex'
          alignItems='center'
          borderLeftRadius='lg'
          borderRightRadius='18rem'
          pr={16}
        >
          <Flex flexDir='column' w='100%' alignItems='center'>
            <Image src={SingInPicture} px={20} py={16} />
          </Flex>
        </GridItem>
      </GridItem>

      <GridItem
        w='100%'
        bgColor='gray.100'
        justifyContent='center'
        display='flex'
        alignItems='center'
        borderRightRadius='lg'
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <Flex flexDir='column' w='100%' alignItems='center' px={16} py={4}>
            <Text fontSize='3xl' fontWeight='bold' mb={2}>
              Sign in to Physiopal
            </Text>
            <Text fontWeight='semibold' mb={6} py={4}>
              {/*language === 'English' ? 'Your email account' : 'บัญชีของคุณ'*/}
              Your email account
            </Text>

            <InputGroup size='lg'>
              <InputLeftElement
                pointerEvents='none'
                children={<MdEmail color='gray.300' />}
              />
              <Input
                variant='filled'
                type='email'
                placeholder={language === 'English' ? 'Email' : 'อีเมล'}
                onChange={(e) => setEmail(e.target.value)}
                required
                bgColor='white'
                borderColor='gray.300'
                mb={8}
              />
            </InputGroup>

            <InputGroup size='lg'>
              <InputLeftElement
                pointerEvents='none'
                children={<RiLockPasswordFill color='gray.300' />}
              />
              <Input
                variant='filled'
                type={show ? 'text' : 'password'}
                placeholder={language === 'English' ? 'Password' : 'รหัสผ่าน'}
                onChange={(e) => setPassword(e.target.value)}
                required
                bgColor='white'
                borderColor='gray.300'
                mb={16}
              ></Input>
              <InputRightElement width='4.5rem' mr={2}>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>

            {error ? (
              <Text color='red.800' mb={6}>
                {error.data}
              </Text>
            ) : (
              <Text color='gray.200' mb={6}>
                -----
              </Text>
            )}

            <Button
              /*onClick={() => navigate('/patient/register')}*/
              bgColor='blue.400'
              color='white'
              type='submit'
              w={24}
              _hover={{
                textDecoration: 'none',
                bg: 'blue.300',
              }}
            >
              {' '}
              {!loading ? (
                <Text>
                  {language === 'English' ? 'SIGN IN' : 'เข้าสู่ระบบ'}
                </Text>
              ) : (
                <Spinner color='white' />
              )}
            </Button>
          </Flex>
        </form>
      </GridItem>
    </Grid>
  );
};

export default PTLogIn;
