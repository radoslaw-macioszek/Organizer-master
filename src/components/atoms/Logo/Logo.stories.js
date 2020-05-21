import React from 'react';
import Logo from './Logo';

import LogoIcon from '../../../assets/icons/logo.svg';

export default {
  component: Logo,
  title: 'Atoms/Logo',
};

export const Normal = () => <Logo icon={LogoIcon} />;
