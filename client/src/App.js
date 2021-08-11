import React, {useState} from "react";
import './index.css'
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";

function App() {
    const [posts, setPosts] = useState([])

  return (
      <>
        <PostForm setPosts={setPosts} />
          <hr></hr>
        <PostList setPosts={setPosts} posts={posts} />
      </>
  );
}

export default App;
