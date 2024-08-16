import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("*Required"),
    email: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("*Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .required("*Required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container} autoComplete="off">
        <div className={css.item}>
          <label className={css.inputLabel}>Username</label>
          <Field className={css.inputItem} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.item}>
          <label className={css.inputLabel}>Email</label>
          <Field className={css.inputItem} type="text" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.item}>
          <label className={css.inputLabel}>Password</label>
          <Field className={css.inputItem} type="text" name="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>

        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
