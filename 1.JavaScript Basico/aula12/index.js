let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; //A

const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;

// [varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC)