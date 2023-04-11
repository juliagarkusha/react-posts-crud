import React from "react";
import { useParams } from "react-router-dom";
import usePostById from "../../../hooks/usePostById";
import { Typography } from "@mui/material";
import {Container} from "@mui/material";

const Post = () => {
  const { postId } = useParams();
  const { post } = usePostById(postId);

  return (
    <Container maxWidth="lg" sx={{ my: 5, color: 'white' }}>
      <Typography variant="h3" sx={{ pb: 2, textAlign: 'center' }}>{post.title}</Typography>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>{post.body}</Typography>
    </Container>
  )
}

export default Post;
