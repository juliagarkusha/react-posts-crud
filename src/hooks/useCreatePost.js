import { useContext, useEffect } from "react";
import {
  PostsContext,
  CREATE_POST,
  CREATED_POST,
  ERROR_CREATED_POST,
} from "../context/Posts";
import PostApi from "../api/PostApi";

const useCreatePost = (payload) => {
  const postsCTX = useContext(PostsContext);

  const createPost = (newPost) => {
    postsCTX.dispatch({ type: CREATE_POST })
    PostApi.create(newPost).then((post) => {
      postsCTX.dispatch({ type: CREATED_POST, payload: post })
    }).catch(() => {
      postsCTX.dispatch({ type: ERROR_CREATED_POST, payload: "API ERROR" })
    });
  }

  useEffect(() => {

  }, [payload])

  return {
    list: [],
    createPost: createPost,
    isLoading: postsCTX.state.posts.isCreateLoading,
    isError: postsCTX.state.posts.isError,
    errorMessage: postsCTX.state.posts.errorMessage
  }
}

export default useCreatePost;
