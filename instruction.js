
// INSTRUCTIONS VIEW
var instructionview=function(){
    // creating HTML elements for content
    var column1=document.getElementById("column1")

    // HOME PAGE HTML TEXT
    var t="";

    t=t.concat("<center><h2>Welcome! </h2> </center> \n");
    t=t.concat("<p> There seem to be no tool to perform hospital scheduling for free without giving away your private hospital details. Hence, I have created this free tool to assist hospital managers and head nurses. The source code for this site is avaialble in GitHub.  \n");

    t=t.concat("<h2>Getting Started </h2> \n");
    t=t.concat("<li>This is a tool to allocate nurses to different hospital wards.  </li> ");
    t=t.concat("<li>To start using go to HOSPITAL VIEW. </li> \n");

    t=t.concat("<h2>Instructions: </h2> \n");

    
    t=t.concat("<li>In HOSPITAL VIEW, allocate nurses to different wards.</li> ");
    t=t.concat("<li>In NURSE VIEW, allocate a ward to each nurse.</li>");
 
    t=t.concat("<li>Swapping between different VIEWs preserves allocations.</li>");
   
    t=t.concat("<li>Edit nurses and wards in EDIT WARDS and EDIT NURSES</li>");
   
    


    t=t.concat("<h2> Saving progress:</h2> \n");
 
    t=t.concat("<li> Save progress in a CSV file using EXPORT menu.  </li>");
    t=t.concat("<li> Load your progress from the CSV file. </li>");
    t=t.concat("<li> You can load from excel-generated CSV too. </li>");

    t=t.concat("<h2> Important</h2> \n");
    t=t.concat("<li>DO NOT REFRESH the site without exporting your progress or all progress will be discarded</li>");    
    t=t.concat("<li>SAVE your progress frequently as a CSV file and reload them later. </li>");

    t=t.concat("<h2> Data security: </h2> \n");
    t=t.concat("<li> This static site does not process the data in the server end. </li>");
    t=t.concat("<li> All your data stays within your device. </li>");
    t=t.concat("<li> No cookies are used either. </li>");

    column1.innerHTML=t;
    
    // creating HTML elements for content
    var column2=document.getElementById("column2")
    column2.innerHTML="";
    column2.hidden=true;
    column1.style="width=90%"
    
    
    // HIDE SIDEBAR
    column1.style="width:90%";
    column2.hidden=true;
    column2.style="width:25%";
    
}