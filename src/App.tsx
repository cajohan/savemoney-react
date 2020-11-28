import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/label">
          <Label/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页</h2>
    </Layout>
  );
}

function Label() {
  return (
    <Layout>
      <h2>标签页</h2>
    </Layout>);
}

function Money() {
  return (
    <Layout>
      <h2>记账页</h2>
    </Layout>);
}

function NoMatch() {
  return (
    <div>
      <h3>
        No match
      </h3>
    </div>
  );
}

export default App;
