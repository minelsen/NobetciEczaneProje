import React,{useState} from "react";
import Navi from "../LogIn/Navi";
import Nobetciler from "./Nobetciler";
 
const Main = ({nobetciler,setNobetciler}) => {
   
    return (
        <div>
        <div className="main_div">
            <Navi/>
            <Nobetciler  items={nobetciler} setItems={setNobetciler}/>
            
        </div>
        </div>
    )
}

export default Main;