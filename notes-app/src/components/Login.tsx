import { useState } from "react";


const Login = ({setActivePage}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");

  const handleLogin = (username, password) => {

    console.log('Logging in with:', username, password);
    setActivePage('notesList');
  };

  const createAccount = () => {

    console.log('Account created');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div className="container">

      <h1>Notes App</h1>
      <input type="text" className="form-control" placeholder="Username" value={username} onChange={handleUsernameChange} />
      <input type="password" className="form-control" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <button className="btn btn-primary" onClick={() => handleLogin(username, password)}>Log In</button>
      <button className="btn btn-secondary" onClick={createAccount}>Create Account</button>

    </div>
  );

}

export default Login;