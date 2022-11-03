import React, { useState } from 'react';
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import First from "./First";
import Second from './Second';
import Third from './Third';
import App from '../App';


export default function Exercise7({links}) {
  const [open, setOpen] = useState(false);
  function toggleDrawer({type, key}) {
    if(type === "keydown" && ( key =="Tab" || key === "Shift")){
      return;
    }
    setOpen(!open);
  }

  const link = [
    {url : "/first", name: "First Page"},
    {url : "/second", name: "Second Page"},
    {url : "/third", name: "Third Page"},
  ]
  let linkkk = Object.keys(link).map(i => link[i]);
  console.log('object', linkkk);

  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <section>
        <Route path="/first" component={First}></Route>
        <Route path="/second" component={Second}></Route>
        <Route path="/third" component={Third}></Route>
      </section>
      <Drawer open={open} onClose={toggleDrawer}>
        <div style={{width: 250}} role="presentation" 
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
        ></div>
        <List>
          {links.map((link) => (
            <ListItem button key={link.url} component={Link} to={link.url}>
              <Switch>
                <Route exact path={link.url} render={() => {
                  <ListItemText primary={link.name} primaryTypographyProps={{color: "primary"}}></ListItemText>
                }}></Route>
                <Router path="/" render={() => <ListItemText primary={link.name}></ListItemText>}>
                </Router>
              </Switch>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Router>
  )
}

Exercise7.defaultProps = {
  links: [
    {url : "/first", name: "First Page"},
    {url : "/second", name: "Second Page"},
    {url : "/third", name: "Third Page"},
  ]
}
