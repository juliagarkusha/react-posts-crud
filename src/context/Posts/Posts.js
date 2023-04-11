import { createContext, useReducer } from "react";

export const LOADING_POSTS = "LOADING_POSTS";
export const LOADED_POSTS = "LOADED_POSTS";
export const ERROR_LOADED_POSTS = "ERROR_LOADED_POSTS";
export const LOADING_POST = "LOADING_POST";
export const LOADED_POST = "LOADED_POST";
export const ERROR_LOADED_POST = "ERROR_LOADED_POST";
export const CREATE_POST = "CREATE_POST";
export const CREATED_POST = "CREATED_POST";
export const ERROR_CREATED_POST = "ERROR_CREATED_POST";
export const DELETE_POST = "DELETE_POST";
export const DELETED_POST = "DELETED_POST";
export const ERROR_DELETED_POST = "ERROR_DELETED_POST";
export const UPDATE_POST = "UPDATE_POST";
export const UPDATED_POST = "UPDATED_POST";
export const ERROR_UPDATED_POST = "ERROR_UPDATED_POST";

const initialState = {
  posts: {
    list: [],
    isLoadedPosts: false,
    isLoadingPosts: false,
    isLoadingPost: false,
    isDeleteLoading: false,
    isUpdateLoading: false,
    isCreateLoading: false,
    isError: false,
    errorMessage: ''
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          isLoadingPosts: true,
        }
      }
    case LOADING_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          isLoadingPost: true,
        }
      }
    case CREATE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          isCreateLoading: true,
        }
      }
    case DELETE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          isDeleteLoading: true,
        }
      }
    case UPDATE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          isUpdateLoading: true,
        }
      }
    case LOADED_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          isLoadingPosts: false,
          isLoadedPosts: true,
          list: action.payload,
          isError: false,
          errorMessage: ''
        }
      }
    case ERROR_LOADED_POSTS:
    case ERROR_LOADED_POST:
    case ERROR_CREATED_POST:
    case ERROR_DELETED_POST:
    case ERROR_UPDATED_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          isLoadingPosts: false,
          isError: true,
          errorMessage: action.payload,
        }
      }
    case LOADED_POST:
    case CREATED_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          isLoadingPost: false,
          isCreateLoading: false,
          list: [action.payload, ...state.posts.list],
          isError: false,
          errorMessage: ''
        }
      }
    case DELETED_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          isDeleteLoading: false,
          list: state.posts.list.filter(post => String(post.id) !== String(action.payload)),
          isError: false,
          errorMessage: ''
        }
      }
    case UPDATED_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          isUpdateLoading: false,
          list: state.posts.list.map(post => String(post.id) === String(action.payload.id) ? action.payload : post),
          isError: false,
          errorMessage: ''
        }
      }
    default:
      return state
  }
}

const init = (initialState) => {
  return initialState;
}

export const PostsContext = createContext({});

const PostsProvider = (props) => {
  const {
    children,
  } = props;

  const [ state, dispatch ] = useReducer(reducer, initialState, init);

  const app = {
    state,
    dispatch,
  }

  return (
    <PostsContext.Provider value={app}>
      {children}
    </PostsContext.Provider>
  )
}

export const withPosts = (Component) => {
  return (props) => (
    <PostsContext.Consumer>
      {(consumerProps) => (<Component {...props} app={consumerProps} />)}
    </PostsContext.Consumer>
  )
}

export default PostsProvider;
