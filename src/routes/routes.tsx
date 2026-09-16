import React from "react";
import { RouteItem } from "@appTypes/index";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdOutlineSettingsSuggest,
} from "react-icons/md";

import { RiUserSettingsLine } from "react-icons/ri";

const routes: RouteItem[] = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: "User Management",
    layout: "/admin",
    path: "user-management",
    icon: <RiUserSettingsLine className="h-6 w-6" />,
  },
  {
    name: "Approaching",
    layout: "/admin",
    path: "approach-management",
    icon: <MdOutlineSettingsSuggest className="h-6 w-6" />,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
  },
];

export default routes;
