
import React from 'react';



const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5992.891600345584!2d69.26535633237768!3d41.32091847927029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3f2f59bec9%3A0xf8d3c070bc79f9ad!2sTurkistan%20Concert%20Hall!5e0!3m2!1sen!2s!4v1619078359802!5m2!1sen!2s" 
                width="100%"
                height="500px" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">

            </iframe>

            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
            
        </div>
    )
}

export default Location
