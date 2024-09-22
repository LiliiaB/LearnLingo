import css from "./Artista.module.css";
import cane from "../../images/cane.jpg";

export const Artista = () => {
  return (
    <div className={css.author}>
      <h3>artista Nadia Kuzina</h3>
      <img src={cane} alt="dog-image" className={css.cane} />
    </div>
  );
};

export default Artista;
