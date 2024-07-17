"use client";
import React from "react";
import { CurrencyDisplay } from "./CurrencyDisplay";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoopIcon from "@mui/icons-material/Loop";
import { useCurrency } from "./CurrencyContext";
export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const { resetCurrency } = useCurrency();

  const toggleMenu = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const SideMenu = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleMenu(false)}>
      <List>
        <ListItem>
          <Typography variant="h6" component="div">
            Settings
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton onClick={() => resetCurrency()}>
            <ListItemIcon>
              <LoopIcon />
            </ListItemIcon>
            <ListItemText primary={"Reset stored data"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <header className="w-full border-b">
      <AppBar position="static" color="default">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            ASCENSION CLICKER
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex" } }} gap={2}>
            <Typography
              variant="h6"
              color="inherit"
              alignContent="center"
              component="div"
            >
              Currency:
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              alignContent="center"
              component="div"
            >
              <CurrencyDisplay />
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleMenu(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleMenu(false)} anchor="right">
              {SideMenu}
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};
