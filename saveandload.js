// SAVE and LOAD


// INSTRUCTIONS VIEW
var saveandload=function(){
    // creating HTML elements for content
    var column1=document.getElementById("column1")
    var textHTML="<h1>Save current data: </h1> \n";
    textHTML=textHTML.concat("<li>Click here to save data to an external file</li> ");
    textHTML=textHTML.concat("<li>Click Nurses view to allocate wards to nurses.</li>");
    textHTML=textHTML.concat("<li>Click Ward edit to edit the list of wards available.</li>");
    textHTML=textHTML.concat("<li>Click Nurse edit to edit the list of nurses available.</li>");
    textHTML=textHTML.concat("<li>Click Save or Reload for saving the current schedule or reloading previous run. </li>");

    column1.innerHTML=textHTML;

      
    // <!-- CODE FOR DOWNLOADING TO CSV -->
        var data = [
        ['Foo', 'programmer'],
        ['Bar', 'bus driver'],
        ['Moo', 'Reindeer Hunter']
        ];
        
        var output=[];
        for(let i=0;i<nurseNames.length;i++){
            output[i]=[i,nurseNames[i],nurses[i].allotment,wardNames[nurses[i].allotment]];

        }
        console.log(output)






        
        function download_csv() {
            var csv = 'No,Nurse,Wardno, Allotment\n';
            output.forEach(function(row) {
                csv += row.join(',');
                csv += "\n";
            });
            
            console.log(csv);
            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'nurse_schedule.csv';
            hiddenElement.click();
        }

    // <button onclick="download_csv()">Download CSV</button> 
    var savebutton=document.createElement('button');
    savebutton.innerText="Download CSV";
    savebutton.onclick=function(){download_csv();};

    column1.appendChild(savebutton);





    // creating HTML elements for content
    var column2=document.getElementById("column2")
    column2.innerHTML="Sidebar <br>";
    var unalloted=document.createElement("div");
    unalloted.id="unalloted";
    unalloted.innerHTML="";
    column2.appendChild(unalloted);

    }



