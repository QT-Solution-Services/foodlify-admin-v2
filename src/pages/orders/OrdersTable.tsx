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

// const menuListValue: MenuItemListProps = [
//   {
//     menuItem: "see details",
//     ItemIcon: LiaEye,
//     naviagte: "/orders/orderDetails",
//   },
//   {
//     menuItem: "more action",
//     ItemIcon: GrAction,
//     naviagte: "/users",
//   },
// ];

function OrdersTable({ orders }: any) {
  if (true) return <p>Oreders</p>;
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                &nbsp;
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Restaurant
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                OrderId
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                status
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Item count
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Delivery Type
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
                  <div style={{ width: "60px", height: "60px" }}>
                    <Image
                      src={order.logo}
                      alt="logo"
                      width={120}
                      height={120}
                      className="min-w-36 h-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell align="center">{order.restaurantName}</TableCell>
                <TableCell align="center">{order.orderId}</TableCell>
                <TableCell align="center">{order.status}</TableCell>
                <TableCell align="center">{order.itemCount}</TableCell>
                <TableCell align="center">{order.deliveryType}</TableCell>

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
