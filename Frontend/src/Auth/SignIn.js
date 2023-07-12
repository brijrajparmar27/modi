import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Grid, Link } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Home from "../TimeSheetGenerator/Home";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/auth/signin",
          values
        );
        console.log(response.data.password);
        console.log("Sign In successful:", response.data);
        toast.success("Sign In successful");
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            email: response.data.email,
            password: response.data.password,
          })
        );
        Navigate("/Home");
      } catch (error) {
        console.log("Sign In failed:", error.message);
        toast.error("Sign In failed");
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
          Login to Access the application
        </h2>
        <Box
          onSubmit={formik.handleSubmit}
          component="form"
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            margin="normal"
            required
            id="email"
            label="Email Id"
            name="email"
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
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            sx={{ mt: 3 }}
          >
            <Grid
              item
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
                Sign In
              </Button>
            </Grid>
            <Grid item>
              <Link
                href="http://localhost:3000/SignUp"
                variant="body2"
                sx={{ color: "#464775", textDecoration: "none" }}
              >
                New user Signup
              </Link>
            </Grid>
          </Grid>
        </Box>
        <ToastContainer position="top-center" />
      </Box>
    </div>
  );
};

export default SignIn;
