var React = require('react');
//var OriginBox = require('./OriginBox.jsx');
//var PathBox = require('./PathBox.jsx');
var Ramble = require('../rambleLogic/ramble.js');
var RambleForm = require('./RambleForm.jsx')
var RambleBox = React.createClass({
  render: function() {
    return (
      <div className="rambleBox">
        <h1>rambleBox says Hello!</h1>
        <RambleForm/>
      </div>
    );
  }
});

module.exports = RambleBox;