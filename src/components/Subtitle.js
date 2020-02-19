/** components/Subtitle.js*/

import React, {useContext} from 'react';
import styled from 'styled-components';
import DarkModeContext from 'context/DarkModeContext';
import {Text} from './Text';

const Subtitle = styled(Text)`
  font-size: 22px;
  margin-bottom: 24px;
`;

export default props => {
  const {darkMode} = useContext(DarkModeContext);
  return <Subtitle darkMode={darkMode}>{props.children}</Subtitle>;
};
