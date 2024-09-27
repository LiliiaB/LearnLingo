//import css from "./TeachersList.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../redux/teachers/operations";

export const TeachersList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.items);
  const isLoading = useSelector((state) => state.teachers.isLoading);
  const error = useSelector((state) => state.teachers.error);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading teachers</p>;
  }

  return (
    <div>
      {teachers && teachers.length > 0 ? (
        <ul>
          {teachers.map((teacher) => (
            <li key={teacher.id}>
              {teacher.name} {teacher.surname}
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
