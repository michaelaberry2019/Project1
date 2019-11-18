var holidayApiKey = "420dcd21-1835-4198-9255-9cd624da6327"
var domain = "https://holidayapi.com"
var endpoint = "/v1/holidays"
var res

// hardcode below
var holidayArray;
var queryURL = `https://holidayapi.com/v1/holidays?pretty&country=AU&year=2018&key=#{holidayApiKey}`
var res;
$.ajax({url:queryURL,method:'GET'})
.done(function(response){
  res = response.holidays;



// map takes an  res array and mutates it into holidayArray
  holidayArray = res.map((holi)=>{
      return {
        //   country: holi.country,
          start: holi.date,
          title: holi.name,
          rendering: 'background',
      }
  })
    console.log(holidayArray)

    // var holidayArrayString = JSON.stringify(holidayArray);
    // localStorage.setItem('holidayArray', holidayArrayString);
});


let all_events = [
    {
      title: 'Repeating Event',
      className: 'fc-bg-default',
      start: '2019-08-09T16:00:00'
    },
    {
      title: 'Repeating Event',
      className: 'fc-bg-default',
      start: '2019-08-16T16:00:00',
      end:'2019-08-17T16:00:00'
    },
    {
      title: 'Conference',
      start: '2019-08-11',
      end: '2019-08-13',
      className: 'fc-bg-default',
      rendering: 'background'
    },
    {
      title: 'Meeting',
      className: 'fc-bg-default',
      start: '2019-08-12T10:30:00',
      end: '2019-08-12T12:30:00'
    }
  ];

$(function() {
    var calendarEl = document.getElementById('calendar');
  //  $(calendarEl).attr("style", "width:70%; margin:auto;");

    var calendar = new FullCalendar.Calendar(calendarEl,{
        
      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list','bootstrap' ],
      themeSystem: 'bootstrap',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      defaultDate: '2019-08-12',
      navLinks: true, // can click day/week names to navigate views
    //   contentHeight: 600,
      weekNumbers: false,
      weekNumbersWithinDays: true,
      weekNumberCalculation: 'ISO',
      
      editable: false,
      eventLimit: true, // allow "more" link when too many events
      events: all_events
    

    });
    calendar.render();
})