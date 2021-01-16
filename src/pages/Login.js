import './Login.css'
import Input from '../component/input'

function Login() {
  return (
    <div className="loginForm">
      <h1>Pediatech:</h1>
      <p>Login:</p>
      <Input></Input>
      <p>Senha:</p>
      <Input type="password">
        <Input type="checkbox"></Input>
      </Input>
      <p></p>
      <button>Logar</button>
    </div>
  );
}

export default Login;
