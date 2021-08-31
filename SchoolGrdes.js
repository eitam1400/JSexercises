const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]; // 56,62,73,84,88,88,91,92,95,96

var maxG=Math.max(...grades);
var minG=Math.min(...grades);

var newArr = grades.slice(Math.floor((grades.length)/2));

//EXERCISE 1 WHICH FOUND THE RANGE BETWEEN ALL GRADES
function gradesRange(){
    return (maxG - minG);
}

let saverRange=gradesRange();


//EXERCISE 2 WHICH FIND THE GRADES MEDIAN(AFER IT GOT SORTED! I KNOW THE ORIGINAL ARRAY BEEN CHANGING BUT TO PREVENT ITJUST CREATE COPY OF THIS ARRAY ITS NOT BIG DEAL LOL! XD)
function sortArr(arr)
{
    let fixedArr=[];
    while(/* typeof(grades[0]) === "number" || */  arr.length > 0)
    {
        fixedArr.push(minG);
        arr.splice(arr.indexOf(minG),1);
        minG=Math.min(...arr);
    }
    return fixedArr;
} 

function gradesMedian(arr){
    return (arr[Math.floor(((arr.length)/2))-1] + " " + arr[Math.floor((arr.length)/2)]);
}

let saverMedian= gradesMedian(sortArr(grades));

//let copyStr=gradeMedian(sortArr(grades)).slice(" ");
//let arr1=sortArr(grades).slice.indexOf(gradeMedian(sortArr(grades));
/* function secondHalfRange(arr)
{
    let newArr = sortArr(grades).slice(sortArr(grades).indexOf(gradeMedian(sortArr(grades)));
    return gradesRange(newArr);
}
*/


//EXERCISE 3 FIND THE RANGE OF GRADES IN THE SECOND HALF OF THE YEAR!!
function secondHalfRange(arr)
{
    //let min1=Math.min(arr.slice(Math.floor((arr.length)/2)));
    //let max1=Math.max(arr.slice(Math.floor((arr.length)/2)));
    minG =Math.min(...newArr);
    maxG=Math.max(...newArr);
    return gradesRange();
}


let secondHalfSaver = secondHalfRange(grades);

console.log("Range:" +" "+ saverRange + "\nMedian: " +saverMedian + "\nSecond Half Range: " + secondHalfSaver);

