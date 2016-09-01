
var num=String(prompt("Enter an index of a number you would like to find starting with 1"));
num=Number(num);

document.write("The Fibonacci number is:   ");
document.write (String(fib(num)));


    function fib (n) {
        if (n===1) {
            return 1;
        } else 
            if (n===2) {
                return 1;
            } else
                return fib(n-1)+fib(n-2);
            
    }
