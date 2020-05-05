import React from 'react';
// import { action } from '@storybook/addon-actions';

import Paragraph from './Paragraph';

export default {
  component: Paragraph,
  title: 'Atoms/Paragraph',
};

export const Normal = () => <Paragraph>Hello</Paragraph>;
