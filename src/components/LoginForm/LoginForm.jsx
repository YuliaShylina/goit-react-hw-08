import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .min(5, "Email must be at least 5 characters")
      .max(50, "Email must not exceed 50 characters")
      .required("*Required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password must not exceed 50 characters")
      .required("*Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container} autoComplete="off">
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
          Log in
        </button>
      </Form>
    </Formik>
  );
}
