import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
  Button,
} from "@mui/material";

const Component = styled(Box)`
  width: 80%;
  margin: 50px auto;
  & > h4 {
    margin-bottom: 20px;
  }
  & > div > table > thead {
    background-color: #000;
  }
  & > div > table > thead > tr > th {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
  & > div > table > tbody > tr > td {
    font-size: 16px;
  }
`;

const Users = () => {
  return (
    <Component>
      <Typography variant="h4">Users</Typography>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Remove Entry</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>101</TableCell>
              <TableCell>Anmol</TableCell>
              <TableCell>anmol@gmail.com</TableCell>
              <TableCell>+91 9519293603</TableCell>
              <TableCell>1200000</TableCell>
              <TableCell>21</TableCell>
              <TableCell>
                <Button variant="contained" color="error">
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Component>
  );
};

export default Users;
