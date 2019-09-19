let regexp = /[z?(m?)(O?)]/gi;
let str = "zis is y bk.";

var result = ([str.match(regexp)]=='\u0000'? 'true':'false');

console.log(result);