import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const StudentForm = () => {
  const initialValues = {
    name: "",
    email: "",
    stream: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("values received are:", { values });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .email("Invalid email format!")
      .required("email is mandatory"),
    stream: Yup.string().required("Stream is required field"),
    password: Yup.string().required("password is required bro"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <div className="form__container">
        <span>using "yup" - third party library</span>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Student Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
          <label htmlFor="email">Student Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
          <label htmlFor="stream">Student Stream : </label>
          <input
            type="text"
            id="stream"
            name="stream"
            autoComplete="off"
            value={formik.values.stream}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.stream && formik.touched.stream && (
            <div className="error">{formik.errors.stream}</div>
          )}
          <label htmlFor="password">Password : </label>
          <input
            type="text"
            id="password"
            name="password"
            autoComplete="off"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
          <button type="submit">Submit : </button>
        </form>
      </div>
    </>
  );
};
