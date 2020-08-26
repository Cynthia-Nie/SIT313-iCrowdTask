function createAccount() {
  var fieldMap = {
    country: document.getElementsByName('Country')[0].value,
  };
  document.querySelectorAll('input').forEach(function (ele) {
    fieldMap[ele.name] = ele.value;
  });
  console.log(fieldMap);
  var baseUrl = ''; // 'http://127.0.0.1:3000';
  var url = baseUrl + '/api/register';
  jQuery.ajax({
    type: 'post',
    url: url,
    data: fieldMap,
    dataType: 'json',
    success: function (data) {
      alert('Create an iCrowdTsak account success');
      location.href = "index2.html";
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

function login() {
  var data = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  }
  console.log(data);
  var baseUrl = ''; // 'http://127.0.0.1:3000';
  jQuery.ajax({
    type: 'post',
    url: baseUrl + '/api/user/signin',
    data: data,
    dataType: 'json',
    success: function (body) {
      console.log(data);
      sessionStorage.setItem('userInfo', JSON.stringify(body.data));
      alert('Login success');
      location.href = "reqtask.html";
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

