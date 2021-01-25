import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { BaseProps } from './utils/system';

interface ScreenProps extends BaseProps {
  children?: React.ReactNode;
  as?: string;
}

const Screen: React.FC<ScreenProps> = styled(Box)({});

Screen.defaultProps = {
  minHeight: '100vh' as any
};

export default Screen;
