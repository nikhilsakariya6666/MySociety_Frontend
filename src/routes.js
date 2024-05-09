/* eslint-disable import/no-unresolved */
import Dashboard from "layouts/dashboard";
// import { Person } from "@mui/icons-material";
// import Tables from "layouts/tables";
// import Tables from "layouts/tables/data/SocietyTable";
// import UserTable from "layouts/tables/data/UserTable";
import Society from "layouts/society";
import User from "layouts/user";
import Complaint from "layouts/complaint";
import PositiveThoughts from "layouts/positiveThought";
import Announcements from "layouts/announcement";
import Event from "layouts/event";
import Notice from "layouts/notice";
import Discussion from "layouts/discussion";
import Faq from "layouts/faq";
import Gallery from "layouts/gallery";
import ExpenseIncome from "layouts/expenseIncome";

// import UserTables from "layouts/tables";
// import SocietyTable from "layouts/tables";
// import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Societyy from "layouts/authentication/user";

// @mui icons
import Icon from "@mui/material/Icon";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
// import BroadcastOnPersonalIcon from "@mui/icons-material/BroadcastOnPersonal"; (Announcement icon)
import CellTowerIcon from "@mui/icons-material/CellTower";
import CampaignIcon from "@mui/icons-material/Campaign";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CollectionsIcon from "@mui/icons-material/Collections";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Diversity3Icon from "@mui/icons-material/Diversity3";
// import TableStructure from "./layouts/tables/data/userTable";
// import SocietyTable from "./layouts/tables/data/SocietyTable";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "User",
    key: "user",
    icon: <Icon fontSize="small">peopleAlt</Icon>,
    route: "/user",
    component: <User />,
  },
  {
    type: "collapse",
    name: "Society",
    key: "society",
    icon: <HomeWorkIcon />,
    route: "/society",
    component: <Society />,
  },
  {
    type: "collapse",
    name: "Complaint",
    key: "complaint",
    icon: <MarkUnreadChatAltIcon />,
    route: "/complaint",
    component: <Complaint />,
  },
  {
    type: "collapse",
    name: "Positive Thought",
    key: "positiveThought",
    icon: <TipsAndUpdatesIcon />,
    route: "/positiveThought",
    component: <PositiveThoughts />,
  },
  {
    type: "collapse",
    name: "Announcement",
    key: "announcement",
    icon: <CellTowerIcon />,
    route: "/announcements",
    component: <Announcements />,
  },
  {
    type: "collapse",
    name: "Event",
    key: "event",
    icon: <CelebrationIcon />,
    route: "/event",
    component: <Event />,
  },
  {
    type: "collapse",
    name: "Notice",
    key: "notice",
    icon: <CampaignIcon />,
    route: "/notice",
    component: <Notice />,
  },
  {
    type: "collapse",
    name: "Discussion",
    key: "discussion",
    icon: <Diversity3Icon />,
    route: "/discussion",
    component: <Discussion />,
  },
  {
    type: "collapse",
    name: "FAQ",
    key: "faq",
    icon: <PsychologyAltIcon />,
    route: "/faq",
    component: <Faq />,
  },
  {
    type: "collapse",
    name: "Gallery",
    key: "gallery",
    icon: <CollectionsIcon />,
    route: "/gallery",
    component: <Gallery />,
  },
  {
    type: "collapse",
    name: "Expense Income",
    key: "Expense Income",
    icon: <CurrencyRupeeIcon />,
    route: "/ExpenseIncome",
    component: <ExpenseIncome />,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "UserUser",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/user",
    component: <Societyy />,
  },
];

export default routes;
