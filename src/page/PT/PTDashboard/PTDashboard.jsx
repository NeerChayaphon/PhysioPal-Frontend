import React, { useState, useEffect } from 'react';
import {
  Grid,
  GridItem,
  Text,
  Flex,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  VStack,
  Image,
  Box,
  Circle,
} from '@chakra-ui/react';
import Profile1 from '../../../icons/Exercise/Profile1.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useGet from '../../../Hook/useGet';
import useCheckUser from '../../../Hook/useCheckUser';
import { useCookie } from 'react-use';
import PTMenu from '../../../component/PTViewPatientProfile/PTMenu';

const PTDashboard = () => {
  useCheckUser('physiotherapist', '/physiotherapist/login');
  const user = useSelector((state) => state.user.data);
  const language = useSelector((state) => state.language.value);

  const [data, setData] = useState(null);

  const [token, updateToken, deleteToken] = useCookie('token');

  useEffect(() => {
    if (user) {
      fetch(
        `https://physiopal-api-deploy-production.up.railway.app/appointments/physiotherapist/${user.data._id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [user]);

  const {
    data: Patient,
    error: Patienterror,
    loading: PatientLoading,
  } = useGet(`https://physiopal-api-deploy-production.up.railway.app/patients`);

  console.log(Patient);

  const navigate = useNavigate();
  return (
    <>
      <Grid h='max' w='100%' templateColumns='2fr 10fr'>
        <GridItem bgColor='blue.100' w='100%'>
          <PTMenu />
        </GridItem>
        {data && Patient && (
          <GridItem px={10} py={10}>
            <Text fontSize='3xl' fontWeight='bold' mb={8}>
              Past Appointment
            </Text>
            <TableContainer borderRadius='lg' boxShadow='lg' px={2} py={2}>
              <Table
                variant='striped'
                colorScheme='blue'
                bgColor='white'
                borderRadius='lg'
              >
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                  <Tr>
                    <Th>{language === 'English' ? 'NO' : 'ลำดับ'}</Th>
                    <Th>{language === 'English' ? 'PICTURE' : 'รูป'}</Th>
                    <Th>{language === 'English' ? 'PATIENT' : 'ผู้ป่วย'}</Th>
                    <Th>{language === 'English' ? 'DATE' : 'วันที่'}</Th>
                    <Th>{language === 'English' ? 'ILLNESS' : 'อาการ'}</Th>
                    <Th>{language === 'English' ? 'RECORD' : 'การบันทัก'}</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.data !== null &&
                    data.data
                      .slice()
                      .reverse()
                      .map((item, index) => {
                        return (
                          <Tr>
                            <Td>{index + 1}.</Td>
                            <Td>
                              <Box
                                w='60px'
                                h='60px'
                                overflow='hidden'
                                borderRadius='full'
                              >
                                <Image
                                  w='100%'
                                  h='100%'
                                  objectFit='cover'
                                  src={
                                    Patient.data.find(
                                      (obj) => obj._id === item.Patient
                                    ).Photo
                                  }
                                />
                              </Box>
                            </Td>

                            <Td>
                              {
                                Patient.data.find(
                                  (obj) => obj._id === item.Patient
                                ).Name
                              }
                            </Td>
                            <Td>
                              {new Date(item.Date).toISOString().substr(0, 10)}
                            </Td>
                            <Td>{item.Injury !== '' ? item.Injury : '-'}</Td>
                            <Td>
                              <Button
                                colorScheme='blue'
                                variant='solid'
                                size='xs'
                                onClick={() =>
                                  navigate(
                                    `/physiotherapist/appointment/${item._id}`,
                                    {
                                      state: { appointment: item },
                                    }
                                  )
                                }
                              >
                                {language === 'English'
                                  ? 'View more'
                                  : 'ดูเพิ่มเติม'}
                              </Button>
                            </Td>
                          </Tr>
                        );
                      })}
                </Tbody>
                {/* <Tfoot>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Tfoot> */}
              </Table>
            </TableContainer>
          </GridItem>
        )}
      </Grid>
    </>
  );
};

export default PTDashboard;
