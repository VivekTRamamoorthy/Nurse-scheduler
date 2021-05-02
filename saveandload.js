// SAVE and LOAD


// INSTRUCTIONS VIEW
var saveandload=function(){
    // creating HTML elements for content
    var column1=document.getElementById("column1")
    var textHTML="<h2>Save progress </h2> \n";
    textHTML=textHTML.concat("<li>IMPORTANT: SAVE FREQUENCTLY! </li> ");
    textHTML=textHTML.concat("<li>REFRESHING WILL DISCARD ALL PROGRESS  </li>");

    textHTML=textHTML.concat("<li> This static site does not store any information entered by the user </li><br>");

    
    column1.innerHTML=textHTML;
    

    // // Create Output data 
    // var output=[];
    // for(let i=0;i<nurseNames.length;i++){
    //     output[i]=[i,nurseNames[i],nurses[i].allotment,wardNames[nurses[i].allotment]];
        
    // }
    // console.log(output)
    
    // var csv = 'No,Nurse,Wardno, Allotment\n';
    // output.forEach(function(row) {
    //     csv += row.join(',');
    //     csv += "\n";
    // });
    // console.log(csv);
    
    
    
    // DOWNLOAD CSV BUTTON
    var savebutton=document.createElement('button');
    savebutton.innerText="SAVE PROGRESS";
    savebutton.onclick=function(){download_csv();};
    column1.appendChild(savebutton);
    
    // GAP
    var gap=document.createElement("div");
    gap.innerHTML="<br><br>"
    column1.appendChild(gap);

    // GENERATE TABLE BUTTON
    // var printbutton=document.createElement('button');
    // printbutton.innerText="Generate allotment table";
    // printbutton.onclick=function(){print_table();};
    // column1.appendChild(printbutton);

    print_table();
    

    //GAP
    var gap=document.createElement("div");
    gap.innerHTML="<br><br>"
    column1.appendChild(gap);
    
    
    
    // creating HTML elements for content
    var column2=document.getElementById("column2")
    column2.innerHTML="Sidebar <br>";
    var sidebar=document.createElement("div");
    sidebar.id="sidebar";
    sidebar.innerHTML="";
    column2.appendChild(sidebar);
    
}

// FUNCTION SPACE

function download_csv() {
    var output=[];
    for(let i=0;i<nurseNames.length;i++){
        output[i]=[i,nurseNames[i],nurses[i].allotment,wardNames[nurses[i].allotment]];
        
    }
    console.log(output)
    
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


function print_table(){
    var tableDiv=document.createElement("div");
    tableDiv.innerHTML="";
    tableDiv.id="tableDiv";
    let tableElement=document.createElement("table");
    
    let tableheader=document.createElement("tr");
    tableheader.innerHTML="<th>S.No.</th><th>Name</th><th>Allotment</th>";
    tableElement.appendChild(tableheader);
    let thisRow  
    for(let i=0;i<nurseNames.length;i++){
        
        thisRow=document.createElement("tr");// create row
        tableElement.appendChild(thisRow); // add row
        
        thisCell=document.createElement("td"); // create cell
        thisRow.appendChild(thisCell); // add cell 
        thisCell.innerText=(i+1).toString(); // enter cell 1 text
        
        thisCell=document.createElement("td"); // create cell
        thisRow.appendChild(thisCell); // add cell 
        thisCell.innerText=nurseNames[i]; // enter cell 1 text
        
        thisCell=document.createElement("td"); // create cell
        thisRow.appendChild(thisCell); // add cell 
        thisCell.innerText=wardNames[nurses[i].allotment]; // enter cell 1 text
        
        
    }
    tableDiv.appendChild(tableElement);
    column1.appendChild(tableDiv);
    
    tablePrintButton=document.createElement("button");
    tablePrintButton.onclick=function(){PrintElem("tableDiv")};
    tablePrintButton.innerText="Print this table";
    
    column1.appendChild(tablePrintButton);
    
    
}



function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    
    mywindow.document.write('<html><head><title>' + "Nurse schedule"  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + "Nurse schedule"  + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');
    
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    
    mywindow.print();
    // mywindow.close();
    
    return true;
}
