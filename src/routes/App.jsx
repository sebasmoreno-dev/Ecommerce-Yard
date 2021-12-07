import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@containers/Layout.jsx';
import Login from '@pages/Login.jsx';
import RecoveryPasword from '@pages/RecoveryPasword.jsx';
import Home from '@pages/Home.jsx';
import NotFound from '@pages/NotFound.jsx';
import Checkout from '@pages/Checkout.jsx';
import CreateAccount from '@pages/CreateAccount.jsx';
import MyAccount from '@pages/MyAccount.jsx';
import NewPassword from '@pages/NewPassword.jsx';
import Orders from '@pages/Orders.jsx';
import SendEmail from '@pages/SendEmail.jsx';
import AppContext from './../context/AppContext';
import useInitialState from './../hooks/useInitialState';
import '@styles/global.scss';


const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/recovery-password" component={RecoveryPasword} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/create-account" component={CreateAccount} />
              <Route exact path="/my-account" component={MyAccount} />
              <Route exact path="/new-password" component={NewPassword} />
              <Route exact path="/orders" component={Orders} />
              <Route exact path="/send-email" component={SendEmail} />
              <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
