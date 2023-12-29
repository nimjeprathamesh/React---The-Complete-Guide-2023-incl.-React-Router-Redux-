import React, { useContext } from 'react';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import MainHeader from './components/MainHeader/MainHeader.jsx';
import AuthContext from './store/auth-context.jsx';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
