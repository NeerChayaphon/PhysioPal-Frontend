import React,{ useState } from 'react'
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

const PatientAppointmentRecord = () => {
    
    return (
        <Grid h='max' w='100%' templateColumns='2fr 10fr'>
            <GridItem bgColor='teal.100' w='100%'>
                <PatientProfileMenu/>
            </GridItem>
            <GridItem
                w='100%'
                bgColor='gray.100'
                px={10}
                py={10}
                >
                    <VStack>
                        <Text fontSize='3xl' fontWeight='bold' mb={8}>
                            Appointment Record
                        </Text>
                    </VStack>
                    <TableContainer borderRadius='lg' boxShadow='lg'>
                        <Table variant='simple' bgColor='white' borderRadius='lg' size='md'>
                            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                            <Thead>
                                <Tr>
                                    <Th>NO.</Th>
                                    <Th>DATE</Th>
                                    <Th>PHYSIOTHERAPIST</Th>
                                    <Th>ILLNESS</Th>
                                    <Th>RECORD</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>1.</Td>
                                    <Td>01/10/2022</Td>
                                    <Td>Neer</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>    
                                </Tr>
                                <Tr>
                                    <Td>2.</Td>
                                    <Td>02/10/2022</Td>
                                    <Td>Pear</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>     
                                </Tr>
                                <Tr>
                                    <Td>3.</Td>
                                    <Td>03/10/2022</Td>
                                    <Td>Noolek</Td>
                                    <Td>Low back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>      
                                </Tr>
                                <Tr>
                                    <Td>4.</Td>
                                    <Td>04/10/2022</Td>
                                    <Td>Noolek</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>     
                                </Tr>
                                <Tr>
                                    <Td>5.</Td>
                                    <Td>05/10/2022</Td>
                                    <Td>Noolek</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>      
                                </Tr>
                                <Tr>
                                    <Td>6.</Td>
                                    <Td>06/10/2022</Td>
                                    <Td>Neer</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>         
                                </Tr>
                                <Tr>
                                    <Td>7.</Td>
                                    <Td>07/10/2022</Td>
                                    <Td>Pear</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>      
                                </Tr>
                                <Tr>
                                    <Td>8.</Td>
                                    <Td>08/10/2022</Td>
                                    <Td>Noolek</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>       
                                </Tr>
                                <Tr>
                                    <Td>9.</Td>
                                    <Td>09/10/2022</Td>
                                    <Td>Noolek</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>      
                                </Tr>
                                <Tr>
                                    <Td>10.</Td>
                                    <Td>10/10/2022</Td>
                                    <Td>Pear</Td>
                                    <Td>Low back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>       
                                </Tr>
                                <Tr>
                                    <Td>11.</Td>
                                    <Td>11/10/2022</Td>
                                    <Td>Neer</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>          
                                </Tr>
                                <Tr>
                                    <Td>12.</Td>
                                    <Td>12/10/2022</Td>
                                    <Td>Pear</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>      
                                </Tr>
                                <Tr>
                                    <Td>13.</Td>
                                    <Td>13/10/2022</Td>
                                    <Td>Noolek</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>    
                                </Tr>
                                <Tr>
                                    <Td>14.</Td>
                                    <Td>14/10/2022</Td>
                                    <Td>Noolek</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>      
                                </Tr>
                                <Tr>
                                    <Td>15.</Td>
                                    <Td>15/10/2022</Td>
                                    <Td>Noolek</Td>
                                    <Td>Lower back pain</Td>
                                    <Td>
                                        <Button 
                                            colorScheme='teal' 
                                            variant='solid'
                                            size='xs'
                                            >
                                                View more
                                        </Button>  
                                    </Td>      
                                </Tr>
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
        </Grid>
    )
}

export default PatientAppointmentRecord
