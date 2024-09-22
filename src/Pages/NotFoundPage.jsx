import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.notfound}>
      <p>Pagina non trovata</p>
      <Link to="/">Clicca qui per tornare indietro</Link>
    </div>
  );
}
