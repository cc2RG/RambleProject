var React = require('react');
var RambleBox = require('./RambleBox.jsx');
var OriginBox = require('./OriginBox.jsx');
var Path = require('../rambleLogic/path.js');
var PathForm = require('./PathForm.jsx');

var PathBox = React.createClass({
  render:function(){
    return(
      <div> 
        <h1>PathBox says Hello!</h1>
        <PathForm/>
      </div>
      );
  }

});

module.exports = PathBox;