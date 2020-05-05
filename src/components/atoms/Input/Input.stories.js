import React from 'react';
// import { action } from '@storybook/addon-actions';

import Input from './Input';

export default {
  component: Input,
  title: 'Atoms/Input',
};

export const Normal = () => <Input placeholder="login" />;
export const Search = () => <Input placeholder="search" search />;
