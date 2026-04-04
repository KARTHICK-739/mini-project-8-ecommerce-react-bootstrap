import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignupScreen() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    userType: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    validateField(name, type === "checkbox" ? checked : value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "firstName":
        newErrors.firstName = value === "" ? "First name is required" : "";
        break;
      case "lastName":
        newErrors.lastName = value === "" ? "Last name is required" : "";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email = !emailRegex.test(value) ? "Enter a valid email" : "";
        break;
      case "password":
        newErrors.password =
          value.length < 6 ? "Password must be at least 6 characters" : "";
        break;
      case "confirmPassword":
        newErrors.confirmPassword =
          value !== formData.password ? "Passwords do not match" : "";
        break;
      case "phoneNumber":
        newErrors.phoneNumber =
          value.length < 10 ? "Enter a valid 10 digit number" : "";
        break;
      case "gender":
        newErrors.gender = value === "" ? "Please select a gender" : "";
        break;
      case "userType":
        newErrors.userType = value === "" ? "Please select user type" : "";
        break;
      case "agreeTerms":
        newErrors.agreeTerms = !value ? "You must agree to terms" : "";
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const getValidationClass = (field) => {
    if (!errors[field] && formData[field] !== "" && formData[field] !== false) {
      return "is-valid";
    }
    if (errors[field]) {
      return "is-invalid";
    }
    return "";
  };

  const isFormValid = () => {
    return (
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.email !== "" &&
      formData.password.length >= 6 &&
      formData.confirmPassword === formData.password &&
      formData.phoneNumber.length >= 10 &&
      formData.gender !== "" &&
      formData.userType !== "" &&
      formData.agreeTerms === true &&
      Object.values(errors).every((error) => error === "")
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      alert(`Welcome ${formData.firstName}! Account created successfully!`);
      navigate("/");
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h3 className="fw-bold text-center mb-4">Create Account</h3>

              <Form onSubmit={handleSubmit}>
                {/* First Name and Last Name */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        className={getValidationClass("firstName")}
                      />
                      <div className="invalid-feedback">{errors.firstName}</div>
                      <div className="valid-feedback">Looks good!</div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        className={getValidationClass("lastName")}
                      />
                      <div className="invalid-feedback">{errors.lastName}</div>
                      <div className="valid-feedback">Looks good!</div>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className={getValidationClass("email")}
                  />
                  <div className="invalid-feedback">{errors.email}</div>
                  <div className="valid-feedback">Looks good!</div>
                </Form.Group>

                {/* Password */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        className={getValidationClass("password")}
                      />
                      <div className="invalid-feedback">{errors.password}</div>
                      <div className="valid-feedback">Looks good!</div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                        className={getValidationClass("confirmPassword")}
                      />
                      <div className="invalid-feedback">
                        {errors.confirmPassword}
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Phone Number */}
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className={getValidationClass("phoneNumber")}
                  />
                  <div className="invalid-feedback">{errors.phoneNumber}</div>
                  <div className="valid-feedback">Looks good!</div>
                </Form.Group>

                {/* Gender */}
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={getValidationClass("gender")}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                  <div className="invalid-feedback">{errors.gender}</div>
                </Form.Group>

                {/* User Type */}
                <Form.Group className="mb-3">
                  <Form.Label>I am a:</Form.Label>
                  <div className="d-flex gap-4">
                    <Form.Check
                      type="radio"
                      label="Student"
                      name="userType"
                      value="student"
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Professional"
                      name="userType"
                      value="professional"
                      onChange={handleChange}
                    />
                  </div>
                  {errors.userType && (
                    <small className="text-danger">{errors.userType}</small>
                  )}
                </Form.Group>

                {/* Terms */}
                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    name="agreeTerms"
                    label="I agree to the Terms and Conditions"
                    onChange={handleChange}
                    checked={formData.agreeTerms}
                  />
                  {errors.agreeTerms && (
                    <small className="text-danger">{errors.agreeTerms}</small>
                  )}
                </Form.Group>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 py-2"
                  disabled={!isFormValid()}
                >
                  Create Account
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupScreen;
