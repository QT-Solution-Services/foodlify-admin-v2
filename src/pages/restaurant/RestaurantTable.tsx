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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  id: number,
  location: string,
) {
  return { name, calories, fat, carbs, protein, id, location };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 1, "abuja"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 2, "jostfe"),
  createData("Eclair", 262, 16.0, 24, 6.0, 3, "ghana"),
  createData("Cupcake", 305, 3.7, 67, 4.3, 3, "makudi"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 3, "ananbra"),
];

function RestaurantTable({ restaurants }: any) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Logo</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Service Time</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Number)</TableCell>
            <TableCell align="right"> Location</TableCell>
            <TableCell align="right"> Address</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurants.map((restaurant: any) => (
            <TableRow
              key={restaurant.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div>
                  <Image
                    src={restaurant.logo}
                    alt="logo"
                    height={120}
                    width={120}
                    className="h-full w-28 object-cover"
                  />
                </div>
              </TableCell>
              <TableCell align="right">{restaurant.name}</TableCell>
              <TableCell align="right">{restaurant.id}</TableCell>
              <TableCell align="right">
                {restaurant.open_time} - {restaurant.close_time}
              </TableCell>
              <TableCell align="right">{restaurant.status}</TableCell>
              <TableCell align="right">{restaurant.number}</TableCell>
              <TableCell align="right">{restaurant.location}</TableCell>
              <TableCell align="right">{restaurant.address}</TableCell>
              <TableCell align="right">
                <MenuAction />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TableFooter>
        <TableRow>
          <Pagination count={50} />
        </TableRow>
      </TableFooter>
    </TableContainer>
  );
}

export default RestaurantTable;
