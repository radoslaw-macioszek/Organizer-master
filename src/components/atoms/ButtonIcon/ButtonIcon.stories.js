import React from 'react';
import styled from 'styled-components';

import ButtonIcon from './ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.notes};
`;

export default {
  component: ButtonIcon,
  title: 'Atoms/ButtonIcon',
  decorators: [(story) => <YellowBackground>{story()}</YellowBackground>],
};

export const Bulb = () => <ButtonIcon small icon={bulbIcon} />;
export const Active = () => <ButtonIcon active icon={bulbIcon} />;
export const Logout = () => <ButtonIcon big icon={logoutIcon} />;
export const Pen = () => <ButtonIcon icon={penIcon} />;
export const Plus = () => <ButtonIcon icon={plusIcon} />;
export const Twitter = () => <ButtonIcon icon={twitterIcon} />;
