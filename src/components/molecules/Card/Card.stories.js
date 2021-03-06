import React from 'react';

import Card from './Card';

export default {
  component: Card,
  title: 'Molecules/Card',
};

export const Primary = () => <Card cardType="notes" />;
export const Secondary = () => <Card cardType="twitters" />;
export const Tertiary = () => <Card cardType="articles" />;
