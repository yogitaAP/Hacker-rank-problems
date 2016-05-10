/* A simple method to find symmetric point of P about Q
   Author: yogitaAP
*/
function processData(input) {
    var inputsFormatted = input.split('\n');
    var testCases = inputsFormatted.splice(0, 1);
    
    for(var i = 0; i < inputsFormatted.length; ++i) {
        var iter = inputsFormatted[i];
        var points = iter.split(' ');
        var x = 2 * parseInt(points[2]) - parseInt(points[0]);
        var y = 2 * parseInt(points[3]) - parseInt(points[1]);
        console.log(x + ' ' + y);
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

