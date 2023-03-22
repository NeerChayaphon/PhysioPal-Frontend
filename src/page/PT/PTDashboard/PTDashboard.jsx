import React from "react";
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
} from "@chakra-ui/react";
import Profile1 from "../../../icons/Exercise/Profile1.png";

const PTDashboard = () => {
  return (
    <Grid px={10} py={10}>
      <Text fontSize="3xl" fontWeight="bold" mb={8}>
        Past Appointment
      </Text>
      <TableContainer borderRadius="lg" boxShadow="lg" px={2} py={2}>
        <Table
          variant="striped"
          colorScheme="blue"
          bgColor="white"
          borderRadius="lg"
        >
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>NO.</Th>
              <Th>PICTURE</Th>
              <Th>NAME</Th>
              <Th>DATE</Th>
              <Th>ILLNESS</Th>
              <Th>RECORD</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>2.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>3.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Low back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>4.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>5.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>6.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>7.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>8.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>9.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>10.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Low back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>11.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>12.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>13.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>14.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>15.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>16.</Td>
              <Td>
                <Square size="60px" color="white" borderRadius="lg">
                  <Image src={Profile1} />
                </Square>
              </Td>
              <Td>Kamado Nezuko</Td>
              <Td>02/10/2022</Td>
              <Td>Lower back pain</Td>
              <Td>
                <Button colorScheme="blue" variant="solid" size="xs">
                  Edit detail
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
    </Grid>
  );
};

export default PTDashboard;
