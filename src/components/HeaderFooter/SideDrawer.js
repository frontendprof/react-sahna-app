
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
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

    const renderItem=item=>{
       return(
            <ListItem key={item.where} onClick={()=>alert(item.where)} >
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
            <List component="nav">
               {links.map(item=>renderItem(item))}
            </List>

        </Drawer>
    )
}

export default SideDrawer
