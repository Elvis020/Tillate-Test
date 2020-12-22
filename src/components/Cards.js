import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LoadingBalls from "./LoadingBalls";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "0 auto"
  },
  grid: {
    width: "100%",
    margin: "0 auto",
  },
  media: {
    height: 230,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    opacity: 0.5,
  },
}));

const Cards = () => {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  const [showMore, setShowMore] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 100;
  
  const loadData = async () => {
    const URL = "https://jsonplaceholder.typicode.com/photos";
    const res = await fetch(URL);
    const data = await res.json();
    const curatedData = await data.splice(0, limit);
    const selectedData = await curatedData.splice(0, showMore);
    await setPhotos(selectedData);
    setIsLoading(false);
  };

  const increaseData = async () => {
    await loadData();
    setIsLoading(true);
    setShowMore(showMore + 20);
  };

  useEffect(() => {
    setIsLoading(true);
    loadData();
  }, [showMore]);

  return (
    <>
      <Grid container spacing={6} className={classes.grid}>
        {photos && !isLoading ? (
          photos.map((photo) => {
            const { title, url, id, thumbnailUrl } = photo;
            const evenId = id % 2 === 0;
            return (
              <React.Fragment key={id}>
                {evenId && (
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                      <CardActionArea key={id}>
                        <CardMedia
                          className={classes.media}
                          image={thumbnailUrl}
                        />
                        <CardContent>
                          <Typography variant="h6">
                            <span>{id}</span>.{" "}
                            {title.length > 10
                              ? title.substring(0, 20) + "..."
                              : "..."}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {url}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                )}
              </React.Fragment>
            );
          })
        ) : (
          <div className={classes.loading}>
            <LoadingBalls />
          </div>
        )}
      </Grid>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={increaseData}
          disabled={!photos || isLoading || showMore === limit}
          size="large"
          endIcon={<ExpandMoreIcon />}
        >
          Show More
        </Button>
      </div>
    </>
  );
};

export default Cards;
