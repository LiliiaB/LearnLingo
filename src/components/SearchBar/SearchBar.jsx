import css from "./SearchBar.module.css";

import { Formik, Form, Field } from "formik";

const SearchBar = () => {
  const initialValues = {
    query: "",
    filter1: "",
    filter2: "",
    filter3: "",
  };

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    // You can process the form values here, like making an API call
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className={css.form}>
          <div className={css.filter}>
            <label htmlFor="filter1" className={css.label}>
              Languages
            </label>
            <Field as="select" name="filter1" className={css.select}>
              <option value="option1">French</option>
              <option value="option2">English</option>
              <option value="option3">German</option>
              <option value="option4">Ukrainian</option>
              <option value="option5">Polish</option>
            </Field>
          </div>
          <div className={css.filter}>
            <label htmlFor="filter2" className={css.label}>
              Level of knowledge
            </label>
            <Field as="select" name="filter2" className={css.select}>
              <option value="optionA">A1 Beginner</option>
              <option value="optionB">A2 Elementary</option>
              <option value="optionC">B1 Intermediate</option>
              <option value="optionD">B2 Upper-Intermediate</option>
            </Field>
          </div>
          <div className={css.filter}>
            <label htmlFor="filter3" className={css.label}>
              Price
            </label>
            <Field as="select" name="filter3" className={css.select}>
              <option value="optionX">10$</option>
              <option value="optionY">20$</option>
              <option value="optionZ">30$</option>
              <option value="optionW">40$</option>
            </Field>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
