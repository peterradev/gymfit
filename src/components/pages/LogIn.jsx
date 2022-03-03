import React from 'react'
import { auth, createUser } from '../../firebase'
import { useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';






function LogIn({ setIsAuth}) {

  let navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  

  onAuthStateChanged(auth, (currenUser) => {
    setUser(currenUser);
  })

  const register = async(e) => {
    e.preventDefault();
    try{
      const user = await createUser(auth, registerEmail, registerPassword);
      setIsAuth(true);
      console.log(user);
    }catch(error) {
      console.log(error.message);
    }
  }

  const login = async(e) => {
    e.preventDefault();
    try{
      setIsAuth(true);
      localStorage.setItem('isAuth', true);
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
      navigate('/');
    } catch(error){
      console.log(error.message);
    }
  }

  const logout = async() => {
    await signOut(auth);
    localStorage.clear();
    setIsAuth(false);
  }




  // const handleChange = (e) => {
  //   setEmail = e.target.value;
  //   // console.log(setEmail);
  //   // console.log(password);
  // }

  // const handleChangePass = (e) => {
  //   setPassword = e.target.value;
  // }


  return (
    <div>
      <form action="" onSubmit={register}>
        <input type="email" onChange={(event) => setRegisterEmail(event.target.value) } name=""  placeholder='email'/>
        <input type="password" onChange={(event) => setRegisterPassword(event.target.value)} name=""  placeholder='password' />
        <button type="submit">Submit</button>
        <h4>Logged in as: {user?.email}</h4>
        {/* {console.log(auth.currentUser.email)} */}
        <button onClick={logout}>Logout</button>
      </form>
      <form action="" onSubmit={login}>
        <input type="email" onChange={(e) => setLoginEmail(e.target.value)} name=''  placeholder='email' required/>
        <input type="password" onChange={(event) => setLoginPassword(event.target.value)} name=""  placeholder='password' required/>
        <button type='submit' >Login</button>
      </form>
    </div>
  )
}

export default LogIn
