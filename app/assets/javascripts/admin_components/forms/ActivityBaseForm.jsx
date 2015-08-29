const ActivityBaseForm = React.createClass({
  handleSubmit(event){
    event.preventDefault();
    var data = buildDataForAjaxRequest(this.props.method);
    data.activity = this.state.activity;

    $.ajax({
      method: "post",
      url: this.props.url,
      data: data
    })
    .done((response) => {
      this.props.ajaxDoneCallback(response);
    })
    .fail((response) => {
      this.props.ajaxFailCallback(response); 
    });         
  },
  handleInput(event){
    var newActivity = this.state.activity; 
    newActivity[event.target.id] = event.target.value;
    this.setState({activity: newActivity});
  },
  backToActivityListPage(){
    this.props.backToActivityListPage();
  },
  getInitialState(){
    return {activity: this.props.activity};
  },
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="name">活動名稱</label>
          <input id="name" type="text" className="form-control" name="name" onChange={this.handleInput} value={this.state.activity.name} />
        </div>
        <div className="form-group">
          <label for="description">描述</label>
          <textarea id="description" className="form-control" name="description" onChange={this.handleInput}>{this.state.activity.description}</textarea>
        </div>
        <div className="form-group">
          <label for="location">舉行地點</label>
          <input id="location" type="text" className="form-control" name="location" onChange={this.handleInput} value={this.state.activity.location} />
        </div>

        <input type="submit" className="btn btn-default" value={this.props.submitButtonValue} />
        <button type="button" className="btn btn-link" onClick={this.backToActivityListPage}>返回活動列表</button>
      </form>  
    ); 
  }
});
