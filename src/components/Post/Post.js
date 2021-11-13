import React from "react";

const Post = ({ content, date }) => {
  return (
    <>
      <p>{content}</p>
      <p>{date}</p>
    </>
  );
};

export default Post;
