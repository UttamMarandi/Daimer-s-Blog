import React from "react";
import styles from "./PostForm.module.scss";

const PostForm = ({ onSubmit }) => {
  function handleOnSubmit(e) {
    const { currentTarget } = e;
    const fields = Array.from(currentTarget.elements);
    const data = {};

    fields.forEach((field) => {
      if (!field.name) return;
      data[field.name] = field.value; //set data.content to field.value , field.name === content
    });
    if (typeof onSubmit === "function") {
      onSubmit(data, e);
    }
  }
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <textarea name="content" className={styles.formContent}></textarea>
        <button className={styles.button}>Add new post</button>
      </form>
    </>
  );
};

export default PostForm;
