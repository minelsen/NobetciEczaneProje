import React from 'react'
import './NobetciDate.css'
function NobetciDate(props){

  
    return(
    <div className='nobetci-date'>
        <div >{props.date}</div>
    </div>
        
    );

}

export default NobetciDate;