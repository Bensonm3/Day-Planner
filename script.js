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
let retrievedTask;
let storedTask;
let Task;
let Time;

// display current date
var headerdate = moment().format(" dddd, MMMM Do");
dateBox.innerHTML = "<p> Current Date: " + headerdate +"</p>";

    $(document).ready(function() {
    var retrievedTask = JSON.parse(localStorage.getItem("4PM Input"))
    console.log(retrievedTask["Task"]);
    $("#input16").val(retrievedTask["Task"]);
    });




// functions to change the content box colors based on the time
var date = new Date();
var currentHour = 15
// date.getHours();
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// This function checks the time and changes the colors of the text inputs based on the time of day
   function checktime() 
   {hoursArray.forEach(function(element){
    if (currentHour > element) {
        $(eval("Box" + element)).addClass("pastcontentbox").removeClass("contentbox");
        $(eval("savebox" + element)).hide("savebox" + element);
        $(eval("input" + element)).hide(".input" + element);
    } 
    
    else if (currentHour === element) {
        $(eval("Box" + element)).addClass("currentcontentbox").removeClass("contentbox");
        $(document).ready(function(){
        }
        )}
        
    })};

    // Save task to Local Storage
    
    $('#savebox16').on('click', function(){
        var storedTask = {
        Time: "4PM",
        Task: $("#input16").val().trim(),

        } 
        localStorage.setItem("4PM Input", JSON.stringify(storedTask));
           
        }
    );

    function loadTasks(){
        var retrievedTask = JSON.parse(localStorage.getItem(storedTask))
    }

checktime();

// some fun post 5 PM scripts
if(currentHour >= 17){
    $(Box17).append("<p>Work Day is over, time for Happy Hour! </p>");
    $(savebox17).append("Open Beer");
}

