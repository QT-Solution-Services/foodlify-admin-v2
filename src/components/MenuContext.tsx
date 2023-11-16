import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, ListItemIcon } from "@mui/material";
import { RxDotsVertical } from "react-icons/rx";
import { useRouter } from "next/router";
import { MenuContextProps } from "@/interfaces/App.interface";
import { useBlockRestaurant } from "@/pages/restaurant/useBlockRestaurant";
import { useBlockUser } from "@/pages/users/useBlockUser";
import { useQueryClient } from "@tanstack/react-query";

export default function MenuAction({ menuListValue }: any) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { blockRestaurant, unBlockRestaurant, isLoading } =
    useBlockRestaurant();
  const { blockUser, unBlockUser } = useBlockUser();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleMeunApiRequests(lable: string, value: string) {
    if (lable === "blockRestaurant") {
      blockRestaurant(value, {
        onSuccess: () => {
          queryClient.invalidateQueries({ active: true });
        },
      });
    }
    if (lable === "unBlockRestaurant") {
      alert("unblock " + value);
      unBlockRestaurant(value, {
        onSuccess: () => {
          queryClient.invalidateQueries({ active: true });
        },
      });
    }
    if (lable === "blockUser") {
      blockUser(value, {
        onSuccess: () => {
          queryClient.invalidateQueries({ active: true });
        },
      });
    }
    if (lable === "unBlockUser") {
      unBlockUser(value, {
        onSuccess: () => {
          queryClient.invalidateQueries({ active: true });
        },
      });
    }
  }

  function handleMenuActions(listItem: MenuContextProps) {
    if (listItem.menuItem && listItem.menuItem === "Block") {
      listItem.restaurantId &&
        handleMeunApiRequests("blockRestaurant", listItem.restaurantId);
      listItem.userName &&
        handleMeunApiRequests("blockUser", listItem.userName);
    }
    if (listItem.menuItem && listItem.menuItem === "UnBlock") {
      listItem.restaurantId &&
        handleMeunApiRequests("unBlockRestaurant", listItem.restaurantId);
      listItem.userName &&
        handleMeunApiRequests("unBlockUser", listItem.userName);
    }

    // if menu item is not block || unblock is def a button or link
    listItem.naviagte && router.push(listItem.naviagte);
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
                  handleMenuActions(listItem);
                }}
              >
                <ListItemIcon>
                  {listItem.ItemIcon && listItem.ItemIcon}
                </ListItemIcon>
                {listItem.menuItem}
              </MenuItem>
            );
          })}
      </Menu>
    </div>
  );
}
