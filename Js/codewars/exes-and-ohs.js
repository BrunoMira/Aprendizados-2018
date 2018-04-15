/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str){

    reg = /[o|x]/gi
    str = str.toLowerCase().match(reg);

    if( str === null) return true;

    str = str.sort().join("")

    if(str.length % 2 !== 0) return false;
    
    return str.indexOf("x") === str.length / 2;

}

function XO2(str){
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

console.time("minha solução");

XO('xo') //, true 
XO("xxOo") //, true 
XO("xxxm") //, false 
XO("Oo") //, false 
XO("ooom") //, false 
XO("asdasd") //, false 

console.timeEnd("minha solução");

console.time("Melhor resposta");

XO2('xo') //, true 
XO2("xxOo") //, true 
XO2("xxxm") //, false 
XO2("Oo") //, false 
XO2("ooom") //, false 
XO2("asdasd") //, false 

console.timeEnd("Melhor resposta");