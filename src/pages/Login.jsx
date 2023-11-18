import { useState } from 'react';
import validationInputs from '../utils/validationInputs';
import { postAPI } from '../services/API';
import '../styles/style.css'
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const handleClick = async () => {

    const popup = document.getElementById('popup');
    const validation = validationInputs(email, userName, password);
    if (!validation) {
      setPopupMessage("Preencha os campos corretamente!");
      popup.style.display = 'block';
    } else {
      try {
        const { status } = await postAPI('http://localhost:3002/user/login', {
          email,
          username: userName,
          password
        });

        if (status === 200) {
          history.push("/product");
        } else {
          throw new Error('Erro');
        }

      } catch (error) {
        setPopupMessage("Usuário ou senha incorretos. Por favor, verifique suas credenciais.");
        popup.style.display = 'block';
      }
    }
  };

  const closePopup = () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h1>Login</h1>
          <form id="loginForm">
            <input
              type="text"
              placeholder="E-mail"
              id="emailInput"
              onChange={ (e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nome de usuário"
              id="usernameInput"
              onChange={ (e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              id="passwordInput"
              onChange={ (e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={ handleClick }>Entrar</button>
          </form>
        </div>
      </div>

      <div id="popup" className="popup">
        <span className="close" id="closePopup" onClick={ closePopup }>&times;</span>
        <p id="popupText">{ popupMessage }</p>
      </div>
    </>
  )
}

export default Login;
