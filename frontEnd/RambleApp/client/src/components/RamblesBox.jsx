var React = require('react');
var Ramble = require('../rambleLogic/ramble.js');
var sampleJSON = require('../rambleSample.json');
var OriginBox = require('./OriginBox.jsx');
var RamblesBox = React.createClass({

  getInitialState: function(){
    return {rambles: sampleJSON, currentRamble:null};
  },
  setCurrentRamble:function(ramble){
    this.setState({currentRamble: ramble})   
  },

  render: function(){
    return(
      <div>
        <h4>RamblesBox</h4>
        <OriginBox/>
      </div>
      )
  }

})

module.exports = RamblesBox;