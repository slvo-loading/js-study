const dnaPieces = ["A", "C", "G", "T"];
let idx = 0;
myDna = []
for(let i = 0; i < 24; i++){
    dna = ""
    for(let j = 0; j < 3; j++){
        idx = Math.floor(Math.random() * 4)
        dna += dnaPieces[idx]
    }
    myDna.push(dna)
}
console.log(myDna)
