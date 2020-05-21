import React from 'react';

import Heading from './Heading';

export default {
  component: Heading,
  title: 'Atoms/Heading',
};

export const Normal = () => <Heading>Hello Heading</Heading>;
export const big = () => <Heading big>Hello Heading</Heading>;
