import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  grid: {
    width: "100%",
    padding: "1.5rem",
  },
  media: {
    height: 230,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Cards = () => {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  const [showMore, setShowMore] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    const URL = "https://jsonplaceholder.typicode.com/photos";
    const res = await fetch(URL);
    const data = await res.json();
    const selectedData = await data.splice(1, showMore);
    setPhotos(selectedData);
    setIsLoading(false);
  };

  const increaseData = () => {
    const increase = 20;
    setIsLoading(true);
    setShowMore(showMore + increase);
    loadData();
  };

  useEffect(() => {
    setIsLoading(true);
    loadData();
  }, []);

  return (
    <>
      <Grid container spacing={6} className={classes.grid}>
        {photos && !isLoading ? (
          photos.map((photo) => {
            const { title, url, id, thumbnailUrl } = photo;
            const evenId = id % 2 === 0;
            return (
              <>
                {evenId && (
                  <Grid key={id} item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={thumbnailUrl}
                        />
                        <CardContent>
                          <Typography variant="h6">
                            <span>{id}</span>.{" "}
                            {title.length > 20
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
              </>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </Grid>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={increaseData}
          disabled={!photos || isLoading}
        >
          Show More
        </Button>
      </div>
    </>
  );
};

export default Cards;
