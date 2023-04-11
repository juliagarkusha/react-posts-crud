import { useContext } from "react";
import {
  PostsContext,
  DELETE_POST,
  DELETED_POST,
  ERROR_DELETED_POST,
} from "../context/Posts";
import PostApi from "../api/PostApi";

const useDeletePost = () => {
  const postsCTX = useContext(PostsContext);

  const deletePost = (postId) => {
    postsCTX.dispatch({ type: DELETE_POST });

    PostApi.delete(postId).then(() => {
      postsCTX.dispatch({ type: DELETED_POST, payload: postId })
    }).catch(() => {
      postsCTX.dispatch({ type: ERROR_DELETED_POST, payload: "API ERROR" })
    });
  }

  return {
    deletePost: deletePost,
    isLoading: postsCTX.state.posts.isDeleteLoading,
    isError: postsCTX.state.posts.isError,
    errorMessage: postsCTX.state.posts.errorMessage
  }
}

export default useDeletePost;
