import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Grid, Link } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:5000/auth/signup", values);
        console.log("Sign-up successful");
        toast.success("Sign-up successful");
      } catch (error) {
        console.log("Sign-up failed:", error.message);
        toast.error("Sign-up failed");
      }
    },
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 15,
          py: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "500px",
          marginRight: "50px",
          maxWidth: "400px",
        }}
      >
        <h1 style={{ textAlign: "left", width: "100%", marginBottom: "10px" }}>
          <span style={{ width: "10px", color: "#464775" }}>TEG</span>{" "}
          <span style={{ fontWeight: "100" }}>time entry generator</span>
        </h1>
        <h2
          style={{
            opacity: "0.6",
            margintop: "3rem",
            textAlign: "left",
            width: "100%",
          }}
        >
          New User Signup
        </h2>
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 1 }}
          style={{ textAlign: "left", width: "100%" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Id"
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Enter Email"
            style={{ width: "85%" }}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter Password"
            style={{ width: "85%" }}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="off"
            placeholder="Enter Password"
            style={{ width: "85%" }}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <Grid
            sx={{ display: "flex", justifyContent: "flex-end", width: "85%" }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                width: 130,
                background: "#464775",
                "&:hover": { backgroundColor: "#464775" },
              }}
            >
              Register
            </Button>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              color: "#464775",
              width: "85%",
            }}
          >
            <Grid>
              <Link
                href="http://localhost:3000/"
                sx={{ color: "#464775", textDecoration: "none" }}
              >
                Already a user, go to Login
              </Link>
            </Grid>
          </Grid>
        </Box>
        <ToastContainer position="top-center" />
      </Box>
    </div>
  );
};

export default SignUp;
