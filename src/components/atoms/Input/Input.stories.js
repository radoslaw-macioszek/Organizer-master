import React from 'react';

import Input from './Input';

export default {
  component: Input,
  title: 'Atoms/Input',
};

export const Normal = () => <Input placeholder="login" />;
export const Search = () => <Input placeholder="search" search />;
