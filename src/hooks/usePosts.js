import { useEffect, useContext } from "react";
import { PostsContext, LOADING_POSTS, LOADED_POSTS, ERROR_LOADED_POSTS } from "../context/Posts";
import PostApi from "../api/PostApi";

const usePosts = () => {
  const postsCTX = useContext(PostsContext);

  useEffect(() => {
    if(postsCTX.state.posts.isLoadedPosts) {
      return;
    }

    postsCTX.dispatch({ type: LOADING_POSTS })
    PostApi.getList().then((list) => {
      postsCTX.dispatch({ type: LOADED_POSTS, payload: list })
    }).catch(() => {
      postsCTX.dispatch({ type: ERROR_LOADED_POSTS, payload: "API ERROR" })
    });
  }, [])

  return {
    list: postsCTX.state.posts.list,
    isLoading: postsCTX.state.posts.isLoadingPosts,
    isLoadedPosts: postsCTX.state.posts.isLoadedPosts,
    isError: postsCTX.state.posts.isError,
    errorMessage: postsCTX.state.posts.errorMessage
  }
}

export default usePosts;