import css from "./Authorization.module.css";

export const Authorization = () => {
  return (
    <div>
      <button className={css.btnlogin}>
        <img
          src="/src/assets/login.png"
          alt="Login Icon"
          className={css.iconlogin}
        />
        Log in
      </button>
      <button className={css.btnregister}>Register</button>
    </div>
  );
};

export default Authorization;
