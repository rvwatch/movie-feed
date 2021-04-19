import React from 'react';
import  ViewAll  from '../ViewAll.js';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'View All Button',
  component: ViewAll,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ViewAll {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};