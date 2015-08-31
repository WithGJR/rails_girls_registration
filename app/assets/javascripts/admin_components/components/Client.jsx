// The alias `bs` is from ../application.js
const _PAGE = {
  ACTIVITY_LIST: 0,
  ADD_ACTIVITY:  1,
  EDIT_ACTIVITY: 2
};

const Client = React.createClass({
  handleChange(){
    this.setState({activities: AppStore.getAllActivities(), message: AppStore.getMessage()});
  },
  resetMessage(){
    AppActions.UpdateMessage(null, null);
  },
  backToActivityListPage(){
    this.setState({currentPage: _PAGE.ACTIVITY_LIST, editingActivity: null});
    this.resetMessage();
  },
  gotoAddActivityPage(){
    this.setState({currentPage: _PAGE.ADD_ACTIVITY}); 
    this.resetMessage();
  },
  editActivity(index){
    var activity = this.state.activities[index];
    this.setState({currentPage: _PAGE.EDIT_ACTIVITY, editingActivity: activity, editingActivityIndex: index});
    this.resetMessage();
  },
  componentWillMount(){
    AppStore.addChangeListener(this.handleChange); 
    ActivityWebAPIUtils.getAllActivities();
  },
  componentWillUnmount(){
    AppStore.removeChangeListener(this.handleChange); 
  },
  getInitialState(){
    return {
      activities: AppStore.getAllActivities(), 
      currentPage: _PAGE.ACTIVITY_LIST, 
      editingActivity: null, 
      editingActivityIndex: null,
      message: {text: null, type: null},
    };
  },
  render() {
    var template = function(args, component){
      var activeBreadcrumbItem = (args["currentPageName"] !== null) ? 
                                 <li className="active">{args["currentPageName"]}</li> :
                                 "";

      return (
        <div>
          <ol className="breadcrumb">
            <li><a href="#" onClick={this.backToActivityListPage}>活動清單</a></li>
            {activeBreadcrumbItem}
          </ol>

          <Message message={this.state.message.text} messageType={this.state.message.type} />
          {component} 
        </div>     
      ); 
    }.bind(this);

    var resultDOM;
    switch(this.state.currentPage){
      case _PAGE.ADD_ACTIVITY:
        resultDOM = template(
          {currentPageName: "新增活動"},
          <AddActivityForm addNewActivity={this.addNewActivity} backToActivityListPage={this.backToActivityListPage} />
        ); 
        break;
      case _PAGE.EDIT_ACTIVITY:
        resultDOM = template(
          {currentPageName: "編輯活動"},
          <EditActivityForm index={this.state.editingActivityIndex} activity={this.state.editingActivity} updateActivity={this.updateActivity} backToActivityListPage={this.backToActivityListPage} />
        ); 
        break;
      case _PAGE.ACTIVITY_LIST:
        resultDOM = template(
          {currentPageName: null},
          <ActivityList activities={this.state.activities} gotoAddActivityPage={this.gotoAddActivityPage} handleEdit={this.editActivity} />
        ); 
        break;
    }

    return resultDOM;
  }
});
