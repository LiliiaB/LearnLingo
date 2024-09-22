import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.main}>
      <div className={css.hero}>
        <h1 className={css.title}>IL MONDO DEI COLORI DEI BAMBINI</h1>
        <h2>ISPIRAZIONE E CREATIVITA</h2>
        <h3>01-16 GIUGNO 2024</h3>
      </div>
      <div className={css.mostra}>
        <p className={css.textmostra}>
          Questa mostra, organizzata dalla Galleria "Veneto Art Gallery", è una
          celebrazione della Creatività infantile espressa su carta ed altri
          materiali. Vengono esposti disegni e lavoretti dei bambini provenienti
          da varie scuole, associazioni e piccoli artisti che condividono con
          gioia le loro visioni con diversi materiali, tra cui anche la
          plastilina.
        </p>
      </div>
    </div>
  );
}
