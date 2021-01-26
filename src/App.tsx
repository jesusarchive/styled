import React from 'react';
import { Alert, Box, Container, Heading } from './components';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Heading p="2rem">
          React TypeScript Styled Components{' '}
          <span role="img" aria-label="emoji">
            💅
          </span>
        </Heading>
        <Box bg="red" color="white">
          box
        </Box>
        <Alert bg="red" color="black">
          Alert
        </Alert>
      </Container>
    </div>
  );
};

export default App;
