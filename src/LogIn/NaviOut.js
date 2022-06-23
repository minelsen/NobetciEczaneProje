import React from "react";
import  './Navi.css';
import { useNavigate } from "react-router-dom"
import logo from'../loogo.png';
function NaviOut() {
  const navigator = useNavigate();
  return( 
    <form >
        <div className='new-farmaci'>
        <div className='new-farmaci__controls'>
          <div><img src={logo} width="120" height="100" /></div>
          <div><h2>Edirne Nöbetçi Eczaneler</h2></div>
            <div className='new-farmaci__actions'>
            <button onClick={() => navigator("/")}>
            Ana Sayfa
           </button>
            </div>
        </div>
        </div>
    </form>
    );
}
export default NaviOut;