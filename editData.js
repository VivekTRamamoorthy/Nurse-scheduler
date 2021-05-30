
// EDIT DATA VIEW
var editData=function(){
    // creating HTML elements for column 1
    var column1=document.getElementById("column1")
    column1.innerHTML="Schedule <br>";
    var content=document.createElement("div");
    content.innerHTML="<p>Edit Nurses:</p>";
    content.id="content";
    column1.appendChild(content);

    // creating HTML elements for column 2
    var column2=document.getElementById("column2")
    column2.innerHTML="Ward List <br>"; 
    var sidebar=document.createElement("div");
    sidebar.id="sidebar";
    sidebar.innerHTML="";
    sidebar.ondrop=function(event){drop(event)};
    sidebar.ondragover=function(event){allowDrop(event)};
    column2.appendChild(sidebar);
    touchedElementId="ward0";

    // UPDATE BUTTON
    updateButton=document.createElement("button");
    updateButton.innerText="UPDATE";
    updateButton.onclick=function(){updateNurses();}
    column1.appendChild(updateButton)
    
    // COLUMN 1
    nursediv=document.createElement("div");
    nursediv.classList.add("nurseeditbox")
    
    //  TABLE HEADER
    nurseNameDiv=document.createElement("div");
    nurseNameDiv.type="text";
    nurseNameDiv.innerText="Names";
    nursediv.appendChild(nurseNameDiv)
    content.appendChild(nursediv);
    
    // EDIT NURSES
    for(let i=0;i<nurseNames.length;i++){
        
        // ADDING INPUT FOR NURSE NAMES
        nurseNameDiv=document.createElement("input");
        nurseNameDiv.type="text";
        nurseNameDiv.value=nurses[i].name;
        nurseNameDiv.id="nurseInput"+i.toString();
        nursediv.appendChild(nurseNameDiv)
        
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
            document.getElementById(previoustouchedElementId).style="";
            touchedElementId= event.target.id;
            document.getElementById(touchedElementId).style="border: 2px solid red";
            
            console.log("Touched element is:"+touchedElementId);
        };
        // TOUCH
        warddiv.addEventListener('touchstart',function(event){
            let targetId=event.target.id;
            if (targetId.substr(0,4)=="ward"){
                event.preventDefault();}
                previoustouchedElementId=touchedElementId;
                document.getElementById(previoustouchedElementId).style="";
                touchedElementId= event.target.id;
                document.getElementById(touchedElementId).style="border: 2px solid red";
                console.log("Touched element is:"+touchedElementId);
            });
            sidebar.appendChild(warddiv);
        }
    }
    
    function updateNurses(){
        for(let i=0;i<nurseNames.length;i++){
            // ADDING INPUT FOR NURSE NAMES
            nurseNameInput=document.getElementById("nurseInput"+i.toString());
            nurseNames[i]=nurseNameInput.value;
            nurses[i].name=nurseNameInput.value;
        }
        console.log("Nurse names updated! :-)")
    }
    
    
    
