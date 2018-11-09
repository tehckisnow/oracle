function enter(event, area){
    if(event.key == "Enter"){
        let input = document.getElementById(area + "_input").value;
        let result;
        console.log(input[0]);
        switch(input){
            case "#d20":
                result = "> " + Math.floor(Math.random() * 20)
                newThread(area, result);
                console.log("dtwunny");
                break;
            case input[0] == "#":
                let sides = input.splice(0, 1);
                console.log(sides);
                result = "> " + Math.floor(Math.random() * sides);
                newThread(area, result);
                console.log("random");
                break;
            default:
                newThread(area);
        }
    }
}

function newThread(area, alt){
    //create new paragraph element in threads
    let newP = document.createElement("p");
    alt ? newP.innerHTML = alt : newP.innerHTML = document.getElementById(area + "_input").value + " ";
    let element = document.getElementById(area + "s");
    element.appendChild(newP);
    //add highlight event
    newP.addEventListener("mouseover", function(){newP.style.backgroundColor = "rgba(40, 40, 40, 0.1)"});
    newP.addEventListener("mouseout", function(){newP.style.backgroundColor = null});
    //create new delete button adjacent to new paragraph element
    let button = document.createElement("button");
    button.innerHTML = "x";
    newP.appendChild(button);
    button.style.float = "right";
    button.addEventListener ("click", function() {
        button.parentNode.remove();
    });
    //reset input field
    document.getElementById(area + "_input").value = "";
    document.getElementById(area + "_input").focus();
}

function clearAllThreads(area){
    let threads = document.getElementById(area + "s");
    let children = threads.childNodes;
    for (let i in children){
        if(children[i].nodeType == 1){
            children[i].remove();
        }
        //removes about half of the children and then logs error
        //uncaught type error: children[i].remove is not a function
    }
}
