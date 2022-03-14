import React from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <form className="w-50 pb-4" style={{ borderBottom: "1px solid #ccc" }}>
      <h1 className="text-center mb-5">Sign in</h1>
      <div className="form-group mb-4 position-relative">
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <FaUserAlt className={classes["input-icon"]} />
      </div>
      <div className="form-group mb-4 position-relative">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
        <FaLock className={classes["input-icon"]} />
      </div>
      <div className="form-check mb-4">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-secondary w-100">
        Submit
      </button>
    </form>
  );
};

export default Form;
