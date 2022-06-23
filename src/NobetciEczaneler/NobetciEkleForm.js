import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NobetcıEkle.css'

const NobetciEkleForm =(props)=>{
    const navigate = useNavigate();
    console.log(props.form)
    const changeHandler= (event) =>{
        console.log(event.target.value)//alınan değerlere formdaki değerleri atamak için 
        props.setForm({...props.form, [event.target.name]:event.target.value })
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        props.setNobetciler([...props.nobetciler,props.form])//alınan nöbetciler nöbetçi listesinin içersine daha önce 
       navigate("/")                                         //bulunan elemanlarla beraber formun içersine eklenir.//her eczane butonuna tıklandıktan sonra otomatik navigoter ile ana sayfaya yönlendirilir.
    }
    return( 
    <form onSubmit={submitHandler} >
        <div className='new-farmaci'>
        <div className='new-farmaci__controls'>
            <div className='new-farmaci__control'>
            </div>
            <div className='new-farmaci__control'>
                <label>Eczane Adı</label>
                <input type='text' onChange={changeHandler} name="ad" value={ props.form.ad}/>
            </div>
            <div className='new-farmaci__control'>
                <label>Adres</label>
                <input type='text' onChange={changeHandler} name="adres" value={ props.form.adres} ></input>
            </div>
            <div className='new-farmaci__control'>
                <label>İlçe</label>
                <input type='text' onChange={changeHandler} name="ilce" value={ props.form.ilce} ></input>
            </div>
            <div className='new-farmaci__control'>
                <label>Telefon</label>
                <input type='text' onChange={changeHandler} name="telefon" value={props.form.telefon} ></input>
            </div>
            <div className='new-farmaci__control'>
                <label>Date</label>
                <input type='date' onChange={changeHandler} name="date"  min="2019-01-01" max="2022-12-31" ></input>
            </div>
            <div className='new-farmaci__actions'>
                <button type='submit'>Nöbetçi Ata</button>
            </div>
        </div>
        </div>
    </form>
    );
}

export default NobetciEkleForm;
