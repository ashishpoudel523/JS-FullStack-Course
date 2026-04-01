import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import "./index.css";

function App() {
  const [p, setP] = useState(0);
  const [t, setT] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSI] = useState(0);

  const calculateSI = () => {
    setSI((p * t * r) / 100);
  };

  return (
    <div className="division">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Simple Interest
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <br />
        <TextField
          onChange={(event) => setP(event.target.value)}
          id="outlined-basic"
          label="Enter Principal"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setT(event.target.value)}
          id="outlined-basic"
          label="Enter Time"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setR(event.target.value)}
          id="outlined-basic"
          label="Enter Rate"
          variant="outlined"
        />
        <br />
        <br />
        <Button onClick={() => calculateSI()} variant="contained">
          Calculate SI
        </Button>
        <br />
        <Typography variant="h6" gutterBottom>
          Simple Interest = {si}
        </Typography>
      </Box>
    </div>
  );
}

export default App;
