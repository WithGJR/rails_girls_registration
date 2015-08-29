const EditActivityForm = React.createClass({
  ajaxDoneCallback(response){
    this.setState({message: response.msg, messageType: MSG_TYPE.SUCCESS});
  },
  ajaxFailCallback(response){
    var errorMessage = response.responseJSON.errors.map((error) =>{ 
      return <p>{error}</p>; 
    });
    this.setState({message: errorMessage, messageType: MSG_TYPE.ERROR});
  },
  getInitialState(){
    return {activity: this.props.activity, message: "", messageType: null}; 
  },
  render(){
    return (
      <div>
        <Message message={this.state.message} messageType={this.state.messageType} />

        <h2>編輯 {this.state.activity.name}</h2>
        <ActivityBaseForm 
          backToActivityListPage={this.props.backToActivityListPage}
          url={update_backend_activity_path(this.state.activity.id)} 
          method="patch"
          activity={this.state.activity}
          ajaxDoneCallback={this.ajaxDoneCallback} 
          ajaxFailCallback={this.ajaxFailCallback}
          submitButtonValue="更新"
          getInitialState={this.getInitialState} /> 
      </div>
    ); 
  }
});
