import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyled from './styles/global';
import store from './store';
import Routes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
          <GlobalStyled />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
