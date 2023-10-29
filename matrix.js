let matrix = [  [8,7,6], [4,5,1], [7,8,9]]
let cSum = [0,0,0]            
for(let r=0;r<3;r++){
for(let c=0;c<3;c++){
cSum[c] = cSum[c] + matrix[c][r] 
}
}  

for(let i=0;i<3;i++){
console.log("colum "+(i+1)+" Sum--->"+cSum[i])
}
