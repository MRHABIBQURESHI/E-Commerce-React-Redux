/* eslint-disable react/prop-types */
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CategoryIcon from '@mui/icons-material/Category';
import LaptopIcon from '@mui/icons-material/Laptop';
import TabletIcon from '@mui/icons-material/Tablet';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import {
  CalendarTodayOutlined,
  ContactsOutlined,
  DashboardOutlined,
  HelpOutlineOutlined,
  MenuOutlined,
  PeopleAltOutlined,
  KingBedOutlined,
  LocalDiningOutlined,
  SecurityOutlined,
  OtherHousesOutlined,
  ManageAccountsOutlined,
  MonetizationOn,
  SanitizerOutlined,
  PersonOutlined,
  ReceiptOutlined,
} from "@mui/icons-material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import BookIcon from '@mui/icons-material/Book';
import ContactsIcon from '@mui/icons-material/Contacts';
import StorefrontIcon from '@mui/icons-material/Storefront';

import avatar from "../../../assets/images/avatar.png";
import logo from "../../../assets/images/logo.png";
import { tokens } from "../../../theme";
import Item from "./Item";
import { ToggledContext } from "../../../Index";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { toggled, setToggled } = useContext(ToggledContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Sidebar
      backgroundColor={colors.primary[400]}
      rootStyles={{
        border: 0,
        height: "125%",
      }}
      collapsed={collapsed}
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="md"
    >
      <Menu
        menuItemStyles={{
          button: { ":hover": { background: "transparent" } },
        }}
      >
        <MenuItem
          rootStyles={{
            margin: "10px 0 20px 0",
            color: colors.gray[100],
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                alignItems="center"
                gap="12px"
                sx={{ transition: ".3s ease" }}
              >
                <img
                  style={{ width: "40px", height: "40px", borderRadius: "8px" }}
                  src={logo}
                  alt="Elysian Escape"
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  textTransform="capitalize"
                  color={colors.greenAccent[500]}
                >
                  Electronix
                </Typography>
              </Box>
            )}
            <IconButton onClick={() => setCollapsed(!collapsed)}>
              <MenuOutlined />
            </IconButton>
          </Box>
        </MenuItem>
      </Menu>
      {!collapsed && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            mb: "25px",
          }}
        >
          <Avatar
            alt="avatar"
            src={avatar}
            sx={{ width: "100px", height: "100px" }}
          />
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3" fontWeight="bold" color={colors.gray[100]}>
             Habib Qureshi
            </Typography>
            <Typography
              variant="h6"
              fontWeight="500"
              color={colors.greenAccent[500]}
            >
              admin123@gmail.com
            </Typography>
          </Box>
        </Box>
      )}

      <Box mb={5} pl={collapsed ? undefined : "5%"}>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Dashboard"
            path="/admin"
            colors={colors}
            icon={<DashboardOutlined />}
          />
        </Menu>
        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Authentications" : " "}
        </Typography>{" "}
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="User Authentications"
            path="/userauth"
            colors={colors}
            icon={<PeopleAltOutlined />}
          />
          <Item
            title="Admin Authentications"
            path="/adminauth"
            colors={colors}
            icon={<PeopleAltOutlined />}
          />
          
          {/* <Item
            title="Contacts Information"
            path="/contacts"
            colors={colors}
            icon={<ContactsOutlined />}
          />
          <Item
            title="Invoices Balances"
            path="/invoices"
            colors={colors}
            icon={<ReceiptOutlined />}
          /> */}
        </Menu>

        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Orders" : " "}
        </Typography>{" "}
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Orders"
            path="/order"
            colors={colors}
            icon={<ReceiptOutlined />}
          />
          
        
        </Menu>

        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Products" : " "}
        </Typography>{" "}
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >







          <Item
            title="All Products"
            path="/allproduct"
            colors={colors}
            icon={<CategoryIcon />}
          />
          <Item
            title="Mobiles"
            path="/mobile"
            colors={colors}
            icon={<PhoneAndroidIcon />}
          />
          <Item
            title="Laptops"
            path="/laptop"
            colors={colors}
            icon={<LaptopIcon />}
          />
          <Item
            title="Smart Watches"
            path="/watch"
            colors={colors}
            icon={<WatchLaterIcon />}
          />
          <Item
            title="Tablets"
            path="/tablet"
            colors={colors}
            icon={<TabletIcon />}
          />
          <Item
            title="Gaming PC"
            path="/gamingpc"
            colors={colors}
            icon={<PhonelinkIcon />}
          />
          
        
        </Menu>

        



        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Pages" : " "}
        </Typography>{" "}
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Blogs"
            path="/blogggs"
            colors={colors}
            icon={<BookIcon />}
          />
          <Item
            title="Reviews"
            path="/revieww"
            colors={colors}
            icon={<VisibilityIcon />}
          />
          <Item
            title="Contact Requests"
            path="/contactr"
            colors={colors}
            icon={<ContactsIcon />}
          />
          
        
        </Menu>


        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Seller Information" : " "}
        </Typography>{" "}
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Sellers"
            path="/seller"
            colors={colors}
            icon={<StorefrontIcon />}
          />
          
        
        </Menu>
        {/* <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Services" : " "}
        </Typography>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
        
          <Item
            title="Room Management"
            path="/rmanage"
            colors={colors}
            icon={<KingBedOutlined />}
          />
        
          <Item
            title="Guest Management"
            path="/gmanage"
            colors={colors}
            icon={<PeopleAltOutlined />}
          />
          <Item
            title="House Keeping"
            path="/hkeeping"
            colors={colors}
            icon={<SanitizerOutlined />}
          />
          <Item
            title="Food & Beverage"
            path="/food"
            colors={colors}
            icon={<LocalDiningOutlined />}
          />
          <Item
            title="Accounting & Billing"
            path="/food"
            colors={colors}
            icon={<MonetizationOn />}
          />
          <Item
            title="Reporting & Analytics"
            path="/reporting"
            colors={colors}
            icon={<ManageAccountsOutlined />}
          />
          <Item
            title="Security & Access Control"
            path="/security"
            colors={colors}
            icon={<SecurityOutlined />}
          />
          <Item
            title="Integration Third Party"
            path="/tparty"
            colors={colors}
            icon={<OtherHousesOutlined />}
          />
         
        </Menu> */}
        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Others" : " "}
        </Typography>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Profile Form"
            path="/form"
            colors={colors}
            icon={<PersonOutlined />}
          />
          <Item
            title="Calendar"
            path="/calendar"
            colors={colors}
            icon={<CalendarTodayOutlined />}
          />
          <Item
            title="FAQ Page"
            path="/faq"
            colors={colors}
            icon={<HelpOutlineOutlined />}
          />
        </Menu>
        
      </Box>
    </Sidebar>
  );
};

export default SideBar;
