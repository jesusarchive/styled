import styled from 'styled-components';
import Box from './Box';

type ScreenProps = {
    as?: string;
    minHeight?: string;
};

const Screen: React.FC<any> = styled(Box)({});

Screen.defaultProps = {
    minHeight: '100vh'
};
export default Screen;
