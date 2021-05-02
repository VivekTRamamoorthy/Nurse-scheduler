



var wardNames=["ward I day shift",
"ward I afternoon shift",
"ward I night shift"];
var nurseNames=["bharathi", "hema","esther",]
var allotmentTable=new Array(wardNames.length).fill(new Array(nurseNames.length).fill(0));
var unalloted=new Array(nurseNames.length).fill(1);

// Ward class

var Ward=function(name){
    this.name=name;

    this.allotment=[];
    this.set=function(property,value){
        if (property=="phone"){
            this.phone=value;
        }
    }
    this.update=function(){

    }

}

// creating wards
var content=document.getElementById("content")
var wards=[]
for(let i=0;i<wardNames.length;i++){
    wards[i]=new Ward(wardNames[i]);


    warddiv=document.createElement("div");
    warddiv.innerText=wards[i].name;
    warddiv.classList.add("ward");

    warddiv.id="ward"+i.toString();
    warddiv.ondragover=function(event){ event.preventDefault();};
    content.appendChild(warddiv);
}
// Ward1 <div id="ward1" ondrop="drop(event)" ondragover="allowDrop(event)" class ="ward"></div>

// Nurse class

var Nurse=function(roll,name,phone="00000"){
    this.roll=roll;
    this.name=name;
    this.phone=phone;
    this.shift="null"
    this.set=function(property,value){
        if (property=="phone"){
            this.phone=value;
        }
    }
}

// Creating nurses

var nurses=[]
for(let i=0;i<nurseNames.length;i++){
    nurses[i]=new Nurse(10000+i,nurseNames[i]);
}
// nurses[0]=new Nurse(1,"bharathi");
// nurses[1]=new Nurse(2,"hema");
// nurses[2]=new Nurse(3,"esther");

// Adding nurse elements
var nursediv;

var unalloted=document.getElementById("unalloted")
for(let i=1;i<nurses.length;i++){


    nursediv=document.createElement("div");
    nursediv.innerText=nurses[i].name;
    nursediv.classList.add("nurse");
    nursediv.draggable="true";
    nursediv.id="nurse"+i.toString();
    nursediv.ondragstart=function(event){
        event.dataTransfer.setData("text", event.target.id);
    };
    unalloted.appendChild(nursediv);

    // adding hover text

}


// Drag and drop options

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.dataTransfer.getData("text"))
    
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log({data})
    ev.target.appendChild(document.getElementById(data));
}





