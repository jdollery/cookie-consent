var Cookieconsent = function init() {

  // var tags = {
  //   google: 'UA-32035579-1'
  // };

  var dialog = document.getElementById("cookieDialog");
  var allowButton = document.getElementById("allowCookies");
  var declineButton = document.getElementById("declineCookies");
  var resetButton = document.getElementById("resetCookies");

  //Find cookie and value
  // function getCookie(name) {
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

    //Find google traking code and set expiry - need to use in click?? 
    // let i = getCookie('_gat_gtag_UA_32035579_1')
    // document.cookie = i + '=1; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

  });

  //Open dialog
  resetButton.addEventListener('click', function() {
    dialog.classList.add("cookie-dialog--active"); 
  });


  var x = getCookie('cookieConsent')
  
  if (!x) {
    dialog.classList.add("cookie-dialog--active"); //Show dialog if no actioned

    // var s = document.getElementsByTagName('script');
    // var i;
    // for (i = 0; i < s.length; i++) {
    //   s[i].setAttribute('type', 'text/plain');
    // }

  } else if (x == 'true') {
    console.log('Cookies Allowed');

    dialog.classList.remove("cookie-dialog--active"); //Remove dialog if actioned

    //Add google tag manager script and add tracking code if cookies allowed
    // let analytics = document.createElement('script');
    // analytics.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=' + tags.google);
    // document.head.appendChild(analytics);

    // var s = document.getElementsByTagName('script');
    // var i;
    // for (i = 0; i < s.length; i++) {
    //   s[i].setAttribute('type', 'text/javascript');
    // }

  } else if (x == 'false') {
    console.log('Cookies Declined');

    dialog.classList.remove("cookie-dialog--active"); //Remove dialog if actioned

    //Find google tag manager script and remove if cookies rejected
    // let analytics = document.head.getElementsByTagName('https://www.googletagmanager.com/gtag/');
    // if (analytics.length > 0) {
    //   document.head.removeChild(analytics[0]);
    // }    

    // let s = document.head.getAttribute('data-cookie');
    // // var s = document.getElementsByTagName('script');
    // var i;
    // for (i = 0; i < s.length; i++) {
    //   s[i].setAttribute('type', 'text/plain');
    // }

    //https://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript

  }

};

Cookieconsent();