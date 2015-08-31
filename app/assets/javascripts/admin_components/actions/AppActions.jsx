function _buildErrorMessage(response){
  var errorMessage = response.responseJSON.errors.map((error) => { 
    return <p>{error}</p>; 
  });
  return errorMessage;
}

var AppActions = {
  UpdateMessage(text, type){
    AppDispatcher.dispatch({
      actionType: AppConstants.UPDATE_MESSAGE,
      text: text,
      type: type 
    });
  },
  ReceiveAllActivities(activities){
    AppDispatcher.dispatch({
      actionType: AppConstants.RECEIVE_ALL_ACTIVITIES,
      activities: activities 
    });
  },
  addActivity(activity){
    ActivityWebAPIUtils.addActivity(activity, (response) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.ADD_ACTIVITY,
        activity: response.activity 
      });
      AppActions.UpdateMessage(response.msg, MSG_TYPE.SUCCESS);
    }, (response) => {
      AppActions.UpdateMessage(_buildErrorMessage(response), MSG_TYPE.ERROR);
    });
  },
  updateActivityAt(index, activity){
    ActivityWebAPIUtils.updateActivity(activity, (response) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.UPDATE_ACTIVITY,
        index: index,
        activity: activity 
      });
      AppActions.UpdateMessage(response.msg, MSG_TYPE.SUCCESS);
    }, (response) => {
      AppActions.UpdateMessage(_buildErrorMessage(response), MSG_TYPE.ERROR);
    });
  },
  deleteActivityAt(index, resourceId){
    ActivityWebAPIUtils.deleteActivityAt(resourceId, (response) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.DELETE_ACTIVITY,
        index: index
      });
      AppActions.UpdateMessage(response.msg, MSG_TYPE.SUCCESS);
    }, (response) => {
      AppActions.UpdateMessage(_buildErrorMessage(response), MSG_TYPE.ERROR);
    });
  }
};
