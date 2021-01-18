import React from "react";
import { Drawer as MUIDrawer} from '@material-ui/core';
import { Paper, InputBase, Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import { red, green } from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';
import Sara from "./images/linkedin-headshot-example-1.jpg";
import James from "./images/linkedin_profile_picture_tips-1.jpg";
import Derek from "./images/DBS_Kevin_web_2640.jpg";

const drawerWidth = 260;

const patients = [
  {
    initial: "J",
    name: "James Johnson",
    date: "No Clearance",
    image: James,
    online: false
  },
  {
    initial: "P",
    name: "Patrice Page",
    date: "19 Aug 2020",
    image: Sara,
    online: true
  },
  {
    initial: "D",
    name: "Derek Diamon",
    date: "21 Aug 2020",
    image: Derek,
    online: true
  },
];

const useStyles = makeStyles({
  drawerPaper: {
    width: drawerWidth,
    marginTop:"85px",
    backgroundColor:"#e8f5fe",
  },
  root: {
    minWidth: 230,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 8,
    paddingBottom: 20,
    height: 50,
  },
  root1: {
    minWidth: 230,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 8,
    paddingBottom: 20,
    height: 50,
    backgroundColor: "#00A0F0",
  },
  avatar: {
    height: 40,
    width: 40,
    backgroundColor: red[500],
  },
  searchRoot: {
    paddingTop: "2px",

    display: 'flex',
    alignItems: 'center',
    width: 230,
    height: 30,
    marginLeft: 20,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  iconButton: {
    padding: 0,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

const Drawer = () => {
const classes = useStyles();
const patientsList = () => {
      return patients.map(({name, date, online, image}) => {
        return (
          <div>
          <Card className= {classes.root} variant= "outlined" style= {{borderRadius: 0}}>
            <CardHeader
                avatar={
                  <Avatar src= {image} className={classes.avatar}>
                  </Avatar>
                }
                action={
                  <IconButton>
                    {(online) ? <FiberManualRecordRoundedIcon style= {{color: green[500], fontSize: 18}} /> :<FiberManualRecordRoundedIcon style= {{color: red[500], fontSize: 18}}/>}
                  </IconButton>
                }
                title= {
                  <Typography style= {{fontWeight: "bold", fontSize: "13px"}}>
                    {name}
                  </Typography>
                }
                subheader= {
                  <Typography style= {{color: "#808080", fontSize: "11px"}}>
                    {date}
                  </Typography>
                }
              />
          </Card>
          </div>
    );
  });
};

    return (
      <MUIDrawer variant="permanent" classes={{paper: classes.drawerPaper,}}>
        <div>
          <Box p={1}></Box>
          <Typography variant= "subtitle2" style={{marginLeft: 20, fontWeight: "bold"}}>
            Patients
          </Typography>
          <Box m={1}></Box>
          <Box m={1}></Box>
          <Paper component="form" variant= "outlined" className={classes.searchRoot}>
            <InputBase
              className={classes.input}
              style= {{fontSize: 12}}
              placeholder="Search Patients"
            />
            <IconButton type="submit" className={classes.iconButton}>
              <SearchIcon style= {{fontSize: 20}}/>
            </IconButton>
          </Paper>
          <Box m={1}></Box>
          <Card className= {classes.root1} variant= "outlined" style= {{borderRadius: 0}}>
            <CardHeader
                avatar={
                  <Avatar src= {Sara} className={classes.avatar}/>
                }
                action={
                  <IconButton>
                    <FiberManualRecordRoundedIcon style= {{color: green[500], fontSize: 18}} />
                  </IconButton>
                }
                title= {
                  <Typography style= {{fontWeight: "bold", fontSize: "13px", color: "#FFFFFF"}}>
                    Sara Smith
                  </Typography>
                }
                subheader= {
                  <Typography style= {{fontSize: "11px", color: "#FFFFFF"}}>
                    15 Aug 2020
                  </Typography>
                }
              />
          </Card>
          <div>{patientsList()}</div>
        </div>
    </MUIDrawer>
  );
};

export default Drawer;