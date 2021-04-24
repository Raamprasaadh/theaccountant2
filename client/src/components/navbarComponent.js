import React from "react";
import { AppBar } from "material-ui";
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow:1,
  },
  links: {
    marginLeft: theme.spacing(2),
    position: 'relative',
  },
}));
const NavbarComponent = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <AppBar title="BalanceSheet">
      <Typography className={classes.root}>
        <Link className={classes.links}href="#" onClick={preventDefault}>
          Add
        </Link>
        <Link className={classes.links}href="#" onClick={preventDefault}>
          View
        </Link>
      </Typography>
    </AppBar>
  );
};

export default NavbarComponent;
