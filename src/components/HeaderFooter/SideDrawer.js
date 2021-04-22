
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {scroller} from "react-scroll";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';




const SideDrawer = ({open,onClose}) => {


    const links=[
        {where:"featured",value:"To Top"},
        {where:"venueinfo",value:"Venue Info"},
        {where:"highlights",value:"Highlights"},
        {where:"pricing",value:"Pricing"},
        {where:"location",value:"Location"},
    ]

    const scrollToElement=element=>{
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset:-86
        });
        onClose(false)
    }

    const renderItem=item=>{
       return(
            <ListItem key={item.where} onClick={()=>scrollToElement(item.where)} >
                {item.value}
            </ListItem>
       )
    }

    return (
        <Drawer
            anchor="right" 
            open={open}
            onClose={()=>onClose(false)}
            
        >
            <List component="nav" style={{ cursor:"pointer" }}>
               {links.map(item=>renderItem(item))}
            </List>

        </Drawer>
    )
}

export default SideDrawer
