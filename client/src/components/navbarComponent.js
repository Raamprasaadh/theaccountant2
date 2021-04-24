import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddPage from  "../containers/add";
import ViewPage from "../containers/view";
const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow:1,
  },
  links: {
    marginLeft: theme.spacing(2),
    position: 'relative',
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const NavbarComponent = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  //const preventDefault = (event) => event.preventDefault();
  return (
    <AppBar title="BalanceSheet">
      <Typography className={classes.root}>
  
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Add" {...a11yProps(0)} />
          <Tab label="View" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
        <AddPage/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ViewPage/>
      </TabPanel>       
      </Typography>
    </AppBar>
  );
};

export default NavbarComponent;
