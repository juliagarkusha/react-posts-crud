//External deps
import React from "react";
import Grid from '@mui/material/Grid';

//Internal deps
import PostItem from "../PostItem";
import usePosts from "../../../hooks/usePosts";
import Loader from "../../ui/Loader";

const PostList = () => {
  const { list, isLoading } = usePosts();

  if(isLoading) {
    return (<Loader text="Loading posts" />)
  }

  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {!isLoading && list.map(item => (
        <PostItem
          key={item.id}
          id={item.id}
          title={item.title}
          body={item.body}
        />
      ))}
    </Grid>
  )
}

export default PostList;
