import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardContent } from "@mui/material";
import { Card, Grid } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function Detail() {
  const staff = useParams();

  const [APIData, setAPIData] = useState([]);
  const getStaffsUrl = `https://654a5b7c1f197d51e4921a16.mockapi.io/api/char/${staff.id}`;

  useEffect(() => {
    fetch(getStaffsUrl, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
      })
      .catch((error) => console.log(error.message));
  }, [getStaffsUrl]);

  return (
    <div>
      <h1>Detail</h1>
      <Grid container rowSpacing={2}>
        <Grid className="parent" item xs={12}>
          <Card className="child" sx={{ maxWidth: 545 }}>
            <CardMedia
              sx={{ height: 440 }}
              image={APIData.avatar}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>Name: </b>
                <a>{APIData.name}</a>
              </Typography>

              <Typography gutterBottom variant="h5" component="div">
                <b>Age: </b> {APIData.age}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <b>address: </b> {APIData.address}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <b>Magic Type: </b> {APIData.magic_type}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
