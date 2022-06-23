// Nurse scheduling tool
// This file creates a list of nurses and wards 
// Creates the classes Ward and Nurse 
// Creates the instances of wards and nurses


var wardNames=["NONE","WARD I ",
"WARD II ",
"WARD III ",
"ICU ",
"NICU",
"COVID I"];


var nurseNames=["Albert", "Emma","Luke","Max","Pierre","Sean","Mohammed", "Nirmal","Alice","Bob", "Raj","Seetha","Dolica","Helena", "Alfaruqi", "Wessel", "Jordan", "Emily", "Davide", "Camila", "Lynette", "Hadi", "Alex" ]


// Ward class
var Ward=function(name,shifts=3){
    this.name=name;
    this.id=null;
    this.allotment=[];
    this.shifts=shifts
    this.set=function(property,value){
        if (property=="shifts"){
            this.shifts=value;
        }
    }
    
}
// Nurse class

var Nurse=function(roll,name,phone="00000"){
    this.roll=roll;
    this.name=name;
    this.phone=phone;
    this.allotment=0;
    this.shift=1;
    this.set=function(property,value){
        if (property=="phone"){
            this.phone=value;
        }
    }
}




// adding wards
var wards=[];
for(let i=0;i<wardNames.length;i++){
    wards[i]=new Ward(wardNames[i]);
}

wards[0].shifts=1;

// adding nurses
var nurses=[];
for(let i=0;i<nurseNames.length;i++){
    nurses[i]=new Nurse(10000+i,nurseNames[i]);
}

var NurseSchedulerLocal ={
    nurses: nurses, 
    wards : wards, 
    nurseNames: nurseNames,
    wardNames: wardNames,
}

var autosaveToggle
window.onbeforeunload = closingCode;
function closingCode(){
    if(autosaveToggle){
        saveToLocalStorage()
    }
    return null;
}

function loadLocalStorage(){
    let nurseScheduler = localStorage.getItem('NurseSchedulerLocal');
    if(nurseScheduler == null){
        alert("No local data available!\n Click SAVE > SAVE LOCAL to store data in local storage.");
        return
    }
    
    if(confirm("Data exists in local storage.\nThis will delete any existing changes. \nDo you wish to proceed?")){
        
        console.log('Retrieving saved data...')
        NurseSchedulerLocal = JSON.parse(nurseScheduler);
        nurses = NurseSchedulerLocal.nurses;
        wards = NurseSchedulerLocal.wards; 
        nurseNames = NurseSchedulerLocal.nurseNames;
        wardsNames = NurseSchedulerLocal.wardsNames;
    }
    
}


function saveToLocalStorage(){
    let nurseScheduler = {
        nurses: nurses, 
        wards : wards, 
        nurseNames: nurseNames,
        wardNames: wardNames,
    }
    NurseSchedulerLocal = nurseScheduler;
    localStorage.setItem('NurseSchedulerLocal',JSON.stringify(nurseScheduler))
    console.log('saved to local');
    if(autosave == false){
        alert("Saved successfully")
    }
    
}

function clearLocalStorage(){
    localStorage.removeItem('NurseSchedulerLocal')
}
