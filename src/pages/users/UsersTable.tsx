import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function UserTables({ users }: any) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Fullname
              </TableCell>

              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Number
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Referral count
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Profile completed
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user: any, idx: any) => (
              <TableRow
                key={idx}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  td: { pb: 1 },
                }}
              >
                <TableCell align="center">
                  {user.first_name} &nbsp; {user.last_name}
                </TableCell>
                <TableCell align="center" sx={{ minWidth: 100 }}>
                  {user.phone_number}
                </TableCell>
                <TableCell align="center">{user.referral_count}</TableCell>
                <TableCell align="center">
                  <div
                    className={`mb-1 rounded-full py-1 font-bold ${
                      user.profile_completed
                        ? "bg-green-300 text-green-900"
                        : "bg-red-300 text-red-900"
                    }`}
                  >
                    {user.profile_completed ? "True" : "False"}
                  </div>
                </TableCell>
                <TableCell align="center">{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default UserTables;
