const Cookieconsent = function init() {

  //https://thisinterestsme.com/add-html-body-javascript/
  //https://stackoverflow.com/questions/13495010/how-to-add-content-to-html-body-using-js

  //Create a container for the dialog
  const cookieHTML = document.createElement("div");

  //Give the container unique id
  cookieHTML.id = 'cookieConsent';

  //Give the container unique class
  cookieHTML.classList.add("cookie-dialog");

  //Add dialog and reset to container - insertAdjacentHTML is a quicker and backward compatable, rather than innerHTML
  cookieHTML.insertAdjacentHTML("beforeend", "{{load path='./src/html/dialog.html'}}"); //inject with gulp
  
  //Append the container to the HTML body
  document.body.prepend                                                                                                                                                     (cookieHTML);

  // const cookieAppend = document.createElement(cookieHTML);

  // document.body.insertBefore(cookieAppend, document.body.firstChild);

  const dialog = document.getElementById("cookieConsent");
  const allowButton = document.getElementById("allowCookies");
  const declineButton = document.getElementById("declineCookies");
  const resetButton = document.getElementById("resetCookies");

  //Find cookie and value
  window.getCookie = function(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  //Init cookies and open dialog
  function addCookie(name) {
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 180*24*60*60*1000; //expire in 6 months
    now.setTime(expireTime);
    document.cookie = name + '=init; Path=/; Expires=' + now.toGMTString(); //add cookieConsent cookie & set to ture;
  }

  //Accept cookies and close dialog
  allowButton.addEventListener('click', function() {
    document.cookie = 'cookieConsent' + '=true; Path=/;'; //set cookieConsent cookie to false
    window.location.reload();
  });

  //Reject cookies and close dialog
  declineButton.addEventListener('click', function() {
    document.cookie = 'cookieConsent' + '=false; Path=/;'; //set cookieConsent cookie to false
    window.location.reload();
  });

  //Open dialog
  if(document.getElementById('resetCookies')) {
    resetButton.addEventListener('click', function() {
      dialog.classList.add("cookie-dialog--active"); 
      document.cookie = 'cookieConsent' + '=init; Path=/;'; //set cookieConsent cookie to false
    });
  }

  const x = getCookie('cookieConsent')
  
  if (!x) {

    dialog.classList.add("cookie-dialog--active"); //Add dialog if actioned
    addCookie('cookieConsent');  

  } else if (x == 'true') {

    console.log('Cookies Accepted');

    dialog.classList.remove("cookie-dialog--active"); //Remove dialog if actioned

  } else if (x == 'false') {

    console.log('Cookies Declined');

    dialog.classList.remove("cookie-dialog--active"); //Remove dialog if actioned

  } else if (x == 'init') {

    dialog.classList.add("cookie-dialog--active"); //Remove dialog if actioned

  }

};

Cookieconsent();