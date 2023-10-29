
let num = [2,3,4,5,7]
let min = num[0]
let max = num[0]
let actualSum =0
for(let i=0;i<num.length;i++){
    if(num[i] > max) max = num[i]
    if(num[i] < min) min = num[i]
    actualSum = actualSum +num[i]
}
let sum = 0;
for(let k=min;k<=max;k++){// min=1...max=6
    sum = sum + k;// 
}
console.log("missing num-->"+(sum - actualSum))