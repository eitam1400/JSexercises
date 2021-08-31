// list of Formula 1 champions since the year 2000
const formula1Champions = [
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Alonso",
    "Alonso",
    "Räikkönen",
    "Hamilton",
    "Button",
    "Vettel",
    "Vettel",
    "Vettel",
    "Vettel",
    "Hamilton",
    "Hamilton",
    "Rosberg",
    "Hamilton",
    "Hamilton",
    "Hamilton",
    "Hamilton"
];

function countW(driver,lst)
{
    let hamiltonArr=[];
    let rosbergArr=[];
    let vettelArr=[];
    let alonsoArr=[];
    let räikkönenArr=[];
    let buttonArr=[];
    let schumacherArr=[];

    for(let i=0; i<lst.length;i++)
    {
        hamiltonArr = lst.filter(lst[i] === "Hamilton"); // Creating array that restore all the winnings of the specific driver onlyin on place
        rosbergArr=lst.filter(lst[i] === "Rosberg");
        vettelArr=lst.filter(lst[i] === "Vettel");
        alonsoArr=lst.filter(lst[i] === "Alonso");
        räikkönenArr=lst.filter(lst[i] === "Räikkönen");
        buttonArr=lst.filter(lst[i] === "Button");
        schumacherArr=lst.filter(lst[i] === "Schumacher");
    }

     switch(driver){ //checking the guy wins and returning it
         case "Hamilton":
             return hamiltonArr.length;
         case "Rosberg":
             return rosbergArr.length;
         case "Vettel":
             return rosbergArr.length;
         case "Alonso":
             return  alonsoArr.length;  
         case "Räikkönen":
             return räikkönenArr.length;
         case "Button":
             return  buttonArr.length;
         case "Schumacher":
             return  schumacherArr.length;
     }
}

let winners = {};

//let winCounter = countW(driver,formula1Champions);

winners["Hamilton"] =countW("Hamilton",formula1Champions);
winners["Schumacher"] =countW("Schumacher",formula1Champions);
winners["Räikkönen"] =countW("Räikkönen",formula1Champions);
winners["Alonso"] =countW("Alonso",formula1Champions);
winners["Vettel"] =countW("Vettel",formula1Champions);
winners["Rosberg"] =countW("Rosberg",formula1Champions);
winners["Button"] =countW("Button",formula1Champions);

console.log(winners);


function countWin(driver) {
    
}

formula1Champions.forEach(countWin)
