import React from 'react';
import NobetciItem from './NobetciItem';



const NobetcilerListesi = props =>{

    if (props.items.length===0){
        return <h2 className='expenses-list__fallback'>Kayıtlı Eczane Bulunamadı</h2>;
    }


  return <ul className="expenses-list">
      {props.items.map((nobetci)=>(
      <NobetciItem
        key={nobetci.id}
        ad={nobetci.ad}
        adres={nobetci.adres}
        ilce={nobetci.ilce}
        telefon={nobetci.telefon}
        date={nobetci.date}
      />
    ))}
    </ul>
  };



export default NobetcilerListesi;