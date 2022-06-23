import React from 'react';
import './Nobetciler.css'
import Card from '../UI/Card';
import NobetciDate from './NobetciDate';
const NobetciItem = (props)=> {

    return (
      <Card className="nobetci-item"> 
        <div className="nobetci-items">
        <div className="nobetci-item__ad">
           <h2>{props.ad}</h2>
           </div>
          <div className="nobetci-items">{props.adres}</div>
          <div className="nobetci-items">{props.telefon}</div>
          <div className="nobetci-items">{props.ilce}</div>
          <NobetciDate date={props.date} />
        </div>
      </Card>
    );
  }
  

export default NobetciItem;
