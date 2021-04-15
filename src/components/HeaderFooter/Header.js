
import React,{useState,useEffect} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer';


const Header = () => {

    const[sideDrawer,setSideDrawer]=useState(false)


    const toggleDrawer=value=>{
        setSideDrawer(value)
    }

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
                    <MenuIcon onClick={()=>toggleDrawer(true)}/>
                </IconButton>

                <SideDrawer open={sideDrawer} onClose={(value)=>toggleDrawer(value)}/>
            </Toolbar>
              
        </AppBar>
    )
}

export default Header
