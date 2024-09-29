import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./Modalbooktrial.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "60vw",
    maxHeight: "60vh",
    overflow: "auto",
  },
};

Modal.setAppElement("#root");

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  reason: Yup.string().required("Please select a reason"),
});

function Modalbooktrial({ isModalOpen, closeModal }) {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    reason: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Book Trial Lesson Modal"
      style={customStyles}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.mainmodal}>
            <h2>Book trial lesson</h2>
            <p>
              Our experienced tutor will assess your current language level,
              discuss your learning goals, and tailor the lesson to your
              specific needs.
            </p>
            <h3>What is your main reason for learning?</h3>
            <div>
              <fieldset className={css.fieldset}>
                <div>
                  <input
                    className={css.input}
                    type="radio"
                    name="reason"
                    value="career"
                  />
                  <label> Career and Business</label>
                </div>
                <div>
                  <input
                    className={css.input}
                    type="radio"
                    name="reason"
                    value="kids"
                  />
                  <label> Lesson for kids</label>
                </div>
                <div>
                  <input
                    className={css.input}
                    type="radio"
                    name="reason"
                    value="abroad"
                  />
                  <label> Living abroad</label>
                </div>
                <div>
                  <input
                    className={css.input}
                    type="radio"
                    name="reason"
                    value="exams"
                  />
                  <label> Exams and courses</label>
                </div>
                <div>
                  <input
                    className={css.input}
                    type="radio"
                    name="reason"
                    value="travel"
                  />

                  <label> Culture, travel or hobby</label>
                </div>
              </fieldset>
            </div>

            <div>
              <label htmlFor="name">Full Name</label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="phone">Phone number</label>
              <Field type="text" name="phone" />
              <ErrorMessage
                name="phone"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <button className={css.bookbtn} type="submit">
              Book
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
export default Modalbooktrial;
