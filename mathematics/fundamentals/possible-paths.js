/* Solution to possible paths problem. Given are the two points and possible movements one can carry from one point in a 2D grid.
   Author: yogitaAP
*/
function processData(input) {
    var inputsFormatted = input.split('\n');
    var testCases = inputsFormatted.splice(0,1);
    
    
    for(var j = 0; j < inputsFormatted.length; ++j) {
        var points = inputsFormatted[j].split(' ');
        var hcf1; var hcf2;
        
        var x1 = parseInt(points[0]);
        var y1 = parseInt(points[1]);
        var x2 = parseInt(points[2]);
        var y2 = parseInt(points[3]);
        
        //console.log(x1, y1, x2, y2);
        
        function gcd(x,y) {
            var r = 0, a, b;
            a = (x > y) ? x : y; // a is greater number
            b = (x < y) ? x : y; // b is smaller number

            r = b;
            while(a % b != 0)
            {
                r = a % b;
                a = b;
                b = r;
            }
            return r;

        }
        
        var hcf1 = gcd(x1,y1);
        var hcf2 = gcd(x2,y2);
        
        if(hcf1 === hcf2)
            console.log('YES');
        else
            console.log('NO');
     
    }
} 

