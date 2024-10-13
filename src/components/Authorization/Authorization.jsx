import css from "./Authorization.module.css";
import login from "../../assets/login123.png";

export const Authorization = () => {
  return (
    <div>
      <button className={css.btnlogin}>
        <img src={login} alt="Login Icon" className={css.iconlogin} />
        Log in
      </button>
      <button className={css.btnregister}>Register</button>
    </div>
  );
};

export default Authorization;
