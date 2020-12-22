import React from "react";
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// Elevation Scroll Function to elevate the appbar when user is scrolling
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// Elevation Scroll Prop type checked to prevent errors
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

// Setting up USeStyles for custom themeing
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

// Header component with AcUnit icon on appbar, and Appbar and Tollbar component
const Header = (props) => {
  const myUI = useStyles();
  return (
    <>
      {/* Added Elevation Scroll to give it a subtle look when scrolling */}
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            {/* Icon Used */}
            <AcUnitIcon />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={myUI.toolbarMargin} />
    </>
  );
};

export default Header;
