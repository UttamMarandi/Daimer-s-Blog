import React from "react";
import PostForm from "./PostForm";
import "../../styles/globals.scss";

export default {
  title: "Components/PostForm",
  component: PostForm,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostForm />;

export const Default = Template.bind({});
