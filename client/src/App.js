import React, {useState} from "react";
import './index.css'
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";
import ModalWindow from "./components/UI/ModalWindow/ModalWindow.jsx";
import RadioButtons from "./components/RadioButtons/RadioButtons";

function App() {
    const [posts, setPosts] = useState([])
    const [visible, setVisible] = useState(false)
    const [sortType, setSortType] = useState('DATE')


  return (
      <>
          <div className="nav">
              <button
                  onClick={() => setVisible(prev => !prev)}
                  className="waves-effect waves-light btn-large btn-center">
                  make a post
              </button>
          </div>
          <hr/>
          <RadioButtons setSortType={setSortType} />
          <ModalWindow visible={visible} setVisible={setVisible}>
              <PostForm setPosts={setPosts} />
          </ModalWindow>
          <hr/>
        <PostList setPosts={setPosts} posts={posts} />
      </>
  );
}

export default App;
