import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import PatientProfileMenu from '../../../component/PatientProfile/PatientProfileMenu';

import { useSelector } from 'react-redux';
import useGet from '../../../Hook/useGet';
import Loading from '../../../component/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const PatientAppointmentRecord = () => {
  const user = useSelector((state) => state.user.data);
  const language = useSelector((state) => state.language.value);
  const { data, error, loading } = useGet(
    `https://physiopal-api-production.up.railway.app/appointments/patient/${user.data._id}`
  );

  const {
    data: PT,
    error: PTerror,
    loading: PTLoading,
  } = useGet(
    `https://physiopal-api-production.up.railway.app/physiotherapists`
  );

  const navigate = useNavigate();

  //   const getPT = (id) => {
  //     PT.data.filter((i) => {
  //       return i._id == '642a74197d8009ecc9e31edc';
  //     });
  //   };

  //   console.log(getPT('642a74197d8009ecc9e31edc'));

  return (
    <Grid h='100%' w='100%' templateColumns='2fr 10fr'>
      <GridItem bgColor='teal.100' w='100%'>
        <PatientProfileMenu />
      </GridItem>
      {loading || data === null || PTLoading || PT === null ? (
        <Loading />
      ) : (
        <GridItem w='100%' bgColor='gray.100' px={10} py={10}>
          <VStack>
            <Text fontSize='3xl' fontWeight='bold' mb={8}>
              {language === 'English' ? 'Appointment Record' : 'การนัดหมาย'}
            </Text>
          </VStack>
          <TableContainer borderRadius='lg' boxShadow='lg'>
            <Table variant='simple' bgColor='white' borderRadius='lg' size='md'>
              {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
              <Thead>
                <Tr>
                  <Th>{language === 'English' ? 'NO' : 'ลำดับ'}</Th>
                  <Th>{language === 'English' ? 'DATE' : 'วันที่'}</Th>
                  <Th>
                    {language === 'English'
                      ? 'PHYSIOTHERAPIST'
                      : 'นักกายภาำบำบัด'}
                  </Th>
                  <Th>{language === 'English' ? 'ILLNESS' : 'อาการ'}</Th>
                  <Th>{language === 'English' ? 'RECORD' : 'การบันทัก'}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.data.map((item, index) => {
                  return (
                    <Tr>
                      <Td>{index + 1}.</Td>
                      <Td>{new Date(item.Date).toISOString().substr(0, 10)}</Td>
                      <Td>
                        {
                          PT.data.find(
                            (obj) => obj._id === item.Physiotherapist
                          ).Details.En_Description.Name
                        }
                      </Td>
                      <Td>{item.Injury}</Td>
                      <Td>
                        <Button
                          colorScheme='teal'
                          variant='solid'
                          size='xs'
                          onClick={() =>
                            navigate(
                              `/patient/profile/appointment/${index + 1}`,
                              {
                                state: { appointment: item },
                              }
                            )
                          }
                        >
                          {language === 'English' ? 'View more' : 'ดูเพิ่มเติม'}
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
      )}
    </Grid>
  );
};

export default PatientAppointmentRecord;
