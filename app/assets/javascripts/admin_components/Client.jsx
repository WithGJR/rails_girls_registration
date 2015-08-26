// The alias `bs` is from ../application.js
const PAGE = {
  ACTIVITY_LIST: 0,
  ADD_ACTIVITY:  1,
  EDIT_ACTIVITY: 2
};

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
    this.setState({currentPage: PAGE.ACTIVITY_LIST, editingActivity: null});
  },
  gotoAddActivityPage(){
    this.setState({currentPage: PAGE.ADD_ACTIVITY}); 
  },
  addNewActivity(activity){
    var newActivities = this.state.activities;
    newActivities.unshift(activity);
    this.setState({activities: newActivities}); 
  },
  editActivity(index){
    var activity = this.state.activities[index];
    this.setState({currentPage: PAGE.EDIT_ACTIVITY, editingActivity: activity});
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
    return {activities: [], currentPage: PAGE.ACTIVITY_LIST, editingActivity: null};
  },
  render() {
    var template = function(component){
      return (
        <div>
          <button type="button" className="btn btn-success" onClick={this.gotoAddActivityPage}>新增活動</button>
          {component} 
        </div>     
      ); 
    }.bind(this);

    var resultDOM;
    switch(this.state.currentPage){
      case PAGE.ADD_ACTIVITY:
        resultDOM = template(
          <AddActivityForm addNewActivity={this.addNewActivity} backToActivityListPage={this.backToActivityListPage} />
        ); 
        break;
      case PAGE.EDIT_ACTIVITY:
        resultDOM = template(
          <EditActivityForm activity={this.state.editingActivity} backToActivityListPage={this.backToActivityListPage} />
        ); 
        break;
      case PAGE.ACTIVITY_LIST:
        resultDOM = template(
          <ActivityList activities={this.state.activities} handleEdit={this.editActivity} deleteActivity={this.deleteActivity} />
        ); 
        break;
    }

    return resultDOM;
  }
})
