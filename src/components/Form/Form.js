import React from "react";
import classes from "./Form.module.css";
import Container from "../Container/Container";

const Form = () => {
  return (
    <section>
      <Container className={classes.container}>
        <form className="w-100 d-flex justify-content-between flex-wrap">
          <div className="col-md-5 d-flex align-items-center mb-2">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className={`form-control ${classes.input}`}
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Form;
