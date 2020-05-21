import React from 'react';
import StoryRouter from 'storybook-react-router';

import Sidebar from './Sidebar';

// musimy zainstalowac nowa paczke i zaimplementowac storyRouter by dzialal Route

export default {
  component: Sidebar,
  title: 'Organisms/Sidebar',
  decorators: [StoryRouter()],
};
export const Primary = () => <Sidebar pageContext="notes" />;
export const Secondary = () => <Sidebar pageContext="twitters" />;
export const Tertiary = () => <Sidebar pageContext="articles" />;
