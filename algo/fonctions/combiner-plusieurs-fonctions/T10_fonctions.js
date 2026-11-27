

function calculerSomme(tableau){
    let somme = 0;  
    for(i=0; i<tableau.length; i++){
        somme += tableau[i];
    }
    return somme;
}

function calculerMoyenne(tableau){
    let somme = calculerSomme(tableau);
    return somme/tableau.length;
}

function trouverMaximum(tableau){
    let max=tableau[0];
    for(i=0; i<tableau.length; i++){
        if(tableau[i] > max){
            max = tableau[i];
        }
    }
    return max;
}

let notes = [15,12,18,11];
let Somme = calculerSomme(notes);
let moyenne =calculerMoyenne(notes);
let max = trouverMaximum(notes);

console.log("Moyenne des notes : " + moyenne);
console.log("Meilleure note : " + max);
