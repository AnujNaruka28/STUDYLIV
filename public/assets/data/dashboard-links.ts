import { ACCOUNT_TYPE } from "../../../lib/constants";
import { FcBookmark } from "react-icons/fc";
import { VscDashboard } from "react-icons/vsc";
import { GoPerson } from "react-icons/go";
import { BsMortarboard } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { TbShoppingCartCopy } from "react-icons/tb";
import { PiStar } from "react-icons/pi";
import { FaSackDollar } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";

interface sidebarLink {
    id: number;
    name: string;
    path: string;
    type: string;
    icon: IconType;
}
export const sidebarLinks: sidebarLink[] = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    type: ACCOUNT_TYPE.COMMON,
    icon: VscDashboard,
  },
  {
    id: 2,
    name: "My Profile",
    path: "/dashboard/my-profile",
    type: ACCOUNT_TYPE.COMMON,
    icon: GoPerson,
  },
  {
    id: 3,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: BsMortarboard,
  },
  {
    id: 4,
    name: "Wishlist",
    path: "/dashboard/wishlist",
    type: ACCOUNT_TYPE.STUDENT,
    icon: FcBookmark,
  },
  {
    id: 5,
    name: "Reviews",
    path: "/dashboard/reviews",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: PiStar,
  },
  {
    id: 6,
    name: "Purchase History",
    path: "/dashboard/purchase-history",
    type: ACCOUNT_TYPE.STUDENT,
    icon: TbShoppingCartCopy,
  },
  {
    id: 7,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: GiNotebook,
  },
  {
    id: 8,
    name: "Earnings",
    path: "/dashboard/earnings",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: FaSackDollar,
  },
  {
    id: 9,
    name: "Settings",
    path: "/dashboard/settings",
    type: ACCOUNT_TYPE.COMMON,
    icon: LuSettings,
  },
  {
    id: 10,
    name: "Logout",
    path: "/logout",
    type: ACCOUNT_TYPE.COMMON,
    icon: IoLogOutOutline,
  },
];
