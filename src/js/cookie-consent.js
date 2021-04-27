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
  document.body.appendChild(cookieHTML);

  const dialog = document.getElementById("cookieDialog");
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

  //Accept cookies and close dialog
  allowButton.addEventListener('click', function() {
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 180*24*60*60*1000; //expire in 6 months
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
    dialog.classList.add("cookie-dialog__body--active"); 
  });

  const x = getCookie('cookieConsent')
  
  if (!x) {
    dialog.classList.add("cookie-dialog__body--active"); //Show dialog if no actioned

  } else if (x == 'true') {
    console.log('Cookies Allowed');

    dialog.classList.remove("cookie-dialog__body--active"); //Remove dialog if actioned

  } else if (x == 'false') {
    console.log('Cookies Declined');

    dialog.classList.remove("cookie-dialog__body--active"); //Remove dialog if actioned

  }

};

Cookieconsent();