import css from "./TeachersList.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../redux/teachers/operations";

export const TeachersList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.data);
  const status = useSelector((state) => state.teachers.status);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error loading teachers</p>;
  }

  return (
    <div>
      <h1>Teachers List</h1>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.name} {teacher.surname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachersList;
