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
    .fail(() => {
      console.log("not work"); 
    });         
  },
  buildMessageDOM(){
    var DOM;
    if (this.state.msg !== "") {
      DOM = <div className="alert alert-info" role="alert">{this.state.msg}</div>;
    }else{
      DOM = ""; 
    }

    return DOM;
  },
  getInitialState(){
    return {msg: ""}; 
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
