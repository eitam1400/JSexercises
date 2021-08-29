const num = 123;
let sum = 0;
let n1=Math.floor(num%10);
let n2=Math.floor((num/10)%10);
let n3= Math.floor(num/100);
sum = n1+n2+n3;
// your code goes here;
console.log(sum);