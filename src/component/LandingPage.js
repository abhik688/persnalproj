import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles, useTheme} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../component/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CallToAction from './ui/CallToAction'



import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';


const useStyles = makeStyles(theme=>({
animation:{
  maxWidth:"50em",
  minWidth:"21em",
  marginTop:"2em",
  marginLeft:"10%",
  [theme.breakpoints.down("sm")]:{
    maxWidth:"30em"
  }
},
estimatebutton:{
  ...theme.typography.estimate,
  backgroundColor: theme.palette.common.orange,
  borderRadius: 50,
  height:45,
  width:145,
  marginRight:40,
  "&:hover":{
    backgroundColor: theme.palette.secondary.light
  }
},
bottonContainer:{
  marginTop:"1em"
},
learnButtonHero:{
  ...theme.typography.learnButton,
  fontSize:"0.9rem",
  height:45,
  width:145
},
learnButton:{
  ...theme.typography.learnButton,
  fontSize:"0.7rem",
  height:45,
  padding:5,
  [theme.breakpoints.down("sm")]:{
    marginBottom:"2em"
  }
},
mainContainer:{
  marginTop:"5em",
  [theme.breakpoints.down("md")]:{
    marginTop:"3em"
  },
  [theme.breakpoints.down("xs")]:{
    marginTop:"2em"
  }
},
heroTextContainer:{
  minWidth:"21.5em",
  marginLeft:"1em",
  [theme.breakpoints.down("xs")]:{
    marginLeft:"0em"
  }
},
specialText:{
  fontFamily:"Pacifico",
  color:theme.palette.common.orange
},
subtitle:{
  marginBottom:"1em"
},
icon:{
  marginLeft:"2em",
  [theme.breakpoints.down("xs")]:{
    marginLeft:0
  }
},
servicContainer:{
  marginTop:"12em",
  [theme.breakpoints.down("sm")]:{
    padding:25
  }
},
revolutionBackground:{
  backgroundImage:`url(${revolutionBackground})`,
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  height:"100%",
  width:"100%"
},
revolutionCard:{
  position:"absolute",
  boxShadow:theme.shadows[10],
  borderRadius:15,
  padding:"10em",
  [theme.breakpoints.down("sm")]:{
    paddingTop:"8em",
    paddingBottom:"8em",
    paddingLeft:0,
    paddingRight:0,
    borderRadius:0,
    width:"100%"
  }
},
infoBackgroung:{
  backgroundImage:`url(${infoBackground})`,
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  height:"100%",
  width:"100%"
}
}));

