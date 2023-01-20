import {
  Flex,
  Grid,
  GridItem,
  Text,
  Input,
  Spinner,
  Button,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../slice/user/userSlice';
import { useNavigate } from 'react-router-dom';
import GetUserInfo from '../../utils/Auth/GetUserInfo';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email === '' || password === '') {
      setError({ data: 'Please fill in all fields' });
      setLoading(false);
    } else {
      try {
        const response = await fetch(
          'https://physiopal-api.azurewebsites.net/patient/login',
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
          sessionStorage.setItem('token', data.token);

          const userData = await GetUserInfo(data.token);
          if (userData) {
            dispatch(login(userData));
            navigate('/');
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

  return (
    <>
      <Grid w='100%' templateColumns='7fr 5fr' h='xl' px={8} pt={10}>
        <GridItem
          w='100%'
          bgColor='gray.100'
          justifyContent='center'
          display='flex'
          alignItems='center'
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <Flex flexDir='column' w='100%' alignItems='center'>
              <Text fontSize='3xl' fontWeight='bold' mb={8}>
                Sign in to PhysioPal
              </Text>
              <Text fontWeight='semibold' mb={6}>
                Your email account
              </Text>
              <Input
                type='email'
                required
                bgColor='white'
                borderColor='gray.300'
                mb={6}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <Input
                type='password'
                required
                bgColor='white'
                borderColor='gray.300'
                mb={4}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              ></Input>

              {error ? (
                <Text color='red.800' mb={6}>
                  {error.data}
                </Text>
              ) : (
                <Text color='gray.200' mb={6}>
                  -----
                </Text>
              )}
              {/* <Link mb={6}>Forget your password?</Link> */}
              <Button
                bgColor='teal.400'
                color='white'
                type='submit'
                w={24}
                _hover={{
                  textDecoration: 'none',
                  bg: 'teal.300',
                }}
              >
                {!loading ? <Text>SIGN IN</Text> : <Spinner color='white' />}
              </Button>
            </Flex>
          </form>
        </GridItem>
        <GridItem
          w='100%'
          bgColor='teal.200'
          justifyContent='center'
          display='flex'
          alignItems='center'
        >
          <Flex flexDir='column' w='100%' alignItems='center'>
            <Text fontSize='3xl' fontWeight='bold' mb={8}>
              Hello, Friend!
            </Text>
            <Text fontWeight='boid'>Enter your personal details</Text>
            <Text fontWeight='boid' mb={6}>
              and start your journey with us
            </Text>
            <Button
              onClick={() => navigate('/signup')}
              color='gray.700'
              w={24}
              variant='outline'
              borderColor='gray.200'
              _hover={{
                textDecoration: 'none',
                bg: 'gray.200',
              }}
            >
              {' '}
              SIGN UP
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default Login;
