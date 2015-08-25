
// The alias `bs` is from ../application.js

const Client = React.createClass({
  fetchActivities(){
    $.ajax({
      method: "GET",
      url: backend_activities_path 
    })
    .done((activities) => {
      this.setState({activities: activities}); 
    })
    .fail(() => {
      console.log("not work"); 
    });         
  },
  backToActivityListPage(){
    this.setState({isEditingActivityNow: false, editingActivity: null});
  },
  editActivity(index){
    var activity = this.state.activities[index];
    this.setState({isEditingActivityNow: true, editingActivity: activity});
  },
  deleteActivity(id){
    var oldActivities = this.state.activities;
    var newActivities = [];
    oldActivities.forEach((activity) => {
      if (activity.id !== id) {
        newActivities.push(activity);
      }
    });

    this.setState({activities: newActivities});
  },
  componentDidMount(){
    this.fetchActivities();
  },
  getInitialState(){
    return {activities: [], isEditingActivityNow: false, editingActivity: null};
  },
  render() {
    var result;
    if (this.state.isEditingActivityNow) {
      result = <EditActivityForm activity={this.state.editingActivity} backToActivityListPage={this.backToActivityListPage} />; 
    }else{
      result = <ActivityList activities={this.state.activities} handleEdit={this.editActivity} deleteActivity={this.deleteActivity} />; 
    }

    return result;
  }
})
