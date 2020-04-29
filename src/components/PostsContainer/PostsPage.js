//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import data from "../../dummy-data.js"
// import data 

const PostsPage = () => {
  // set up state for your data

    const [dataDump] = useState(data);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
        {dataDump.map( (data, key) =>{ return <Post data={data} key={key}/>})}
    </div>
  );
};

export default PostsPage;

