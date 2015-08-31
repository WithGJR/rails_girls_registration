const EditActivityForm = React.createClass({
  handleSubmit(activity){
    AppActions.updateActivityAt(this.props.index, activity);
  },
  render(){
    return (
      <div>
        <h2>編輯 {this.props.activity.name}</h2>
        <ActivityBaseForm 
          backToActivityListPage={this.props.backToActivityListPage}
          activity={this.props.activity}
          handleSubmit={this.handleSubmit}
          submitButtonValue="更新" />
      </div>
    ); 
  }
});
