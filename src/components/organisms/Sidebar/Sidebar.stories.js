import React from 'react';
import StoryRouter from 'storybook-react-router';

// import { action } from '@storybook/addon-actions';

import Sidebar from './Sidebar';

// musimy zainstalowac nowa paczke i zaimplementowac storyRouter by dzialal Route

export default {
  component: Sidebar,
  title: 'Organisms/Sidebar',
  decorators: [StoryRouter()],
};
// tutaj dodane pageType do podgladu w storybooku
export const Primary = () => <Sidebar pageContext="notes" />;
export const Secondary = () => <Sidebar pageContext="twitters" />;
export const Tertiary = () => <Sidebar pageContext="articles" />;
