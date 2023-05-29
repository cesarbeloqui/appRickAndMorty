import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Form.module.css";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    validation(
      { ...userData, [event.target.name]: event.target.value },
      errors,
      setErrors,
      event.target.name
    );
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.container}>
      <form action="" className={styles.formulario}>
        <div>
          <label htmlFor="">Email:</label>
          <input
            type="text"
            className={`form-control ${styles.input}`}
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <p>{errors.email}</p>
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input
            type="text"
            className={`form-control ${styles.input}`}
            value={userData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <p>{errors.password}</p>
        </div>
        <button className="btn btn-primary mb-3" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
