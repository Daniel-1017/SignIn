import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <section style={{ paddingTop: "20px" }}>
      <form className="d-flex flex-wrap">
        <div className="col-sm-6 d-flex align-items-center mb-3">
          <label
            htmlFor="input"
            style={{ width: "30%", textAlign: "right", fontWeight: "bold" }}
          >
            Execution process start date from
          </label>

          <div className="w-50 mx-4 position-relative">
            <input
              type="date"
              id="input"
              className={`${classes["form-control"]} w-100 px-2`}
            />
          </div>
          <div style={{ width: "20%" }}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="mx-2 fw-bold">
              Reverse
            </label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
