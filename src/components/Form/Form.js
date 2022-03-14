import React from "react";
import { inputData } from "./InputData";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <section style={{ paddingTop: "20px" }}>
      <form className="d-flex flex-wrap">
        {inputData.map((input) => (
          <div className="col-sm-6 d-flex align-items-center mb-3">
            <label
              htmlFor={input.htmlFor}
              style={{ width: "30%", textAlign: "right", fontWeight: "bold" }}
            >
              {input.label}
            </label>

            <div className="w-50 mx-4 position-relative">
              <input
                type={input.inputType}
                id={input.htmlFor}
                className={`${classes["form-control"]} w-100 px-2`}
              />
            </div>
            <div style={{ width: "20%" }}>
              {input.hasCheckbox && (
                <div>
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember" className="mx-2 fw-bold">
                    Reverse
                  </label>
                </div>
              )}
            </div>
          </div>
        ))}
      </form>
    </section>
  );
};

export default Form;
