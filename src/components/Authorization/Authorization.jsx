import css from "./Authorization.module.css";
import login from "../../assets/login123.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalSignAuth from "../ModalSignAuth/ModalSignAuth";
import { logInThunk, logOutThunk } from "../../redux/auth/operation";

export const Authorization = () => {
  const dispatch = useDispatch();
  const { isAuth, isAuthLoading } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(logInThunk({ email, password }));
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    dispatch(logOutThunk());
  };
  return (
    <div className={css.container}>
      {isAuth ? (
        <div className={css.loggedInContainer}>
          <p>You are logged in!</p>
          <button className={css.btnLogout} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className={css.div}>
          <button
            className={css.btnlogin1}
            onClick={() => setShowLoginModal(true)}
          >
            <img src={login} alt="Login Icon" className={css.iconlogin} />
            Log in
          </button>
          <button
            className={css.btnregister1}
            onClick={() => setShowRegisterModal(true)}
          >
            Register
          </button>
        </div>
      )}

      {}
      <ModalSignAuth
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      >
        <form className={css.authForm} onSubmit={handleLogin}>
          <h2 className={css.h1}>Log In</h2>
          <p className={css.p}>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </p>
          <div className={css.inputContainer}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className={css.inputField}
            />
          </div>

          <div className={css.inputContainer}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className={css.inputField}
            />
          </div>

          <button
            type="submit"
            className={css.btnlogin}
            disabled={isAuthLoading}
          >
            {isAuthLoading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </ModalSignAuth>

      {}
      <ModalSignAuth
        show={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      >
        <form className={css.authForm}>
          <h2>Register</h2>
          <div className={css.inputContainer}>
            <label htmlFor="registerName">Name:</label>
            <input
              type="text"
              id="registerName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={css.inputField}
            />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor="registerEmail">Email:</label>
            <input
              type="email"
              id="registerEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={css.inputField}
            />
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="registerPassword">Password:</label>
            <input
              type="password"
              id="registerPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={css.inputField}
            />
          </div>

          <button type="submit" className={css.btnregister}>
            Register
          </button>
        </form>
      </ModalSignAuth>
    </div>
  );
};

export default Authorization;
