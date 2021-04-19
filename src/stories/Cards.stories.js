import React from 'react';
import  Cards  from '../Cards';
import '../Row.css';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Cards',
  component: Cards,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Cards {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
img_url: "https://image.tmdb.org/t/p/original",
  show: {
    backdrop_path: '/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg',
    original_title: 'Soul'
  }
};