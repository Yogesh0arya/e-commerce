import React, { useState } from 'react';
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img className="loginScreen_logo" src="https://freepngimg.com/thumb/apple_logo/26045-5-apple-logo-transparent-background.png" alt=""/>
                <button className="loginScreen_button" onClick={()=>setSignIn(true)}>Sign In</button>
                <div className="loginScreen_gradient"/>
            </div> 
            <div className="loginScreen_body">
                {signIn ? (<SignUpScreen/>) : 
                    <>
                        <h1>Unlimited cloths, electronics, groseries and more.</h1>
                        <h2>Order from anywhere, Cancel at any time.</h2>
                        <h3>Ready to shop? Enter your email to create.</h3>
                        <div className="loginScreen_input">
                            <form>
                                <input type="email" placeholder="Email Address"/>
                                <button className="loginScreen_getStarted" onClick={()=>setSignIn(true)}>GET STARTED</button>
                            </form>
                        </div>
                    </>
                }
                
            </div>
        </div>
    )
}

export default LoginScreen;