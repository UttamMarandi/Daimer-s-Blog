import React from "react";
import Post from "./Post";
import "../../styles/globals.scss";

export default {
  title: "Components/Post",
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Post
    {...args}
    content="Importantly, Next.js lets you choose which pre-rendering form
              you'd like to use for each page. You can create a hybrid Next.js
              app by using Static Generation for most pages and using
              Server-side Rendering for others.s"
    date="21/11/21"
  />
);

export const Default = Template.bind({});
