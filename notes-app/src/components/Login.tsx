import { useState } from "react";
import axios from "axios";


const Login = ({setActivePage, userInformation, setUserInformation, setNotes}) => {

  const handleLogin = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/authentication/login",
        userData
      );

      if (response.status === 200) {
        console.log("User logged in successfully:", response.data);
        const { userId, ...userInfo } = response.data;
        setUserInformation({ ...userInformation, ...userInfo, userId });
        setActivePage("notesList");

        fetchNotes(userId);

      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  const fetchNotes = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/notes/${userId}`);

      if (response.status === 200) {
        console.log("Notes fetched successfully:", response.data);
        setNotes(response.data);
      } else {
        console.log("Failed to fetch notes");
      }
    } catch (error) {
      console.log("Error fetching notes:", error.message);
    }
  };

  const createAccount = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users",
        userData
      );

      if (!response.data) {
        throw new Error("Failed to create user");
      }

      console.log("User created successfully: ", response.data);
      const { userId, ...userInfo } = response.data;
      setUserInformation({ ...userInformation, ...userInfo, userId });
      setActivePage("notesList");
      // return response.data;
    } catch (error) {
      console.log("Error: ", error.message);
      throw error;
    }
  };


  const handleUsernameChange = (event) => {
    setUserInformation({...userInformation, username: event.target.value});
  }

  const handlePasswordChange = (event) => {
    setUserInformation({...userInformation, password: event.target.value});
  }

  const handleEmailChange = (event) => {
    setUserInformation({...userInformation, email: event.target.value});
  }

  return (
    <div className="container">

      <h1>Notes App</h1>
      <input type="text" className="form-control" placeholder="Username" value={userInformation.username} onChange={handleUsernameChange} />
      <input type="email" className="form-control" placeholder="Email" value={userInformation.email} onChange={handleEmailChange} />
      <input type="password" className="form-control" placeholder="Password" value={userInformation.password} onChange={handlePasswordChange} />
      <button className="btn btn-primary" onClick={() => handleLogin(userInformation)}>Log In</button>
      <button className="btn btn-secondary" onClick={() => createAccount(userInformation)}>Create Account</button>

    </div>
  );

}

export default Login;