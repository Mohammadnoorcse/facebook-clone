import React, { useState } from 'react'
import "./login.css"
import logo from "../../assets/facebook-login.svg"
import { Link } from 'react-router-dom';
const Login = () => {
    const [register,setRegister] = useState(false);
  return (
    <>
      <div className={register ? "login-desktop-register" : "login-desktop"}>
        <div className="login-desktop-item">
          <div className="login-desktop-item-1">
            <h3>facebook</h3>
            <span>connect with friends and the world around on facebook</span>
          </div>
          <div className="login-desktop-item-2">
            <form action="">
              <input type="text" placeholder="E-mail or Phone number" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </form>
            <Link to="/forgot" className="login-desktop-item-2-1">
              Forgot password?
            </Link>
            <div className="login-desktop-item-2-hr"></div>
            <div
              className="login-desktop-item-2-2"
              onClick={() => setRegister(true)}
            >
              <span>Create New Account</span>
            </div>
          </div>
          <div className={register ? "login-desktop-item-3" : "register-hide"}>
            <div className="login-desktop-item-3-1">
              <div className="login-desktop-item-3-1-1">
                <h1>Sign Up</h1>
                <span>It's quick and easy.</span>
              </div>
              <div className="login-desktop-item-3-1-2">
                <span onClick={() => setRegister(false)}>X</span>
              </div>
            </div>
            <div className="login-desktop-item-2-hr"></div>
            <div className="login-desktop-item-3-2">
              <form action="">
                <div className="login-desktop-item-3-2-1">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Surname" />
                </div>
                <div className="login-desktop-item-3-2-2">
                  <input
                    type="text"
                    placeholder="Mobaile number or email address"
                  />
                </div>
                <div className="login-desktop-item-3-2-2">
                  <input type="text" placeholder="New password" />
                </div>
                <div className="login-desktop-item-3-2-3">
                  <span>
                    Date of birth <span className="login-item">?</span>
                  </span>
                  <div className="login-desktop-item-3-2-3-1">
                    <select name="cars" id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
                <div className="login-desktop-item-3-2-3">
                  <span>
                    Gender <span className="login-item">?</span>
                  </span>
                  <div className="login-desktop-item-3-2-3-1">
                    <div className="login-desktop-item-3-2-3-1-1">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                      />
                       <label for="female">Female</label>
                    </div>
                    <div className="login-desktop-item-3-2-3-1-1">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                      />
                       <label for="male">Male</label>
                    </div>
                    <div className="login-desktop-item-3-2-3-1-1">
                      <input
                        type="radio"
                        id="custom"
                        name="gender"
                        value="custom"
                      />
                       <label for="custom">Custom</label>
                    </div>
                  </div>
                </div>
                <div className="login-desktop-item-3-2-4">
                  <span>
                    People who use our service may have uploaded your contact
                    information to Facebook.
                    <Link to="/" className="login-desktop-item-3-2-4-a">
                      Learn more.
                    </Link>
                    <br />
                    By clicking Sign Up, you agree to our
                    <Link to="/" className="login-desktop-item-3-2-4-a">
                      Terms,
                    </Link>
                    <Link to="/" className="login-desktop-item-3-2-4-a">
                      Privacy Policy.
                    </Link>
                    and
                    <Link to="/" className="login-desktop-item-3-2-4-a">
                      Cookies Policy.
                    </Link>
                    You may receive SMS notifications from us and can opt out at
                    any time.
                  </span>
                </div>

                <button className="sign-up-btn">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login