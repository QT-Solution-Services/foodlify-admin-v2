import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, ListItemIcon } from "@mui/material";
import { RxDotsVertical } from "react-icons/rx";
import { useRouter } from "next/router";
import { MenuContextProps } from "@/interfaces/App.interface";
import useBlockRestaurant from "@/hooks/restaurants/useBlockRestaurant";
import useBlockUser from "@/hooks/users/useBlockUser";
import { useQueryClient } from "@tanstack/react-query";
import useFoodByRestaurant from "@/hooks/food/useFoodByRestaurant";

export default function MenuAction({ menuListValue }: any) {
  const router = useRouter();

  const { blockRestaurant, unBlockRestaurant, isLoading } =
    useBlockRestaurant();
  const { blockUser, unBlockUser } = useBlockUser();
  const { deActivateFood } = useFoodByRestaurant();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleMeunApiRequests(lable: string, value: string) {
    // restaurant
    if (lable === "blockRestaurant") {
      blockRestaurant(value);
    }
    if (lable === "unBlockRestaurant") {
      alert("unblock restaurant with id " + value);
      unBlockRestaurant(value);
    }

    // user
    if (lable === "blockUser") {
      blockUser(value);
    }
    if (lable === "unBlockUser") {
      unBlockUser(value);
    }

    // food DeactivateFood
    if (lable === "DeactivateFood") {
      alert("deactivate food with id " + value);
      deActivateFood(value);
    }
  }

  function handleMenuActions(listItem: MenuContextProps) {
    // for enabling and disabling of food
    if (listItem.menuItem && listItem.menuItem === "Disabled") {
      listItem.restaurantId &&
        handleMeunApiRequests("blockRestaurant", listItem.restaurantId);
      listItem.userName &&
        handleMeunApiRequests("blockUser", listItem.userName);
    }
    if (listItem.menuItem && listItem.menuItem === "Unblock") {
      listItem.restaurantId &&
        handleMeunApiRequests("unBlockRestaurant", listItem.restaurantId);
      listItem.userName &&
        handleMeunApiRequests("unBlockUser", listItem.userName);
    }

    // for activating and deactivating of food
    if (listItem.menuItem && listItem.menuItem === "Deactivate") {
      listItem.foodId &&
        handleMeunApiRequests("DeactivateFood", listItem.foodId);
    }

    // check if is navigating to restuarant food list or others
    if (listItem.naviagte === "/food-by-restaurant") {
      const currentQuery = { ...router.query };

      router.replace({
        query: {
          ...currentQuery,
          restaurantId: listItem.restaurantId,
          restaurantName: listItem.restaurantName,
        },
        pathname: "/food-by-restaurant",
      });
    } else if (listItem.naviagte === "/food-by-restaurant/EditFood") {
      const currentQuery = { ...router.query };

      router.replace({
        query: {
          ...currentQuery,
          foodId: listItem.foodId,
        },
        pathname: "food-by-restaurant/EditFood",
      });
    } else {
      // if menu item is not block || unblock is def a button or link
      // default navigation behaviour
      listItem.naviagte && router.push(listItem.naviagte);
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
