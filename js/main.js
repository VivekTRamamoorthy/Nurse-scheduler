// Nurse scheduling tool
// This file creates a list of nurses and wards 
// Creates the classes Ward and Nurse 
// Creates the instances of wards and nurses


var wardNames=["NONE","WARD I ",
"WARD II ",
"WARD III ",
"ICU ",
"NICU",
"COVIDI"];


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



