import React from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import Button from './Button';

export default {
  component: Button,
  title: 'Atoms/Button',
};

export const Primary = () => {
  const label = 'Colors';
  const options = {
    Red: 'red',
    Blue: 'blue',
    Yellow: 'yellow',
    Rainbow: ['red', 'orange', 'etc'],
    None: null,
  };
  const defaultValue = 'red';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);
  return <Button color={value}>Hello Button</Button>;
};
addDecorator(withKnobs);

export const Secondary = () => <Button secondary>Hello Button</Button>;
addDecorator(withKnobs);
