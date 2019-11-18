var apikey = "420dcd21-1835-4198-9255-9cd624da6327"
var domain = "https://holidayapi.com"
var endpoint = "/v1/holidays"
var res

// hardcode below
var holidayArray;
var queryURL = "https://holidayapi.com/v1/holidays?pretty&country=AU&year=2018&key=420dcd21-1835-4198-9255-9cd624da6327"
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


// softcode below
// var queryparameter = "pretty&country="+countryCode+"&year="+yearValue+"&key="+apikey;
// var URL = domain + endpoint + "?"+ queryparameter;


// Array into object for Harry's Data structure (so Harry's calendar can grab dates)

// var arrOfPubHol = [
    // {country: "", date: "", name:""},
// ]
// us: https://holidayapi.com/v1/holidays?pretty&country=US&year=2018&key=420dcd21-1835-4198-9255-9cd624da6327
// uk: https://holidayapi.com/v1/holidays?pretty&country=US&year=2018&key=420dcd21-1835-4198-9255-9cd624da6327