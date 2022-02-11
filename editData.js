
// EDIT DATA VIEW
var editData=function(){
    // creating HTML elements for column 1
    var column1=document.getElementById("column1")
    column1.innerHTML="<h2>EDIT NURSES AND WARDS</h2> <br>";
    var content=document.createElement("div");
    content.classList.add("content");
    column1.appendChild(content);
    
    // creating HTML elements for column 2
    var column2=document.getElementById("column2")
    
    // HIDE SIDEBAR
    column1.style="grid-column: 1 / span 2;";
    column2.hidden=true;
    
    var buttonsDiv= document.createElement("div");
    buttonsDiv.classList.add("buttonsDiv");
    // UPDATE BUTTON
    updateButton=document.createElement("button");
    updateButton.innerText="UPDATE";
    updateButton.classList.add('updateBtn')
    updateButton.onclick=function(){updateNurses();}
    buttonsDiv.appendChild(updateButton);
    content.appendChild(buttonsDiv);
    
    
    
    
    
    // GAP
    var gap=document.createElement("div");
    gap.innerHTML="<br>"
    content.appendChild(gap);
    
    // HEADING FOR NURSE EDIT
    var nurseTable=document.createElement("table");
    var nurseTableDiv=document.createElement("div");
    nurseTableDiv.classList.add("tableEditDiv")
    nurseTableDiv.innerHTML="<h3>EDIT NURSES </h3>"
    nurseTableDiv.appendChild(nurseTable);
    
    content.appendChild(nurseTableDiv);
    var heading=document.createElement("tr");
    heading.innerHTML="<th>No</th><th>Name</th><th>Phone number</th>";
    nurseTable.appendChild(heading)
    
    // EDIT NURSES TABLE
    for(let i=0;i<nurseNames.length;i++){
        
        // ADDING INPUT FOR NURSE NAMES
        thisRow=document.createElement("tr");
        // Nurse No
        thisCell=document.createElement("td");
        thisRow.appendChild(thisCell);
        thisCell.innerText=(i+1).toString();
        // Nurse Name (editable)
        thisCell=document.createElement("td");
        nurseNameInput=document.createElement("input");
        nurseNameInput.value=nurses[i].name;
        nurseNameInput.id="nurseNameInput"+i.toString();
        thisCell.appendChild(nurseNameInput);
        thisRow.appendChild(thisCell);
        // Nurse Phone number (editable)
        thisCell=document.createElement("td");
        nursePhoneInput=document.createElement("input");
        nursePhoneInput.value=nurses[i].phone;
        nursePhoneInput.id="nursePhoneInput"+i.toString();
        thisCell.appendChild(nursePhoneInput);
        thisRow.appendChild(thisCell);
        
        nurseTable.appendChild(thisRow)
    }
    // GAP
    var gap=document.createElement("div");
    gap.innerHTML="<br><br><br>"; 
    content.appendChild(gap);

    // ADD NURSE DIV
    addNursePopUp=document.createElement("div");
    addNursePopUp.id="addNursePopUp";
    nameText='<h2>Add Nurse</h2> <div class="editdata-add-div"> <label>Name</label> <input type="text" placeholder="Enter nurse name" value="New Nurse" id="addNurseInputName"> ';
    phoneText='<label>Phone</label> <input type="text" placeholder="Enter nurse name" value="00000" id="addNurseInputPhone"> ';
    saveText='<button class="btn" onclick=addNurse(); >Add</button> </div>';
    addNursePopUp.innerHTML=nameText+phoneText+saveText;
    content.appendChild(addNursePopUp)
    
    
    
    // GAP
    var gap=document.createElement("div");
    gap.innerHTML="<br><br><br>";
    content.appendChild(gap);
    
    // HEADING FOR WARD EDIT
    var wardTable=document.createElement("table");
    var wardTableDiv=document.createElement("div");
    wardTableDiv.classList.add("tableEditDiv");
    wardTableDiv.innerHTML="<h3>EDIT WARDS</h3>"
    wardTableDiv.appendChild(wardTable);
    
    content.appendChild(wardTableDiv);
    var heading=document.createElement("tr");
    heading.innerHTML="<th>No</th><th>Ward</th><th>Shifts</th>";
    wardTable.appendChild(heading)
    
    // EDIT WARDS TABLE
    for(let i=1;i<wardNames.length;i++){
        
        // ADDING INPUT FOR WARD NAMES
        thisRow=document.createElement("tr");
        // WARD No
        thisCell=document.createElement("td");
        thisRow.appendChild(thisCell);
        thisCell.innerText=(i).toString();
        // WARD Name (editable)
        thisCell=document.createElement("td");
        wardNameInput=document.createElement("input");
        wardNameInput.value=wards[i].name;
        wardNameInput.id="wardNameInput"+i.toString();
        thisCell.appendChild(wardNameInput);
        thisRow.appendChild(thisCell);
        // Ward shifts (editable)
        thisCell=document.createElement("td");
        wardShiftSelect=document.createElement("select");
        wardShiftSelect.innerHTML="<option value='1'>1</option><option value='3'>3</option>"
        wardShiftSelect.value=wards[i].shifts;
        wardShiftSelect.id="wardShiftSelect"+i.toString();
        thisCell.appendChild(wardShiftSelect);
        thisRow.appendChild(thisCell);
        
        wardTable.appendChild(thisRow)
    }
    
    
    // ADD WARDS DIV
    addWardPopUp=document.createElement("div");
    addWardPopUp.id="addWardPopUp";
    nameText='<h2>Add Ward</h2> <div class="editdata-add-div"> <label>Name</label> <input type="text" placeholder="Enter Ward name" value="New Ward" id="addWardInputName"> ';
    shiftsText='<label>Shifts</label> <select id="addWardInputShifts"> <option value="1">1</option> <option value="3">3</option>  </select>';
    saveText='<button class="btn" onclick=addWard(); >Add</button> </div>';
    addWardPopUp.innerHTML=nameText+shiftsText+saveText;
    content.appendChild(addWardPopUp)
    
    
    
    
    
    
    
    
}


// UPDATE FUNCTIONS
var updateNurses=function(){
    for(let i=0;i<nurseNames.length;i++){
        // UPDATING INPUT FOR NURSE NAMES
        nurseNameInput=document.getElementById("nurseNameInput"+i.toString());
        nurseNames[i]=nurseNameInput.value;
        nurses[i].name=nurseNameInput.value;
    }
    console.log("Nurse names updated! :-)")
}

var updateWards=function(){
    for(let i=0;i<wardNames.length;i++){
        // UPDATING INPUT FOR WARD NAMES
        wardNameInput=document.getElementById("wardNameInput"+i.toString());
        wardNames[i]=wardNameInput.value;
        wards[i].name=wardNameInput.value;
        // UPDATING INPUT FOR WARD SHIFTS
        wardShiftSelect=document.getElementById("wardShiftSelect"+i.toString());
        wards[i].shifts=wardShiftSelect.value;
    }
    console.log("Wards names updated! :-)")
}

// ADD NURSE FUNCTIONS
var addNurse=function(){
    let name=document.getElementById("addNurseInputName");
    let phone=document.getElementById("addNurseInputPhone");
    nurseNames.push(name.value);
    length=nurses.length;
    nurses.push(new Nurse(10000+length,name.value,phone.value));
    editData();
}

// ADD WARDS FUNCTIONS
var addWard=function(){
    let ward=document.getElementById("addWardInputName");
    let shifts=document.getElementById("addWardInputShifts");
    wardNames.push(ward.value);
    length=wards.length;
    wards.push(new Ward(ward.value,shifts.value));
    editData();
}

