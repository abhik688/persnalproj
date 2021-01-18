import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import FooterAdornment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';


const useStyles = makeStyles(theme=>({
    footer:{
      backgroundColor:theme.palette.common.blue,
      width: "100%",
      zIndex: 1302,
      position:"relative"
    },
    adornment:{
        width:"25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down('md')]:{
            width:"21em"
        },
        [theme.breakpoints.down('xs')]:{
            width:"15em"
        }
    },
    mainContainer:{
        position:"absolute"
    },
    link:{
        color:"white",
        fontFamily:"arial",
        fontSize:"0.75rem",
        fontWeight:"bold",
        textDecoration: "none"
    },
    gridItem:{
        margin:"3em"
    },
    icon:{
      width:"4em",
      height:"4em",
        [theme.breakpoints.down('md')]:{
          width:"2.5em",
          height:"2.5em"
        }
    },
    socialContainer:{
      position:"absolute",
      marginTop:"-6em",
      right:"1.5em",
      [theme.breakpoints.down('md')]:{
        right:"0.6em"
      }
    }
}))

export default function Footer(props){
   const classes = useStyles()

   return(
   <footer className = {classes.footer}>
     <Hidden mdDown>
       <Grid container justify= "center" className = {classes.mainContainer}>
           <Grid item className={classes.gridItem}> 
               <Grid container direction="column" spacing={2}> {/**Spacing will give a good space between the Grid container */}
                 <Grid item className= {classes.link} component={Link} to="/" onClick={()=>props.setValue(0)}>
                  home
                 </Grid>
               </Grid>
           </Grid>
           <Grid item className={classes.gridItem}>
               <Grid container direction="column" spacing={2}>
                 <Grid item className= {classes.link} component={Link} to="/services" onClick={()=>{props.setValue(1); props.setSelectedIndex(0)}}>
                  Services
                 </Grid>
                 <Grid item className= {classes.link} component={Link} to="/coustomsoftware" onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}}>
                   Coustom Software Development
                 </Grid>
                 <Grid item className= {classes.link} component={Link} to="/mobileapp" onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}}>
                  ios/Android App Development
                 </Grid>
                 <Grid item className= {classes.link}component={Link} to="/websites" onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                  Website Development
                 </Grid>
               </Grid>
           </Grid>
           <Grid item className={classes.gridItem}>
               <Grid container direction="column" spacing={2}>
                 <Grid item className= {classes.link} component={Link} to="/revolution" onClick={()=>props.setValue(2)}>
                  The Reveloution
                 </Grid>
                 <Grid item className= {classes.link} component={Link} to="/revolution" onClick={()=>props.setValue(2)}>
                  vision
                 </Grid>
                 <Grid item className= {classes.link} component={Link} to="/revolution" onClick={()=>props.setValue(2)}>
                  Technology
                 </Grid>
                 <Grid item className= {classes.link}component={Link} to="/revolution" onClick={()=>props.setValue(2)}>
                  Process
                 </Grid>
               </Grid>
           </Grid>
           <Grid item className={classes.gridItem}>
               <Grid container direction="column" spacing={2}>
                 <Grid item className= {classes.link} component={Link} to="/about" onClick={()=>props.setValue(2)}>
                  About
                 </Grid>
                 <Grid item className= {classes.link} component={Link} to="/about" onClick={()=>props.setValue(2)}>
                  History
                 </Grid>
                 <Grid item className= {classes.link} component={Link} to="/about" onClick={()=>props.setValue(2)}>
                  Team
                 </Grid>
               </Grid>
           </Grid>

           <Grid item className={classes.gridItem}>
               <Grid container direction="column" spacing={2}>
                 <Grid item className= {classes.link} component={Link} to="/contact" onClick={()=>props.setValue(2)}>
                  Contect Us
                 </Grid>
               </Grid>
           </Grid>
        
       </Grid>
       </Hidden>
    <img src={FooterAdornment} alt="black decorative slash" className= {classes.adornment} />

    <Grid container justify="flex-end" className = {classes.socialContainer} spacing={2}>
      <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank"> {/* noopener or refere will tell the href to open in new tab*/}
        <img src={facebook} alt='facebook logo' className = {classes.icon} />
      </Grid>
      <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
        <img src={twitter} alt='twitter logo' className = {classes.icon} />
      </Grid>
      <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
        <img src={instagram} alt='instagram logo' className = {classes.icon} />
      </Grid>
    </Grid>
    </footer>
    ); 
}