var React = require('react');
var ReactDOM = require('react-dom');


window.onload = function(){
  console.log("webpack app started");
  ReactDOM.render(
      <h1>Hello</h1>,
      document.getElementById('app')
    );

};