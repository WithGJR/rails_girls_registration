
// The alias `bs` is from ../application.js

const Client = React.createClass({
  fetchActivities(){
    $.ajax({
      method: "GET",
      url: "/backend/activities" 
    })
    .done((activities) => {
      this.setState({activities: activities}); 
    })
    .fail(() => {
      console.log("not work"); 
    });         
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
    return {activities: []};
  },
  render() {
    return (
      <ActivityList activities={this.state.activities} deleteActivity={this.deleteActivity} />
    );
  }
})
