import React from 'react';
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
  Square,
} from '@chakra-ui/react';
import Profile1 from '../../../icons/Exercise/Profile1.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useGet from '../../../Hook/useGet';

const PTDashboard = () => {
  const user = useSelector((state) => state.user.data);
  const language = useSelector((state) => state.language.value);
  const { data, error, loading } = useGet(
    `https://physiopal-api-deploy-production.up.railway.app/appointments/physiotherapist/${user.data._id}`
  );

  const {
    data: Patient,
    error: Patienterror,
    loading: PatientLoading,
  } = useGet(`https://physiopal-api-deploy-production.up.railway.app/patients`);

  console.log(Patient);

  const navigate = useNavigate();
  return (
    <>
      {data && Patient && (
        <Grid px={10} py={10}>
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
                  data.data.map((item, index) => {
                    return (
                      <Tr>
                        <Td>{index + 1}.</Td>
                        <Td>
                          <Square size='60px' color='white' borderRadius='lg'>
                            <Image src={Profile1} />
                          </Square>
                        </Td>

                        <Td>
                          {
                            Patient.data.find((obj) => obj._id === item.Patient)
                              .Name
                          }
                          asdasd
                        </Td>
                        <Td>
                          {new Date(item.Date).toISOString().substr(0, 10)}
                        </Td>
                        <Td>{item.Injury}</Td>
                        <Td>
                          <Button
                            colorScheme='teal'
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
        </Grid>
      )}
    </>
  );
};

export default PTDashboard;
