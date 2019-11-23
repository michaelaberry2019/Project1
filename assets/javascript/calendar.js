let all_events = [
    {
        title: 'Calendar HTML implementation',
        className: 'fc-task',
        start: '2019-11-12',
        end: '2019-11-19'
    },
    {
        title: 'Initial Design Sign-Off',
        className: 'fc-milestone',
        start: '2019-11-12',
        end: '',
        isMilestone: true
    },
    {
        title: 'Calendar Page Completion',
        className: 'fc-milestone',
        start: '2019-11-16',
        isMilestone: true
    },
    {
        title: 'Teams Backlog Page Development',
        className: 'fc-task',
        start: '2019-11-12T10:30:00',
        end: '2019-08-12T12:30:00'
    }
];

//  var ctx = $("#lineChart")//.get(0);
var commitLineChart = document.getElementById("commit-line-chart").getContext("2d");
var commitPieChart = document.getElementById("commit-pie-chart").getContext("2d");
var messageLine = document.getElementById("message-line-chart").getContext("2d");
var helpLine = document.getElementById("help-line-chart").getContext("2d");
// console.log(document.querySelector("#one").textContent = "hello");
var barChart;
var pieChart;
var messageLineChart;
var helpLineChart;



function renderEvents() {
    let storedEvents = JSON.parse(localStorage.getItem("events.json"));
    if (storedEvents) {
        all_events = storedEvents;
    }
}

$(function () {
    renderEvents();
    var calendarEl = document.getElementById('calendar');
    //  $(calendarEl).attr("style", "width:70%; margin:auto;");

    var calendar = new FullCalendar.Calendar(calendarEl, {

        plugins: ['interaction', 'dayGrid', 'timeGrid', 'list', 'bootstrap', 'googleCalendar'],
        themeSystem: 'bootstrap',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        // defaultDate: '2019-08-12',
        navLinks: true, // can click day/week names to navigate views
        //   contentHeight: 600,
        googleCalendarApiKey: 'AIzaSyDLR-ernPM-nKCqapMw4QUJLKEMfrU_Atg',
        weekNumbers: false,
        weekNumbersWithinDays: true,
        weekNumberCalculation: 'ISO',

        editable: false,
        eventLimit: true, // allow "more" link when too many events
        events: all_events,
        eventSources: [{
            googleCalendarId: 'en.australian#holiday@group.v.calendar.google.com',
            className: 'gcal-event'
        }]
    });
    calendar.render();
})

$("#personas").on("click", "a", function () {
    $("#personas").find("a").removeClass("active");
    $(this).addClass("active");
    if ($(this).attr("id") === "pj-cal") {
        $("#calendar-container").css("display", "block");
        $("#team-cards").css("display", "none");
        $("#btn-new-event").css("display", "block");
        $("#btn-user").css("display", "none");
    }
    else if ($(this).attr("id") === "pj-bl") {
        $("#calendar-container").css("display", "none");
        $("#team-cards").css("display", "block");
        $("#btn-new-event").css("display", "none");
        $("#btn-user").css("display", "block");
    }
})

$(".top-menu").on("click", "a", function () {
    $(".top-menu").find("a").removeClass("active");
    $(this).addClass("active");
    if ($(this).attr("id") === "project-insights") {
        $("#project-insights-container").css("display", "block");
        $("#team-insights-container").css("display", "none");
    }
    else if ($(this).attr("id") === "team-insights") {
        $("#project-insights-container").css("display", "none");
        $("#team-insights-container").css("display", "block");
        barChart = new Chart(commitLineChart, {
            // The type of chart we want to create
            type: 'bar',
            // The data for our dataset
            data: {
                labels: ['michaelaberry2019','harryshen225','IdaPutra'],
                datasets: [{
                    label: 'Commits Counts',
                    backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)"],
                    borderColor:["rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(54, 162, 235)"],
                    borderWidth:1,
                    data: [9, 3, 1]
                }]
            },
            // Configuration options go here
            options: {
                color:['red', 'blue', 'green'],
                title: {
                    display: true,
                    fontSize:24,
                    text: 'GitHub Commits Distribution'
                }
            }
        });

        pieChart = new Chart(commitPieChart, {
            // The type of chart we want to create
            type: 'pie',
            // The data for our dataset
            data: {
                labels: ['michaelaberry2019','harryshen225','IdaPutra'],
                datasets: [{
                    label: 'Commits Counts',
                    backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)"],
                    borderColor:["rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(54, 162, 235)"],
                    data: [9, 3, 1]
                }]
            },
            // Configuration options go here
            options: {
                segmentShowStroke : true,
                animateScale : true,
                title: {
                    display: true,
                    fontSize:24,
                    text: 'GitHub Commits Distribution'
                }
            }
        });


        messageLineChart = new Chart(messageLine, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
                labels: ['11/11','13/11','16/11','18/11','20/11'],
                datasets: [{
                    label: 'Message Sent',
                    backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)"],
                    borderColor:["rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(54, 162, 235)"],
                    data: [6,13, 14,4,13]
                }]
            },
            // Configuration options go here
            options: {
                segmentShowStroke : true,
                animateScale : true,
                title: {
                    fontSize:24,
                    display: true,
                    text: 'Number of Messages Sent in Slack'
                }
            }
        });

        helpLineChart = new Chart(helpLine, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
                labels: ['11/11','13/11','16/11','18/11','20/11'],
                datasets: [{
                    label: ['Shahriar'],
                    backgroundColor:"rgba(255, 99, 132, 0.2)",
                    borderColor: "rgb(255, 99, 132)",
                    fill: false,
                    data: [60,10, 60,30,45]
                },
                {
                    label: ['Krishnan'],
                    backgroundColor:"rgba(75, 192, 192, 0.2)",
                    borderColor: "rgb(75, 192, 192)",
                    fill: false,
                    data: [60,10, 90,50,90]
                },
                {
                    label: ['Tri'],
                    backgroundColor:"rgba(54, 162, 235, 0.2)",
                    borderColor:"rgb(54, 162, 235)",
                    fill: false,
                    data: [5,10, 3,0,1]
                }]
            },
            // Configuration options go here
            options: {
                segmentShowStroke : true,
                animateScale : true,
                title: {
                    display: true,
                    fontSize:24,
                    text: 'Number of Messages Sent in Slack'
                }
            }
        });
    }
})



