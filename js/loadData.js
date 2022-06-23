
var loadData=function(){
    // COLUMN 1
    var column1=document.getElementById("column1");
    var textHTML=`
    <h2>Load from browser local storage</h2>
    <div class="buttonsDiv">
    <button id="loadlocal" onclick="loadLocalStorage()">Load local</button>
    <button id="loadlocal" onclick="clearLocalStorage()">Clear local</button>
    </div>
    <h2>Load from CSV </h2> 
    <div> This static site does not store any information in a server </div>`;
    column1.innerHTML=textHTML;
    
    // COLUMN 2
    var column2=document.getElementById("column2");
    column2.innerHTML="";
    
    // HIDE SIDEBAR
    column1.style="grid-column: 1 / span 2;";
    column2.hidden=true;
    
    // UPLOAD AND PARSE CSV FILES
    var loadedData;
    var inputFileDiv= document.createElement("div");
    inputFileDiv.innerHTML="<label for='myFile'>1. Upload CSV</label>"
    inputFileDiv.classList.add("inputFileDiv");
    var inputFileElement= document.createElement("input"); // upload file button
    inputFileElement.type="file";
    inputFileElement.id="myFile";
    inputFileElement.hidden=true;
    inputFileDiv.appendChild(inputFileElement);
      
    // PREVIEW FILE BUTTON
    var previewFileButton=document.createElement("button"); 
    previewFileButton.innerText="2. Preview file";
    previewFileButton.id="previewBtn";
    inputFileDiv.appendChild(previewFileButton);
    
    // GAP
    var gap=document.createElement("div");
    gap.innerHTML="<br>"
    inputFileDiv.appendChild(gap);
    

    
    // PRINT TABLE 
    var loadedData;
    previewFileButton.onclick=function(){
        // PREVIEW FILE FUNCTION
        elemId="myTable";
        document.getElementById(elemId).innerHTML="";
        loadedData=processFile(elemId);
    }
 

    // ACCEPT FILE BUTTON
    var acceptFileButton=document.createElement("button");     
    acceptFileButton.innerText="3. Accept";
    acceptFileButton.id="acceptBtn";
    acceptFileButton.onclick=function(){
        // ACCEPT FILE FUNCTION
        console.log("loading csv data...")
        // nurses=[];wards=[]
        // nurseNames=[];wardNames=[];
        let row=0;
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
        window.alert("Loaded data from CSV!")
        wardsview()
    }
    inputFileDiv.appendChild(acceptFileButton);  
    
    // GAP
    var gap=document.createElement("div");
    gap.innerHTML="<br><br>"
    inputFileDiv.appendChild(gap);
    column1.appendChild(inputFileDiv);
    
    // PREVIEW TABLE ELEMENT
    var previewTableDiv=document.createElement("div");
    previewTableDiv.classList.add("tableDiv");
    var previewTable=document.createElement("table");
    previewTable.id="myTable";
    previewTable.innerText='Preview pane';
    previewTableDiv.appendChild(previewTable)
    column1.appendChild(previewTableDiv);
    
}






