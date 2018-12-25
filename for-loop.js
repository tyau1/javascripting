var total = 0;     // declare total and set its value to 0
var limit = 10;   // declare limit and set its value to 10

for (var i = 0;    // declare i and set its value to 0
i < limit;     // keep looping as long as the value of i is less than 10
i++)     // increase the value of i by 1 each time thru the loop
{
    total += i;    // add the current value of i to current value of total
}

console.log(total);