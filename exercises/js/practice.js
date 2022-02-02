function digital_root2(n) {
    let strNumber = n.toString();
    console.log(`strNumber==> ${strNumber}`);
    let sum =0;
    
    for(let i=0;i<strNumber.length;i++){
        sum+=parseInt(strNumber[i]);
    }
    
    if(sum>9){
        sum = digital_root(sum);
    }
    
    return sum;
}

function digital_root(n) {
    return (n - 1) % 9 + 1;
}

function descendingOrder(n){
    let strNumber = n.toString();
    let strToArray=strNumber.split("").sort().reverse().join("");
    // console.log(strNumber.split("").sort().reverse());
    return parseInt(strToArray);
}

//let result = descendingOrder(1021);

function highAndLow(numbers){
    let strToArray = numbers.split(" ").map(function(item) {
        return parseInt(item, 10);
    });
    console.log(strToArray);
    let maxNumber = Math.max(...strToArray);
    let minNumber = Math.min(...strToArray);
    return `${maxNumber} ${minNumber}`
}

let result = highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")

console.log(result);

//hosting
// grokking the system desing interview