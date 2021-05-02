// Nurse scheduling tool
// This file creates a list of nurses and wards 
// Creates the classes Ward and Nurse 
// Creates the instances of wards and nurses



var wardNames=["Unalloted","ward I morning",
"ward I afternoon",
"ward I night ",
"ward I G floor morning "];

var nurseNames=["albert", "alice","bob","emma","luke","max","pierre","sean"]



// Ward class

var Ward=function(name){
    this.name=name;
    this.id=null;
    this.allotment=[];
    this.update=function(){
        
    }
    
}
// Nurse class

var Nurse=function(roll,name,phone="00000"){
    this.roll=roll;
    this.name=name;
    this.phone=phone;
    this.allotment=0;
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

// adding nurses
var nurses=[];
for(let i=0;i<nurseNames.length;i++){
    nurses[i]=new Nurse(10000+i,nurseNames[i]);
}


