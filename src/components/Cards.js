import React, { useState,useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { data2 } from "../ArrayData";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
    padding: "1.5rem",
  },
  paper: {
    backgroundColor: "grey",
    padding: "1em",
    maxWidth: 345,
    maxHeight:300,
    overflow: 'hidden'
  },
}));

const Cards = () => {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);


  const loadData = async () => {
    const URL = "https://jsonplaceholder.typicode.com/photos";
    const res = await fetch(URL);
    const data = await res.json();
    const selectedData = await data.splice(1, 10);
    setPhotos(selectedData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {photos.map((photo) => {
        const { title, url, id, thumbnailUrl } = photo;
        const evenId = id % 2 === 0;
      })}
      <Grid container spacing={8} className={classes.grid}>
        {photos.map((photo) => {
          const { title, url, id, thumbnailUrl } = photo;
          const evenId = id % 2 === 0;
          return (
            <>
              {evenId && (
                <Grid key={id} item xs={12} sm={6} md={4}>
                  <Paper className={classes.paper}>
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
              )}
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Cards;
