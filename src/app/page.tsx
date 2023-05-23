"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function Home() {
  const [data, setData] = useState({ name: "", lastname: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleData = (e: any) => {
    e.preventDefault();
    console.log("Nombre:", data.name);
    console.log("Apellido:", data.lastname);
  };

  return (
    <main className={styles.main}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography className="text">Login</Typography>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="textfield"
            name="name"
            value={data.name}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="outlined-basic"
            label="LastName"
            variant="outlined"
            className="textfield"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
          ></TextField>
          <CardActions className="btn-content">
            <Button className="btn-send" onClick={handleData}>
              Send
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </main>
  );
}
