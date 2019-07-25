import React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
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
  comment: {
    border: `0.5px solid ${theme.palette.divider}`,
    margin: theme.spacing(0.5, 0),
    backgroundColor: grey[500],
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
  },
  votes: {
    display: "flex",
    flexDirection: "column" as "column",
    margin: 5,
    textAlign: "center" as "center",
    justifyContent: "center",
    minWidth: 60
  },
  indent: {
    marginLeft: "20px"
  }
});

export interface CommentProps {
  classes: Classes;
  id: string;
  ups: string;
  body: string;
  author: string;
}

const Comment = ({ classes, id, ups, body, author }: CommentProps) => {
  return (
    <Card className={`${classes.comment} ${classes.indent}`} key={id}>
      <div className={classes.votes}>
        <Typography>{ups}</Typography>
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {body}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            u/{author}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default withStyles(styles)(Comment);
