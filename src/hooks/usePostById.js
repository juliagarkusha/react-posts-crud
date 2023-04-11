import { useEffect, useContext } from "react";
import { PostsContext, LOADED_POST, ERROR_LOADED_POST, LOADING_POST } from "../context/Posts";
import PostApi from "../api/PostApi";

const usePostById = (postId) => {
  const postsCTX = useContext(PostsContext);

  useEffect(() => {
    if(postsCTX.state.posts.list.some(post => String(post.id) === String(postId))) {
      return;
    }

    postsCTX.dispatch({ type: LOADING_POST })
    PostApi.getPostById(postId).then((post) => {
      postsCTX.dispatch({ type: LOADED_POST, payload: post })
    }).catch(() => {
      postsCTX.dispatch({ type: ERROR_LOADED_POST, payload: "API ERROR" })
    });
  }, [postId])

  return {
    post: postsCTX.state.posts.list.find(post => String(post.id) === String(postId)),
    isLoading: postsCTX.state.posts.isLoadingPost,
    isError: postsCTX.state.posts.isError,
    errorMessage: postsCTX.state.posts.errorMessage
  }
}

export default usePostById;