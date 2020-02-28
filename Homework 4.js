//Homework 4.1
function FibonacciSeries(number){
    let series=[];
    series[0]=0;
    series[1]=1;
    for(let i=2;i<number;i++){
    series[i]=series[i-1]+series[i-2];
    if((series[i]+series[i-1])>number){
        break;
     }
    }return(series);
    
    }console.log(FibonacciSeries(45));




//Homework 4.2
function productDivisibleSum(n){
let nStr="";
nStr=nStr+n;
nStr=nStr.split("");
let sum=0;
let product=1;
 for(i=0;i<nStr.length;i++){
    sum=sum+(+nStr[i]);
    product*=nStr[i];
}   let res=product%sum;
   if(n<10 && n>0){
      return("Quotient is 1.");
   }else if(n===0){
    return("Cannot calculate.");
    }else if(res!==0){
        return("Remainder is 2.");
    }else if(res===0){
        return("Quotient is 2.");
    }
}
console.log(productDivisibleSum(455));




//Homework 4.3
function checkArray(array){
let difArr=[];
let max=array[0];
let min=array[0];
for(let i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }else if(array[i]<min){
        min=array[i];
    }
}let dif=(max-min);
difArr.push(dif);
for(let i=0;i<array.length;i++){
    for(let j=0;j<difArr.length;j++){
        if(array[i]==difArr[j]){
            return(true);
        }else{
            continue;
        }
    }
}
  return(false);
}
console.log(checkArray([12, 4, -43, 1]));




//Homework 4.4
function indexSecondMax(arr){
let firstMax=0;
let secondMax=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>firstMax){
        secondMax=firstMax;
        firstMax=arr[i];
    }else if(arr[i]>secondMax){
        secondMax=arr[i];
    }
}
return arr.indexOf(secondMax);
}
console.log(indexSecondMax([23, -98, 0, -456, 12, 8]));
 



//homework 4.6
function printRectangle(n){
let row="";
for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        row+="*";
    }
     row+="\n";
}
return(row);

}console.log(printRectangle(4));





//homework 4.7
function emptyRectangle(n){
    let line="";
for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        if(i==1||i==n || j==1||j==n){
            line+="*";
        }else{
            line+=" ";
        }
    }
   line+="\n";
}
return line;
}
console.log(emptyRectangle(6));






//homework 4.8
function patternNumber(number){
let result=0;
let m;
let n;
for(let i=1;i<=number;i++){
    for(let j=1;j<=i;j++){
        result+=j;
    }
        result+="\n";
}
for(let i=(number-1);i>=1;i--){
    for(let j=1;j<=i;j++){
        result+=j;
    }
        result+="\n";
}

return result;
    
}
console.log(patternNumber(5));
