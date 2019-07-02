import React from "react";
import { Dispatch } from "redux";
import { withStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(0, 2)
  }
});

export interface PostProps {
  dispatch: Dispatch<any>;
  isFetching: boolean;
  lastUpdated: number;
  classes: any;
  match: any;
}

const Post = (props: PostProps) => {
  const { classes, match } = props;
  const params = match.params;
  return (
    <>
      <div className={classes.root}>Post</div>
      <div className={props.classes.root}>{params.subreddit}</div>
      <div className={props.classes.root}>{params.title}</div>
    </>
  );
};

export default withStyles(styles)(Post);
