var MilestoneData = []
var button = document.getElementById("btn-submit");

button.addEventListener("click", MilestoneArray);

function MilestoneArray() {
    // var details = document.getElementById("Milestone-date","Milestone-name","Milestone-description");
    var date = document.getElementById("Milestone-date");
    console.log(date.value);
    var name = document.getElementById("Milestone-name");
    console.log(name.value);
    var description = document.getElementById("Milestone-description");
    console.log(description.value);
    
    // MilestoneData.push(details.value);
    // console.log(MilestoneData);
    // var details = JSON.stringify(details);
    
    
}



