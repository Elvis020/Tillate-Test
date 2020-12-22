import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";
import AcUnitIcon from '@material-ui/icons/AcUnitIcon';


// Setting up USeStyles for custom themeing
const useStyles = makeStyles((theme: Theme) => createStyles({
    toolbarMargin: {
      ...theme.mixins.toolbar,
    },
  }));
  interface Props {
    children: React.ReactElement;
  }


  function ElevationScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const Header = () => {
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
  
