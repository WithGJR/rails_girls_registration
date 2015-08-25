const MSG_TYPE = {
  SUCCESS: 0,
  ERROR: 1
};

const ActivityList = React.createClass({
  handleDelete(event){
    var id = event.target.id;
    $.ajax({
      method: "POST",
      url: "/backend/activities/" + id,
      data: buildDataForAjaxDeleteRequest()
    })
    .done((msg) => {
      this.props.deleteActivity(parseInt(id));
      this.setState({msg: msg});
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
    var rows = this.props.activities.map((activity) => {
      return (
        <tr>
          <td>{activity.name}</td>
          <td>{activity.description}</td>
          <td>{activity.location}</td>
          <td>
            <button id={activity.id} className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
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
