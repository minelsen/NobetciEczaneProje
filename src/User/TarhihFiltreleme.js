import React,{useState} from 'react';
import './TarihFiltreleme.css'

const TarihFiltreleme = (props) =>{
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate())

    const [date, setDate] = useState(defaultDate)
    const [selectedDate, setSelectedDate] = useState();

    const dropdownChangeHandler=(event)=>{
        setSelectedDate(event.target.value)
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className='eczane-filter'>
            <div className='eczane-filter__control'>
                <label>Tarih Seç</label>
                <input value={selectedDate ? selectedDate : date.toLocaleDateString('en-CA')}  onChange={dropdownChangeHandler} type='date' min="2019-01-01" max="2022-12-31"></input>
            </div>
        </div>
    );
}
export default TarihFiltreleme;