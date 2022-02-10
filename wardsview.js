
// WARDS VIEW OR HOSPITAL SCHEDULE
var wardsview=function(){
    var touchedElementId="nothing";
    var targetId="nothing"

    // CONTENT
    var column1=document.getElementById("column1")
    column1.style="width:69%";
    column1.innerHTML="Schedule <br>";
    var content=document.createElement("div");
    content.innerHTML="<p>Assign the nurses into wards:</p>";
    content.id="content";
    column1.appendChild(content);

    // SIDEBAR
    var column2=document.getElementById("column2")
    column2.hidden=false;
    column2.style="width:25%";
    column2.innerHTML="Unallocated <br>";
    var unalloted=document.createElement("div");
    unalloted.id="ward0";
    unalloted.innerHTML="";
    unalloted.style="height:80%;"
    unalloted.ondrop=function(event){drop(event)};
    unalloted.ondragover=function(event){allowDrop(event)};
    column2.appendChild(unalloted);


    // ADDING WARDS TO THE CONTENT

    for(let i=1;i<wardNames.length;i++){
        // wards[i]=new Ward(wardNames[i]);
        warddiv=document.createElement("div");
        warddiv.innerText=wards[i].name;
        warddiv.classList.add("warddiv")
        br=document.createElement("br");
        warddiv.appendChild(br);
        // ADDING SHIFTS TO EACH WARD
        for(let shift=1;shift<=wards[i].shifts; shift++){
            wardbox=document.createElement("div");
            wardbox.classList.add("wardbox");
            wardbox.innerHTML="Shift"+shift;
            wardbox.id="ward"+i+"shift"+nurses[i].shift;
            
            wards[i].id=warddiv.id;
            wardbox.ondragover=function(event){ event.preventDefault();};
            wardbox.ondrop=function(event){ drop(event); };
            wardbox.addEventListener('touchstart',function(event){
                event.preventDefault();
                targetId=event.target.id;
                makeAllotment(touchedElementId,targetId);
            })
            warddiv.appendChild(wardbox);
        }
        content.appendChild(warddiv);
        
        }

        // ADDING NURSES TO THE SIDEBAR
        var nursediv;
        var unalloted=document.getElementById("ward0");
        for(let i=0;i<nurses.length;i++){
            nursediv=document.createElement("div");
            nursediv.innerText=nurses[i].name;
            nursediv.classList.add("nurse");
            nursediv.draggable="true";
            nursediv.id="nurse"+i.toString();
            nursediv.ondragstart=function(event){
                touchedElementId=event.target.id;
                highlightNurse(touchedElementId);
            };
            // For mobile
            nursediv.addEventListener('touchstart',function(event){
                targetId=event.target.id;
                if (targetId.substr(0,5)=="nurse"){
                    event.preventDefault();}
                    touchedElementId= event.target.id;
                    highlightNurse(touchedElementId);
                });
                var allocatedWardForNurse=document.getElementById("ward"+nurses[i].allotment+"shift"+nurses[i].shift)
                if (nurses[i].allotment==0){allocatedWardForNurse=document.getElementById("ward0")}
                allocatedWardForNurse.appendChild(nursediv);
            }
    }

      
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
        targetId=ev.target.id;
        touchedElementId = ev.dataTransfer.getData("text");
        // MAKING ALLOTMENT
        if(touchedElementId.substr(0,5)=="nurse" && targetId.substr(0,4)=="ward"){
            ev.target.appendChild(document.getElementById(touchedElementId));
            let wardNo=parseInt(targetId.substring(4));
            let nurseNo=parseInt(touchedElementId.substring(5));
            nurses[nurseNo].allotment=wardNo;
            console.log("new allotment made: "+ nurseNames[nurseNo]+" to " +wardNames[wardNo])
        
        }
    
    }

    function highlightNurse(nurseId){
        console.log("Highlighting nurse:"+nurseId);
        document.getElementById(nurseId).style="border: 1px solid red";
        
    }
    
    function makeAllotment(nurseId,wardId){
        if(nurseId.substr(0,5)=="nurse" && wardId.substr(0,4)=="ward"){
            document.getElementById(wardId).appendChild(document.getElementById(nurseId));
            let wardNo=parseInt(wardId.substring(4));
            let nurseNo=parseInt(nurseId.substring(5));
            nurses[nurseNo].allotment=wardNo;
            console.log("new allotment made: "+ nurseNames[nurseNo]+" to " +wardNames[wardNo])
            document.getElementById(nurseId).style=""; // removing highlight 
            touchedElementId="nothing";
        }  
    } 





