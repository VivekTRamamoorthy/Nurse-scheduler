
// INSTRUCTIONS VIEW
var instructionview=function(){
    // creating HTML elements for content
    var column1=document.getElementById("column1")
    var textHTML="<h1>Instructions: </h1> \n";
    textHTML=textHTML.concat("<li>Click Wards view to add nurses to wards.</li> ");
    textHTML=textHTML.concat("<li>Click Nurses view to allocate wards to nurses.</li>");
    textHTML=textHTML.concat("<li>Click Ward edit to edit the list of wards available.</li>");
    textHTML=textHTML.concat("<li>Click Nurse edit to edit the list of nurses available.</li>");
    textHTML=textHTML.concat("<li>Click Save or Reload for saving the current schedule or reloading previous run. </li>");

    column1.innerHTML=textHTML;
    // creating HTML elements for content
    var column2=document.getElementById("column2")
    column2.innerHTML="Sidebar <br>";
    var unalloted=document.createElement("div");
    unalloted.id="unalloted";
    unalloted.innerHTML="";
    column2.appendChild(unalloted);

    }