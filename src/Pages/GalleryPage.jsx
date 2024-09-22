import Card from "../components/Card/Card";
import css from "./GalleryPage.module.css";

export default function GalleryPage() {
  return (
    <div className={css.gallery}>
      <h2>VINCITORI 2024</h2>
      <Card />
    </div>
  );
}
