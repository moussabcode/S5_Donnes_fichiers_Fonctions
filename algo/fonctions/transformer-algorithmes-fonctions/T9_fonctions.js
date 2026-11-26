function calculerMoyenne(notes){
    let somme =0;
    for(i = 0; i<=notes.length-1; i++){
        somme += notes[i];
    }
    return somme / notes.length;
}

let groupA = [12,14,16];
let groupB = [10,18,11,13];

let notesA = calculerMoyenne(groupA);
let notesB = calculerMoyenne(groupB);

console.log("la somme des notes Group A : " + notesA);
console.log("la somme des notes Group B : " + notesB);