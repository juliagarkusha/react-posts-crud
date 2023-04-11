import { useContext } from "react";
import {
  PostsContext,
  UPDATED_POST,
  UPDATE_POST,
  ERROR_UPDATED_POST,
} from "../context/Posts";
import PostApi from "../api/PostApi";

const useUpdatePost = () => {
  const postsCTX = useContext(PostsContext);

  const updatePost = (newPost) => {
    postsCTX.dispatch({ type: UPDATE_POST })
    PostApi.update(newPost).then((list) => {
      postsCTX.dispatch({ type: UPDATED_POST, payload: list })
    }).catch(() => {
      postsCTX.dispatch({ type: ERROR_UPDATED_POST, payload: "API ERROR" })
    });
  }

  return {
    updatePost: updatePost,
    list: postsCTX.state.posts.list,
    isLoading: postsCTX.state.posts.isUpdateLoading,
    isError: postsCTX.state.posts.isError,
    errorMessage: postsCTX.state.posts.errorMessage
  }
}

export default useUpdatePost;
