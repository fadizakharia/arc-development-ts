import React, { Fragment, useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  createStyles,
  Tabs,
  Tab,
  Theme,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
interface Props {
  children: React.ReactElement;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolBarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3em",
    },
    appLogoContainer: {
      "&:hover": {
        backgroundColor: "transparent",
      },
      padding: 0,
    },
    appLogo: {
      height: "7em",
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
    },
    navCTA: {
      ...theme.typography.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px",
    },
  })
);

function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
export default function Header(props: any) {
  const classes = useStyles();
  const [navLinkIndex, setNavLinkIndex] = useState<number>(0);
  useEffect(() => {
    console.log("it is set");
    switch (window.location.pathname) {
      case "":
        setNavLinkIndex(0);
        break;
      case "/":
        setNavLinkIndex(0);
        break;
      case "/services":
        setNavLinkIndex(1);
        break;
      case "/revolution":
        setNavLinkIndex(2);
        break;
      case "/about":
        setNavLinkIndex(3);
        break;
      case "/contact":
        setNavLinkIndex(4);
        break;
      default:
        setNavLinkIndex(0);
    }
  }, [navLinkIndex]);

  function handleChange(event: React.ChangeEvent<{}>, index: number) {
    setNavLinkIndex((prevState) => {
      return index;
    });
  }
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              disableRipple
              className={classes.appLogoContainer}
              component={Link}
              to="/"
              onClick={() => {
                setNavLinkIndex(0);
              }}
            >
              <img
                className={classes.appLogo}
                src={logo}
                alt="Arc Development logo"
              />
            </Button>
            <Tabs
              onChange={handleChange}
              value={navLinkIndex}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                component={Link}
                className={classes.tab}
                label="Home"
                to="/"
              />
              <Tab
                component={Link}
                className={classes.tab}
                label="Services"
                to="/services"
              />
              <Tab
                component={Link}
                className={classes.tab}
                label="The Revolution"
                to="/revolution"
              />
              <Tab
                component={Link}
                className={classes.tab}
                label="About Us"
                to="/about"
              />
              <Tab
                component={Link}
                className={classes.tab}
                label="Contact Us"
                to="/contact"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.navCTA}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </Fragment>
  );
}
