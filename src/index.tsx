import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'index.scss'

ReactDOM.render(
    <App />
  ,
  document.getElementById('root')
);
if (document.documentElement.clientWidth > 500) {
  window.alert('请使用手机打开本页面，以保证浏览效果');
}

