import React from "react";
import Form from "../Form/Form";
import Container from "../Container/Container";
import IncassoLogo from "../../assets/images/incasso.png";
import classes from "./SignIn.module.css";

const SignIn = () => {
  return (
    <section className={classes["sign-in-section"]}>
      <img src={IncassoLogo} alt="" />
      <div className={`${classes["form-container"]} m-4`}>
        <Container className="h-100 d-flex justify-content-center align-items-center">
          <Form />
        </Container>
      </div>
      <p className="text-white">Copyright &copy; 2014 Incasso</p>
    </section>
  );
};

export default SignIn;
