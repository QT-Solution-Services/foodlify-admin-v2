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

function RestaurantTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">id&nbsp;(g)</TableCell>
            <TableCell align="right">location&nbsp;(g)</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
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
