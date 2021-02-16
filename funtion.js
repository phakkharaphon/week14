// let year = 2489;
let year = prompt("WE ARE GENERATION : คุณอยู่รุ่นไหน")
if(year<=2489)
{
    alert(year + " " + "Generation Builders")
    console.log(year + " "+ "Generation Builders");
    document.getElementById("A").innerHTML = year + " "+ "Generation Builders";
}

else if(year>=2490 && year<=2507){
    alert(year + " " + "Generation Baby boomers");
    console.log(year + " " + "Generation Baby boomers");
    document.getElementById("A").innerHTML = year + " " + "Generation Baby boomers";
}
else if(year>=2508 && year<=2524){
    alert(year + " " + "Generation Gen X");
    console.log(year + " " + "Generation Gen X");
    document.getElementById("A").innerHTML = year + " " + "Generation Gen X";
}
else if(year>=2525 && year<=2538){
    alert(year + " " + "Generation Gen Y");
    console.log(year + " " + "Generation Gen Y");
    document.getElementById("A").innerHTML = year + " " + "Generation Gen Y";
}
else if(year>=2539 && year<=2552){
    alert(year + " " + "Generation Gen Z");
    console.log(year + " " + "Generation Gen Z");
    document.getElementById("A").innerHTML = year + " " + "Generation Gen Z";
}
else if(year>=2553 && year<=2560){
    alert(year + " " + "Generation Gen Alpha");
    console.log(year + " " + "Generation Gen Alpha");
    document.getElementById("A").innerHTML = year + " " + "Generation Gen Alpha";
}