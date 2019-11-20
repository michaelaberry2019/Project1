var MilestoneData = [];
var button = document.getElementById("btn-submit");


button.addEventListener("click", MilestoneArray);

function MilestoneArray() {
    date = document.getElementById("Milestone-date").value;
    name = document.getElementById("Milestone-name").value;
    description = document.getElementById("Milestone-description").value;
    MilestoneData.push(date)
    MilestoneData.push(name)
    MilestoneData.push(description)
    console.log(MilestoneData);
    localStorage.setItem("MilestoneArray", JSON.stringify(MilestoneData));
    return false;
}

var opt_milestone = document.getElementById("opt_milestone");
var opt_task = document.getElementById("opt_task");

opt_milestone.addEventListener("click");
opt_task.addEventListener("click");

 function selectEvent() {
    // if // select milestone 
    // render milestone page
    // if // select task
    // render task page
 }
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // var details = JSON.stringify(details);
    
    




