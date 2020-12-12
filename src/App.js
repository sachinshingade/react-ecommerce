import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './storeManager/reducer';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Views/Login/Login';
import Header from './Components/Header/Header';
import UserDashboard from './Views/Dashboard/UserDashboard'
import AdminDashboard from './Views/Dashboard/AdminDashboard'
import ProductDetail from './Views/ProductDetail/ProductDetail'
import Cart from './Components/Cart/Cart';
import UserList from './Components/UserList/UserList'
export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
          <Header/>
          <Switch>
              <Route exact path={'/'} render={() => {
                  return <Redirect to={'/login'}/>
              }}/>
              <Route exact path={'/login'} component={Login}/>
              <Route exact path={'/products'} component={UserDashboard}/>
              <Route exact path={'/dashboard'} component={AdminDashboard}/>
              <Route exact path={'/product-detail/:id'} component={ProductDetail}/>
              <Route exact path={'/cart'} component={Cart}/>
              <Route exact path={'/users'} component={UserList}/>
          </Switch>
          {/* <Footer/> */}
      </React.Fragment>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
