
import React from 'react';
import MyButton from "../utils/MyButton";

import {Zoom} from "react-awesome-reveal";



const Pricing = () => {

    const priceState={
        prices:[10,15,20],
        position:["Balcony","Medium","Start"],
        delay:[500,0,500],
        linkto:["https://sales.com/b","https://sales.com/m","https://sales.com/s"],
        desc:[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni necessitatibus, quis praesentium fugit delectus nesciunt nulla",
            "deserunt vel ullam mollitia quam recusandae neque impedit, iure consequuntur vitae quae accusamus fuga atque deleniti odit", 
            "quia id sequi facilis? Fugit esse voluptates nam, doloremque natus nesciunt consectetur impedite locale pescodito le quam porue"
        ]

    }

    const showBoxes=()=>(
        priceState.prices.map((item,index)=>(
            <Zoom key={index} className="pricing_item" delay={priceState.delay[index]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${priceState.prices[index]}</span>
                        <span>{priceState.position[index]}</span>
                    </div>
                    <div className="pricing_description">
                        {priceState.desc[index]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton 
                            text="Purchase"
                            style={{ 
                                background:"orangered",
                                color:"#fff"

                             }}
                             link={priceState.linkto[index]}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    )



    return (
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    {showBoxes()}
                </div>
            </div>
            
        </div>
    )
}

export default Pricing
