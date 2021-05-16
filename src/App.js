import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { useEffect } from 'react';

const App=()=>{

  const dispatch = useDispatch();

  const user = useSelector(selectUser) ;

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //logged in
        // console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      }else{
        //logged out
        dispatch(logout());
      }
    })
    return unsubscribe;
  },[dispatch]);



  return (
    <div className="App">
     <Router>
        {!user ? (
          <LoginScreen/>
        ): ( 
          
            <Switch>
            <Route exact path="/">
              <HomeScreen/>
            </Route>
          </Switch>
         
        )}
      </Router>   
    </div>
  )
}

export default App;