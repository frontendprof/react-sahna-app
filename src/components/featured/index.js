
import React from 'react';
import Carousel from './Carousel';
import TimeTill from './TimeTill';

const Featured = () => {
    return (
        <div>
            <Carousel />
            <div className="shaykh_name">
                <div className="wrapper">
                    Shaykh Hamza Yusuf
                </div>
            </div>

            <TimeTill />
        </div>
    )
}

export default Featured
