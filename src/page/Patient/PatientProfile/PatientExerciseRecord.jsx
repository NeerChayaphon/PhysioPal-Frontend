import React from 'react'
import { 
    Grid, 
    GridItem, 
    Text, 
    Button, 
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    VStack,
  } from '@chakra-ui/react';
  import PatientProfileMenu from '../../../component/PatientProfile/PatientProfileMenu';

const PatientExerciseRecord = () => {
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
                            Exercise Record
                        </Text>
                    </VStack>
                    <TableContainer borderRadius='lg' boxShadow='lg' px={2} py={2} bgColor='white'>
                        <Table variant='striped' colorScheme='teal' bgColor='white' borderRadius='lg'>
                            <Thead>
                            <Tr>
                                <Th>NO.</Th>
                                <Th>EXERCISE <br/> SET</Th>
                                <Th>TYPE</Th>
                                <Th>PHYSIOTHERAPIST</Th>
                                <Th>DATE</Th>
                                <Th>STATUS</Th>
                                <Th>RECORD</Th> 
                            </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>1.</Td>
                                    <Td>Set 1</Td>
                                    <Td>General <br/>Exercise</Td>
                                    <Td>-</Td>
                                    <Td>01/10/2022</Td>
                                    <Td>Unfinish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>  
                                </Tr>
                                <Tr>
                                    <Td>2.</Td>
                                    <Td>Set 2</Td>
                                    <Td>Therapeutical <br/> Exercise</Td>
                                    <Td>Neer</Td>
                                    <Td>02/10/2022</Td>
                                    <Td>finish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>  
                                </Tr>
                                <Tr>
                                    <Td>3.</Td>
                                    <Td>Set 1</Td>
                                    <Td>Therapeutical <br/>Exercise</Td>
                                    <Td>Noolek</Td>
                                    <Td>03/10/2022</Td>
                                    <Td>Unfinish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>                           
                                </Tr>
                                <Tr>
                                    <Td>4.</Td>
                                    <Td>Set 2</Td>
                                    <Td>Therapeutical <br/>Exercise</Td>
                                    <Td>Pear</Td>
                                    <Td>04/10/2022</Td>
                                    <Td>finish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>  
                                </Tr>
                                <Tr>
                                    <Td>5.</Td>
                                    <Td>Set 1</Td>
                                    <Td>General <br/>Exercise</Td>
                                    <Td>-</Td>
                                    <Td>05/10/2022</Td>
                                    <Td>Unfinish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>                           
                                </Tr>
                                <Tr>
                                    <Td>6.</Td>
                                    <Td>Set 1</Td>
                                    <Td>General <br/>Exercise</Td>
                                    <Td>-</Td>
                                    <Td>06/10/2022</Td>
                                    <Td>Unfinish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>  
                                </Tr>
                                <Tr>
                                    <Td>7.</Td>
                                    <Td>Set 2</Td>
                                    <Td>Therapeutical <br/>Exercise</Td>
                                    <Td>Neer</Td>
                                    <Td>07/10/2022</Td>
                                    <Td>finish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>  
                                </Tr>
                                <Tr>
                                    <Td>8.</Td>
                                    <Td>Set 1</Td>
                                    <Td>Therapeutical <br/>Exercise</Td>
                                    <Td>Pear</Td>
                                    <Td>08/10/2022</Td>
                                    <Td>Unfinish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>                           
                                </Tr>
                                <Tr>
                                    <Td>9.</Td>
                                    <Td>Set 4</Td>
                                    <Td>Therapeutical<br/>Exercise</Td>
                                    <Td>Noolek</Td>
                                    <Td>09/10/2022</Td>
                                    <Td>finish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>  
                                </Tr>
                                <Tr>
                                    <Td>10.</Td>
                                    <Td>Set 1</Td>
                                    <Td>General <br/>Exercise</Td>
                                    <Td>-</Td>
                                    <Td>10/10/2022</Td>
                                    <Td>Unfinish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>                           
                                </Tr>
                                <Tr>
                                    <Td>11.</Td>
                                    <Td>Set 1</Td>
                                    <Td>General <br/>Exercise</Td>
                                    <Td>-</Td>
                                    <Td>11/10/2022</Td>
                                    <Td>Unfinish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>  
                                </Tr>
                                <Tr>
                                    <Td>12.</Td>
                                    <Td>Set 2</Td>
                                    <Td>Therapeutical <br/>Exercise</Td>
                                    <Td>Neer</Td>
                                    <Td>12/10/2022</Td>
                                    <Td>finish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>  
                                </Tr>
                                <Tr>
                                    <Td>13.</Td>
                                    <Td>Set 1</Td>
                                    <Td>Therapeutical <br/>Exercise</Td>
                                    <Td>Pear</Td>
                                    <Td>13/10/2022</Td>
                                    <Td>Unfinish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>                           
                                </Tr>
                                <Tr>
                                    <Td>14.</Td>
                                    <Td>Set 4</Td>
                                    <Td>Therapeutical <br/>Exercise</Td>
                                    <Td>Noolek</Td>
                                    <Td>14/10/2022</Td>
                                    <Td>finish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>  
                                </Tr>
                                <Tr>
                                    <Td>15.</Td>
                                    <Td>Set 1</Td>
                                    <Td>General <br/>Exercise</Td>
                                    <Td>-</Td>
                                    <Td>15/10/2022</Td>
                                    <Td>Unfinish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>                           
                                </Tr>
                                <Tr>
                                    <Td>16.</Td>
                                    <Td>Set 1</Td>
                                    <Td>General <br/>Exercise</Td>
                                    <Td>-</Td>
                                    <Td>16/10/2022</Td>
                                    <Td>Unfinish</Td>
                                    <Td>
                                        <Button 
                                        colorScheme='teal' 
                                        variant='solid'
                                        size='xs'
                                        >
                                            View Detail
                                        </Button>  
                                    </Td>                           
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
            </GridItem>
        </Grid>
    )
}

export default PatientExerciseRecord
