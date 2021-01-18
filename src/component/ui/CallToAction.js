import React from 'react';
import {makeStyles, useTheme} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../../component/ui/ButtonArrow';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme=>({
    learnButton:{
        ...theme.typography.learnButton,
        fontSize:"0.7rem",
        height:45,
        padding:5,
        [theme.breakpoints.down("sm")]:{
          marginBottom:"2em"
        }
      },
      background:{
        backgroundImage:`url(${background})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height:"60em",
        width:"100%",
        [theme.breakpoints.down("md")]:{
            backgroundImage:`url(${mobileBackground})`
          }
      },
      estimateButton:{
          ...theme.typography.estimate,
          borderRadius:50,
          height:80,
          width:205,
          backgroundColor:theme.palette.common.orange,
          fontSize:"1.5em",
          marginRight:"5em",
          marginLeft:"2em"
      }
}))

export default function CallToAction(){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <Grid container  alignItems="center" justify={matchesSM ? "center" : "space-between"}className={classes.background} direction={matchesSM ? 'column' : 'row'}>
        <Grid item style={{marginLeft:"5em" , textAlign: matchesSM ? "center" : "inherite"}}>
            <Grid container direction="column">
            <Grid item>
                <Typography variant="h2"> 
                    Simple Software <br/> Revolutionary Result
                </Typography>
                <Typography variant="subtitle2" style={{fontSize:"2.5em"}}>
                The Advantage of 21st Century 
                </Typography>
                <Grid container item>
                 <Button className ={classes.learnButton} variant="outlined" >
                     <span style={{marginRight:5}}>Learn More</span>
                     <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/> {/* button key sath arrow hai uska color change hai theme hook key wajh sey */}
                 </Button>
               </Grid>
            </Grid>
            </Grid>
        </Grid>
        <Grid item >
            <Button variant="contained" className={classes.estimateButton}>Free Estimate</Button>
        </Grid>
      
    </Grid>
    )
}