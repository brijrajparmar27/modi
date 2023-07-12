import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box, height } from "@mui/system";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import React, { useState } from "react";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
// import "./Filter.css";
import { FormControl } from "@mui/base";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import IconButton from "@mui/material/IconButton";
import { Card, CardContent, Slider, Grid } from "@mui/material";

import "./Home.css";
import { useFormik } from "formik";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
function Home() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [csvFile, setCsvFile] = useState(null);
  const handleUploadCSV = () => {};

  const handleGenerateTimesheet = () => {};

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      hours: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      console.log(csvFile, "csvFile");
      formData.append("file", setCsvFile);
      console.log(values);
      try {
        console.log(formData, "formData");
        const response = await axios.post(
          `http://localhost:5000/csv-to-json/upload/?name=JohnDoe&hours=10&date=01-06-2023`,
          { body: formData }
        );
      } catch (error) {
        console.log("Sign In failed:", error.message);
        // toast.error("Sign In failed");
      }
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }} className="main">
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ fontSize: "30px" }}
          >
            <span style={{ fontWeight: 1000, color: "darkblue" }}>TEG</span>
            <span
              style={{ color: "grey", marginLeft: "10px", fontSize: "25px" }}
            >
              time entry genratore
            </span>
          </Typography>
          {/* <AccountCircleOutlinedIcon
            style={{ color: "black" }}
          ></AccountCircleOutlinedIcon> */}
          {/* <span style={{ color: "grey", marginLeft: "5px" }}>Manoj</span> */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <div className="body">
        <Typography
          style={{ marginTop: "1%", color: "#464775", fontSize: "0.999rem" }}
        >
          Welcome to the Time Entry Generator, here you can easily create and
          manage your time Entries
        </Typography>

        <Typography
          style={{
            marginTop: "1%",
            color: "#464775",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {" "}
          Getting Started
        </Typography>

        <Typography style={{ color: "#464775", fontSize: "0.999rem" }}>
          {" "}
          This tool is designed to help you keep track of your time in a
          convenient and efficent manner <br /> To get started, simply fill out
          the form below your name, the number and upload your CSV file.{" "}
        </Typography>
        <div className="my-card-container">
          <Card className="my-card" sx={{ maxWidth: "45%", height: "75%" }}>
            <CardContent>
              <h2 className="my-card-title">Generate Time Entry</h2>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <TextField
                    label="Name"
                    fullWidth
                    className="my-card-textfield"
                    placeholder="Enter Name"
                    size="small"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h6 className="my-card-text">Hours</h6>
                  <Slider
                    aria-label="Slider"
                    defaultValue={1}
                    min={0}
                    max={100}
                    step={1}
                    id="hours"
                    name="hours"
                    value={formik.values.hours}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    valueLabelDisplay="auto"
                    className="my-card-slider"
                    size="medium"
                    sx={{
                      color: "success.main",
                      "& .MuiSlider-thumb": {
                        borderRadius: "1px",
                      },
                    }}
                  />
                  <Grid>
                    <Button
                      variant="contained"
                      component="label"
                      className="my-card-button"
                      size="small"
                    >
                      Choose File
                      <input
                        type="file"
                        hidden
                        id="file"
                        name="file"
                        value={formik.values.file}
                        onChange={(event) =>
                          setCsvFile(event.currentTarget.files[0])
                        }
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                      />
                    </Button>
                  </Grid>
                </Grid>

                <Grid item container xs={12} justifyContent="flex-end" gap={2}>
                  <Button
                    sx={{ fontSize: "15px", fontWeight: "bolder" }}
                    type="submit"
                    size="small"
                    variant="text"
                    onClick={handleGenerateTimesheet}
                    className="my-card-reset-button"
                  >
                    Reset the form
                  </Button>
                  <Button
                    sx={{ fontSize: "15px", fontWeight: "bolder" }}
                    type="submit"
                    size="small"
                    variant="contained"
                    // onClick={handleGenerateTimesheet}
                    className="my-card-generate-button"
                    onClick={formik.handleSubmit}
                  >
                    Generate Entries
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div>

      <Box className="footer">
        <Typography className="footertxt">@copyight TEG 2023</Typography>
      </Box>
    </Box>
  );
}

export default Home;
