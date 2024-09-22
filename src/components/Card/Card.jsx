import css from "./Card.module.css";

import img1 from "../../images/cheesecake.jpg";
import img2 from "../../images/dog.jpg";
import img3 from "../../images/flowers.jpg";

export const Card = () => {
  return (
    <div className={css.gallery}>
      <div className={css.item}>
        <img className={css.img} src={img1} width="200" />
        <p>Primo premio</p>
      </div>
      <div className={css.item}>
        <img className={css.img} src={img2} width="200" />
        <p>Secondo premio</p>
      </div>
      <div className={css.item}>
        <img className={css.img} src={img3} width="200" />
        <p>Terzo premio</p>
      </div>
    </div>
  );
};

export default Card;
