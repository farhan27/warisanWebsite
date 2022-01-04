
import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, Tab, Tabs, Button } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "8em"
    },
    logoContainer: {
        padding: 0,
        "&:hover" : {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "20px",
        height: "45px"
    }
}))

export default function Header(props) {

    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value)
    }

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3)
        } else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4)
        } else if (window.location.pathname === "/estimate" && value !== 5) {
            setValue(5)
        }
    })

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters>
                        {/* test */}
                        <Button component={Link} to="/" disableRipple className={classes.logoContainer} onClick={()=> setValue(0)}>
                            <img alt="company logo" className={classes.logo} src={logo} /></Button>
                        
                        <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
                            <Tab className={classes.tab} component={Link} to="/" label="Home"></Tab>
                            <Tab className={classes.tab} component={Link} to="/services" label="Services"></Tab>
                            <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"></Tab>
                            <Tab className={classes.tab} component={Link} to="/about" label="About Us"></Tab>
                            <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us"></Tab>

                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment>
    )
}