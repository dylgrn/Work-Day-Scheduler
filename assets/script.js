let timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
let curDay = document.querySelector("#currentDay")
curDay.textContent = timeNow
let thisHour = moment()
let userText = {
    thisText9: document.querySelector("thistext9"),
    thisText10: document.querySelector("thistext10"),
    thisText11: document.querySelector("thistext11"),
    thisText12: document.querySelector("thistext12"),
    thisText1: document.querySelector("thistext1"),
    thisText2: document.querySelector("thistext2"),
    thisText3: document.querySelector("thistext3"),
    thisText4: document.querySelector("thistext4"),
    thisText5: document.querySelector("thistext5"),
}

function loadText() {
    document.querySelector("#thistext9").innerHTML = localStorage.getItem("thistext9");
    document.querySelector("#thistext10").innerHTML = localStorage.getItem("thistext10");
    document.querySelector("#thistext11").innerHTML = localStorage.getItem("thistext11");
    document.querySelector("#thistext12").innerHTML = localStorage.getItem("thistext12");
    document.querySelector("#thistext1").innerHTML = localStorage.getItem("thistext1");
    document.querySelector("#thistext2").innerHTML = localStorage.getItem("thistext2");
    document.querySelector("#thistext3").innerHTML = localStorage.getItem("thistext3");
    document.querySelector("#thistext4").innerHTML = localStorage.getItem("thistext4");
    document.querySelector("#thistext5").innerHTML = localStorage.getItem("thistext5");
 }
 
$("button").click(function(){
    let text9 = thistext9.value;
    localStorage.setItem("thistext9", text9);

    let text10 = thistext10.value;
    localStorage.setItem("thistext10", text10);
    
    let text11 = thistext11.value;
    localStorage.setItem("thistext11", text11);

    let text12 = thistext12.value;
    localStorage.setItem("thistext12", text12);

    let text1 = thistext1.value;
    localStorage.setItem("thistext1", text1);

    let text2 = thistext2.value;
    localStorage.setItem("thistext2", text2);

    let text3 = thistext3.value;
    localStorage.setItem("thistext3", text3);

    let text4 = thistext4.value;
    localStorage.setItem("thistext4", text4);

    let text5 = thistext5.value;
    localStorage.setItem("thistext5", text5);
})





let hours = {
    hour9: document.querySelector("#thistext9"),
    hour10: document.querySelector("#thistext10"),
    hour11: document.querySelector("#thistext11"),
    hour12: document.querySelector("#thistext12"),
    hour1: document.querySelector("#thistext1"),
    hour2: document.querySelector("#thistext2"),
    hour3: document.querySelector("#thistext3"),
    hour4: document.querySelector("#thistext4"),
    hour5: document.querySelector("#thistext5"),
}

function time() {
    hour9 = moment().hours(9)
    if (hour9 === thisHour) {
       $("#thistext9").addClass("present");
    } else if (hour9 > thisHour) {
        $("#thistext9").addClass("past");
    } else {
        $("#thistext9").addClass("past")
    }

    hour10 = moment().hours(10)
    if (hour10 === thisHour) {
        $("#thistext10").addClass("present");
     } else if (hour10 > thisHour) {
         $("#thistext10").addClass("future");
     } else {
         $("#thistext10").addClass("past")
     }

     hour11 = moment().hours(11)
    if (hour11 === thisHour) {
        $("#thistext11").addClass("present");
     } else if (hour11 > thisHour) {
         $("#thistext11").addClass("future");
     } else {
         $("#thistext11").addClass("past")
     }

     hour12 = moment().hours(12)
    if (hour12 === thisHour) {
        $("#thistext12").addClass("present");
     } else if (hour12 > thisHour) {
         $("#thistext12").addClass("future");
     } else {
         $("#thistext12").addClass("past")
     }

     hour1 = moment().hours(13)
    if (hour1 === thisHour) {
        $("#thistext1").addClass("present");
     } else if (hour1 > thisHour) {
         $("#thistext1").addClass("future");
     } else {       
         $("#thistext1").addClass("past")
     }

     hour2 = moment().hours(14)
    if (hour2 === thisHour) {
        $("#thistext2").addClass("present");
     } else if (hour2 > thisHour) {
         $("#thistext2").addClass("future");
     } else {
         $("#thistext2").addClass("past")
     }

     hour3 = moment().hours(15);
     if (hour3 === thisHour) {
         $("#thistext3").addClass("present");
      } else if (hour3 > thisHour) {
          $("#thistext3").addClass("future");
      } else {
          $("#thistext3").addClass("past")
      }

      hour4 = moment().hours(16)
     if (hour4 === thisHour) {
         $("#thistext4").addClass("present");
      } else if (hour4 > thisHour) {
          $("#thistext4").addClass("future");
      } else {
          $("#thistext4").addClass("past")
      }

      hour5 = moment().hours(17)
     if (hour5 === thisHour) {
         $("#thistext5").addClass("present");
      } else if (hour5 > thisHour) {
          $("#thistext5").addClass("future");
      } else {
          $("#thistext5").addClass("past")
      }
}
loadText();
time();