const AddActivityForm = React.createClass({
  ajaxDoneCallback(response){
    this.props.addNewActivity(response.activity);
    this.setState({activity: response.activity , message: response.msg, messageType: MSG_TYPE.SUCCESS});
  },
  ajaxFailCallback(response){
    var errorMessage = response.responseJSON.errors.map((error) =>{ 
      return <p>{error}</p>; 
    });
    this.setState({message: errorMessage, messageType: MSG_TYPE.ERROR});
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
          ajaxFailCallback={this.ajaxFailCallback}
          submitButtonValue="新增" />
      </div> 
    ); 
  }
});
