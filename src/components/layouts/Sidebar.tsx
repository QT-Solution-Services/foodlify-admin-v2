import { Box, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { SiCodechef } from "react-icons/si";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { SidebarButtonProps } from "@/interfaces/App.interface";

function Sidebar() {
  const router = useRouter();
  const [value, setValue] = useState("text");

  function handleClick(href: any) {
    const isActive = router.pathname === href;
  }

  return (
    <aside className="row-span-full h-screen border-r border-stone-200  px-4">
      <div className=" justify-cente my-16 flex flex-col items-center">
        <div>
          <Image alt="logo" src="/logo.png" width={100} height={100} />
          <h2 className=" text-sm font-medium uppercase text-stone-700">
            foodlify admin
          </h2>
        </div>
        {/* links */}
        <div className="my-8 w-full space-y-1 ">
          <SidebarButton href="/dashboard" Icon={RxDashboard}>
            dashboard
          </SidebarButton>
          <SidebarButton href="/restaurant" Icon={SiCodechef}>
            Restaurants
          </SidebarButton>
          <SidebarButton href="/orders" Icon={HiOutlineBellAlert}>
            Orders &nbsp; &nbsp; &nbsp; &nbsp;
          </SidebarButton>
          <SidebarButton href="/users" Icon={FiUsers}>
            Users &nbsp; &nbsp; &nbsp; &nbsp;
          </SidebarButton>
          <SidebarButton href="/transactions" Icon={GrTransaction}>
            Transactions
          </SidebarButton>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

export function SidebarButton({ href, Icon, children }: SidebarButtonProps) {
  const router = useRouter();
  return (
    <Link href={href}>
      <Button
        startIcon={Icon && <Icon />}
        size="large"
        className={` w-full hover:text-primary  ${
          router.pathname.includes(href)
            ? "bg-primary text-white"
            : " text-stone-600"
        } `}
      >
        {children}
      </Button>
    </Link>
  );
}
