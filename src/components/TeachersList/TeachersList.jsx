import css from "./TeachersList.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../redux/teachers/operations";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import bookopen from "../../assets/bookopen.png";
import vector from "../../assets/vector.png";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";

export const TeachersList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.items);
  const isLoading = useSelector((state) => state.teachers.isLoading);
  const error = useSelector((state) => state.teachers.error);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error loading teachers</p>;
  }

  return (
    <div>
      <SearchBar />
      {teachers && teachers.length > 0 ? (
        <ul className={css.main}>
          {teachers.map((teacher) => (
            <li key={teacher.id} className={css.card}>
              <div>
                <img src={teacher.avatar_url} alt="foto" className={css.img} />
              </div>
              <div className={css.cardtext}>
                <div className={css.teacherrating}>
                  <p>
                    <img className={css.icon} src={bookopen} alt="bookicon" />{" "}
                    {""}
                    <span className={css.spantext}>Lessions online {""}</span>
                    <img className={css.vector} src={vector} />
                  </p>
                  <p>
                    <span className={css.spantext}>
                      Lessions done: {teacher.lessons_done}
                    </span>{" "}
                    {""}
                    <img className={css.vector} src={vector} />
                  </p>
                  <p className={css.spantext}>
                    <img className={css.icon} src={star} alt="staricon" /> {""}
                    <span>Rating: {teacher.rating}</span> {""}
                    <img className={css.vector} src={vector} />
                  </p>
                  <p>
                    <span>
                      Price / 1 hour:{" "}
                      <span className={css.green}>
                        {teacher.price_per_hour}$
                      </span>
                    </span>{" "}
                    {""}
                  </p>
                  <img src={heart} alt="heart" className={css.heart} />
                </div>

                <p className={css.name}>
                  {teacher.name} {teacher.surname}
                </p>
                <p className={css.p}>
                  <span className={css.span}>Speaks:</span> {teacher.languages}
                </p>
                <p className={css.p}>
                  <span className={css.span}>Lesson info:</span>{" "}
                  {teacher.lesson_info}
                </p>
                <p className={css.p}>
                  <span className={css.span}>Conditions:</span>{" "}
                  {teacher.conditions}
                </p>
                <button className={css.btn}>Read more</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No teachers available.</p>
      )}
    </div>
  );
};

export default TeachersList;
