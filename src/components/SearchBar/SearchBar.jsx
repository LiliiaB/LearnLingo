import css from "./SearchBar.module.css";
import { useEffect } from "react";
import { Formik, Form, Field } from "formik";

const SearchBar = ({ onFilterChange }) => {
  const initialValues = {
    language: "",
    level: "",
    price: "",
  };
  const handleFilterChange = (values) => {
    onFilterChange(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={() => {}}
    >
      {({ values, handleChange }) => (
        <Form className={css.form}>
          <div className={css.filter}>
            <label htmlFor="language" className={css.label}>
              Languages
            </label>
            <Field
              as="select"
              name="language"
              className={css.select}
              onChange={(e) => {
                handleChange(e);
                handleFilterChange({ ...values, language: e.target.value });
              }}
            >
              <option value=""></option>
              <option value="French">French</option>
              <option value="English">English</option>
              <option value="German">German</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Polish">Polish</option>
            </Field>
          </div>
          <div className={css.filter}>
            <label htmlFor="level" className={css.label}>
              Level of knowledge
            </label>
            <Field
              as="select"
              name="level"
              className={css.select}
              onChange={(e) => {
                handleChange(e);
                handleFilterChange({ ...values, level: e.target.value });
              }}
            >
              <option value=""></option>
              <option value="A1">A1 Beginner</option>
              <option value="A2">A2 Elementary</option>
              <option value="B1">B1 Intermediate</option>
              <option value="B2">B2 Upper-Intermediate</option>
            </Field>
          </div>
          <div className={css.filter}>
            <label htmlFor="price" className={css.label}>
              Price
            </label>
            <Field
              as="select"
              name="price"
              className={css.select}
              onChange={(e) => {
                handleChange(e);
                handleFilterChange({ ...values, price: e.target.value });
              }}
            >
              <option value=""></option>
              <option value="10">10$</option>
              <option value="20">20$</option>
              <option value="30">30$</option>
              <option value="40">40$</option>
            </Field>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
