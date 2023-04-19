import React from "react";

export const UserForm = () => {
  return (
    <>
      <h4>UserForm</h4>
      <div className="form__container">
        <form>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" name="name" autoComplete="off" />
          <label htmlFor="email">Email : </label>
          <input type="email" id="email" name="email" autoComplete="off" />
          <label htmlFor="stream">Stream : </label>
          <input type="text" id="stream" name="stream" autoComplete="off" />
          <button>Submit : </button>
        </form>
      </div>
    </>
  );
};
