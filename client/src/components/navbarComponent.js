import React from 'react';
import {makeStyles, AppBar, Toolbar, IconButton, List, ListItem, ListItemText} from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function NavbarComponent() {
  const useStyles = makeStyles({
    navDisplayFlex:{
      display:'flex',
      justifyContent:'space-between'
    },
    linkText:{
      textDecoration:'none',
      textTransform:'uppercase',
      color:'white'
    }
  })
  const classes = useStyles();
  const navLinks=[
    {title:'add transactions', path:'/add'},
    {title:'view transactions', path:'/view'}
  ]
  return (
    <AppBar position="static">
      <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="Logo">
          <AccountBoxIcon fontSize="large" />
        </IconButton>
        <List component="nav" aria-labelledby="main-nav" className={classes.navDisplayFlex}>
          {
            navLinks.map(({title,path})=>
              
            (  <a href={path} key={title}>
                <ListItem button>
                <ListItemText primary={title} className={classes.linkText}/>
                </ListItem>
              </a>
            ))
          }
        </List>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarComponent
