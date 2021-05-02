



var wardNames=["unalloted","ward I day shift",
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

  var nurses=[];
  for(let i=0;i<nurseNames.length;i++){
      nurses[i]=new Nurse(10000+i,nurseNames[i]);
  }

// // WARDS VIEW
// var wardsview=function(){
//     // creating HTML elements for content
//     var column1=document.getElementById("column1")
//     column1.innerHTML="Schedule <br>";
//     var content=document.createElement("div");
//     content.innerHTML="<p>Drag the nurses into wards:</p>";
//     content.id="content";
//     column1.appendChild(content);
//     // creating HTML elements for content
//     var column2=document.getElementById("column2")
//     column2.innerHTML="Unallocated <br>";
//     var unalloted=document.createElement("div");
//     unalloted.id="unalloted";
//     unalloted.innerHTML=""
//     unalloted.ondrop=function(event){drop(event)};
//     unalloted.ondragover=function(event){allowDrop(event)};
//     column2.appendChild(unalloted);

//     // adding wards
//     var wards=[]
//     for(let i=0;i<wardNames.length;i++){
//         wards[i]=new Ward(wardNames[i]);
//         warddiv=document.createElement("div");
//         warddiv.innerText=wards[i].name;
//         warddiv.classList.add("warddiv")
//         br=document.createElement("br");
//         warddiv.appendChild(br);
//         wardbox=document.createElement("div");
//         wardbox.classList.add("wardbox");
//         wardbox.id="ward"+i.toString();
//         wards[i].id=warddiv.id;
//         wardbox.ondragover=function(event){ event.preventDefault();};
//         wardbox.ondrop=function(event){ event.preventDefault();
//             var data = event.dataTransfer.getData("text");
//             // console.log({data})
//             event.target.appendChild(document.getElementById(data));};
//             warddiv.appendChild(wardbox);
//             content.appendChild(warddiv);
//         }

//         // Creating nurses
//         var nurses=[]
//         for(let i=0;i<nurseNames.length;i++){
//             nurses[i]=new Nurse(10000+i,nurseNames[i]);
//         }
//         var nursediv;
//         var unalloted=document.getElementById("unalloted");
//         for(let i=1;i<nurses.length;i++){
//             nursediv=document.createElement("div");
//             nursediv.innerText=nurses[i].name;
//             nursediv.classList.add("nurse");
//             nursediv.draggable="true";
//             nursediv.id="nurse"+i.toString();
//             nursediv.ondragstart=function(event){
//                 event.dataTransfer.setData("text", event.target.id);
// touchedElementId= event.target.id;
//             };
//             // For mobile
//             nursediv.addEventListener('touchstart',function(event){
//                 a=event.target.id;
//                 if (a[0]+a[1]+a[2]+a[3]+a[4]=="nurse"){
//                     event.preventDefault();}
//                     touchedElementId= event.target.id;
//                     console.log("Touched element is:"+touchedElementId);
//                 });
//                 unalloted.appendChild(nursediv);
//             }
//         }
        
        // Drag and drop options
        
        function allowDrop(ev) {
            ev.preventDefault();
        }
        
        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
            console.log(ev.dataTransfer.getData("text"));
            touchedElementId= ev.target.id;
            console.log("Touched element is:"+touchedElementId);

            
        }
        
        function drop(ev) {
            ev.preventDefault();
            let touchedId = ev.dataTransfer.getData("text");
            console.log({touchedId})
            ev.target.appendChild(document.getElementById(touchedId));
            let targetId=ev.target.id;
            let wardNo=parseInt(targetId.substring(4));
            let nurseNo=parseInt(touchedElementId.substring(5));
            nurses[nurseNo].allotment=wardNo;
            console.log("new allotment made"+ nurseNames[nurseNo]+" to " +wardNames[wardNo])

        
        }
        
        
        
        
        
