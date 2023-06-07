//               0123456789
let umaString = 'um "texto"';
// escape de aspas pode ser feito como \' ou \" tambem pode ser para colocar \\

// posso comprar strings em javascript como ponteiros


console.log(umaString);
console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('um'));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace(/um/, 'outra'));
console.log(umaString.length);
console.log(umaString.slice(2, 5));