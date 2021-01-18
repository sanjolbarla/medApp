import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ThemeProvider, Box } from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import DeleteIcon from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#e8f5fe",
      color: "black",
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: "#F5F5F5",
        color:"black"
      },
    },
  }))(TableRow);

const theme1 = createMuiTheme({
    overrides: {
        MuiTableCell: {
            root: {
                padding: "4px 8px",
                borderBottom: "2px",
            }
        }
    }
});

const useStyles = makeStyles(() => ({
    tableRoot: {
        width: 680
    },
    table:{ 
        width:"100%",
        marginLeft: 7,
    },
    table3:{
        width:"75%",
        marginLeft:"302px",
    },
    margin: {
        borderRadius: 0,
        height: 40,
    },
    tab: {
      color:"black",
      fontSize:"12px", 
       
      borderTop:"1px solid #F7F7F7", 
      borderRight:"1px solid #F7F7F7", 
      borderLeft:"2px solid #F7F7F7", 
      borderBottom:"1px solid #F7F7F7"
    },
}));

export default function Chat() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme1}>
        <div>
            <Paper className={classes.tableRoot} variant= "outlined" style={{border: "2px", borderCollapse: "collapse", backgroundColor:"#FFFFFF",marginLeft:"300px",marginTop:"-45px", borderRadius: "0"}}>
                <Table size ='small' style= {{height: 10, maxWidth: 700}}>
                    <TableBody>
                        <TableRow  className={classes.tableHead}>
                            <TableCell align= "center" padding=".5px" component="th" scope="row" style={{color:"#00A0F0" ,fontSize:"12.5px", lineHeight:"1.5", backgroundColor:"white", borderTop:"1.5px solid #E9E9E9", borderRight:"1.5px solid #E9E9E9", borderLeft:"1.5px solid #E9E9E9"}}>
                                List of prior Sugeries
                            </TableCell>

                            <TableCell align= "center" padding=".5px" component="th" scope="row" className= {classes.tab}>
                                List of Medical Diagnosis
                            </TableCell>
                            
                            <TableCell align= "center" padding=".5px" component="th" scope="row" className= {classes.tab}>
                                List of Medication
                            </TableCell>
                            
                            <TableCell align= "center" padding=".5px" component="th" scope="row" className= {classes.tab}>
                                Airway Evaluation
                            </TableCell>
                        
                            <TableCell align= "center" padding=".5px" component="th" scope="row" className= {classes.tab}>
                                Anesthesia Clearance and Recommendation
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </div>
        <div style={{backgroundColor:"white" ,width:"370px",marginLeft:"294px",marginTop:"26px"}}>
   
    <Table className={classes.table} aria-label="customized table" variant="outlined">
        <TableHead >
          <TableRow >
            <StyledTableCell style={{paddingLeft:"10px",fontSize:"12px", fontWeight:"bold",color:"505050"}}>First Time Surgery</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" style={{fontSize:"12px",paddingLeft:"10px"}}>
                No
              </StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </div>
    
    {/* Table2 */}
    <div style={{backgroundColor:"white" ,width:"370px",marginLeft:"294px",marginTop:"26px"}}>
   
    <Table className={classes.table} aria-label="customized table" variant="outlined">
        <TableHead >
          <TableRow >
            <StyledTableCell style={{paddingLeft:"10px",fontSize:"12px", fontWeight:"bold",color:"505050"}}>Family History of Surgical Complications?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" style={{fontSize:"12px",paddingLeft:"10px"}}>
                Yes
              </StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </div>

    {/* Table3 */}
    <div style={{backgroundColor:"white" ,width:"370px",marginLeft:"294px",marginTop:"26px"}}>
   
    <Table className={classes.table} aria-label="customized table" variant="outlined">
        <TableHead >
          <TableRow >
            <StyledTableCell style={{paddingLeft:"10px",fontSize:"12px", fontWeight:"bold",color:"505050"}}>If Yes, please provide more details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" style={{fontSize:"12px",paddingLeft:"10px", lineHeight:2}}>
                Lorem ipusm dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat ex ut commodo mollis.Proin sapien mauris,
                porttitor eget augue vitae, vehicula scelerisque eros.
              </StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </div>
    <Box p={1}></Box>
    
    <p style={{marginLeft:"302px",fontSize:"13px", color:"grey"}}>Previous Surgeries</p>

    {/* Table4 */}
 
    <Table size='medium' className={classes.table3} aria-label="customized table " variant="outlined">
        <TableHead style={{
    height:"50px"}}>
          <TableRow>
            <StyledTableCell align="left"style={{paddingLeft:"10px", fontSize:"12px", fontWeight:"bold",color:"#505050" }}>Surgery Type</StyledTableCell>
            <StyledTableCell align="left" style={{fontSize:"12px", fontWeight:"bold",color:"#505050" }}>Date</StyledTableCell>
            <StyledTableCell align="left" style={{fontSize:"12px", fontWeight:"bold",color:"#505050" }}>Anesthesia Type</StyledTableCell>
            <StyledTableCell align="left" style={{fontSize:"12px", fontWeight:"bold",color:"#505050" }}>Surgeical Complications</StyledTableCell>
            <StyledTableCell align="left"style={{fontSize:"12px", lineHeight: 2, width: 220, fontWeight:"bold",color:"#505050" }}>Antesthetic Complications(nausea, vomiting, difficult intubation)</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>     
              <StyledTableCell align="left" style={{fontSize:"11px", fontWeight: "bold", paddingLeft:"10px", color:"	#606060"}}>Shoulder reconstruction</StyledTableCell>
              <StyledTableCell align="left" style={{fontSize:"11px", fontWeight: "bold", color:"	#606060"}}>January 2008</StyledTableCell>
              <StyledTableCell align="left" style={{fontSize:"11px", fontWeight: "bold", color:"	#606060"}}>General "Breathing Tube"</StyledTableCell>
              <StyledTableCell align="left" style={{fontSize:"11px", fontWeight: "bold", color:"	#606060"}}>No</StyledTableCell>
              <StyledTableCell align="left" style={{fontSize:"11px", fontWeight: "bold", color:"	#606060"}}>No</StyledTableCell>
              <StyledTableCell align="left" style={{color:"grey"}}><DeleteIcon fontSize="small" />&nbsp; &nbsp;<EditSharpIcon fontSize="small"/></StyledTableCell>
            </StyledTableRow>
         
        </TableBody>
       </Table>
      <br/>
      <Button style={{marginLeft:"305px", backgroundColor:"#00A0F0", color: "#FFFFFF", fontSize: 10}} variant= "elevation" startIcon= {<AddIcon style={{fontSize:17}}/>} className={classes.margin}>
        Add Surgery
      </Button>
      <br/>
      <br/>
      <br/>
   </ThemeProvider> 
    );
}