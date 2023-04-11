import { Routes, Route } from "react-router-dom";
import Posts from "../pages/Posts";
import Post from "../pages/Post";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="posts/:postId" element={<Post />} />
    </Routes>
  )
}

export default Router;
