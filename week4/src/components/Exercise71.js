import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const tabContetnStyle = {
  padding: 16,
};

function TabContainer({ value }) {
  return (
    <AppBar position="static">
      <Tabs value={value}>
        <Tab label="Item One" component={Link} to="/" />
        <Tab label="Item Two" component={Link} to="/page2" />
        <Tab label="Item Three" component={Link} to="/page3" />
      </Tabs>
    </AppBar>
  );
}

export default function Exercise71() {
  return (
    <>
    <Router>
    <Route>
      <>
        <TabContainer value={3}/>
        <Typography component="div" style={tabContetnStyle}>
            Item One
           </Typography>
      </>
    </Route>
    </Router>
    </>
    
    // <Router>
    //   <Route
    //     exact
    //     path="/"
    //     render={() => {
    //       <>
    //         <TabContainer value={0} />
    //         <Typography component="div" style={tabContetnStyle}>
    //           Item One
    //         </Typography>
    //       </>;
    //     }}
    //   ></Route>
    //   <Route
    //     exact
    //     path="/page2"
    //     render={() => {
    //       <>
    //         <TabContainer value={1} />
    //         <Typography component="div" style={tabContetnStyle}>
    //           Item Two
    //         </Typography>
    //       </>;
    //     }}
    //   ></Route>
    //   <Route
    //     exact
    //     path="/page3"
    //     render={() => {
    //       <>
    //         <TabContainer value={2} />
    //         <Typography component="div" style={tabContetnStyle}>
    //           Item Three
    //         </Typography>
    //       </>;
    //     }}
    //   ></Route>
    // </Router>
  );
}
