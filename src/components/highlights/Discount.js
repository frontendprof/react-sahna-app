
import React,{useState,useEffect} from 'react';
import {Fade,Slide} from 'react-awesome-reveal';
import MyButton from '../utils/MyButton';


const Discount = () => {
    const [start,setStart]=useState(0);
    const end=30;

    const porcentage=()=>{
        if(start<end){

            setStart(prevStart=>prevStart+1)
        }
    }

    useEffect(()=>{
        if(start>0 && start<end){

            setTimeout(()=>{
                setStart(prevCount=>prevCount+1)
            },)
        }
    },[start])


    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">

                <Fade onVisibilityChange={(inView)=>{
                    if(inView){
                        porcentage()
                    }
                }}>
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>Off</span>
                    </div>
                </Fade>


                <Slide right={true}>
                    <div className="discount_description">
                        <h3>Purchase tickets before 20th of November</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, at! Ratione, quibusdam exercitationem a ipsam perspiciatis officia eius illum eos consequatur est minus. Unde neque blanditiis porro ullam dolorem expedita laboriosam, explicabo dignissimos iure accusantium?</p>
                        <MyButton 
                            text="Purchase a ticket"
                            link="https://google.com"
                            size="small"
                            style={{
                                background:"#ffa800",
                                color:'fff'
                            }}
                        />
                    </div>
                </Slide>
                
            </div>
            
        </div>
    )
}

export default Discount
