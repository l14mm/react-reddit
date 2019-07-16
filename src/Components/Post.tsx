import React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import {
  Link,
  CardMedia,
  Card,
  CardContent,
  Typography
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Classes } from "@material-ui/styles/mergeClasses/mergeClasses";

const styles = (theme: Theme) => ({
  post: {
    border: `1px solid ${theme.palette.divider}`,
    margin: theme.spacing(0.5, 0),
    backgroundColor: grey[200],
    display: "flex",
    "&:hover": {
      borderColor: "black"
    }
  },
  details: {
    display: "flex",
    flexDirection: "column" as "column"
  },
  content: {
    flex: "1 0 auto"
  },
  thumbnail: {
    width: 100,
    minWidth: 100,
    height: 100,
    backgroundColor: "gray",
    color: "white"
  },
  link: {
    padding: theme.spacing(0, 2),
    textDecoration: "none"
  }
});

export interface PostProps {
  classes: Classes;
  items: any;
}

const Post = (props: PostProps) => {
  const { classes, items } = props;
  items && console.log("1234", items);

  return (
    <Link className={classes.link} href={items.url} target="_blank">
      <Card className={classes.post}>
        <CardMedia className={classes.thumbnail} image={items.thumbnail} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {items.title}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export interface AsyncAppState {
  postsBySubreddit: any;
  selectedSubreddit: string;
}

export default withStyles(styles)(Post);
