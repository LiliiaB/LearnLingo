import TeachersList from "../components/TeachersList/TeachersList";
import { useState, useEffect } from "react";
import css from "./TeachersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../redux/teachers/operations";
import { selectTeachers, selectError } from "../redux/teachers/selectors";
import SearchBar from "../components/SearchBar/SearchBar";

export default function TeachersPage() {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const error = useSelector(selectError);

  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [filters, setFilters] = useState({
    language: "",
    level: "",
    price: "",
  });

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  useEffect(() => {
    const filtered = teachers.filter((teacher) => {
      const matchLanguage =
        filters.language === "" || teacher.languages.includes(filters.language);
      const matchLevel =
        filters.level === "" || teacher.level === filters.level;
      const matchPrice =
        filters.price === "" ||
        teacher.price_per_hour <= parseInt(filters.price, 10);

      return matchLanguage && matchLevel && matchPrice;
    });

    setFilteredTeachers(filtered);
  }, [filters, teachers]);

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };
  return (
    <div className={css.gallery}>
      {error && <p>Some error happened</p>}
      <SearchBar onFilterChange={handleFilterChange} />
      <TeachersList teachers={filteredTeachers} />
    </div>
  );
}
