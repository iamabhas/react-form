import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
function ForgotPassword() {
  const [passwordInfo, setPasswordInfo] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPasswordInfo({ ...passwordInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordInfo({ oldPassword: "", newPassword: "", confirmPassword: "" });
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
        <Form.Group className="mb-3">
          <br></br>
          <Form.Label for="oldPassword">Old Password</Form.Label>
          <Form.Control
            type="password"
            name="oldPassword"
            id="oldPassword"
            value={passwordInfo.oldPassword}
            onChange={handleChange}
          />
          <br></br>

          <Form.Label for="newPassword">New Password</Form.Label>
          <Form.Control
            type="password"
            name="newPassword"
            id="newPassword"
            value={passwordInfo.newPassword}
            onChange={handleChange}
          />
          <br></br>

          <Form.Label for="confirmPassword">Confirm New Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={passwordInfo.confirmPassword}
            onChange={handleChange}
          />
          <br></br>
          <Button
            variant="info"
            onClick={() => {
              navigate("/");
            }}
          >
            Change Password
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
export default ForgotPassword;
