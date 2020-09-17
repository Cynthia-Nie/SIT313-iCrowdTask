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
  var username = document.getElementById("email").value.trim() ;
  var password = document.getElementById("password").value.trim() ;
  var isRmbPwd = document.getElementById("remember").checked ;
  if ( username.length != 0 && password.length != 0 )
  {
      if ( isRmbPwd == true )
      {   
          setCookie ( "This is username", username, 7 ) ;
          setCookie ( username, password, 7 ) ;
      }
      else
      {
          delCookie ( "This is username" ) ;
          delCookie ( username ) ;
      }
  }
 window.onload = function ()
 {
    var username = getCookie("This is username") ;
    if ( username == "" )
    {
        document.getElementById("email").value="" ;
        document.getElementById("password").value="" ;
        document.getElementById("remember").checked=false ;
    }
    else
    {
        var password = getCookie(username) ;
        document.getElementById("email").value = username ;
        document.getElementById("password").value = password ;
        document.getElementById("remember").checked = true ;
    }
}
  var data = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  }
  console.log(data);
  var baseUrl = '';
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

