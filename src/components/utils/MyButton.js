
import React from 'react';
import Button from "@material-ui/core/Button";

import TicketIcon from "../../resources/images/icons/ticket.png"

const MyButton = ({text,link,size,style}) => {
    return (
        <Button
            href={link}
            variant="contained"
            size={size?size:"large"}
            style={{
                background:"#8e8e8e",
                color:"fff",
                ...style

            }}
        >
            <img src={TicketIcon} alt="icon-ticket" className="iconImage"/>
            {text}
        </Button>
    )
}

export default MyButton
