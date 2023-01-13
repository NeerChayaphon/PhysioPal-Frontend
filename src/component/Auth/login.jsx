import {
  Flex,
  Grid,
  GridItem,
  Text,
  Input,
  Link,
  Spinner,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import Post from '../../Hook/Post';
import { useDispatch } from 'react-redux';
import { login } from '../../slice/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
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
        const response = await fetch('http://localhost:8080/patient/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (response.ok) {
          setData(data);
          sessionStorage.setItem('token', data.token);

          const userData = await getUserInfo(data.token);
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
              <Button bgColor='teal.400' color='white' type='submit' w={24}>
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
          Sign in to PhysioPal
        </GridItem>
      </Grid>
    </>
  );
};

const getUserInfo = async (token) => {
  try {
    const response = await fetch('http://localhost:8080/user/GetUserByJWT', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default Login;
