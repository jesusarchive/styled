import React from 'react';
import { Container, Heading } from './components';

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
      </Container>
    </div>
  );
};

export default App;
