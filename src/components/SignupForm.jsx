import React from "react";
import { Formik, Form, useField, Field, FieldArray } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  acceptedTerms: false, // for checkbox
  jobType: "", // for select
  socials: {
    linkedin: "",
    twitter: "",
  },
  contacts: ["", ""],
  phNumbers: [""], // array with only one empty string
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  acceptedTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions."),
  jobType: Yup.string()
    .oneOf(["designer", "development", "product", "other"], "Invalid Job Type")
    .required("Required"),
});

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()] which we can spread on <input>.
  // We can use field meta to show an error message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // When you specify `type` to useField(), it will return the correct bag of props for you --
  // a `checked` prop will be included in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const SignupForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="vaibhav"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="matere"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="vaibhav-matere@gmail.com"
          />

          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            <span>I accept the terms and conditions</span>
          </MyCheckbox>

          <div>
            <label htmlFor="linkedin">LikedIn</label>
            <Field type="text" id="linkedin" name="socials.linkedin" />
          </div>
          <div>
            <label htmlFor="twitter">Twitter</label>
            <Field type="text" id="twitter" name="socials.twitter" />
          </div>
          <div>
            <label htmlFor="primaryPh">Primary Contact</label>
            <Field type="number" id="primaryPh" name="contacts[0]" />
          </div>
          <div>
            <label htmlFor="secondaryPh">Secondary Contact</label>
            <Field type="number" id="secondaryPh" name="contacts[1]" />
          </div>

          <div>
            <label>list of phone numbers</label>
            <FieldArray name="phNumbers">
              {(fieldArrayProps) => {
                // console.log("field array props are", props);
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { phNumbers } = values;
                return (
                  <div>
                    {phNumbers.map((numb, index) => (
                      <div key={index}>
                        <Field type="number" name={`phNumbers[${index}]`} />
                        <button type="button" onClick={() => push("")}>
                          Add phone no.
                        </button>
                        {index > 0 && (
                          <button type="button" onClick={() => remove(index)}>
                            Remove phone no.
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
