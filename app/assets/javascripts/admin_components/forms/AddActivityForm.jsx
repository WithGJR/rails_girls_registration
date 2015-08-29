const AddActivityForm = React.createClass({
  ajaxDoneCallback(response){
    this.props.addNewActivity(response.activity);
    this.setState({activity: response.activity , message: response.msg, messageType: MSG_TYPE.SUCCESS});
  },
  ajaxFailCallback(response){
    this.setState({message: response.responseJSON.errors.join('\n\n'), messageType: MSG_TYPE.ERROR});
  },
  getInitialState(){
    return {activity: {name: "", description: "", location: ""}, message: "", messageType: null}; 
  },
  render(){
    return (
      <div>
        <Message message={this.state.message} messageType={this.state.messageType} />

        <h2>新增活動</h2>
        <ActivityBaseForm 
          backToActivityListPage={this.props.backToActivityListPage}
          url={create_backend_activity_path} 
          method="post"
          activity={this.state.activity}
          ajaxDoneCallback={this.ajaxDoneCallback} 
          submitButtonValue="新增" />
      </div> 
    ); 
  }
});
