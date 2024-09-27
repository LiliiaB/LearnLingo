import css from "./TeachersList.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../redux/teachers/operations";
import Loader from "../Loader/Loader";

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
      {teachers && teachers.length > 0 ? (
        <ul className={css.main}>
          {teachers.map((teacher) => (
            <li key={teacher.id} className={css.card}>
              <div>
                <img src={teacher.avatar_url} alt="foto" className={css.img} />
              </div>
              <div className={css.cardtext}>
                <p>
                  {teacher.name} {teacher.surname}
                </p>
                <p>Speaks: {teacher.languages}</p>
                <p>Lesson info: {teacher.lesson_info}</p>
                <p>Conditions: {teacher.conditions}</p>
                <button>Read more</button>
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
