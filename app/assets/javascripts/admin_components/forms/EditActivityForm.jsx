const EditActivityForm = React.createClass({
  handleSubmit(event){
    event.preventDefault();
    var data = buildDataForAjaxRequest("patch");
    data.activity = this.state.activity;

    $.ajax({
      method: "POST",
      url: update_backend_activity_path(this.state.activity.id),
      data: data
    })
    .done((msg) => {
      console.log(msg);
      //TODO
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
  getInitialState(){
    return {activity: this.props.activity}; 
  },
  render(){
    return (
      <form action={update_backend_activity_path(this.props.activity.id)} method="POST" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="name">活動名稱</label>
          <input id="name" type="text" className="form-control" name="name" onChange={this.handleInput} value={this.state.activity.name} />
        </div>
        <input type="submit" value="更新" />
      </form>  
    ); 
  }
});
