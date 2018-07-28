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

    
    //Second service
    document.getElementById("type1").innerHTML = serviceInfo.Services["1"].service
    document.getElementById("desc1").innerHTML = serviceInfo.Services["1"].description
    document.getElementById("price1").innerHTML = serviceInfo.Services["1"].price
    
    
    //Third service
    document.getElementById("type2").innerHTML = serviceInfo.Services["2"].service
    document.getElementById("desc2").innerHTML = serviceInfo.Services["2"].description
    document.getElementById("price2").innerHTML = serviceInfo.Services["2"].price

    
    //Fourth service
    document.getElementById("type3").innerHTML = serviceInfo.Services["3"].service
    document.getElementById("desc3").innerHTML = serviceInfo.Services["3"].description
    document.getElementById("price3").innerHTML = serviceInfo.Services["3"].price

    
    //Fifth service
    document.getElementById("type4").innerHTML = serviceInfo.Services["4"].service
    document.getElementById("desc4").innerHTML = serviceInfo.Services["4"].description
    document.getElementById("price4").innerHTML = serviceInfo.Services["4"].price

    
    //Sixth Service
    document.getElementById("type5").innerHTML = serviceInfo.Services["5"].service
    document.getElementById("desc5").innerHTML = serviceInfo.Services["5"].description
    document.getElementById("price5").innerHTML = serviceInfo.Services["5"].price

    
        document.getElementById("type6").innerHTML = serviceInfo.Services["6"].service
    document.getElementById("desc6").innerHTML = serviceInfo.Services["6"].description
    document.getElementById("price6").innerHTML = serviceInfo.Services["6"].price

    
        document.getElementById("type7").innerHTML = serviceInfo.Services["7"].service
    document.getElementById("desc7").innerHTML = serviceInfo.Services["7"].description
    document.getElementById("price7").innerHTML = serviceInfo.Services["7"].price

    
        document.getElementById("type8").innerHTML = serviceInfo.Services["8"].service
    document.getElementById("desc8").innerHTML = serviceInfo.Services["8"].description
    document.getElementById("price8").innerHTML = serviceInfo.Services["8"].price

    
        document.getElementById("type9").innerHTML = serviceInfo.Services["9"].service
    document.getElementById("desc9").innerHTML = serviceInfo.Services["9"].description
    document.getElementById("price9").innerHTML = serviceInfo.Services["9"].price

    
        document.getElementById("type10").innerHTML = serviceInfo.Services["10"].service
    document.getElementById("desc10").innerHTML = serviceInfo.Services["10"].description
    document.getElementById("price10").innerHTML = serviceInfo.Services["10"].price

}