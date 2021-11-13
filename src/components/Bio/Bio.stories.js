import React from "react";
import Post from "./Post";
import "../../styles/globals.scss";

export default {
  title: "Components/Post",
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Bio
    img="https://images.pexels.com/photos/9938444/pexels-photo-9938444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    name="Uttam Marandi"
    tagline="How you doing?"
    role="Developer Advocate @ Uttam"
  />
);

export const Default = Template.bind({});
