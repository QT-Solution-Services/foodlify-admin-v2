import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, ListItemIcon } from "@mui/material";
import { RxDotsVertical } from "react-icons/rx";
import { useRouter } from "next/router";
import {
  MenuContextProps,
  MenuItemListProps,
} from "@/interfaces/App.interface";
import { useBlockRestaurant } from "@/pages/restaurant/useBlockRestaurant";
import { useBlockUser } from "@/pages/users/useBlockUser";

export default function MenuAction({ menuListValue }: any) {
  const router = useRouter();
  const { blockRestaurant, isLoading } = useBlockRestaurant();
  const { blockUser } = useBlockUser();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleMeunApiRequests(lable: string, id: string) {
    if (lable === "blockRestaurant") {
      blockRestaurant(id);
    }
    if (lable === "blockUser") {
      blockUser(id);
    }
  }
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
                  listItem.restaurantId &&
                    handleMeunApiRequests(
                      "blockRestaurant",
                      listItem.restaurantId,
                    );
                  listItem.userId &&
                    handleMeunApiRequests("blockUser", listItem.userId);
                  listItem.naviagte && router.push(listItem.naviagte);
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
