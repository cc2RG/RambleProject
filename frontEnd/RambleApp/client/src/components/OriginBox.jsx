var React = require('react');
var RambleBox = require('./RambleDisplay.jsx');
var PathBox = require('./PathBox.jsx');
var OriginForm = require('./OriginForm.jsx')
var Origin = require('../rambleLogic/origin.js');

var OriginBox = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Origin Box says Hello!</h1>
        <OriginForm/>
      </div>
      );
  }
});

module.exports = OriginBox;