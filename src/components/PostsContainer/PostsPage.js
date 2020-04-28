//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import data from "../../dummy-data.js"

const PostsPage = () => {
  // set up state for your data

  let [postsData, setPostsData] = useState();

  return (
    <div className="posts-container-wrapper">
        <div> Posts kirk</div>
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map(post => {return <Post postText={postsData}/>})}
    </div>
  );
};

export default PostsPage;

