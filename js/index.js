/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let MeterToFeet= document.getElementById("metertoFeet");
let LitersToGalons=document.getElementById("litersToGallon");
let KiloGramToPound=document.getElementById("kiloToPounds");
let DahabToAya= document.getElementById("DahabToAya");
let convButton= document.getElementById("conv")
function convertMeterToFeet(){
    MeterToFeet.innerHTML = `20 metres = ${20*3.281} | 20 feet = 6.069 `
}
function convertLitersToGalons(){
    LitersToGalons.innerHTML = `20 metres = ${20*3.281} | 20 feet = 6.069 `
}
function convertKiloGramToPound(){
    KiloGramToPound.innerHTML = `20 metres = ${20*3.281} | 20 feet = 6.069 `
}
function convertDahabToAya(){
    DahabToAya.innerHTML = `20 metres = ${20*3.281} | 20 feet = 6.069 `
}

convButton.addEventListener("click",function (){
    
     convertMeterToFeet()
     convertKiloGramToPound()
     convertLitersToGalons()
     convertDahabToAya()
})
localStorage.setItem("mm","dd")
alert(JSON.stringify(localStorage))
