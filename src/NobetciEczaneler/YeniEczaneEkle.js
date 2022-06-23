import React from 'react';
import EczanelerForm from './EczanelerForm';
import './YeniEczaneEkle.css'
const YeniEczaneEkle =(props) =>{
    const saveEczaneDataHandeler =(enteredEczaneData) => {
        const eczaneData = {
            ...enteredEczaneData,
            id: Math.random().toString()
        };
        

        props.onAddEczane(eczaneData);
        };
 
    return <div className='new-eczane'>
        <EczanelerForm onSaveEczaneData={saveEczaneDataHandeler}/>
    </div>
};
export default YeniEczaneEkle;