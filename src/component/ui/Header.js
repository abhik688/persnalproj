import React, { useState, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger"; // for scorlling
//import Typography from '@material-ui/core/Typography'; // to write something
import { makeStyles } from "@material-ui/core/styles"; // for inline styling
import logo from "../../assets/logo.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ElevationScroll(props) {// this is for scrolling
  const { children } = props;
  const trigger = useScrollTrigger({// event listner for scrolling
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  // inline css
  toolbarmargin: {
    ...theme.mixins.toolbar, // array copy kiya taki uska property add karey ar change kar paye
    marginBottom: "3em", // height dey saktey hai toolbar ko tab nichey ka hello dikha
    [theme.breakpoints.down("md")]: {// mediaQuery of mdium size  960px
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {// mediaQuery of extra small size 0px
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {// mediaQuery of mdium size  960px
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {// mediaQuery of extra small size 0px
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "50px",
    height: "45px",
    "&:hover":{
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drwerIcon: {
    height: "50px",
    width: "50px",
  },
  draweIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    }
  },
  drawer:{
    backgroundColor:theme.palette.common.blue,
  },
  drawerItem:{
    ...theme.typography.tab,
    color: "white",
    opacity:0.7
  },
  drawerItemEstimate:{
    backgroundColor:theme.palette.common.orange
  },
  drawerItemSelected:{
    "& .MuiListItemText-root":{
        opacity:1
    }
  
  },
  aapbar:{
    zIndex: theme.zIndex.modal + 1
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md")); // for media query to use we created a constant here
  const [openDrawer, setopenDrawer] = useState(false);
  // const [value, setValue] = useState(0); // for tabs////WE REMOVE THIS AND PEST TO APP.JS FILE GO CHECK WHY??
  const [anchorEl, setAnchorEl] = useState(null); // for menu id key liye hai
  const [openMenu, setOpenMenu] = useState(false); // for menu ye open close key liye
  // const [selectedIndex, setSelectedIndex] = useState(0); // services menu list /////WE REMOVE THIS AND PEST TO APP.JS FILE GO CHECK WHY??

  const onChangeHandler = (e, newValue) => { // for tabs 
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const menuOption = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development ", link: "/coustomsoftware" },
    { name: "ios/Android App Development", link: "/mobileapp" },
    { name: "Website Development", link: "/websites" },
  ];

  useEffect(() => {
    // whenEver we select any of tab active class will be moved there but after we referse it's automatically come to home so we use useEffect to avoid this
    //  if(window.location.pathname === "/" && value !==0){ // ki jo vi path select hoga ar uska value vi same ho tab hin active karna warna mat karna condition is checking
    //    setValue(0)
    //  }else if(window.location.pathname === "/services" && value !==1){
    //   setValue(1)
    //  }else if(window.location.pathname === "/revolution" && value !==2){
    //   setValue(2)
    //  }else if(window.location.pathname === "/about" && value !==3){
    //   setValue(3)
    //  }else if(window.location.pathname === "/contact" && value !==4){
    //   setValue(4)
    //  }else if(window.location.pathname === "/estimate" && value !==5){
    //   setValue(5)
    //  }
    switch (window.location.pathname) {
      case "/":
        if (props.value !== 0) {
          props.setValue(0);
        }
        break;
      case "/services":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(0);
        }
        break;
      case "/coustomsoftware":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(1);
        }
        break;
      case "/mobileapp":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(2);
        }
        break;
      case "/website":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (props.value !== 2) {
          props.setValue(2);
        }
        break;
      case "/about":
        if (props.value !== 3) {
          props.setValue(3);
        }
        break;
      case "/contact":
        if (props.value !== 4) {
          props.setValue(4);
        }
        break;
      case "/estimate":
        if (props.value !== 5) {
          props.setValue(5);
        }
        break;
      default:
        break;
    }
  }, [props.value,props]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        className={classes.tabContainer}
        onChange={onChangeHandler}
        indicatorColor="primary" // <span> wala jo hota hai hai na wo hai
      >
        <Tab className={classes.tab} label="Home" component={Link} to="/" />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={(event) => handleClick(event)} // jb mouse pareyga tab appere hoga
          className={classes.tab}
          label="Services"
          component={Link}
          to="/services"
        />
        <Tab
          className={classes.tab}
          label="The Revolution"
          component={Link}
          to="/revolution"
        />
        <Tab
          className={classes.tab}
          label="About us"
          component={Link}
          to="/about"
        />
        <Tab
          className={classes.tab}
          label="Contact Us"
          component={Link}
          to="/contact"
        />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to="/estimate"
      >
        free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        classes={{ paper: classes.menu }}
        onClose={() => {
          handleClose();
          props.setValue(1);
        }} // so that the active class will be services
        MenuListProps={{ onMouseLeave: handleClose }} // when we remove mouse menu will be close
        style = {{zIndex : 1302}}
        elevation={0}
      >
        {menuOption.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link} // for links to be done
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              props.setValue(1);
              handleClose();
            }}
            selected={props.selectedIndex === i && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}

        {/* <MenuItem classes= {{root:classes.menuItem}} onClick={()=>{handleClose(); setValue(1)}} component= {Link} to = "/services">Services</MenuItem>
        <MenuItem classes= {{root:classes.menuItem}} onClick={()=>{handleClose(); setValue(1)}} component= {Link} to = "/coustomsoftware">Custom Software Development </MenuItem>
        <MenuItem classes= {{root:classes.menuItem}} onClick={()=>{handleClose(); setValue(1)}} component= {Link} to = "/mobileapp" >Mobile App Development</MenuItem>
        <MenuItem classes= {{root:classes.menuItem}} onClick={()=>{handleClose(); setValue(1)}} component= {Link} to = "/website" >Website Development</MenuItem> */}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        onOpen={() => setopenDrawer(true)}
        classes = {{ paper: classes.drawer }}
      >{/*disableBackdropTransition , disableDiscovery help optimize mobile performance */}
       <div className={classes.toolbarmargin} />
        <List disablePadding>
          <ListItem 
          onClick= {()=> {setopenDrawer(false); props.setValue(0)}} divider button 
          component = {Link} to = "/" 
          selected = {props.value === 0} 
          classes = {{selected : classes.drawerItemSelected}} 
          > {/*dividier button is styling to the list*/}
            <ListItemText className = {classes.drawerItem} disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem onClick= {()=> {setopenDrawer(false); props.setValue(1)}} divider button component = {Link} to = "/services" selected = {props.value === 1} classes = {{selected : classes.drawerItemSelected}} >
            <ListItemText className={classes.drawerItem}  disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem onClick= {()=> {setopenDrawer(false); props.setValue(2)}} divider button component = {Link} to = "/revolution" selected = {props.value === 2} classes = {{selected : classes.drawerItemSelected}}>
            <ListItemText className = {classes.drawerItem}  disableTypography>The Revolution</ListItemText>
          </ListItem>
          <ListItem onClick= {()=> {setopenDrawer(false); props.setValue(3)}} divider button component = {Link} to = "/about" selected = {props.value === 3} classes = {{selected : classes.drawerItemSelected}}>
            <ListItemText className = {classes.drawerItem}  disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem onClick= {()=> {setopenDrawer(false); props.setValue(4)}} divider button component = {Link} to = "/contact" selected = {props.value === 4} classes = {{selected : classes.drawerItemSelected}}>
            <ListItemText className = {classes.drawerItem}  disableTypography>Contact Us</ListItemText> {/*disableTypography means all the styling will go of the defaut listing*/}
          </ListItem>
          <ListItem 
          classes={{root: classes.drawerItemEstimate, selected : classes.drawerItemSelected}}
           onClick= {()=> {setopenDrawer(false); props.setValue(5)}} 
           divider button component = {Link} to = "/estimate" 
           selected = {props.value === 5}> 
            <ListItemText className = {classes.drawerItem}  disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.draweIconContainer}
        onClick={() => setopenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drwerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className= {classes.aapbar}>
          <Toolbar disableGutters> {/* disableGutters toolbar ka css disaple kiya hai */}
            {/* <Typography variant="h3">Arcdevelopment</Typography> */}
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
              disableRipple // disable rippel effect matlb kuch background mey ek dark sport dikhta tha tho hataya hai
            >
              <img src={logo} className={classes.logo} alt="logo" />
            </Button>
            {matches ? drawer : tabs}{/*agr mediam size key down jayega nahi dikheyga tabs matlb biger screen mey hin dikheyga*/}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarmargin} />
    </React.Fragment>
  );
}
