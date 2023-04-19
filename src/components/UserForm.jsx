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
  });

  return (
    <>
      <h4>UserForm</h4>
      <div className="form__container">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label htmlFor="stream">Stream : </label>
          <input
            type="text"
            id="stream"
            name="stream"
            autoComplete="off"
            value={formik.values.stream}
            onChange={formik.handleChange}
          />
          <button type="submit">Submit : </button>
        </form>
      </div>
    </>
  );
};
