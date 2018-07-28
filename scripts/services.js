// This is the Services Function
var serviceObject = new XMLHttpRequest();
serviceObject.open("GET", "https://sjkendall88.github.io/MountainSpoke/data/services.json");
serviceObject.responseType = "json";
serviceObject.send();
/* -------------- Franklin, MN -------------- */
serviceObject.onload = function() {
    var serviceInfo = serviceObject.response;
    console.log(serviceInfo);
    //First service
    document.getElementById("service1").innerHTML = serviceInfo.Services["0"].service
    document.getElementById("desc1").innerHTML = serviceInfo.Services["0"].description
    document.getElementById("price1").innerHTML = serviceInfo.Services["0"].price
    //Second service
    document.getElementById("service2").innerHTML = serviceInfo.Services["1"].name
    document.getElementById("desc2").innerHTML = serviceInfo.Services["1"].description
    document.getElementById("price2").innerHTML = serviceInfo.Services["1"].price
    //Third service
    document.getElementById("service3").innerHTML = serviceInfo.Services["2"].name
    document.getElementById("desc3").innerHTML = serviceInfo.Services["2"].description
    document.getElementById("price3").innerHTML = serviceInfo.Services["2"].price
    //Fourth service
    document.getElementById("service4").innerHTML = serviceInfo.Services["3"].name
    document.getElementById("desc4").innerHTML = serviceInfo.Services["3"].description
    document.getElementById("price4").innerHTML = serviceInfo.Services["3"].price
    //Fifth service
      document.getElementById("service5").innerHTML = serviceInfo.Services["3"].name
    document.getElementById("desc5").innerHTML = serviceInfo.Services["3"].description
    document.getElementById("price5").innerHTML = serviceInfo.Services["3"].price
}