import React from "react";
import LogIn from "./LogIn";


const LogInForm = (props) => {
    return (
        <div className="main_div">
            <LogIn users={props.user}></LogIn>
        </div>
    )
}
//Genel sayfamızda tuttuğumuz eczane datasını props olarak alıp LogIn sayfasına yolladığımız kısım.
export default LogInForm