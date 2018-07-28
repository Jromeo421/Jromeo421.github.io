// This is the Services Function
var serviceObject = new XMLHttpRequest();
serviceObject.open("GET", "https://jromeo421.github.io/dataAccess/services.json");
serviceObject.responseType = "json";
serviceObject.send();
/* -------------- Franklin, MN -------------- */
serviceObject.onload = function() {
    var serviceInfo = serviceObject.response;
    console.log(serviceInfo);
    
    
    //First service
    document.getElementById("type").innerHTML = serviceInfo.Services["0"].service
    document.getElementById("desc").innerHTML = serviceInfo.Services["0"].description
    document.getElementById("price").innerHTML = serviceInfo.Services["0"].price
    document.getElementById("other").innerHTML = serviceInfo.Services["0"].additional
    //Second service
    document.getElementById("type1").innerHTML = serviceInfo.Services["1"].service
    document.getElementById("desc1").innerHTML = serviceInfo.Services["1"].description
    document.getElementById("price1").innerHTML = serviceInfo.Services["1"].price
    document.getElementById("other").innerHTML = serviceInfo.Services["0"].additional
    //Third service
    document.getElementById("type2").innerHTML = serviceInfo.Services["2"].service
    document.getElementById("desc2").innerHTML = serviceInfo.Services["2"].description
    document.getElementById("price2").innerHTML = serviceInfo.Services["2"].price
    document.getElementById("other").innerHTML = serviceInfo.Services["0"].additional
    //Fourth service
    document.getElementById("type3").innerHTML = serviceInfo.Services["3"].service
    document.getElementById("desc3").innerHTML = serviceInfo.Services["3"].description
    document.getElementById("price3").innerHTML = serviceInfo.Services["3"].price
    document.getElementById("other").innerHTML = serviceInfo.Services["0"].additional
    //Fifth service
      document.getElementById("type4").innerHTML = serviceInfo.Services["4"].service
    document.getElementById("desc4").innerHTML = serviceInfo.Services["4"].description
    document.getElementById("price4").innerHTML = serviceInfo.Services["4"].price
    document.getElementById("other").innerHTML = serviceInfo.Services["0"].additional
}