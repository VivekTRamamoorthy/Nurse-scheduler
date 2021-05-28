
var loadData=function(){
    // creating HTML elements for content
    var column1=document.getElementById("column1")
    var textHTML="<h2>Load from CSV </h2> \n";
    textHTML=textHTML.concat("<li> This static site does not store any information entered by the user </li><br>");
    
    
    column1.innerHTML=textHTML;
    
    // UPLOAD AND PARSE CSV FILES
    var loadedData;
    // <input type="file" id="myFile">
    // <button onclick='processFile()'>Process</button>
    // <table id="myTable"></table>
    var inputFileDiv= document.createElement("div");
    var inputFileElement= document.createElement("input"); // upload file button
    inputFileElement.type="file";
    inputFileElement.id="myFile"
    inputFileDiv.appendChild(inputFileElement);
    var inputFileButton=document.createElement("button"); // preview data button
    inputFileButton.innerText="Preview file";
    inputFileButton.id="processBtn";
    inputFileDiv.appendChild(inputFileButton);
    // table
    var inputFileTable=document.createElement("table");
    inputFileTable.id="myTable";
    inputFileDiv.appendChild(inputFileTable);
    var loadedData;
    inputFileButton.onclick=function(){
        
        loadedData=processFile();
        var acceptFileButton=document.createElement("button");     // accept button
        acceptFileButton.innerText="Accept";
        acceptFileButton.id="acceptBtn";
        acceptFileButton.onclick=function(){
            console.log("loading csv data...")
            // nurses=[];wards=[]
            // nurseNames=[];wardNames=[];
            row=0;
            for (let allrows = 1; allrows < loadedData.length; allrows++) {
                if(loadedData[allrows].length<4){break}
                row=row+1;
                i=row-1;
                nurseNames[i] = loadedData[row][1];
                let allotment = loadedData[row][2];
                nurses[i]=new Nurse(10000+i,nurseNames[i]);
                nurses[i].allotment = allotment;
                
                wardNames[allotment] = loadedData[row][3];
                wards[allotment]=new Ward(wardNames[allotment]);
                wards[allotment].allotment.push(i);
                
            }
            console.log("loaded csv data...")
            
        }        
        
        
        inputFileDiv.appendChild(acceptFileButton);
    }
    
    
    
    column1.appendChild(inputFileDiv);
    
    
}