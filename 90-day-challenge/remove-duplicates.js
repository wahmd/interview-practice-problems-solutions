"use strict";

function removeDuplicates(arr) {
    // WRITE YOUR BRILLIANT CODE HERE
    
    let p1 = 0; 
    let p2 = 0; 
    
    let counter = 0
    
    for ( let i = 0; i<arr.length ; i++ ) {
        if (i===0){
            counter++;
        }
        
        // if mismatch 
        if (arr[p1] !== arr[p2]) {
            arr[p1 + 1] = arr[p2];
            
            p1 = p1 + 1;
            
            counter++; 
        }
        
        p2++;
    }
    
    
    return counter;
}

// two pointers in same direction, no extra memory used
