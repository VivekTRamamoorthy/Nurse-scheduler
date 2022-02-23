
// NURSE VIEW
var nurseview=function(){
    // creating HTML elements for column 1
    var column1=document.getElementById("column1");
    column1.innerHTML="<h2> NURSE VIEW <br></h2><p>Apply the wards on to nurses by dragging and dropping (or) click and click.</p> <br>   ";
    
    // Automated scheduling
    var buttonsDiv= document.createElement("div");
    buttonsDiv.classList.add("buttonsDiv");
    var randomAllocateElem = document.createElement("button");
    randomAllocateElem.innerText= "Random";
    randomAllocateElem.onclick = function(){randomAllocate(); nurseview();};
    buttonsDiv.appendChild(randomAllocateElem)
    
    var randomremAllocateElem = document.createElement("button");
    randomremAllocateElem.innerText= "Randomise remaining";
    randomremAllocateElem.onclick = function(){randomremAllocate(); nurseview();};
    buttonsDiv.appendChild(randomremAllocateElem)
    
    var evenAllocateElem = document.createElement("button");
    evenAllocateElem.innerText= "Even";
    evenAllocateElem.onclick = function(){evenAllocate(); nurseview();};
    buttonsDiv.appendChild(evenAllocateElem)
    
    var resetAllocateElem = document.createElement("button");
    resetAllocateElem.innerText= "Reset";
    resetAllocateElem.onclick = function(){resetAllocations(); nurseview();};
    buttonsDiv.appendChild(resetAllocateElem)
    column1.appendChild(buttonsDiv)
    
    
    var content=document.createElement("div");
    content.innerHTML="<div class='nursediv'> <div class='nursecontentbox-name'> Name</div>   <div class='nursecontentbox-name'> Ward</div>   <div class='nursecontentbox-shift'> Shift </div></div> ";
    content.classList.add("nurseview-nurselist-container");
    column1.appendChild(content);
    // creating HTML elements for column 2
    var column2=document.getElementById("column2")
    
    column2.innerHTML="<h2>Ward List </h2> <br>";
    var sidebar=document.createElement("div");
    sidebar.id="sidebar";
    sidebar.innerHTML="";
    sidebar.ondrop=function(event){drop(event)};
    sidebar.ondragover=function(event){allowDrop(event)};
    column2.appendChild(sidebar);
    touchedElementId="ward0";
    
    // UNHIDE SIDEBAR
    column1.style="";
    column2.hidden=false;
    
    // ADDING NURSES
    for(let i=0;i<nurseNames.length;i++){
        // NURSE NAME
        nursediv=document.createElement("div");
        nursediv.classList.add("nursediv")
        nursenamediv=document.createElement("div");
        nursenamediv.innerText=(i+1).toString()+". "+nurses[i].name+" ";
        nursenamediv.classList.add("nursecontentbox-name")
        nursediv.appendChild(nursenamediv);
        
        // NURSE BOX
        nursebox=document.createElement("div");
        nursebox.classList.add("nursecontentbox-ward");
        nursebox.id="nurse"+i.toString();
        nurses[i].id=nursediv.id;
        wardNo=nurses[i].allotment;
        nursebox.innerText=wardNames[wardNo];
        // DROP WARD TO NURSE
        nursebox.ondragover=function(event){ event.preventDefault();};
        nursebox.ondrop=function(event){ 
            event.preventDefault();
            let touchedId = event.dataTransfer.getData("text");
            let targetId=event.target.id;
            let wardNo=parseInt(touchedElementId.substring(4));
            let nurseNo=parseInt(targetId.substring(5));
            nurses[nurseNo].allotment=wardNo;
            event.target.innerText=wardNames[wardNo];
            console.log("new allotment made"+ nurseNames[nurseNo]+" to " +wardNames[wardNo])
        };
        //TOUCH
        nursebox.addEventListener('touchstart',function(event){
            let targetId=event.target.id;
            if(touchedElementId.substr(0,4)=="ward" && targetId.substr(0,5)=="nurse"){
                console.log("A touch event has occured on a nurse")
                event.preventDefault();
                let wardNo=parseInt(touchedElementId.substring(4));
                let nurseNo=parseInt(targetId.substring(5));
                event.target.innerText=wardNames[wardNo];
                nurses[nurseNo].allotment=wardNo;
                console.log("new allotment made: "+ nurseNames[nurseNo]+" to " +wardNames[wardNo])
            }   
        })
        nursebox.addEventListener('click',function(event){
            let targetId=event.target.id;
            if(touchedElementId.substr(0,4)=="ward" && targetId.substr(0,5)=="nurse"){
                console.log("A touch event has occured on a nurse")
                event.preventDefault();
                let wardNo=parseInt(touchedElementId.substring(4));
                let nurseNo=parseInt(targetId.substring(5));
                event.target.innerText=wardNames[wardNo];
                nurses[nurseNo].allotment=wardNo;
                console.log("new allotment made: "+ nurseNames[nurseNo]+" to " +wardNames[wardNo])
            }   
        })
        nursediv.appendChild(nursebox);
        
        // NURSE SHIFT
        nurseshiftdiv=document.createElement("div");
        nurseshiftdiv.classList.add("nursecontentbox-shift");
        nurseshift=document.createElement("select");
        if (wards[nurses[i].allotment].shifts==1){
            nurseshift.innerHTML="<option value='1'>1</option>";
        }else{
            nurseshift.innerHTML="<option value='1'>1</option> <option value='2'>2</option><option value='3'>3</option>";
        }
        nurseshift.classList.add("nursecontentbox");
        nurseshift.id="nurseshift"+i.toString();
        nurseshift.value=nurses[i].shift;
        nurseshiftdiv.appendChild(nurseshift);
        nursediv.appendChild(nurseshiftdiv);
        
        
        
        content.appendChild(nursediv);
        
    }
    
    // CREATING WARDS
    var warddiv;
    var sidebar=document.getElementById("sidebar");
    for(let i=0;i<wards.length;i++){
        warddiv=document.createElement("div");
        warddiv.innerText=wards[i].name;
        warddiv.classList.add("nurse");
        warddiv.draggable="true";
        warddiv.id="ward"+i.toString();
        // DRAG 
        warddiv.ondragstart=function(event){
            event.dataTransfer.setData("text", event.target.id);
            previoustouchedElementId=touchedElementId;
            document.getElementById(previoustouchedElementId).classList.remove("touched");
            touchedElementId= event.target.id;
            document.getElementById(touchedElementId).classList.remove('touched');
            
            console.log("Touched element is:"+touchedElementId);
        };
        // TOUCH
        warddiv.addEventListener('touchstart',function(event){
            let targetId=event.target.id;
            if (targetId.substr(0,4)=="ward"){
                event.preventDefault();
            }
            previoustouchedElementId=touchedElementId;
            document.getElementById(previoustouchedElementId).classList.remove("touched");
            touchedElementId= event.target.id;
            document.getElementById(touchedElementId).classList.add('touched');
            console.log("Touched element is:"+touchedElementId);
        });
        warddiv.addEventListener('click',function(event){
            let targetId=event.target.id;
            if (targetId.substr(0,4)=="ward"){
                event.preventDefault();
            }
            previoustouchedElementId=touchedElementId;
            document.getElementById(previoustouchedElementId).classList.remove("touched");
            touchedElementId= event.target.id;
            document.getElementById(touchedElementId).classList.add('touched');
            console.log("Touched element is:"+touchedElementId);
        });
        
        sidebar.appendChild(warddiv);
    }
}





