const AddActivityForm = React.createClass({
  handleSubmit(activity){
    AppActions.addActivity(activity);
  },
  getInitialState(){
    return {activity: {name: "", description: "", location: ""}}; 
  },
  render(){
    return (
      <div>
        <h2>新增活動</h2>
        <ActivityBaseForm 
          backToActivityListPage={this.props.backToActivityListPage}
          activity={this.state.activity}
          handleSubmit={this.handleSubmit}
          submitButtonValue="新增" />
      </div> 
    ); 
  }
});
