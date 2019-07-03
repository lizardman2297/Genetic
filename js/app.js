const genomeLength = 8;
const individuNb = 10;

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
        console.log(individu);
        var genomeLine = document.createElement("p");
        genomeLine.classList.add("test");
        genomeLine.innerHTML = individu;
        document.getElementById("main").appendChild(genomeLine);
    });
    var line = document.createElement("hr");
    document.getElementById("main").appendChild(line);
}

function sortPop(){

}