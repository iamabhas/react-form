import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [personInfo, setPersonInfo] = useState({ username: "", password: "" });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPersonInfo({ ...personInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonInfo({ username: "", password: "" });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label for="username">Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          id="username"
          value={personInfo.username}
          onChange={handleChange}
        />

        <Form.Label for="password">Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          id="password"
          value={personInfo.password}
          onChange={handleChange}
        />

        <br></br>
        <Form.Control
          className="bg-info text-dark"
          type="submit"
          value="Login"
        />
        <br></br>
        <button
          className="btns"
          onClick={() => {
            navigate("./forgotPassword");
          }}
        >
          Forgot Password ?
        </button>
        <button
          className="btns"
          onClick={() => {
            navigate("./signup");
          }}
        >
          Sign up
        </button>
      </Form.Group>
    </Form>
  );
}

export default LoginForm;
