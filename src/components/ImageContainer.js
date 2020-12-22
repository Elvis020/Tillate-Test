import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { data, data2 } from "../ArrayData";

const useStyles = makeStyles((theme) => ({
  // root:{
  //   display: "flex",
  //   flexFlow: 'column wrap',
  //   backgroundColor: "pink",
  //   flexDirection: "row"
  // },
  paper: {
    backgroundColor: "grey",
    padding: "2em",
    // margin: "1em",
    // maxWidth: 250,
    // border: "1px solid black",
    // whiteSpace: 'nowrap',

  },
}));

const ImageContainer = () => {
  const [photos, setPhotos] = useState(data2);
  const myUI = useStyles();

  // const loadData = async () => {
  //   const URL = "https://jsonplaceholder.typicode.com/photos";
  //   const res = await fetch(URL);
  //   const data = await res.json();
  //   const selectedData = await data.splice(1, 10);
  //   setPhotos(selectedData);
  //   console.log(selectedData);
  // };

  // useEffect(() => {
  //   // loadData();
  // }, []);
  return (
    <>
      {photos.map((photo) => {
        const { title, url, id, thumbnailUrl } = photo;
        const evenId = id % 2 === 0;
        return (
            <>
              {evenId && (
                <Grid container spacing={4} > 
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper key={id} className={myUI.paper}>
                      <Typography variant="h1">{id}</Typography>
                      <Typography variant="h5">{title}</Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {url}
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
            )}
            </>
        );
      })}
    </>
  );
};

export default ImageContainer;


