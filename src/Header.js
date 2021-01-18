import { AppBar, Toolbar, makeStyles, Button, IconButton, Badge, Grid, Avatar } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import myLogo from "./images/Menu_Logo@2x.png";
import Notifications from '@material-ui/icons/Notifications';
import { red } from '@material-ui/core/colors';
import dp from "./images/34217-MLS-Fabian-Ekker-003flin.jpg";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#FFFFFF",
        
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600,
        size: "18px",
        marginLeft: "38px",
    },
    icon: {
        marginTop: "8px"
    },
    avatar: {
        height: 25,
        width: 25,
        backgroundColor: red[500],
    },
}));

const headersData1 = [
    {
      label: "PATIENTS",
      href: "/patients",
    },
];

const headersData = [
    {
      label: "CALENDER",
      href: "/calender",
    },
    {
      label: "USER",
      href: "/user",
    },
    {
      label: "BILLING",
      href: "/biling",
    },
  ];

export default function Header() {
    const { header, menuButton, toolbar, icon, avatar } = useStyles();
    const displayDesktop = () => {
      return <Toolbar className={toolbar}>
            <Grid container>
                <Grid item xs={"auto"}>
                    {process.env.REACT_APP_SECRET_CODE}
                </Grid>
                <Grid item xs="auto">
                    <div>{patientsButton()}</div>
                </Grid>
                <Grid item xs={"auto"}>
                    <div>
                        {getMenuButtons()}
                    </div>
                </Grid>
                <Grid container justify= "flex-end" alignItems= "center" item xs={7}>
                    {notification}
                </Grid>
                <Grid item xs={"auto"} className= {icon} style= {{paddingTop: 14}} justify= "start">
                    {accountImage}
                </Grid>
            </Grid>
        </Toolbar>;
    };

    const logo = (
        <img src={myLogo} alt="logo" height= "55px" className= {icon}></img>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                {...{
                    key: label,
                    style: {height: "70px", width: "100px", marginLeft: 50, marginRight: -30, fontSize: 12,},
                    color: "#000000",
                    to: href,
                    component: RouterLink,
                    className: menuButton,
                }}
                >
                {label}
                </Button>
            );
        });
    };
    const patientsButton = () => {
        return headersData1.map(({ label, href }) => {
            return (
                <Button
                {...{
                    key: label,
                    style: {height: "70px", width: "100px", borderRadius: 0, marginLeft: 50, marginRight: -30, fontSize: 12, backgroundColor: "#00A0F0", color: "#FFFFFF"},
                    color: "#000000",
                    to: href,
                    component: RouterLink,
                    className: menuButton,
                }}
                >
                {label}
                </Button>
            );
        });
    };

    const notification = (
        <IconButton>
            <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                <Notifications style= {{color: "#000000"}}/>
            </Badge>
        </IconButton>
    );

    const accountImage = (
        <Avatar src= {dp} className={avatar}>
        </Avatar>
    );

    return (
        <header>
          <AppBar className={header} variant= "outlined">{displayDesktop()}</AppBar>
        </header>
    );
}