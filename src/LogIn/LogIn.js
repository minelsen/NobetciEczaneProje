import React from 'react';
import { useNavigate } from "react-router-dom"
import './LoginForm.css'
import NaviOut from './NaviOut';
function LogIn({ users }) {//LogInFormdan aldığımız props.userı users listesi olarak tuttuğumuz için burada onu alıyoruz.
  const navigator = useNavigate()
  const checkValid = (e) => {//alınan bilgilerin user datası ile eşleip eşleşmediğini kontrol edilmesi.
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    let match = 0
    Object.entries(users).forEach(([key, value]) => {
      if (key === username && value[0] === password) {
        navigator("/genel")
        match = 1 }
    })
    if (match === 0) {
      document.getElementById("hata").innerHTML = "şifre veya kullanıcı adı hatalı!"
    }}
  return (
    <div className=".LoginForm">
      <NaviOut/>
      <form >
        <div className='form-inner'>
          <h2>GİRİŞ</h2>
          <div className='form-group'>
            <label htmlFor='adı'>Kullanıcı Adı:</label>
            <input type="text" id="username" />
          </div>
          <div className='form-group'>
            <label htmlFor='adı'>Email:</label>
            <input type="text" id="email" />
          </div>
          <div className='form-group'>
            <label htmlFor='şifre'>Şifre:</label>
            <input type="password" id="password" />
          </div>
          <button onClick={checkValid}>giriş</button>
          <h5 id="hata"></h5>
        </div>
      </form>

    </div>
  )
}
export default LogIn;