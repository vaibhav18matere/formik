import React from "react";
import { useFormik } from "formik";

export const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      stream: "",
    },
    onSubmit: (values) => {
      console.log("values received are:", { values });
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Required to enter name input field";
      }

      if (!values.email) {
        errors.email = "Required to enter name email field";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.stream) {
        errors.stream = "Required to enter name Stream field";
      }

      return errors;
    },
  });

  return (
    <>
      <div className="form__container">
        <span>using custom validation prop</span>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name : </label>
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
          <label htmlFor="email">Email : </label>
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
          <label htmlFor="stream">Stream : </label>
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
          <button type="submit">Submit : </button>
        </form>
      </div>
    </>
  );
};
