import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
function Signup() {
  const [personInfo, setPersonInfo] = useState({ email: "", password: "" });

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
    <div className="loginContainer">
      <button
        className="btns"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label for="email">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            value={personInfo.email}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label for="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            value={personInfo.password}
            onChange={handleChange}
          />
          <br></br>
          <Button
            variant="info"
            onClick={() => {
              navigate("/");
            }}
            className="btn"
          >
            Sign up
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
export default Signup;