export default function LandingPage(){

    const classes = useStyles();
    const theme = useTheme(); // this we use so we can overwrite some of the classes ButtonArrow mey pahley color red thaab blue hai
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm")); // this we have done so that we can make the icon of the service to center for small screen size
    const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      return (
        <Grid container direction="column" className={classes.mainContainer}>
          <Grid item > {/*****hero block*****/}
            <Grid container justify="flex-end" alignItems="center" direction="row">
               <Grid sm item className={classes.heroTextContainer}>
                 <Typography variant="h2" align="center">  
                 Bring west cost Technology <br/> to the Midwest
                 </Typography>
               <Grid container className= {classes.bottonContainer} justify="center">
               <Grid item>
                 <Button className ={classes.estimatebutton} variant="contained">Free Estimate</Button>
               </Grid>
               <Grid item>
                 <Button className ={classes.learnButtonHero} variant="outlined" >
                     <span style={{marginRight:10}}>Learn More</span>
                     <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/> {/* button key sath arrow hai uska color change hai theme hook key wajh sey */}
                 </Button>
               </Grid>
               </Grid>
               </Grid>
               <Grid sm item className = {classes.animation} >
                 <Lottie options={defaultOptions}  height={"100%"} width= {'100%'} />
               </Grid>
             </Grid>
          </Grid>

          <Grid item > {/*****service block*****/}
           <Grid container direction="row" className={classes.servicContainer} justify={matchesSm ? "center" : undefined} >
            <Grid item style={{marginLeft:matchesSm ? 0:"5em" , textAlign: matchesSm ? "center": undefined}}>
              <Typography variant="h4">
                Website Development
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Read More. Discover More. Sell More
              </Typography>
              <Typography variant="subtitle1">
                Optimize the search Engine to built for speed
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{marginRight:10}}>Learn More</span>
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
              </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} alt="Custom Software icon" src={customSoftwareIcon} />
            </Grid>
           </Grid>
          </Grid>

          <Grid item > {/*****ios/Android block*****/}
           <Grid container direction="row" className={classes.servicContainer} justify={matchesSm ? "center" : "flex-end"} >
            <Grid item style={{textAlign: matchesSm ? "center": undefined}}>
              <Typography variant="h4">
                Ios/Android App Development
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionalty. Extend Access. Extend Ingagement
              </Typography>
              <Typography variant="subtitle1">
                intigrate your web experience or create a standalone app {matchesSm ? null : <br/>} with eather mobile platform
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{marginRight:10}}>Learn More</span>
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
              </Button>
            </Grid>
            <Grid item style={{marginRight:matchesSm ? 0:"5em" }}>
              <img className={classes.icon} alt="Mobile phone icon" src={mobileAppIcon} />
            </Grid>
           </Grid>
          </Grid>

          <Grid item > {/*****website block*****/}
           <Grid container direction="row" className={classes.servicContainer} justify={matchesSm ? "center" : undefined} >
            <Grid item style={{marginLeft:matchesSm ? 0:"5em" , textAlign: matchesSm ? "center": undefined}}>
              <Typography variant="h4">
                Coustom Software Development
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time . Save Money
              </Typography>
              <Typography variant="subtitle1">
                Compleate Digital Soloution, From investigation to {" "} <span className={classes.specialText}>Celebration</span>
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{marginRight:10}}>Learn More</span>
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
              </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} alt="Custom Software icon" src={websitesIcon} />
            </Grid>
           </Grid>
          </Grid>

          <Grid item>{/*****Revolution block*****/}
            <Grid container style={{height:"100em", marginTop:"12em"}} alignItems="center" justify="center">
            <Card className={classes.revolutionCard}>
              <CardContent>
              <Grid container direction="column" style={{textAlign:"center"}}>
                 <Grid item>
                 <Typography variant="h3" gutterBottom> The Revolution </Typography>
                 </Grid>
                 <Grid item style={{textAlign:"center"}}>
                 <Typography variant="subtitle1"> Visionary insight couple with cuting-edge  technology is a recepi for revolution</Typography>
                 <Button className ={classes.learnButtonHero} variant="outlined" >
                     <span style={{marginRight:10}}>Learn More</span>
                     <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/> {/* button key sath arrow hai uska color change hai theme hook key wajh sey */}
                 </Button>
                 </Grid>
              </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground}/> {/**for background image */}
            </Grid>
          </Grid>

          <Grid item > {/*****information block*****/}
           <Grid container direction="row" style={{height:"80em" }} alignItems="center">
             <Grid item container 
             style = {{position:"absolute" , textAlign: matchesXs ? "center" : "inherit"}} 
             direction= {matchesXs ? "column": "row"} 
             spacing = {matchesXs ? 10 : 0 }
             >
             <Grid item sm style = {{marginLeft: matchesXs ? 0 :  matchesSm ? "2em":"5em"}} > {/* sm will share the same screen size between the container as it will go to responsive nested ternery check id happen here*/}
            <Grid container direction="column">
              <Typography variant="h2" style={{color:"white"}}>
                 About Us
              </Typography>
              <Typography variant="subtitle2">
                Let's Get Personal
              </Typography>
              <Grid item > 
              <Button variant="outlined" className={classes.learnButton} style={{color:"white" , borderColor:"white"}}> 
                <span style={{marginRight:10}}>Learn More</span>
                <ButtonArrow width={10} height={10} fill="white"/>
              </Button>
              </Grid>
            </Grid>
            </Grid>

            <Grid item sm  style = {{ marginRight: matchesXs ? 0 : matchesSm ? "2em":"5em" , textAlign:matchesXs ?"center": "right"}} >
            <Grid container direction="column">
              <Typography variant="h2" style={{color:"white"}}>
                 Contact Us
              </Typography>
              <Typography variant="subtitle2" className={classes.l}>
                Say Hello ! 
              </Typography>
              <Grid item > 
              <Button variant="outlined" className={classes.learnButton} style={{color:"white" , borderColor:"white"}}> 
                <span style={{marginRight:10}}>Learn More</span>
                <ButtonArrow width={10} height={10} fill="white"/>
              </Button>
              </Grid>
            </Grid>
            </Grid>
             </Grid>
            
            <div className={classes.infoBackgroung}/>{/**for background image */}
           </Grid>
          </Grid>
            <Grid item> {/*Call to Action */}
            <CallToAction/>
            </Grid>
        </Grid>
             
      );

}
