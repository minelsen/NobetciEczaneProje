import React from 'react';
import './EczaneItem.css'
import Card from '../UI/Card';
const EczaneItem = (props)=> {
  const clickHandler=()=>{//seç tuşuna basıldığında seçşlen eczaenin değerlerini tutmak ve aktarmak için oluşturdm.
    props.setSelectedEczane({id:props.id,ad:props.ad,adres:props.adres,telefon:props.telefon,ilce:props.ilce})
    props.setForm({...props.form,id:props.id,ad:props.ad,adres:props.adres,telefon:props.telefon,ilce:props.ilce}) 
  }//tüm bilgileri nöbetçi ekle bölümüne aktarmak için oluşturuldu .

    return (
      <Card className="eczane-item"> 
        <div className="eczane-items">
        <div className="eczane-item__ad">
           <h2>{props.ad}</h2>
           </div>
          <div className="eczane-items">{props.adres}</div>
          <div className="eczane-items">{props.telefon}</div>
          <div className="eczane-items">{props.ilce}</div>
          <button onClick={clickHandler}>SEÇ</button>

        </div>
      </Card>
    );
  }
  

export default EczaneItem
