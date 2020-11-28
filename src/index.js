import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MySecondComponent from './MyApp'

function MyInfo(){
  return(
    <div>    
      <h1>Hello world with Functional Components</h1>
      <h2>Prachi Kodle</h2>
      <ul>
        <li>I am a girl</li>
        <li>I love myself and believe in living today.</li>
        <li>I love travel.</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <MySecondComponent/>, document.getElementById('root')
);
 