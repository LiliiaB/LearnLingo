import TeachersList from "../components/TeachersList/TeachersList";
import Loader from "../components/Loader/Loader";
import css from "./TeachersPage.module.css";
import { useEffect } from "react";
import { fetchTeachers } from "../redux/teachers/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTeachers,
  selectLoader,
  selectError,
} from "../redux/teachers/selectors";

export default function TeachersPage() {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const loader = useSelector(selectLoader);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <div className={css.gallery}>
      {loader && <Loader />}
      {error && <p>Some error happened</p>}
      <TeachersList teachers={teachers} />
    </div>
  );
}
