import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';
// import SignUp from './pages/SignUp';

// import { Container } from './styles';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
