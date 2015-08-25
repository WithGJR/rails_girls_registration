// For sending the delete request, we need to setup the csrf-token to make it work
function buildDataForAjaxDeleteRequest() {
  var csrfToken = $('meta[name=csrf-token]').attr('content');
  var csrfParam = $('meta[name=csrf-param]').attr('content');
  var data = {};
  data["_method"] = "delete";
  data[csrfParam] = csrfToken;

  return data;
}
