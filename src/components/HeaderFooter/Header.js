
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer';


const Header = () => {
    return (
        <AppBar
            position="fixed"
            style={{ backgroundColor:"f2f2f2",boxShadow:"none",padding:"10px 0" }}
        >

            <Toolbar>
                <div className="header_logo">
                    <div className="font-rightous header_logo_venue">The Venue</div>
                    <div className="header_logo_title">Musical Events</div>
                </div>

                <IconButton aria-label="Menu" color="inherit">
                    <MenuIcon />
                </IconButton>

                <SideDrawer />
            </Toolbar>
              
        </AppBar>
    )
}

export default Header
