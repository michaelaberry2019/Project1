var MilestoneData = []
var button = document.getElementById("btn-submit");

button.addEventListener("click", MilestoneArray);

function MilestoneArray() {
    // var details = document.getElementById("Milestone-date","Milestone-name","Milestone-description");
    var details = document.getElementById("Milestone-date");
    console.log(details.value);
    // var event = {
    //     title:,
    //     startDate:details.value
    // }
    MilestoneData.push(details.value);
    console.log(MilestoneData);
    var details = JSON.stringify(details);
    
    
}



