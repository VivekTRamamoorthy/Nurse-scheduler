



var wardNames=["ward I day shift",
"ward I afternoon shift",
"ward I night shift",
"ward I ground floor morning shift"];
var nurseNames=["bharathi", "hema","esther",]
var allotmentTable=new Array(wardNames.length).fill(new Array(nurseNames.length).fill(0));
var unalloted=new Array(nurseNames.length).fill(1);
var touchedElementId;

// Ward class

var Ward=function(name){
    this.name=name;
    this.id=null;
    this.allotment=[];
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
    warddiv.classList.add("warddiv")
    br=document.createElement("br");
    warddiv.appendChild(br);
    wardbox=document.createElement("div");

    wardbox.classList.add("wardbox");


    wardbox.id="ward"+i.toString();
    wards[i].id=warddiv.id;
    wardbox.ondragover=function(event){ event.preventDefault();};
    wardbox.ondrop=function(event){ event.preventDefault();
        var data = event.dataTransfer.getData("text");
        console.log({data})
        event.target.appendChild(document.getElementById(data));};
    warddiv.appendChild(wardbox);
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

var unalloted=document.getElementById("unalloted");


for(let i=1;i<nurses.length;i++){


    nursediv=document.createElement("div");
    nursediv.innerText=nurses[i].name;
    nursediv.classList.add("nurse");
    nursediv.draggable="true";
    nursediv.id="nurse"+i.toString();
    nursediv.ondragstart=function(event){
        event.dataTransfer.setData("text", event.target.id);
    };

    nursediv.addEventListener('touchstart',function(event){
    a=event.target.id;
    if (a[0]+a[1]+a[2]+a[3]+a[4]=="nurse"){
    event.preventDefault();}
    // console.log(event)
    touchedElementId= event.target.id;
    console.log(touchedElementId);
});
    unalloted.appendChild(nursediv);

    // adding hover text

}

// document.addEventListener('touchstart',function(event){
//     a=event.target.id;
//     if (a[0]+a[1]+a[2]+a[3]+a[4]=="nurse"){
//     event.preventDefault();}
//     console.log(event)
//     touchedElementId= event.target.id;
//     console.log(touchedElementId);
// });

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