$("#btn-new-event").on("click", function () {
    $(".ui.modal").modal("show");
    $('#milestone-date').daterangepicker({
        locale: { format: "YYYY-MM-DD" },
        singleDatePicker: true,
        minDate: moment()
    }
    );
    $('#task-range').daterangepicker({
        locale: { format: "YYYY-MM-DD" },
        minDate: moment()
    });
})

let steps = ["event-type", "event-details", "confirmation"]
let currentStep = 0;
let eventType = "Milestone";
let dateRange;
let name;
let description;
let createdEvent;

function step(direction) {

    if (direction === "next") {
        console.log(direction);
        if (currentStep < steps.length - 1) {
            currentStep++;
            $(".step").removeClass("active");
            $(`.${steps[currentStep]}`).addClass("active");
            $(`.${steps[currentStep - 1]}`).addClass("completed");
            console.log($(`.${steps[currentStep] - 1}`));
            $(`#${steps[currentStep - 1]}-content`).css("display", "none");
            $(`#${steps[currentStep]}-content`).css("display", "block");
        }
    } else {
        console.log(direction);
        if (currentStep > 0) {
            currentStep--;
            $(".step").removeClass("active");
            $(`.${steps[currentStep]}`).addClass("active");
            $(`.${steps[currentStep]}`).removeClass("completed");
            $(`.${steps[currentStep + 1]}`).removeClass("completed");
            $(`#${steps[currentStep + 1]}-content`).css("display", "none");
            $(`#${steps[currentStep]}-content`).css("display", "block");
        }
    }

    eventType = $("#event-select").val();
    $("#eTypeSpan").text($("#event-select").val());
    if (currentStep === 1 && eventType === "Milestone") {
        $(`#ms-date`).css("display", "block");
        $(`#task-date`).css("display", "none");
    } else {
        $(`#ms-date`).css("display", "none");
        $(`#task-date`).css("display", "block");
    }
    if (currentStep === 2) {
        renderEventSummary();
    }
}

$("#btn-next").on("click", function () {
    step("next");
})
$("#btn-previous").on("click", function () {
    step("previous");
})
function initiliseEventModal() {
    currentStep = 0;
    eventType = "Milestone";
    dateRange = undefined;
    name = undefined;
    description = undefined;
}
let assumbledData = {};
function renderEventSummary() {

    eventType = $("#event-select").val();
    if (eventType === "Milestone") {
        dateRange = $("#milestone-date").val();
    } else {
        dateRange = $("#task-range").val();
    }
    name = $("#event-name").val();
    description = $("#event-description").val();
    assumbledData = {
        title: name,
        description: description,
        className: `fc-${eventType.toLowerCase()}`,
    }

    if (eventType === "Milestone") {
        assumbledData["start"] = dateRange;
        assumbledData["isMilestone"] = true;
    } else {
        assumbledData["start"] = dateRange.substr(0, 10);
        assumbledData["end"] = dateRange.substr(13, 10);
    }


    console.log(assumbledData);
    $("#table-body").empty();
    createTableRow("Event Type", eventType).appendTo("#table-body");
    createTableRow("Event Date(Range)", dateRange).appendTo("#table-body");
    createTableRow("Event Name", name).appendTo("#table-body");
    createTableRow("Event Description", description).appendTo("#table-body");
}

function createTableRow(key, value) {
    let data = $(`<tr>
    <td data-label="${key}">${key}</td>
    <td data-label="${value}">${value}</td></tr>`);
    return (data);
}

$("#btn-save").on("click", function () {
    all_events.push(assumbledData);
    localStorage.setItem("events.json", JSON.stringify(all_events));
    location.reload();
})



$(".btn-done").on("click", function () {
    if ($(this).attr("status") === "inactive") {
        console.log($(this).attr("status"));
        $(this).attr("status", "active");
        $(this).addClass('active green');
    } else {
        console.log($(this).attr("status"));
        $(this).attr("status", "inactive");
        $(this).removeClass('active green');
    }
})



// // team backlog javascript
// $("#save").on("click", function saveinput() {
//     if (!$("#first-name").val() || !$("#last-name").val()) {
//         event.preventDefault();
//         $('#model2')
//             .modal('show')
//         $("#cancel").on("click", function () {
//             $('#model2')
//                 .modal('fade')
//         })
//     }
//     var FR = new FileReader();
//     var NewMember
//     FR.addEventListener("load", function (e) {

//         NewMember = {
//             firstname: $("#first-name").val(),
//             lastname: $("#last-name").val(),
//             img: e.target.result
//         }
//         renderMemberCard(NewMember);
//         team.push(NewMember);

//         localStorage.setItem("team", JSON.stringify(team));
//     });
//     FR.readAsDataURL(document.getElementById("myImg").files[0]);

//     // team = JSON.parse(localStorage.getItem("team"));
  
//     for (let i = 0; i < team.length; i++) {
//     }
//     $('#model1')
//       .modal('hide')
//   });
