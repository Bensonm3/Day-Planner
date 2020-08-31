const dateBox = document.getElementById("dateBox");
const plannerBox = document.getElementById("PlannerBox");
let retrievedTask;
let storedTask;
let Task;
let Time;
// Retrieve and display current date
var headerdate = moment().format(" dddd,  MMMM Do");
dateBox.innerHTML = "<p> Current Date: " + headerdate +"</p>";
// functions to change the content box colors based on the current time. Change var currenthour to a number between 9 and 17 to see how it acts at different times of day
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
// Generates HTML for planner rows, if functions properly format time
hoursArray.forEach(function(hour) {
    if(hour >12){
        time = hour-12+" PM"
    } else if(hour == 12){
    time = hour+" PM"
    } else{
        time = hour+ " AM"
    }
    $("#PlannerBox").append(
    `<div class="row timerow row`+hour+`">
    <div class="col-md-2 timebox">`+time+`</div>
    <div id = "Box`+hour+`" class="col-md-8 contentbox">
        <input id="input`+hour+`" class="input">
    </div>
    <div id ="savebox`+hour+`" class="col-md-2 savebox">Save</div>
</div>`
)
})
// This function checks the time and changes the div class based on the time of day, which changes the color of the box
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
            console.log("click!")
            var storedTask = {
            Time: hour,
            Task: $("#input"+hour).val().trim(),
            } 
        localStorage.setItem(hour+" Task", JSON.stringify(storedTask));
        })
    })
checktime();

