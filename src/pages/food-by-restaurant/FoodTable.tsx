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
import { GoListOrdered } from "react-icons/go";

import { MenuItemListProps } from "@/interfaces/App.interface";

import { MdOutlineUpdateDisabled } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function FoodTable({ foods }: any) {
  if (!foods || foods.length === 0) return <p>No result found</p>;

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
                Category
              </TableCell>

              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Title
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Price
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                Description
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                status
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 800, fontSize: 18 }}>
                &nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foods.map((food: any, idx: any) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div style={{ width: "60px", height: "60px" }}>
                    <Image
                      src={food.image}
                      alt="logo"
                      width={120}
                      height={120}
                      className="min-w-36 h-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell align="center">{food.category}</TableCell>
                <TableCell align="center" sx={{ minWidth: 100 }}>
                  {food.title}
                </TableCell>
                <TableCell align="center">{food.price}</TableCell>
                <TableCell align="center">{food.description}</TableCell>
                <TableCell align="center">
                  {food.status ? "Active" : "Inactive"}
                </TableCell>
                <TableCell align="center">
                  <MenuAction
                    menuListValue={[
                      {
                        menuItem: `${
                          food.status === true ? "Deactivate" : "Activate"
                        }`,
                        ItemIcon: <MdOutlineUpdateDisabled />,
                        foodId: `${food.food_id}`,
                      },
                      {
                        menuItem: "Edit record",
                        ItemIcon: <FiEdit />,
                        naviagte: "/food-by-restaurant/EditFood",
                        foodId: `${food.food_id}`,
                      },
                      // {
                      //   menuItem: "Navigate user",
                      //   ItemIcon: <GoLinkExternal />,
                      //   naviagte: "/users",
                      // },
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

export default FoodTable;
