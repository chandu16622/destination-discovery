import React, { useState } from "react";
import signupBg from "../images/login-bg.jpg"; // ✅ change path to your image

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = () => {
    let formErrors = {};
    const { email, password, confirmPassword } = formData;

    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid.";
    }

    if (!password) {
      formErrors.password = "Password is required.";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form data submitted:", formData);
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };
  

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${signupBg})`, // ✅ background image added
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isSubmitted && Object.keys(errors).length === 0 ? (
        <div
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            fontSize: "1.2rem",
            fontWeight: "600",
          }}
        >
          ✅ Success! Account created.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            width: "350px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#333",
              fontWeight: "700",
            }}
          >
            Sign Up
          </h2>

          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.email}</p>
            )}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            {errors.password && (
              <p style={{ color: "red", fontSize: "0.9rem" }}>
                {errors.password}
              </p>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            {errors.confirmPassword && (
              <p style={{ color: "red", fontSize: "0.9rem" }}>
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#6e40ec",
              color: "white",
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
