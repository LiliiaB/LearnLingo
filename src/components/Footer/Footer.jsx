import css from "./Footer.module.css";

import logo1 from "../../images/benacchio.png";
import logo2 from "../../images/logo2m.png";

export const Footer = () => {
  return (
    <>
      <footer className={css.footer}>
        <div className={css.sponsorRow}>
          <img src={logo1} alt="Sponsor 1" className={css.sponsorLogo} />
          <img src={logo2} alt="Sponsor 2" className={css.sponsorLogo} />
        </div>
        <div className={css.copyright}>
          &copy; 2024 Lilia Levchenko. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
