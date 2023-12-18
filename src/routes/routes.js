import React from "react";

// Admin Imports
import MainDashboard from "@views/admin/default";
import UserManagement from "@views/user";
import NFTMarketplace from "@views/admin/marketplace";
import Profile from "@views/admin/profile";
import DataTables from "@views/admin/tables";
import ApproachingManagement from "@views/approaching";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdOutlineSettingsSuggest,
} from "react-icons/md";

import { RiUserSettingsLine } from "react-icons/ri";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "User Management",
    layout: "/admin",
    path: "user-management",
    icon: <RiUserSettingsLine className="h-6 w-6" />,
    component: <UserManagement />,
  },
  {
    name: "Approaching",
    layout: "/admin",
    path: "approach-management",
    icon: <MdOutlineSettingsSuggest className="h-6 w-6" />,
    component: <ApproachingManagement />,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
];
export default routes;
