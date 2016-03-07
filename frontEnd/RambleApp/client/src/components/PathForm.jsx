var React = require('react');

var PathForm = React.createClass({
  getInitialState: function(){
    return {author: '', content: ''};
  },
  handleAuthorChange:function(e){
    this.setState({author:e.target.value})
  },
  handleContentChange:function(e){
    this.setState({content:e.target.value})
  },
  handleSubmit:function(e){
    e.preventDefault();
    var author = this.state.author.trim();
    var content = this.state.content.trim();
    if(!author || !content){
      return;
    }
    this.props.onCommentSubmit({author: author, content: content});
    this.setState({author: '', content: ''});
  },
  render:function(){
    return (
      <form className="pathForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Type your text here!"
          value={this.state.content}
          onChange={this.handleContentChange}
        />
      </form>  
      );
  }
});

module.exports = PathForm;

