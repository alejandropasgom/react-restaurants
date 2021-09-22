import React, { useState } from 'react';
import { loginUser } from './actions';
import { connect } from 'react-redux';
import './login.css';

const Login = (props) => {

  const {
    login,
    loading
  } = props;

  const [form, setForm] = useState({
    login :'pepe',
    password: '1234'
  });

  /*useEffect(() => {
    loginUser("pepe","1234").then(userInfo => console.log(userInfo));

  })*/

  console.log(form);

  const updateValue = (e, key) => {
    setForm({
      ...form,
      [key]: e.target.value
    })
  }

  return ( 
    <div className="login"> 
      Esto es la pantalla de Login
      {loading &&
        <div className="loading">Haciendo login contra el servidor</div>
      }
      <form onSubmit={(e) => {
          login(form.login, form.password);
          e.stopPropagation();
          e.preventDefault();
          return false;
      }}>
        <input type="text" placeholder="Login" value={form.login} onChange={(e) => updateValue(e, 'login')} />
        <input type="password" placeholder="Pasword" value={form.password} onChange={(e) => updateValue(e, 'password')} />
        <button>Login</button>
      </form>
    </div>
    )
}

export default connect(
  store => ({
    loading: store.login.loading,
  }),
  dispatch => ({
    login: (login,password) => dispatch(loginUser(login,password))
  })
)(Login);