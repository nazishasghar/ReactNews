import React from 'react';
import '../SignInView/SignInView.css'
function SignInView(props) {
    return (
        <div className="Root">
            <div className="Container">
            <h1 className="Header"> Welcome To Indian Times</h1>
               <br/>
                <h2 className="Body"> Sign in to get latest news in your region </h2>
            </div>
            <div className="Card">
                    <br/>
                    <input type="text" placeholder="Enter Username or phone number" className="Input"/>
                    <br/>
                    <input type="password" placeholder="Password" className="Input"/>
                    <br/>
                    <button type="submit" className="Button">Login</button> <br/>
                    <a className="Password">Forgetten password?</a>
                    <button type="submit" className="Button">Create New Account</button> <br/>
           </div>
        </div>
    );
}

export default SignInView;