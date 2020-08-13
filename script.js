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
// Retrieve and display current date
var headerdate = moment().format(" dddd,  MMMM Do");
dateBox.innerHTML = "<p> Current Date: " + headerdate +"</p>";
// functions to change the content box colors based on the current time. Change var currenthour to a number between 9 and 17 to see 
// how it acts at different times of day
var date = new Date();
var currentHour = date.getHours();
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// On load, this function retrieves any saved tasks
hoursArray.forEach(function(element){
    $(document).ready(function() {
        var retrievedTask = JSON.parse(localStorage.getItem(element +" Task"))
        if(retrievedTask ==null) {
            $("#input"+element).val(null);
        }
        else {
            $("#input"+element).val(retrievedTask["Task"]);
        }
    })
});
// This function checks the time and changes the colors of the text inputs based on the time of day
   function checktime() {
       hoursArray.forEach(function(element){
           if (currentHour > element) {
               $(eval("Box" + element)).addClass("pastcontentbox").removeClass("contentbox");
            } 
            else if (currentHour === element) {
                $(eval("Box" + element)).addClass("currentcontentbox").removeClass("contentbox");
                $(document).ready(function(){
                }
            )}    
        }
    )};
    // Save tasks to Local Storage
    hoursArray.forEach(function(hour) {
        $('#savebox'+hour).on('click', function(){
                var storedTask = {
                Time: hour+" AM",
                Task: $("#input"+hour).val().trim(),
                    } 
                    console.log(storedTask)
                localStorage.setItem(hour+" Task", JSON.stringify(storedTask));
                    })
        })
checktime();

