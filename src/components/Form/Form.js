import React from "react";
import classes from "./Form.module.css";
import Container from "../Container/Container";

const Form = () => {
  return (
    <section>
      <Container className={classes.container}>
        <form className="w-100">
          <div className="form-row d-flex justify-content-between ">
            <div className="form-group col-md-5 d-flex align-items-center">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className={`form-control ${classes.input}`}
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-5 d-flex align-items-center">
              <label htmlFor="inputPassword4" className="mr-4">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${classes.input}`}
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Form;
