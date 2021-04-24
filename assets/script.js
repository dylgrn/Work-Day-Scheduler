let timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
let curDay = document.querySelector("#currentDay")
curDay.textContent = timeNow
let endDay = moment().endOf('hour').fromNow(); 
let start = moment().add(1, 'days').calendar();
function time() {
    if (timeNow <= start) {
       $("textarea").addClass("future");
    } else if (timeNow === timeNow) {
        $("textarea").addClass("present");
    }
}

time();