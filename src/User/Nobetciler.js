import React,{useState} from "react";
import '../NobetciEczaneler/Eczaneler.css'
import TarihFiltreleme from "./TarhihFiltreleme";
import Card from "../UI/Card";
import NobetcilerListesi from "./NobetcilerListesi";

function Nobetciler(props){

    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate())
    const [date, setDate] = useState(defaultDate)
    const today = date.toLocaleDateString('en-CA')
    const [filteredTarih,setFilteredTarih] = useState(today);
    const filterChangeHandler =  selectedTarih =>{
        setFilteredTarih(selectedTarih);
    }
    const filteredNobetciler = props.items.filter(nobetci=> {
        console.log(nobetci.date)
        console.log(filteredTarih)
        return nobetci.date === filteredTarih;
    });
    return(
        <div className="eczaneler">
         <Card className="card">
        <TarihFiltreleme selected={filteredTarih} onChangeFilter={filterChangeHandler}></TarihFiltreleme>
        <NobetcilerListesi items={filteredNobetciler}/>
        </Card>
        </div>
    )

}
export default Nobetciler;