import React from 'react';
import EczaneItem from './EczaneItem';


const EczaneListesi = props =>{

    if (props.items.length===0){
        return <h2 className='expenses-list__fallback'>Kayıtlı Eczane Yok</h2>;
    }


  return <ul className="expenses-list">
      {props.items.map((eczane=>(
      <EczaneItem
      key={eczane.id}
      ad={eczane.ad}
      adres={eczane.adres}
      ilce={eczane.ilce}
      telefon={eczane.telefon}
      setSelectedEczane={props.setSelectedEczane}
      form={props.form} 
      setForm={props.setForm}
      ></EczaneItem>
    )))}
    </ul>
  };



export default EczaneListesi;