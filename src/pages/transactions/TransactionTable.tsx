import MenuAction from "@/components/MenuContext";
import { formatDate } from "@/utils/Helper";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import { GrAction } from "react-icons/gr";

function TransactionTable({ transactions }: any) {
  if (!transactions || transactions.length === 0) return <p>No result found</p>;
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Title
              </TableCell>

              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Content
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Timestamp
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                &nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction: any, idx: any) => (
              <TableRow
                key={idx}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  td: { pb: 1 },
                }}
              >
                <TableCell size="small" sx={{ minWidth: 200 }}>
                  <div
                    className={`mb-1 rounded-full py-1 text-center font-bold ${
                      transaction.title.toLowerCase().includes("order")
                        ? "bg-green-300 text-green-900"
                        : "bg-red-300 text-red-900"
                    }`}
                  >
                    {transaction.title}
                  </div>
                </TableCell>

                <TableCell align="center" sx={{ maxWidth: 450 }}>
                  <div>{transaction.content}</div>
                </TableCell>
                <TableCell align="center" sx={{ minWidth: 100 }}>
                  {formatDate(transaction.timestamp)}
                </TableCell>
                <TableCell align="center">
                  <MenuAction
                    menuListValue={[
                      {
                        menuItem: "no action",
                        ItemIcon: <GrAction />,
                        naviagte: "/dashboard",
                      },
                    ]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TransactionTable;
