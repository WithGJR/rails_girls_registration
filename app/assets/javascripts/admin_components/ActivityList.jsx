const ActivityList = React.createClass({
  handleEdit(event){
    var index = event.target.id;
    this.props.handleEdit(index);
  },
  handleDelete(event){
    var index = event.target.id;
    var activity = this.props.activities[index];
    $.ajax({
      method: "POST",
      url: destroy_backend_activity_path(activity.id),
      data: buildDataForAjaxRequest("delete")
    })
    .done((response) => {
      this.props.deleteActivity(parseInt(activity.id));
      this.setState({msg: response.msg});
    })
    .fail((response) => {
      if (response.status === 401) {
        //When user is not signed in
        window.location = SIGN_IN_PATH;
      }
    });         
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
    return {msg: "", msgType: null}; 
  },
  render(){
    var rows = this.props.activities.map((activity, index) => {
      return (
        <tr>
          <td>{activity.name}</td>
          <td>{activity.description}</td>
          <td>{activity.location}</td>
          <td>
            <button id={index} className="btn btn-info" onClick={this.handleEdit}>Edit</button>
            <button id={index} className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
          </td>
        </tr>
      ); 
    });

    var message = this.buildMessageDOM();

    return (
      <div>
       {message} 
        <table className="table table-hover">
          <thead>
            <tr>
              <th>活動名稱</th>
              <th>描述</th>
              <th>舉行地點</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>  
      </div>
    ); 
  }
});
