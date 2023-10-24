import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    password: "",
  };

  const SignupSchema = Yup.object().shape({
    username: Yup.string().min(1).max(150).required(),
    password: Yup.string().min(1).max(128).required(),
  });

  function handleSubmit(values, { resetForm }) {
    dispatch(
      logIn({
        username: values.username,
        password: values.password,
      })
    );

    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      <Form className={css.form}>
        <label htmlFor="username" className={css.label}>
          <span className={css.text}>Username</span>
          <Field type="text" name="username" className={css.input} />
          <ErrorMessage component="div" name="username" className={css.error} />
        </label>

        <label htmlFor="password" className={css.label}>
          <span className={css.text}>Password</span>
          <Field type="password" name="password" className={css.input} />
          <ErrorMessage component="div" name="password" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          Log In
          <span className={css.span} />
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
