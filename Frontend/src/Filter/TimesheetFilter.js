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
import React from "react";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./Filter.css";
import { FormControl } from "@mui/base";

function TimeSheetFilter() {
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
          <AccountCircleOutlinedIcon
            style={{ color: "black" }}
          ></AccountCircleOutlinedIcon>
          <span style={{ color: "grey", marginLeft: "5px" }}>Manoj</span>
        </Toolbar>
      </AppBar>
      <Box className="timeEnatry">
        <Typography
          style={{
            color: "grey",
            marginLeft: "10px",
            fontSize: "25px",
            fontWeight: 700,
          }}
        >
          Genratore Time entry for
        </Typography>
        <Box
          style={{ marginLeft: "20px", display: "flex", width: "35%" }}
          justifyContent="space-around"
        >
          <Box>
            {" "}
            <Typography>Name </Typography>
            <Typography style={{ fontWeight: "600", color: "gray" }}>
              Manoj Taneja
            </Typography>
          </Box>
          <Box>
            {" "}
            <Typography>No. of Hours </Typography>
            <Typography style={{ fontWeight: "600", color: "gray" }}>
              25
            </Typography>
          </Box>
          <Box>
            {" "}
            <Typography>File Name/path</Typography>
            <Typography style={{ fontWeight: "600", color: "gray" }}>
              tst.csv
            </Typography>
          </Box>
        </Box>
        <Button className="timeEnatryButton">Genrate Another</Button>
      </Box>
      <Box className="showOnly">
        <Typography
          style={{
            color: "grey",
            marginLeft: "10px",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Show Only
        </Typography>
        <Box
          style={{
            marginLeft: "20px",
            display: "flex",
            width: "50%",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="New Entries"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Old Entries"
              />
            </RadioGroup>
          </FormControl>
          <Typography style={{ fontWeight: "600", color: "gray" }} type="date">
            Selected date
          </Typography>
          <TextField id="outlined-basic" size="small" variant="outlined" />
          <NavigateNextSharpIcon></NavigateNextSharpIcon>Next
          <NavigateBeforeIcon />
          Back
        </Box>
        <Button
          className="sbutton"
          sx={{
            background: "#464775",
            "&:hover": { backgroundColor: "#464775" },
          }}
        >
          Download csv
        </Button>
      </Box>
      <Box className="tableEntry">
        <Typography className="tableEntrytxt">Time Entries Table</Typography>
      </Box>
      <Box className="footer">
        <Typography className="footertxt">@copyight TEG 2023</Typography>
      </Box>
    </Box>
  );
}

export default TimeSheetFilter;
