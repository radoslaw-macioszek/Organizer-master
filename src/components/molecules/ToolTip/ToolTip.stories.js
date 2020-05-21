import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import ToolTip from './ToolTip';

export default {
  component: ToolTip,
  title: 'Atoms/ToolTip',
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
  return <ToolTip color={value}>Hello ToolTip</ToolTip>;
};
addDecorator(withKnobs);

export const Secondary = () => <ToolTip secondary>Hello ToolTip</ToolTip>;
addDecorator(withKnobs);
