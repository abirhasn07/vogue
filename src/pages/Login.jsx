
import React, { useRef } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Login.css";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

 
 
 
  return (
    <section className="login-form">
      <Navbar />
      <div className="login-container">
        <div className="card">
          <h2>Sign Up</h2> <br />
          <form action="" >
            <div className="form-group" id="email">
              <label htmlFor="email">Email</label> <br />
              <input type="email" required ref={emailRef} />
            </div>
            <div className="form-group" id="password">
              <label htmlFor="password">Password</label> <br />
              <input type="password" required ref={passwordRef} />
            </div>
            <div className="form-group" id="password-confirm">
              <label htmlFor="password-confirm">Password Conformation</label>{" "}
              <br />
              <input type="password" required ref={passwordConfirmRef} />
            </div>
            <br />
            <input type="submit" value="Sign Up" className="sign-up" />
          </form>
        </div>
        <p>Already have an account? Login</p>
      </div>
      <Footer />
    </section>
  );
}
