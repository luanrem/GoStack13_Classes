import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';

// import { Container } from './styles';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
