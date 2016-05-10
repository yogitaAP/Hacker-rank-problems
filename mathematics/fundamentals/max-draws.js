/* A simple solution to find the maximum number of draws from a drawer of socks to find the matching pair.
   Author: yogitaAP 
*/
function processData(input) {
    var inputsFormatted = input.split('\n');
    var testCases = inputsFormatted.splice(0, 1);
    
    for(var i = 0; i < inputsFormatted.length; ++i) {
        var value = parseInt(inputsFormatted[i]);
        if(value === 0)
            console.log(value);
        else 
            console.log(value + 1);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
