import React, {useState} from 'react';
import {MDBBtn, MDBInput} from "mdbreact";

// Commands action과 reducer를 연결
const signUpConstants={
    SIGNUP_REQUEST: "USER_SIGNUP_REQUEST",
    SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS',
    SIGNUP_FAILURE: 'USER_SIGNUP_FAILURE'
    //삼위일체
}
// Reducers
function signUpReducer(payload,userActions) {
    switch (userActions) {
        case signUpConstants.SIGNUP_REQUEST:
            return{
                signUp: true,
                user: userActions.user
            }
        case signUpConstants.SIGNUP_SUCCESS:
            return {
                signUp: true,
                user: userActions.user
            }
        case signUpConstants.SIGNUP_FAILURE:
            return {
                signUp: true,
                user: userActions.user
            }
    }

}
// Actions
const signUpActions={
    signUp
}
function signUp() {
    return dispatch =>{

    }
}
// Thunk
function sginUpService() {
    const userid=''
    const password=''
    const name= ''
    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/josn'},
        body: JSON.stringify({userid,password,name})
    }
    return fetch(``,requestOptions)
        .then()
}
// Component --> Container
const Signup = () => {
    const [userid,setUserid] = useState("")
    const [password,setPassword] =useState("")
    const [name, setName] = useState("")
    return (
        <div>
            <h2>Sign Up</h2>
            <form name="form">
                <div className="container">
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <label htmlFor="userid"><b>Userid</b></label>
                    <input type="text" placeholder="Enter userid" name="userid"
                           value={userid}
                           onChange={e=> setUserid(e.target.value)}
                           required/>

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password"
                           value={password}
                           onChange={e=> setPassword(e.target.value)}
                           required/>

                    <label htmlFor="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name"
                           value={name}
                           onChange={e=> setName(e.target.value)}
                           required/>
                    <label>
                        <input type="checkbox" name="remember"/> Remember me
                    </label>
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <MDBBtn gradient="purple" onClick={signUp} className={"button3"}>Sign Up</MDBBtn>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;