import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { changeContact } from "../../redux/contacts/operations";
import css from "./FormEdit.module.css";

interface FormEditProps {
  id: string;
  username: string;
  birthday_date: string;
  email: string;
  phone_number: string;
  address: string;
}

export const FormEdit: React.FC<FormEditProps> = ({
  id,
  username,
  birthday_date,
  email,
  phone_number,
  address,
}) => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  interface InitialValues {
    name: string;
    birthday_date: string;
    email: string;
    phone_number: string;
    address: string;
  }

  const initialValues: InitialValues = {
    name: username,
    birthday_date,
    email,
    phone_number,
    address,
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(1).max(255).required(),
    birthday_date: Yup.string()
      .matches(
        /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
        "Invalid date format (YYYY-MM-DD., 2000-01-12)"
      )
      .required("Birthday date is required"),
    email: Yup.string().email().min(1).max(254).required(),
    phone_number: Yup.string()
      .matches(
        /^\+\d{1,4}\d{9}$/,
        "Invalid phone number format (+380446615727)"
      )
      .min(1)
      .max(20)
      .required("Phone number is required"),
    address: Yup.string().min(1).required(),
  });

  function handleSubmit(
    values: InitialValues,
    { resetForm }: { resetForm: () => void }
  ) {
    dispatch(changeContact({ id, ...values }));

    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          <span className={css.text}>Name</span>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage component="div" name="name" className={css.error} />
        </label>

        <label htmlFor="birthday_date" className={css.label}>
          <span className={css.text}>Birthday date</span>
          <Field
            type="birthday_date"
            name="birthday_date"
            className={css.input}
          />
          <ErrorMessage
            component="div"
            name="birthday_date"
            className={css.error}
          />
        </label>

        <label htmlFor="email" className={css.label}>
          <span className={css.text}>Email</span>
          <Field type="email" name="email" className={css.input} />
          <ErrorMessage component="div" name="email" className={css.error} />
        </label>

        <label htmlFor="phone_number" className={css.label}>
          <span className={css.text}>Phone</span>
          <Field type="text" name="phone_number" className={css.input} />
          <ErrorMessage
            component="div"
            name="phone_number"
            className={css.error}
          />
        </label>

        <label htmlFor="address" className={css.label}>
          <span className={css.text}>Phone</span>
          <Field type="text" name="address" className={css.input} />
          <ErrorMessage component="div" name="address" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          Edit
          <span className={css.span} />
        </button>
      </Form>
    </Formik>
  );
};
