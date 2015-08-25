// For sending the delete request, we need to setup the csrf-token to make it work
function buildDataForAjaxRequest(method) {
  var csrfToken = $('meta[name=csrf-token]').attr('content');
  var csrfParam = $('meta[name=csrf-param]').attr('content');
  var data = {};
  data["_method"] = method;
  data[csrfParam] = csrfToken;

  return data;
}
