//External deps
import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

//Local deps
import "./PostItemSmall.scss";

const PostItemSmall = (props) => {
  const {
    title,
    body,
  } = props;

  return (
    <Card classes={{ root: "PostItemSmall" }} sx={{ mt: 2 }}>
      <CardHeader
        sx={{ pb: 0 }}
        title={title}
      />
      <CardContent>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
    </Card>
  )
}

export default PostItemSmall;
