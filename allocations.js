
function randomAllocate(){
    for (let i = 0; i < nurses.length; i++) {
            nurses[i].allotment = Math.ceil(Math.random()*(wardNames.length - 1));
    }
}

function randomremAllocate(){
    for (let i = 0; i < nurses.length; i++) {
        let allotment = nurses[i].allotment;
        if (allotment==0){ // only if the nurse is unalloted
            let newallotment = Math.ceil(Math.random()*(wardNames.length - 1));
            nurses[i].allotment = newallotment;
        }
    }
}


function evenAllocate(){
    let allocatednurses = 0;
    while (allocatednurses <nurses.length){
        for (let i = 1; i < wardNames.length; i++) {
            nurses[allocatednurses].allotment = i;
            allocatednurses = allocatednurses + 1;
            if (allocatednurses>= nurses.length){
                return;
            }
        }
    }
}

function resetAllocations(){
    for (let i = 0; i < nurses.length; i++) {
        nurses[i].allotment=0;

    }

}