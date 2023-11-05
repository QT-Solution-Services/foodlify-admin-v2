import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuAction from "@/components/MenuContext";
import { Divider, TableFooter } from "@mui/material";
import Pagination from "@/components/layouts/Pagination";
import Image from "next/image";
import { MenuItemListProps } from "@/interfaces/App.interface";
import { LiaEye } from "react-icons/lia";
import { GrAction } from "react-icons/gr";

function OrdersTable({ orders }: any) {
  if (!orders || orders.length === 0) return <p>No result found</p>;
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Logo(s)
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Restaurant(s)
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                OrderId
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                status
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Items
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Location
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                &nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order: any, idx: any) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div
                    className="flex space-x-[-10px] p-1.5"
                    style={{ width: "60px", height: "60px" }}
                  >
                    {order.restaurants.map((restaurant: any, idx: any) => (
                      <Image
                        key={idx}
                        // src={restaurant.logo}
                        src={`/${idx + 1}.webp`}
                        alt="logo"
                        width={50}
                        height={50}
                        className=" min-w-28 -ml-5 h-full rounded-full object-cover"
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell align="center">
                  {order.restaurants[0].name}
                </TableCell>
                <TableCell align="center">{order.orderId}</TableCell>
                <TableCell align="center">{order.status}</TableCell>
                <TableCell align="center">{order.itemsCount}</TableCell>

                <TableCell align="center">
                  {order.restaurants[0].location}
                </TableCell>

                <TableCell align="center">
                  <MenuAction
                    menuListValue={[
                      {
                        menuItem: "see details",
                        ItemIcon: LiaEye,
                        naviagte: `/orders/${order.orderId}`,
                      },
                      {
                        menuItem: "more action",
                        ItemIcon: GrAction,
                        naviagte: "/users",
                      },
                    ]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={40} />
    </>
  );
}

export default OrdersTable;
