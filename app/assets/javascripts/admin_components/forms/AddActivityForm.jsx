const AddActivityForm = React.createClass({
  handleSubmit(event){
    event.preventDefault();
    var data = buildDataForAjaxRequest("post");
    data.activity = this.state.activity;

    $.ajax({
      method: "POST",
      url: create_backend_activity_path,
      data: data
    })
    .done((msg) => {
      this.props.addNewActivity(this.state.activity);
      this.setState({msg: msg, msgType: MSG_TYPE.SUCCESS});
    })
    .fail((response) => {
      //TODO
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
  buildMessageDOM(){
    var DOM;
    if (this.state.msg !== "" && this.state.msgType === MSG_TYPE.SUCCESS) {
      DOM = <div className="alert alert-info" role="alert">{this.state.msg}</div>;
    }else if (this.state.msg !== "" && this.state.msgType === MSG_TYPE.ERROR){
      DOM = <div className="alert alert-danger" role="alert">{this.state.msg}</div>;
    }else{
      DOM = ""; 
    }

    return DOM;
  },
  getInitialState(){
    return {activity: {name: "", description: "", location: ""}, msg: "", msgType: null}; 
  },
  render(){
    var message = this.buildMessageDOM();

    return (
      <div>
        {message}
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

          <input type="submit" className="btn btn-default" value="新增" />
          <button type="button" className="btn btn-link" onClick={this.backToActivityListPage}>返回活動列表</button>
        </form>  
      </div>
    ); 
  }
});
