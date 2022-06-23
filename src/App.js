import React,{useState} from 'react';
import LogInForm from './LogIn/LogInForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genel from './NobetciEczaneler/Genel';


import './App.css'


import Main from './User/Main';
const App = ()=> {
 
  const [user, setUser] = useState({ minel: ["1234", "minel@gmail.com"]})
   
  const DUMMY_NOBETCILER=[ //Nöbetçi eczaneleri tarihi le tuttuğumuz liste her yerden erişilmesi için appte tuttum.
    {id:1,ad:"Hayat Eczanesi",adres:"Yeni Mahallesi, Milli Egemenlik Caddesi, No:9/A Enez / Edirne",ilce:"Enez",telefon:"0(284)811-65-64", date:"2022-06-20"},
    {id:2,ad:"Saygın Eczanesi",adres:"Gazi Ömerbey Mahallesi, Kale Caddesi, No:11 Enez / Edirne",ilce:"Merkez",telefon:"0(284)811-61-47", date: "2022-07-19"},
    {id:3,ad:"Sağlık Eczanesi",adres:"Kale Caddesi, No:9/A Enez / Edirne",ilce:"Enez",telefon:"0(284)811-60-90", date: "2022-07-19"},
    {id:4, ad:"Derman Eczanesi",adres:"23 Kasım Caddesi, No:4/D Havsa / Edirne",ilce:"Havsa",telefon:"0(284)336-15-49", date: "2022-07-19"},
    {id:5,ad:"Yeni Meriç Eczanesi",adres:"Artezyan Caddesi, No:1",ilce:"Meriç",telefon:"0(284)415-10-51",date: "2022-06-23"},
    {id:6,ad:"Nar Eczanesi",adres:"Fatih Mahallesi, Alparslan Türkeş Caddesi No:14/76",ilce:"Merkez",telefon:"0(284)236-34-35",date: "2022-06-24"},
    {id:7,ad:"Ülkü Eczanesi",adres:"Hükümet Caddesi, Gürkan Is Hanı No:18",ilce:"Merkez",telefon:"0(284)212-45-96",date: "2022-06-23"}]
  const [nobetciler,setNobetciler]=useState(DUMMY_NOBETCILER);
  
  return (
    <div className="App">
    <Router>
      <div >
        <Routes>
        <Route path="/" element={< Main nobetciler={nobetciler} setNobetciler={setNobetciler}/>}></Route> 
        <Route path="/login" element={<LogInForm user={user} setUser={setUser}/>}/>
        <Route path="/genel" element={<Genel nobetciler={nobetciler} setNobetciler={setNobetciler}/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}
export default App;
