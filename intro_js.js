\\first exercise
const num = 123;
let sum = 0;
let n1=Math.floor(num%10);
let n2=Math.floor((num/10)%10);
let n3= Math.floor(num/100);
sum = n1+n2+n3;
console.log(sum);


\\second exercise
const a = 1; b = -6; c = 9;  // stands for x**2 - 6*x + 9 = 0
let solutionA = solutionB = 0;
solutionA = ((-b + Math.sqrt((Math.pow(b,2))-(4ac))) / (2a));
solutionB = ((-b - Math.sqrt((Math.pow(b,2))-(4ac))) / (2a));
console.log(solutionA, solutionB)


\\third exercise
const num = -8;
let absolute;
if(num<0)
{
    absolute=(-num);
}
else
{
    absolute=num;
{
console.log(absolute);
