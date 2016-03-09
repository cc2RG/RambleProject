var React = require('react');
var ReactDOM = require('react-dom');
var Dispatcher = require('flux').Dispatcher;
var RamblesBox = require('./components/RamblesBox.jsx')
var RambleDisplay = require('./components/RambleDisplay.jsx')
var RambleForm = require('./components/RambleForm.jsx');
var OriginBox = require('./components/OriginBox.jsx');
var PathBox = require('./components/PathBox.jsx');


window.onload = function(){
  console.log("webpack app started");
  ReactDOM.render(
      <div>
      <h1>Hello</h1>
      <RamblesBox></RamblesBox>
      </div>,
      document.getElementById('app')
    );

};