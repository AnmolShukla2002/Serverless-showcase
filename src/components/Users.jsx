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
import { useState } from "react";

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

const defaultObj = [
  {
    id: 101,
    name: "Yashi",
    email: "y@gmail.com",
    phone: +919369950857,
    salary: 1500000,
    age: 21,
  },
];

const Users = () => {
  const [users, setUsers] = useState(defaultObj);

  const removeEntry = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

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
            {users.map((user) => (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.salary}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => removeEntry(user.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Component>
  );
};

export default Users;
