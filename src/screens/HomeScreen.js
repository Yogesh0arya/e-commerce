import React from 'react';
import './HomeScreen.css';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth } from '../firebase';
import Products from './Products';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function HomeScreen() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{background:'#e50914'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className="AppBar">
          <img className="HomeScreen_logo_1" src="https://freepngimg.com/thumb/apple_logo/26045-5-apple-logo-transparent-background.png" alt=""/>
          <Typography variant="h3" display="inline">My E-commerse app</Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
       
        <List>
            <ListItem button style={{backgroundColor:'lightgray'}} >
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText primary={"Home"}/>
            </ListItem>

            <ListItem button >
              <ListItemIcon><AccountCircleIcon/></ListItemIcon>
              <ListItemText primary={"My Account"}/>
            </ListItem>
            
            <ListItem button >
              <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
              <ListItemText primary={"My Cart"}/>
            </ListItem>

            <ListItem button >
              <ListItemIcon><FavoriteIcon/></ListItemIcon>
              <ListItemText primary={"My Favourite"}/>
            </ListItem>
         
        </List>

        <Divider />
        <List>
          <ListItem button onClick={()=>auth.signOut()}>
              <ListItemIcon><ExitToAppIcon/></ListItemIcon>
              <ListItemText primary={"Logout"}/>
            </ListItem>
        </List>
        <Divider />
    
        <List>
          <ListItem button >
            <ListItemText primary={"Help Center"}/>
          </ListItem>
          <ListItem button >
            <ListItemText primary={"Privacy policy"}/>
          </ListItem>
          <ListItem button >
            <ListItemText primary={"legal"}/>
          </ListItem>
        </List>
        
        

      </Drawer>
      <main style={{backgroundColor: " #e50914"}}
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <img style={{marginBottom:"20px"}} className="Display_img" src="https://thumbs.dreamstime.com/z/horizontal-ad-banner-ready-web-sites-press-as-discount-advertisement-flyer-contains-black-friday-sale-black-friday-sale-103627128.jpg" alt=""/>
        <Products/>
        
      </main>
    </div>

  );
}
