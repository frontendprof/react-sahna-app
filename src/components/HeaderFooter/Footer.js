
import React from 'react';
import { Fade } from "react-awesome-reveal";


const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={200}>
                <div className="font-rightous footer_logo_venue">The Venue</div>
                <div className="footer_copyright">&copy;AbdulMalik 2021. All rights reserved.</div>
            </Fade>
        </footer>
    )
}

export default Footer
