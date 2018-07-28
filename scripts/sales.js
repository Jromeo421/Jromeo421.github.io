// This is the bicycles Function
var bicycleObject = new XMLHttpRequest();
bicycleObject.open("GET", "https://sjkendall88.github.io/MountainSpoke/data/bicycle.json");
bicycleObject.responseType = "json";
bicycleObject.send();

bicycleObject.onload = function () {
    var bicycleInfo = bicycleObject.response;
    console.log(bicycleInfo);
    //First bicycle
    document.getElementById("name1").innerHTML = bicycleInfo.bicycle["0"].name
    document.getElementById("type1").innerHTML = bicycleInfo.bicycle["0"].type
    document.getElementById("color1").innerHTML = bicycleInfo.bicycle["0"].color
    document.getElementById("price1").innerHTML = bicycleInfo.bicycle["0"].price
    document.getElementById("desc1").innerHTML = bicycleInfo.bicycle["0"].description

    document.getElementById("name2").innerHTML = bicycleInfo.bicycle["1"].name
    document.getElementById("type2").innerHTML = bicycleInfo.bicycle["1"].type
    document.getElementById("color2").innerHTML = bicycleInfo.bicycle["1"].color
    document.getElementById("price2").innerHTML = bicycleInfo.bicycle["1"].price
    document.getElementById("desc2").innerHTML = bicycleInfo.bicycle["1"].description

    //Third bicycle
    document.getElementById("name3").innerHTML = bicycleInfo.bicycle["2"].name
    document.getElementById("type3").innerHTML = bicycleInfo.bicycle["2"].type
    document.getElementById("color3").innerHTML = bicycleInfo.bicycle["2"].color
    document.getElementById("price3").innerHTML = bicycleInfo.bicycle["2"].price
    document.getElementById("desc3").innerHTML = bicycleInfo.bicycle["2"].description

}