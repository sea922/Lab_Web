import React from 'react';
import {
  AppBar, Toolbar, Typography, Grid
} from '@material-ui/core';
import './TopBar.css';

import fetchModel from "../../lib/fetchModelData";

/**
 * Define TopBar, a React componment of UIT project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.view,
      version: "",
      firstname: this.props.first_name
    };
    console.log('object1212 ', this.props.first_name);
  }
  

  componentDidUpdate(prevProps) {
    if (prevProps.view !== this.props.view) {
      this.setState({ view: this.props.view });
      let prom = fetchModel("http://localhost:3000/test/info");
      prom.then(response => {
        this.setState({ version: response.data.__v });
      });
      console.log('first1',this.state.version )
    }
    console.log('first2',prom )
  }


  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" color="inherit">
            Truong Van Sy
            </Typography>
            {/* <Typography variant="body1">
              version: {this.state.version}
            </Typography> */}
            <Typography variant="h5">Detail of user: Ian Malcolm</Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
