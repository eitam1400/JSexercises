const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]; \\56,62,73,84,88,8,91,92,95,96

var maxG=Math.max(...grades);
var minG=Math.min(...grades);

function sortArr(arr)
{
    let fixedArr=[];
    for(let i=0;i<arr.length;i++)
    {
        fixedArr.push(minG);
        arr.splice(arr.indexOf(minG),1);
        minG=Math.min(...arr);
    }
}

sortArr(grades); 

function gradesRange(arr){
    return ( grades[(grades.length)-1] - grades[0]);
}




function gradesMedian(arr){
    return (arr[Math.floor(((arr.length)/2)+1)] + " " + arr[Math.floor((arr.length)/2)]);
}

function secondHalfRange(arr)
{
    let newArr = arr.slice(arr.indexOf(Math.max(gradesMedian(arr))));
    return gradesRange(newArr);
}


var yearlyRange = gradesRange(grades);
var medianOfGrades=gradesMedian(grades);
var secondHalf = secondHalfRange(grades);
console.log("Range:" +" "+ yearlyRange + "\nMedian: " +medianOfGrades + "\nSecond Half Range: " + secondHalf);

