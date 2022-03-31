import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import ListItemIcon from "@mui/material/ListItemIcon";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = ({ setSidebarHeight }) => {
  const [state, setState] = useState(false);
  const ref = useRef(null);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  useEffect(() => {
    setSidebarHeight(ref.current.clientHeight);
  }, []);
  const list = () => (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Add", "View"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <AddIcon sx={{ width: "100%" }} />
              ) : (
                <VisibilityIcon sx={{ width: "100%" }} />
              )}
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: "7px" }} primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem button key={"Logout"}>
          <ListItemIcon>
            <LogoutIcon sx={{ width: "100%" }} />
          </ListItemIcon>
          <ListItemText sx={{ marginLeft: "7px" }} primary={"Logout"} />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <div ref={ref}>
        <>
          <Button onClick={toggleDrawer(true)} color="secondary">
            Click
          </Button>
          <Drawer open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </>
      </div>
    </>
  );
};

export default Sidebar;
