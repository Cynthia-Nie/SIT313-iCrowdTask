function createAccount() {
  var fieldMap = {
    country: document.getElementsByName('Country')[0].value,
  };
  document.querySelectorAll('input').forEach(function (ele) {
    fieldMap[ele.name] = ele.value;
  });
  console.log(fieldMap);
  var baseUrl = '';
  var url = baseUrl + '/api/register';
  jQuery.ajax({
    type: 'post',
    url: url,
    data: fieldMap,
    dataType: 'json',
    success: function (data) {
      alert('Create an iCrowdTsak account success');
    },
    error: function (err) {
      console.log(err);
      var jsonBody = (err || {}).responseJSON;
      var msg = (jsonBody || {}).msg;
      if (msg) {
        alert(msg);
      }
    }
  })
}