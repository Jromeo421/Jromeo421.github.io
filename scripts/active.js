// This changes the active tag to the current page
var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length - 1];

if (pageHREF !== "") {
   var menu = document.querySelectorAll('ul#dropdown li a');
    console.log(menu);
  var i;
    
    for (i = 0; i < menu.length; i++) {
        var currentURL = (menu[i].getAttribute('href'));
        menu[i].className = "";
        if (currentURL === pageHREF) {
            menu[i].className = "active";
        }
    }
}