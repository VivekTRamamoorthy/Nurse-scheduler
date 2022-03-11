
// INSTRUCTIONS VIEW
var instructionview=function(){
    // creating HTML elements for content
    var column1=document.getElementById("column1")
    column1.style="grid-column: 1 / span 2;";

    // HOME PAGE HTML TEXT
    var t="";

    t=t.concat("<center><h2>Welcome! </h2> </center> \n");
    t=t.concat("This is an open source nurse scheduling tool. I originally created this for my mom, who is a head nurse at a local hospital responsible for creating weekly schedules for around 400 staff. <br><br>  ")
    t=t.concat("When COVID cases peaked in India, several nurses would call in sick or had to take care of a family member who was sick. ")
    t=t.concat("It was difficult to reallocate nurses and send out the revised schedule on the fly. New nurses were hired to reduce the workload but this made managing the schedules more difficult.")
    t=t.concat(" Hence, I created this web tool to help her. <br><br> ")
    t=t.concat("Luckily, she no longer needs to use this. But it is available for anyone to use or <a href='https://www.github.com/VivekTRamamoorthy/NurseScheduler'>build upon</a>. \n");

    t=t.concat("<h2>Getting Started </h2> \n");
    t=t.concat("<li>This is a tool to allocate nurses to different hospital wards.  </li> ");
    t=t.concat("<li>To start using, go to HOSPITAL VIEW. </li> \n");

    t=t.concat("<h2>Instructions: </h2> \n");

    
    t=t.concat("<li>In HOSPITAL VIEW, allocate nurses to different wards by dragging and dropping their names. On mobiles, this is touch the nurse and touch the ward.</li> ");
    t=t.concat("<li>In NURSE VIEW, allocate a ward to each nurse by drag and drop or touch and touch.</li>");
 
    t=t.concat("<li>Swapping between different VIEWs preserves these allocations.</li>");
   
    t=t.concat("<li>Edit ward and nurse names in EDIT section</li>");
   
    


    t=t.concat("<h2> Saving progress:</h2> \n");
 
    t=t.concat("<li> Save progress in a CSV file using SAVE menu.  </li>");
    t=t.concat("<li> Load your progress from the same CSV file using LOAD menu. </li>");
    t=t.concat("<li> You can load data from a large database using a CSV in the same format. </li>");

    t=t.concat("<h2> Important</h2> \n");
    t=t.concat("<li>DO NOT REFRESH the site without exporting your progress or all progress will be discarded</li>");    
    t=t.concat("<li>SAVE your progress frequently as a CSV file and reload them later. </li>");

    t=t.concat("<h2> Data security: </h2> \n");
    t=t.concat("<li> This static site does not process the data in the server end. </li>");
    t=t.concat("<li> Your data stays within your device.  </li>");

    column1.innerHTML=t;
    
    // creating HTML elements for content
    var column2=document.getElementById("column2")
    column2.innerHTML="";
    column2.hidden=true;
    // column1.style="width=90%"
    
    
    // HIDE SIDEBAR
    // column1.style="width:90%";
    column2.hidden=true;
    // column2.style="width:25%";
    
}