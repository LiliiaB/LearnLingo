import css from "./SectionHero.module.css";
import hero from "../../assets/hero.png";

export const SectionHero = () => {
  return (
    <div className={css.hero}>
      <div>
        <h1 className={css.herotitle}>
          Unlock your potential with the best{" "}
          <span className={css.herospan}>language</span> tutors
        </h1>
        <p className={css.herotext}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button className={css.herobtn}>Get started</button>
      </div>
      <div className={css.heroimage}>
        <img src={hero} alt="woman with macbook" />
      </div>
      <div className={css.underherosection}></div>
    </div>
  );
};

export default SectionHero;
