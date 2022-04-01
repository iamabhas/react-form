import React from "react";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function ErrorPage() {
  let navigate = useNavigate();
  return (
    <>
      <Alert className="alert h2" variant="danger">
        Error ! Page not Found
      </Alert>
      <Button
        variant="info"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </Button>
    </>
  );
}

export default ErrorPage;
