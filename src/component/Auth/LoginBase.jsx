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
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../slice/user/userSlice';
import { setEnglish, setThai } from '../../slice/language/languageSlice';
import { useNavigate } from 'react-router-dom';
import GetUserInfo from '../../utils/Auth/GetUserInfo';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.value);
  console.log(language);

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
              <Text fontSize='3xl' fontWeight='bold' mb={8} px={24}>
                PhysioPal
              </Text>
              <Text fontWeight='semibold' mb={6}>
                {language === 'English' ? 'Your email account' : 'บัญชีของคุณ'}
              </Text>
              <Input
                type='email'
                required
                bgColor='white'
                borderColor='gray.300'
                mb={6}
                placeholder={language === 'English' ? 'Email' : 'อีเมล'}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <Input
                type='password'
                required
                bgColor='white'
                borderColor='gray.300'
                mb={4}
                placeholder={language === 'English' ? 'Password' : 'รหัสผ่าน'}
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
        <GridItem
          w='100%'
          bgColor='teal.200'
          justifyContent='center'
          display='flex'
          alignItems='center'
        >
          <Flex flexDir='column' w='100%' alignItems='center'>
            <Text fontSize='3xl' fontWeight='bold' mb={8}>
              {language === 'English' ? 'Hello, Friend!' : 'สวัสดีเพื่อน!'}
            </Text>
            <Text fontWeight='boid'>
              {language === 'English'
                ? 'Enter your personal detail'
                : 'กรอกข้อมูลส่วนตัว'}
            </Text>
            <Text fontWeight='boid' mb={6}>
              {language === 'English'
                ? 'and start your journey with us'
                : 'และเริ่มต้นเส้นทางกับเรา'}
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
              {language === 'English' ? 'SIGN UP' : 'ลงทะเบียน'}
            </Button>
            {/* <Button onClick={() => dispatch(setThai())}> Thai</Button>
            <Button onClick={() => dispatch(setEnglish())}> Eng</Button> */}
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default Login;
