import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, ListItemIcon } from "@mui/material";
import { RxDotsVertical } from "react-icons/rx";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRouter } from "next/router";
import {
  MenuContextProps,
  MenuItemListProps,
} from "@/interfaces/App.interface";

export default function MenuAction({ menuListValue }: any) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <RxDotsVertical />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuListValue &&
          menuListValue.map((listItem: MenuContextProps, idx: number) => {
            return (
              <MenuItem
                key={idx}
                onClick={() => {
                  handleClose();
                  router.push(listItem.naviagte);
                }}
              >
                <ListItemIcon>
                  {listItem.ItemIcon && <listItem.ItemIcon />}
                </ListItemIcon>
                {listItem.menuItem}
              </MenuItem>
            );
          })}
      </Menu>
    </div>
  );
}
