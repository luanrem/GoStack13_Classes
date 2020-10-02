import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';
// import SignUp from './pages/SignUp';

// import { Container } from './styles';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Diego' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
