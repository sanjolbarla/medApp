import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';
import { Box, ThemeProvider } from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Sara from "./images/linkedin-headshot-example-1.jpg";

const theme1 = createMuiTheme({
    overrides: {
      MuiTableCell: {
        root: {
          padding: "4px 8px",
          borderBottom: "none"
        }
      }
    }
  });

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#F5F5F5",
    marginLeft: "260px",
   
  },
  content: {
    paddingLeft: "50px",
    paddingBottom: "100px"
    
    },
  font:{
    fontFamily: "Calibri, sans-serif",
    fontWeight:"bold",
    fontSize: "16px",
 
  },
  dateUpper:{
          marginTop:"-20px",
          marginLeft:"1030px",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  avatarRoot:{
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  tableRoot:{
    width: '90.1%',
    height:'10%',
    overflowX: 'auto'
  },
  tableWidth:{
    width: 100,
    height:30,
    padding:"5px"
  },
  tableHead: {
    height: 10,
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme1}>
    <div className={classes.root}>
        <main className={classes.content}>
            <Box p={1}></Box>
            <Typography variant= "subtitle2">
                <div className={classes.font}>Patient Information</div>
                <div container alignItems= "end" className={classes.dateUpper}>
                    <div style={{color:"#808080" ,fontSize: "10px", fontWeight: "bold", marginLeft: -5}}>Last updated:</div>
                    <div style={{color:"black" ,fontSize: "10px" , marginLeft: "62px", marginTop: "-31.5px"}}>
                        10:25 AM, today
                        <IconButton> 
                            <MoreHorizIcon style= {{marginLeft: -5}}/>
                        </IconButton>
                    </div>  
                </div>
                {/* Avatar */}
                <div style={{marginleft:"10px"}}>
                    <div className={classes.avatarRoot}>
                        <Avatar src={Sara} className={classes.large} style= {{marginLeft: 0}}></Avatar>
                    </div>
                </div> 
                {/* Name */}
                <div style={{fontSize:"17px" ,fontWeight:"bold",marginTop:"-93px",marginLeft:"95px"}}>
                    Sara Smith
                </div>
            
                {/* Table */}
                <Paper className={classes.tableRoot} style={{backgroundColor:"#F5F5F5",border:"transparent",boxShadow:"none",marginLeft:"80px",marginTop:"0px"}}>
                    <Table size ='small'>
                        <TableBody>
                            <TableRow  className={classes.tableHead}>
                            <TableCell padding='.5px' component="th" scope="row" style={{color:"Grey" ,fontSize:"12px"}}>
                                Phone:
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{fontWeight:"bold",fontSize:"11px"}}>302-857-9685</TableCell>
                            <TableCell padding='.5px' component="th" scope="row" style={{color:"Grey" ,fontSize:"12px"}}>
                                Surgery type:
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{fontWeight:"bold",fontSize:"11px"}}>Rotator Cuff Repair</TableCell>
                            <TableCell padding='.5px' component="th" scope="row" style={{color:"Grey" ,fontSize:"12px"}}>
                                Anesthesiologiest:
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{fontWeight:"bold",fontSize:"11px",}}>Dr.Christina Hardaway</TableCell>
                            <TableCell padding='.5px' component="th" scope="row" style={{color:"Grey" ,fontSize:"12px"}}>
                                Surgery Clearnce
                            </TableCell>
                            </TableRow>
                        
                            <TableRow className={classes.tableHead}>
                            <TableCell padding=".5px" component="th" scope="row" style={{color:"Grey",fontSize:"11px"}}>
                                Email:
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{fontWeight:"bold",fontSize:"11px"}}>sarasmith@gmail.com</TableCell>
                            <TableCell padding=".5px" component="th" scope="row" style={{color:"Grey",fontSize:"11px"}}>
                                Surgery Date:
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{fontWeight:"bold",fontSize:"11px"}}>15 Aug 2020</TableCell>
                            <TableCell padding=".5px" component="th" scope="row" style={{color:"Grey",fontSize:"11px"}}>
                                Anesthesiologiest Phone:
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{fontWeight:"bold",fontSize:"11px"}}>301-896-8745</TableCell>

                            </TableRow>

                            <TableRow className={classes.tableHead}>
                            <TableCell padding=".5px" component="th" scope="row" style={{color:"Grey" ,fontSize:"11px"}}>
                                Gender:
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{minWidth:100, maxWidth:100,fontWeight:"bold",fontSize:"11px"}}>Female</TableCell>
                            <TableCell padding=".5px" component="th" scope="row" style={{color:"Grey" ,fontSize:"11px"}}>
                                Height (cm):
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{minWidth:100, maxWidth:100,fontWeight:"bold",fontSize:"11px"}}>163</TableCell>
                            <TableCell padding=".5px" component="th" scope="row" style={{color:"Grey" ,fontSize:"11px"}}>
                                Anesthesiologiest Email:
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{minWidth:100, maxWidth:100,fontWeight:"bold",fontSize:"11px"}}>christina@h3a.com</TableCell>
                            </TableRow>

                            <TableRow className={classes.tableHead}>
                            <TableCell padding=".5px" component="th" scope="row" style={{color:"Grey" ,fontSize:"11px"}}>
                                Age:
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{fontWeight:"bold",fontSize:"11px"}}>45</TableCell>
                            <TableCell padding=".5px" component="th" scope="row" style={{color:"Grey" ,fontSize:"11px"}}>
                                Weight (lb):
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{fontWeight:"bold",fontSize:"11px"}}>110</TableCell>
                            </TableRow>
                            <TableRow className={classes.tableHead}>
                            <TableCell padding=".5px" component="th" scope="row" style={{color:"Grey" ,fontSize:"11px"}}>
                                
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{fontWeight:"bold",fontSize:"11px"}}></TableCell>
                            <TableCell padding=".5px" component="th" scope="row" style={{color:"Grey" ,fontSize:"11px"}}>
                                BMI:
                            </TableCell>
                            <TableCell padding=".5px" align="left" style={{fontWeight:"bold",fontSize:"11px"}}>19</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
                <Paper  style={{backgroundColor:"#F5F5F5",border:"transparent",boxShadow:"none",marginLeft:"1033px",marginTop:"-100px"}}>
                    <Table size ='small'>
                        <TableBody>
                            <TableRow  className={classes.tableHead}>
                            <TableCell padding=".5px" component="th" scope="row" style={{color:"Grey" ,fontSize:"11px"}}>
                                <Avatar style= {{marginLeft: 0, width: 70, height: 70, backgroundColor: "green"}}>Yes</Avatar>
                            </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </Typography>
        </main>
    </div>
    </ThemeProvider>
    );
}