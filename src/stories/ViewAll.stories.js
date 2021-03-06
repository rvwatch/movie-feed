import React from 'react';
import  ViewAll  from '../ViewAll.js';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'View All Button',
  component: ViewAll,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <ViewAll {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*๐ The args you need here will depend on your component */
};