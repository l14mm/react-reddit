import React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import { Link, CardMedia } from "@material-ui/core";

const styles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(0, 2)
  },
  thumbnail: {
    width: 100,
    minWidth: 100,
    height: 100,
    backgroundColor: "gray",
    color: "white"
  }
});

export interface PostProps {
  classes: any;
  match: any;
  items: any;
}

const Post = (props: PostProps) => {
  const { classes, items } = props;
  items && console.log("1234", items);

  return (
    <>
      <CardMedia className={classes.thumbnail} image={items.thumbnail} />
      <Link className={props.classes.root} href={items.url}>
        {items.title}
      </Link>
    </>
  );
};

export interface AsyncAppState {
  postsBySubreddit: any;
  selectedSubreddit: string;
}

// export default withStyles(styles)(Post);
export default withStyles(styles)(Post);
