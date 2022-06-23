import React from 'react';
import "./İlceFiltreleme.css"

const IlceFiltreleme = (props) =>{

    const dropdownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className='ilce-filter'>
            <div className='ilce-filter__control'>
                <label>İlçe Seç</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='Merkez'>Merkez</option>
                    <option value='Enez'>Enez</option>
                    <option value='Havsa'>Havsa</option>
                    <option value='İpsala'>İpsala</option>
                    <option value='Keşan'>Keşan</option>
                    <option value='Meriç'>Meriç</option>
                    <option value='Lalapaşa'>Lalapaşa</option>
                    <option value='Süloğlu'>Süloğlu</option>
                    <option value='UzunKöprü'>UzunKöprü</option>
                </select>
            </div>
        </div>
    );
}

export default IlceFiltreleme;
