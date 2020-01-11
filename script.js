const dateBox = document.getElementById("dateBox");
const Box9 = document.getElementById("9AMBox");
const Box10 = document.getElementById("10AMBox");
const Box11 = document.getElementById("11AMBox");
const Box12 = document.getElementById("12PMBox");
const Box13 = document.getElementById("1PMBox");
const Box14 = document.getElementById("2PMBox");
const Box15 = document.getElementById("3PMBox");
const Box16 = document.getElementById("4PMBox");
const Box17 = document.getElementById("5PMBox");

// display current date
var headerdate = moment().format(" dddd, MMMM Do");
dateBox.innerHTML = "<p> Current Date: " + headerdate +"</p>";

// functions to change the content box colors based on the time

var date = new Date();
var currentHour = date.getHours();
console.log("current hour " + currentHour);
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// This function checks the time and changes the colors of the text inputs based on the time of day
   function checktime() 
   {hoursArray.forEach(function(element){
    if (currentHour > element) {
        $(eval("Box" + element)).addClass("pastcontentbox").removeClass("contentbox");
        $(eval("savebox" + element)).hide("savebox" + element);
        $(eval("input" + element)).hide(".input" + element);
        console.log(element + " Past Hour");
    } 
    
    else if (currentHour === element) {
        $(eval("Box" + element)).addClass("currentcontentbox").removeClass("contentbox");
        console.log(element + " current hour");
        $(document).ready(function(){
        }
        )}
        
    })};
checktime();
// some fun post 5 PM scripts
if(currentHour >= 17){
    $(Box17).append("<p>Work Day is over, time for Happy Hour! </p>");
    $(saveboxend).append("Open Beer");
}

