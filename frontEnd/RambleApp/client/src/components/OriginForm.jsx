var React = require('react');

var OriginForm = React.createClass({
  getInitialState: function(){
    return {author: '', title: '', content: '', minWord: null, maxWord: null};
  },
  handleAuthorChange: function(e){
    this.setState({author: e.target.value});
  },
  handleTitleChange: function(e){
    this.setState({title: e.target.value});
  },
  handleContentChange: function(e){
    this.setState({content: e.target.value});
  },
  handleMinWordChange: function(e){
    this.setState({minWord: e.target.value});
  },
  handleMaxWordChange: function(e){
    this.setState({maxWord: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var author = this.state.author.trim();
    var title = this.state.title.trim();
    var content = this.state.content.trim();
    var minWord = this.state.minWord.trim();
    var maxWord = this.state.maxWord.trim();
    if(!author || !title || !content || !minWord || !maxWord){
      return;
    }
    this.props.onCommentSubmit({author: author, title: title, content: content});
    this.setState({author: '', title: '', content: '', minWord: null, maxWord: null});
  },
  render: function(){
    return(
      <form className="originForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea
          rows="5" cols="50" name="OriginContentInput"

          placeholder="Type your text here!"
          value={this.state.content}
          onChange={this.handleContentChange}
        />
        <input
          type="text"
          placeholder="Input min words"
          value={this.state.minWord}
          onChange={this.handleMinWordChange}
        />
        <input
          type="text"
          placeholder="Input max words"
          value={this.state.maxWord}
          onChange={this.handleMaxWordChange}
        />  
        <input type="submit" value="Post"/>
      </form>
      );
  }

});

module.exports = OriginForm;

