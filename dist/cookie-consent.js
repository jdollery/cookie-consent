const Cookieconsent=function(){const e=document.createElement("div");e.id="cookieConsent",e.classList.add("cookie-dialog"),e.insertAdjacentHTML("beforeend",'<div id="cookieConsent" class="cookie-dialog"> <div id="cookieDialog" class="cookie-dialog__body"> <div class="cookie-dialog__header"> To give you the best possible experience, this website uses &lsquo;cookies&rsquo; to remember and store information about how you interact with it. This information allows us to continually develop and improve the website&rsquo;s performance and usability. If you would like learn more about cookies or reset your preference, please visit our <a href="/cookie-policy" tabindex="0" target="_blank" title="Read our cookie policy">cookie policy</a>. </div> <div class="cookie-dialog__control"> <button id="allowCookies" class="cookie-dialog__allow" type="button" title="Allow all cookies"> Allow Cookies &amp; Reload </button> <button id="declineCookies" class="cookie-dialog__reject" type="button" title="Reject non-essential cookies"> Reject Cookies &amp; Reload </button> </div> </div> </div>'),document.body.prepend(e);const o=document.getElementById("cookieConsent"),i=document.getElementById("allowCookies"),t=document.getElementById("declineCookies"),n=document.getElementById("resetCookies");window.getCookie=function(e){var i=e+"=",t=document.cookie.split(";");for(let o=0;o<t.length;o++){let e=t[o];for(;" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(i))return e.substring(i.length,e.length)}return null},i.addEventListener("click",function(){document.cookie="cookieConsent=true; Path=/;",window.location.reload()}),t.addEventListener("click",function(){document.cookie="cookieConsent=false; Path=/;",window.location.reload()}),document.getElementById("resetCookies")&&n.addEventListener("click",function(){o.classList.add("cookie-dialog--active"),document.cookie="cookieConsent=init; Path=/;"});var c=getCookie("cookieConsent");c?"true"==c?(console.log("Cookies Accepted"),o.classList.remove("cookie-dialog--active")):"false"==c?(console.log("Cookies Declined"),o.classList.remove("cookie-dialog--active")):"init"==c&&o.classList.add("cookie-dialog--active"):(o.classList.add("cookie-dialog--active"),function(e){let o=new Date;var i=o.getTime();o.setTime(i+15552e6),document.cookie=e+"=init; Path=/; Expires="+o.toGMTString()}("cookieConsent"))};Cookieconsent();