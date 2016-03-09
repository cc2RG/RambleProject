var React = require('react');
//var OriginBox = require('./OriginBox.jsx');
//var PathBox = require('./PathBox.jsx');
var Ramble = require('../rambleLogic/ramble.js');
var RambleForm = require('./RambleForm.jsx')
var RambleDisplay = React.createClass({
  render: function() {
    return (
      <div className="RambleDisplay">
        <h1>RambleDisplay says Hello!</h1>
        <RambleForm/>
      </div>
    );
  }
});

module.exports = RambleDisplay;