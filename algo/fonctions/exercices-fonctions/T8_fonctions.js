function calculerSurface(longueur,largeur) {
    return longueur * largeur
}
function estGrand(surface) {
    return surface >= 100
}

let surface1 = calculerSurface(12,10);
let grand = estGrand(surface1);

console.log("surface est : ",surface1, "métre carrer");
console.log("la surface est plus grand que 100? : "+ grand);