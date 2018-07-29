
var serviceObject = new XMLHttpRequest();
serviceObject.open("GET", "https://jromeo421.github.io/dataAccess/services.json");
serviceObject.responseType = "json";
serviceObject.send();


serviceObject.onload = function() {
    var serviceInfo = serviceObject.response;
    console.log(serviceInfo);

        document.getElementById("type").innerHTML = serviceInfo.Services["0"].service
    document.getElementById("desc").innerHTML = serviceInfo.Services["0"].description
    document.getElementById("price").innerHTML = serviceInfo.Services["0"].price
    document.getElementById("color").innerHTML = serviceInfo.Services["0"].color

    document.getElementById("type1").innerHTML = serviceInfo.Services["1"].service
    document.getElementById("desc1").innerHTML = serviceInfo.Services["1"].description
    document.getElementById("price1").innerHTML = serviceInfo.Services["1"].price
    document.getElementById("color1").innerHTML = serviceInfo.Services["1"].color

    document.getElementById("type2").innerHTML = serviceInfo.Services["2"].service
    document.getElementById("desc2").innerHTML = serviceInfo.Services["2"].description
    document.getElementById("price2").innerHTML = serviceInfo.Services["2"].price
    document.getElementById("color2").innerHTML = serviceInfo.Services["2"].color

    document.getElementById("type3").innerHTML = serviceInfo.Services["3"].service
    document.getElementById("desc3").innerHTML = serviceInfo.Services["3"].description
    document.getElementById("price3").innerHTML = serviceInfo.Services["3"].price
    document.getElementById("color3").innerHTML = serviceInfo.Services["3"].color
}