import React from "react";
import styles from "./PostForm.module.scss";

const PostForm = () => {
  return (
    <>
      <form action="">
        <textarea className={styles.formContent}></textarea>
        <button className={styles.button}>Add new post</button>
      </form>
    </>
  );
};

export default PostForm;
