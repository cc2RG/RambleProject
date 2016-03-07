var React = require('react');
var RambleForm = React.createClass({
  getInitialState: function(){
    return {owner: '', maxCollaborators: null, deadline: null};
  },
  handleOwnerChange: function(e){
    this.setState({owner: e.target.value});
  },
  handleMaxCollabChange: function(e){
    this.setState({maxCollaborators: e.target.value});
  },
  handleDeadlineChange: function(e){
    this.setState({deadline: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var owner = this.state.owner.trim();
    var maxCollaborators = this.state.maxCollaborators.trim();
    var deadline = this.state.deadline.trim();
    if(!owner || !maxCollaborators || !deadline){
      return;
    }
    this.props.onCommentSubmit({owner: owner, maxCollaborators: maxCollaborators, deadline: deadline});
    this.setState({owner: '', maxCollaborators: null, deadline: null});
  },
  render: function(){
    return(
      <form className="rambleForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.owner}
          onChange={this.handleOwnerChange}
        />
        <input
          type="text"
          placeholder="Number of Collaborators"
          value={this.state.maxCollaborators}
          onChange={this.handleMaxCollabChange}
        />
        <input
          type="text"
          placeholder="Hours until next submit"
          value={this.state.deadline}
          onChange={this.handleDeadlineChange}
        <input type="submit" value="Post" />
      </form>
      );
  }

});

module.exports = RambleForm;

