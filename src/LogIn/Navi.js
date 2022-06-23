import React from "react";
import  './Navi.css';
import { useNavigate } from "react-router-dom"
import logo from'../loogo.png';
function Navi() {
  const navigator = useNavigate();
  return( 
    <form >
        <div className='new-farmaci'>
        <div className='new-farmaci__controls'>
          <div><img src={logo} width="120" height="100" /></div>
          <div><h2>Edirne Nöbetçi Eczaneler</h2></div>
            <div className='new-farmaci__actions'>
            <button onClick={() => navigator("/login")}>
           Giriş
           </button>
            </div>
        </div>
        </div>
    </form>
    );
}
export default Navi;
/*import React from "react";
import { Menu, Container, Header,Button } from "semantic-ui-react";



export default function Navi() {
  return (
    <Menu borderless fixed="top">
      <Container>
        <Menu.Item color="pink" position="left">
          <Header as="h4" color="pink" className="orbitron" icon="cube" content="EDİRNE NÖBETÇİ ECZANELER" />
        </Menu.Item>
        <Menu.Menu position="right">
        <Button
        circular
        color="yellow"
        content="Giriş Yap"
        as='a' href='/login'
      />

        </Menu.Menu>
      </Container>
    </Menu>
  );
}*/