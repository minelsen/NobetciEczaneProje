import { useState } from "react";
import { Card } from "react-bootstrap";
import './Eczaneler.css';
import EczaneListesi from "./EczaneListesi";
import IlceFiltreleme from "./IlceFiltreme";
function Eczaneler(props){
    const [filteredIlce,setFilteredIlce] = useState('Merkez');//seçili ilçe olarak statede merkezi tutuyorum.
    const filterChangeHandler =  selectedIlce =>{
        setFilteredIlce(selectedIlce);
    }
    const filteredEczaneler = props.items.filter(eczane=>{
        return eczane.ilce === filteredIlce;//seçilen ilçeye göre eczaneleri döndürüyorum.
    });
    
    return(
        <div className="eczaneler">
             
        <Card className="card">
        <IlceFiltreleme selected={filteredIlce} onChangeFilter={filterChangeHandler}></IlceFiltreleme>
        <EczaneListesi form={props.form} setForm={props.setForm} items={filteredEczaneler} setSelectedEczane={props.setSelectedEczane}/>
      </Card>

           
        </div>
    )

}
export default Eczaneler;
/*import React,{useState} from 'react';
import Card from '../UI/Card';
import EczaneListesi from './EczaneListesi';
import IlceFiltreleme from './IlceFiltreme';
function Eczaneler(props) {

    const [filteredIlce,setFilteredIlce] = useState('Merkez');
    
    const filterChangeHandler = selectedIlce=>{
        console.log(selectedIlce);
        setFilteredIlce(selectedIlce);

    }

    const filteredEczaneler = props.items.filter(eczane => {
        return eczane.ilce.getIlce() ===filteredIlce;
    });

    
    return (
        <Card className="expenses">
        <IlceFiltreleme selected={filteredIlce} onChangeFilter={filterChangeHandler}></IlceFiltreleme>
        <EczaneListesi items={filteredEczaneler} />
      </Card>
    );
}
export default Eczaneler;
*/
/*
<EczaneItem ad={ props.items[0].ad} adres={ props.items[0].adres} ilce={ props.items[0].ilce} telefon={ props.items[0].telefon}/>
            <EczaneItem ad={ props.items[1].ad} adres={ props.items[1].adres} ilce={ props.items[1].ilce} telefon={ props.items[1].telefon}/>
            <EczaneItem ad={  props.items[2].ad} adres={ props.items[2].adres} ilce={ props.items[2].ilce} telefon={ props.items[2].telefon}/>
            */