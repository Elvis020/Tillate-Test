import React from "react";
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// Elevation Scroll Function
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

// Setting up USeStyles for custom themeing
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

const Header = (props) => {
  const myUI = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <AcUnitIcon />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={myUI.toolbarMargin} />
    </>
  );
};

export default Header;
