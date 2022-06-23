import React,{useState} from 'react';
import './EczanelerForm.css';
const EczanelerForm =(props)=>{
    const[enteredAd,setEnteredAd] = useState('');
    const[enteredAdres,setEnteredAdres] = useState('');
    const[enteredIlce,setEnteredIlce] = useState('');
    const[enteredTelefon,setEnteredTelefon] = useState('');

    const adChangeHandler= (event) =>{
        setEnteredAd(event.target.value);
    }
    const adresChangeHandler= (event) =>{
        setEnteredAdres(event.target.value);
    }
    const ilceChangeHandler= (event) =>{
        setEnteredIlce(event.target.value);
    }
    const telefonChangeHandler= (event) =>{
        setEnteredTelefon(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        
        const eczaneData = {
            ad: enteredAd,
            adres: enteredAdres,
            ilce: enteredIlce,
            telefon: parseInt(enteredTelefon)
        };
        console.log({eczaneData})
        props.onSaveEczaneData(eczaneData);

        setEnteredAd('');
        setEnteredAdres('');
        setEnteredIlce('');
        setEnteredTelefon('');
    }

    return <form onSubmit={submitHandler} >
        <div className='new-eczane__controls'>
            <div className='new-eczane__control'>
                
                <label>İsim</label>
                <input type='text' value={enteredAd} onChange={adChangeHandler}></input>
            </div>
            <div className='new-eczane__control'>
                <label>Adres</label>
                <input type='text' value={enteredAdres} onChange={adresChangeHandler}></input>
            </div>
            <div className='new-eczane__control'>
                <label>Telefon</label>
                <input type='text' value={enteredTelefon}  onChange={telefonChangeHandler}></input>
            </div>
            <div className='new-eczane__control'>
                <label>İlçe</label>
                <select type='text' value={enteredIlce} onChange={ilceChangeHandler}>
                    <option value=''></option>
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
            <div className='new-eczane__actions'>
                <button type='submit'>Eczane Ekle</button>
            </div>
        </div>
    </form>;
};
export default EczanelerForm;