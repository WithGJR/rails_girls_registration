const CHANGE_EVENT = "CHANGE_EVENT";
var _activities = [];
var _message = {text: null, type: null};

var AppStore = new EventEmitter();
//--- Private API
function _addActivity(activity){
  _activities.unshift(activity);
}
function _addActivities(activities){
  _activities = activities;
}
function _updateActivityAt(index, activity){
  _activities[index] = activity;
}
function _deleteActivityAt(index){
  _activities.splice(index, 1);
}
function _updateMessage(text, type){
  _message.text = text;
  _message.type = type; 
}
//---

//--- Public API
AppStore.getAllActivities = function(){
  return _activities;
};

AppStore.getMessage = function(){
  return _message;
};
AppStore.emitChange = function(){
  this.emit(CHANGE_EVENT);
};
AppStore.addChangeListener = function(callback){
  this.on(CHANGE_EVENT, callback);
};
AppStore.removeChangeListener = function(callback){
  this.removeListener(CHANGE_EVENT, callback);
};
//---

AppDispatcher.register(function(payload){
  switch(payload.actionType){
    case AppConstants.UPDATE_MESSAGE:
      _updateMessage(payload.text, payload.type);
      break;
    case AppConstants.RECEIVE_ALL_ACTIVITIES: 
       _addActivities(payload.activities); 
      break;
    case AppConstants.ADD_ACTIVITY:
      _addActivity(payload.activity);
      break;
    case AppConstants.UPDATE_ACTIVITY:
      _updateActivityAt(payload.index, payload.activity);
      break;
    case AppConstants.DELETE_ACTIVITY:
      _deleteActivityAt(payload.index);
      break;
  }
  AppStore.emitChange(CHANGE_EVENT);
});
