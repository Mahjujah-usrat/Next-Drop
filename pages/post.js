import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const getServerSideProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let allPosts = await res.json();
  return {
    props: {
      allPosts: allPosts.map((post) => post.title),
    },
  };
};

const Posts = ({ allPosts }) => {
  return (
    <div>
      <Header></Header>
      <h1>All Post</h1>
      {allPosts.map((post, idx) => (
        <div key={idx}>{post}</div>
      ))}
    </div>
  );
};

export default Posts;
