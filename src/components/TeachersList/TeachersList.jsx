import css from "./TeachersList.module.css";

export const TeachersList = ({ teachers }) => {
  return (
    <ul className={css.main}>
      {teachers.map((teacher) => (
        <li key={teacher._id}>
          <h3 className={css.name}>{teacher.name}</h3>
          <p className={css.location}>{teacher.location}</p>
        </li>
      ))}
    </ul>
  );
};

export default TeachersList;
