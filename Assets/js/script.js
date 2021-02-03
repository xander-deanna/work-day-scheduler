// display current day
var momentVar = moment();
console.log(momentVar.format("dddd, MMM Do YYYY"));
var currentDate=momentVar.format("dddd, MMMM Do YYYY");
$("#todayDate").text(currentDate);

// variable for my textboxes in html
var textbox = $(".textbox")

// for loop to change colors of textboxes based on time of day
var hourDayTime=moment().format("hA");
var timeBlockAllEL = $(".timeblock");
for (var i=0; i < timeBlockAllEL.length; i++){
    var arrTimeBlock=$(timeBlockAllEL[i]);
    var timeBlockId=arrTimeBlock.attr("id").toUpperCase();
    var timeBlockArea=arrTimeBlock.children().children(".textbox");
        if (timeBlockId === hourDayTime){
            timeBlockArea.addClass("present");
        }
        else if(moment(timeBlockId, "hA").isBefore()){
            timeBlockArea.addClass("past")
        }
        else if (moment(timeBlockId, "hA").isAfter()) {
            timeBlockArea.addClass("future");
        }
    }

// sets text content of textbox to local storage
$(".btn").on("click", function(event){
    event.preventDefault();
    var scheduleInput = $(this).siblings(".textbox").val();
    var scheduleInputStorage = $(this).parent().parent().attr("id");

    localStorage.setItem(scheduleInputStorage, scheduleInput)
})

// for loop to display local storage content in textbox
// still stuck on this part

// for (var i = 0; i < textbox.length; i++ ){
//     var eachBox = textbox[i];
//     var boxName = eachBox.parent().parent().attr("id");
//     eachBox.val(localStorage.getItem(boxName))
//     console.log(boxName)
// }