import { FC } from "react";

export interface MainProps {
  children: React.ReactNode;
  // pageTitle?: string;
}

export interface AppLayoutProps {
  children: React.ReactNode;
  // pageTitle?: string;
}
export interface SidebarButtonProps {
  href: string;
  Icon: React.ReactNode;
  children: React.ReactNode;
}

export interface LoginFormProps {
  username: string;
  password: string;
}

export interface MenuContextProps {
  menuItem: string;
  ItemIcon: React.ReactNode;
  naviagte: string;
}

export interface MenuItemListProps extends Array<MenuContextProps> {}
