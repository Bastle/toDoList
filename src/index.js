/**
 * Created by cyb on 2019/3/10.
 */

import './style/index.less';
import { Provider } from 'react-redux';
import store from './store';
// import { Provider } from './utils/myReactRedux';
// import store from './store/myStore';
import ReactDOM from 'react-dom';
import React, { lazy, Suspense } from 'react';
import AddNum from './page/addNum';
import PrivateRoute from './router/privateRoute'
import ContextApp from './page/context';
import Login from './page/loginPage';
import Fp from './page/fp';
import route from './router';
import { 
  BrowserRouter, 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';

const App = props => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Link to='/'>
            <button>切换到 context</button>
          </Link>
          <Link to='/redux'>
            <button>切换到 redux</button>
          </Link>
          <Link to='/search'>
            <button>切换到 addNum</button>
          </Link>
          <Link to='/cart'>
            <button>切换到 cart</button>
          </Link>
          <Link to='/fp'>
            <button>切换到 fp</button>
          </Link>
          <Link to='/hooks'>
            <button>切换到 hooks</button>
          </Link>
        <Switch>
          {route}
          {/* <Route exact path="/" component={ContextApp} />
          <Route exact path="/redux" component={() => getComponent(ReduxApp)} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={() => getComponent(Cart)} />
          <Route exact path="/fp" component={Fp} />
          <Route exact path="/hooks" component={() => getComponent(Hooks)} /> */}
          <PrivateRoute path="/search" component={AddNum}/>
          {/* <Route exact path="/login" component={Login}/> */}
          {/* <Route exact path="/search/:id" component={AddNum} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

