var ActivityWebAPIUtils = {
  getAllActivities(){
    $.ajax({
      method: "GET",
      url: backend_activities_path 
    })
    .done(function(activities){
      AppActions.ReceiveAllActivities(activities); 
    })
    .fail(function(){
      console.log("not work"); 
    });         
  },
  addActivity(activity, successCallback, failCallback){
    var data = buildDataForAjaxRequest("post");
    data.activity = activity;

    $.ajax({
      method: "POST",
      url: create_backend_activity_path,
      data: data
    })
    .done(function(response){
      successCallback(response);
    })
    .fail(function(response){
      failCallback(response);
    });         
  },
  updateActivity(activity, successCallback, failCallback){
    var data = buildDataForAjaxRequest("patch");
    data.activity = activity;

    $.ajax({
      method: "POST",
      url: update_backend_activity_path(activity.id),
      data: data
    })
    .done(function(response){
      successCallback(response);
    })
    .fail(function(response){
      failCallback(response);
    });         
  },
  deleteActivityAt(resourceId, successCallback, failCallback){
    $.ajax({
      method: "POST",
      url: destroy_backend_activity_path(resourceId),
      data: buildDataForAjaxRequest("delete")
    })
    .done(function(response){
      successCallback(response);
    })
    .fail(function(response){
      if (response.status === 401) {
        //When user is not signed in
        window.location = SIGN_IN_PATH;
      }else{
        failCallback(response);
      }
    });         
  }
};
