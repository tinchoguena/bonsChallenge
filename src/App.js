import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Layout from './Components/Layout/Layout';
import gameReducer from './store/reducers/gameReducer';
import LoginScreen from './Screens/LoginScreen/loginScreen';
import GameScreen from './Screens/GameScreen/GameScreen';

const store = createStore(gameReducer, composeWithDevTools(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginScreen} />
          <Route path="/game" exact component={GameScreen} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
