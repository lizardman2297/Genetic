// config
const genomeLength = 16;
const individuNb = 10;

// generate
function generateGenome(){
    var genome = [];
    for (let i = 0; i < genomeLength; i++) {
        genome[i] = Math.floor(Math.random() * Math.floor(2));
    }
    return genome;
}

function generatePop(){
    var pop = [];
    for (let i = 0; i < individuNb; i++) {
        pop[i] = generateGenome();
    }
    displayPop(pop);
}

function displayPop(pop){
    pop.forEach(individu => {
        var genomeLine = document.createElement("p");
        genomeLine.classList.add("popNotSort");
        genomeLine.innerHTML = individu + " - score : " + getScore(individu);
        document.getElementById("main").appendChild(genomeLine);

    });
    var line = document.createElement("hr");
    document.getElementById("main").appendChild(line);
}

function getScore(individu){
    var score = 0
    individu.forEach(gene => {
        if (gene == 1) {
            score = score + 1;
        }
    })
    return score;
}

// sort
function sortPop(){
    
}




// Clear
function clear(){
    document.getElementsByClassName("popNotSort").forEach(element => {
        element.innerHTML = "";
    });
}