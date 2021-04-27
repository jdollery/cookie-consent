var Cookieconsent = function init() {

  var dialog = document.getElementById("cookieDialog");
  var allowButton = document.getElementById("allowCookies");
  var declineButton = document.getElementById("declineCookies");
  var resetButton = document.getElementById("resetCookies");

  //Find cookie and value
  window.getCookie = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  //Accept cookies and close dialog
  allowButton.addEventListener('click', function() {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 180*24*60*60*1000; //expire in 6 months
    now.setTime(expireTime);
    document.cookie = 'cookieConsent' + '=true; Path=/; Expires=' + now.toGMTString(); //add cookieConsent cookie & set to ture
    window.location.reload();
  });

  //Reject cookies and close dialog
  declineButton.addEventListener('click', function() {
    document.cookie = 'cookieConsent' + '=false; Path=/;'; //set cookieConsent cookie to false
    window.location.reload();
  });

  //Open dialog
  resetButton.addEventListener('click', function() {
    dialog.classList.add("cookie-dialog--active"); 
  });

  var x = getCookie('cookieConsent')
  
  if (!x) {
    dialog.classList.add("cookie-dialog--active"); //Show dialog if no actioned

  } else if (x == 'true') {
    console.log('Cookies Allowed');

    dialog.classList.remove("cookie-dialog--active"); //Remove dialog if actioned

  } else if (x == 'false') {
    console.log('Cookies Declined');

    dialog.classList.remove("cookie-dialog--active"); //Remove dialog if actioned

  }

};

Cookieconsent();