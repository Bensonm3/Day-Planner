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
    $("#input"+element).val(retrievedTask["Task"]);
    })});

// This function checks the time and changes the colors of the text inputs based on the time of day
   function checktime() 
   {hoursArray.forEach(function(element){
    if (currentHour > element) {
        $(eval("Box" + element)).addClass("pastcontentbox").removeClass("contentbox");
    } 
    
    else if (currentHour === element) {
        $(eval("Box" + element)).addClass("currentcontentbox").removeClass("contentbox");
        $(document).ready(function(){
        }
        )}
        
    })};

    // Save tasks to Local Storage
    $('#savebox9').on('click', function(){
        var storedTask = {
        Time: "9AM",
        Task: $("#input9").val().trim(),
        
        } 
        localStorage.setItem("9 Task", JSON.stringify(storedTask));
    });
    $('#savebox10').on('click', function(){
        var storedTask = {
        Time: "10AM",
        Task: $("#input10").val().trim(),
        
        } 
        localStorage.setItem("10 Task", JSON.stringify(storedTask));
    });
    $('#savebox11').on('click', function(){
        var storedTask = {
        Time: "11AM",
        Task: $("#input11").val().trim(),
        
        } 
        localStorage.setItem("11 Task", JSON.stringify(storedTask));
    });
    $('#savebox12').on('click', function(){
        var storedTask = {
        Time: "12PM",
        Task: $("#input12").val().trim(),
        
        } 
        localStorage.setItem("12 Task", JSON.stringify(storedTask));
    });
    $('#savebox13').on('click', function(){
        var storedTask = {
        Time: "1PM",
        Task: $("#input13").val().trim(),
        
        } 
        localStorage.setItem("13 Task", JSON.stringify(storedTask));
    });
    $('#savebox14').on('click', function(){
        var storedTask = {
        Time: "2PM",
        Task: $("#input14").val().trim(),
        
        } 
        localStorage.setItem("14 Task", JSON.stringify(storedTask));
    });
    $('#savebox15').on('click', function(){
        var storedTask = {
        Time: "3PM",
        Task: $("#input15").val().trim(),
        
        } 
        localStorage.setItem("15 Task", JSON.stringify(storedTask));
    });
    $('#savebox16').on('click', function(){
        var storedTask = {
        Time: "4PM",
        Task: $("#input16").val().trim(),
        
        } 
        localStorage.setItem("16 Task", JSON.stringify(storedTask));
    });
    $('#savebox17').on('click', function(){
        var storedTask = {
        Time: "5PM",
        Task: $("#input17").val().trim(),
        
        } 
        localStorage.setItem("17 Task", JSON.stringify(storedTask));
    });


    function loadTasks(){
        var retrievedTask = JSON.parse(localStorage.getItem(storedTask))
    }

checktime();

// some fun post 5 PM scripts I was working on, trying to make a beer finder through google maps
// if(currentHour >= 17){
//     $(".col-md-10").prepend("<button class = 'beerFinder'>Find Nearest Happy Hour</button>")
//     $(".col-md-10").prepend("<div> Work Day is over, time for Happy Hour! </div>");
//     $(".col-md-10").prepend("<div id= 'map'style='width:100%;height:100%;'></div>");
    
// }

// $(".beerFinder").on('click',function myMap() {
//     var mapProp= {
//         center:new google.maps.LatLng(51.508742,-0.120850),
//         zoom:12,
//       };
//       var map = new google.maps.Map(document.getElementById("map"),mapProp);
//       });