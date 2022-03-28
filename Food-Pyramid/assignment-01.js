// Function to increase shelf items and height
function increase(shelf_num) {
    total = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--shelf_" + shelf_num + "_total"), 10);
    if(total < 9) {
        total += 1;
        document.documentElement.style.setProperty("--shelf_" + shelf_num + "_total", total);
        height = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--shelf_" + shelf_num + "_height"), 10);
        height += 10; 
        document.documentElement.style.setProperty("--shelf_" + shelf_num + "_height", height + "px");
        setColour(shelf_num);
    } else {
        alert("Max items on shelf!");
    } 
}

// Function to decrease shelf items and height
function decrease(shelf_num) {
    total = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--shelf_" + shelf_num + "_total"), 10);
    if(total > 0) {
        total -= 1;
        document.documentElement.style.setProperty("--shelf_" + shelf_num + "_total",total);
        height = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--shelf_" + shelf_num + "_height"), 10);
        height -= 10;  
        document.documentElement.style.setProperty("--shelf_" + shelf_num + "_height", height + "px");
        setColour(shelf_num);
    }
}

// Function to set colour of circles in response to number of items.
function setColour(shelf_num) {
    total = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--shelf_" + shelf_num + "_total"), 10);
    min = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--shelf_" + shelf_num + "_min"), 10);
    max = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--shelf_" + shelf_num + "_max"), 10);
    
    if(max === min) {
        if(total < min){
            document.getElementById("label_" + shelf_num).style.backgroundColor = "red";
        } else if(total === min) {
            document.getElementById("label_" + shelf_num).style.backgroundColor = "green";
        } else if(total > min){
            document.getElementById("label_" + shelf_num).style.backgroundColor = "blue";
        }
    } else {
        if(total < min){
            document.getElementById("label_" + shelf_num).style.backgroundColor = "red";
        } else if(total === min) {
            document.getElementById("label_" + shelf_num).style.backgroundColor = "green";
        } else if(total > max){
            document.getElementById("label_" + shelf_num).style.backgroundColor = "blue";
        }
    }
    
}

// Function to update number of items for display
function showTotal(shelf_num) {
    document.getElementById("label_" + shelf_num).innerHTML = getComputedStyle(document.documentElement).getPropertyValue("--shelf_" + shelf_num + "_total");
}

// Function to show shelf number
function showLabel(shelf_num) {
    document.getElementById("label_" + shelf_num).innerHTML = shelf_num;
}

function checkDate() {
    const d = new Date();
    const x = new Date(Date.parse(document.getElementById("date").value));
    if (x <= d) {
        document.getElementById("output").innerHTML = "Success!";
    } else {
        document.getElementById("output").innerHTML = "Invalid Date!";
    }
}

/* Switch between age group recommendations*/
function ToggleGroup(group) {
    const child1a = [0,1,2,3,2,3];
    const child1b = [0,1,2,3,3,4];
    const child2a = [0,1,3,3,4,4];
    const child2b = [0,1,4,3,5,6];
    const adulta  = [0,1,2,3,5,6];
    const adultb  = [0,1,2,3,6,7];

    if(group === 1) {
        /*Switch to children ages 1-2*/
        for(let i = 0; i < 6; i++) {
            document.documentElement.style.setProperty("--shelf_" + (i + 1) +"_min", child1a[i]);
            document.documentElement.style.setProperty("--shelf_" + (i + 1) +"_max", child1b[i]);
        }
    } else if (group === 2){
        /*Switch to children ages 3-4*/
        for(let i = 0; i < 6; i++) {
            document.documentElement.style.setProperty("--shelf_" + (i + 1) +"_min", child2a[i]);
            document.documentElement.style.setProperty("--shelf_" + (i + 1) +"_max", child2b[i]);
        }
    } else {
        /*Switch to adults & children Ages 5+*/
        for(let i = 0; i < 6; i++) {
            document.documentElement.style.setProperty("--shelf_" + (i + 1) +"_min", adulta[i]);
            document.documentElement.style.setProperty("--shelf_" + (i + 1) +"_max", adultb[i]);
        }
    }

    /*Update label colours for total displays*/
    for(let i = 1; i <=6; i++) {
        setColour(i);
    }
}

