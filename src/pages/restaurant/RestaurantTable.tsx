import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuAction from "@/components/MenuContext";
import Image from "next/image";
import { MenuItemListProps } from "@/interfaces/App.interface";

import { MdOutlineUpdateDisabled } from "react-icons/md";

// const menuListValue: MenuItemListProps = [
//   {
//     menuItem: "disable",
//     ItemIcon: MdOutlineUpdateDisabled,
//     naviagte: "/users",
//   },
// ];

function RestaurantTable({ restaurants }: any) {
  if (!restaurants || restaurants.length === 0) return <p>No result found</p>;

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
                Name
              </TableCell>

              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Close
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Status
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Number
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Location
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Address
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                &nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurants.map((restaurant: any, idx: any) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div style={{ width: "60px", height: "60px" }}>
                    <Image
                      src={restaurant.logo}
                      alt="logo"
                      width={120}
                      height={120}
                      className="min-w-36 h-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell align="center">{restaurant.name}</TableCell>
                <TableCell align="center" sx={{ minWidth: 100 }}>
                  {restaurant.close_time}
                </TableCell>
                <TableCell align="center">{restaurant.status}</TableCell>
                <TableCell align="center">{restaurant.number}</TableCell>
                <TableCell align="center">{restaurant.location}</TableCell>
                <TableCell align="center" sx={{ fontSize: 12 }}>
                  {restaurant.address}
                </TableCell>
                <TableCell align="center">
                  <MenuAction
                    menuListValue={[
                      {
                        menuItem: "Disable",
                        ItemIcon: MdOutlineUpdateDisabled,
                        // naviagte: "/users",
                        restaurantId: `${restaurant.restaurant_id}`,
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

export default RestaurantTable;
