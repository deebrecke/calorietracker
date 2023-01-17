/*
Take user inputs, calculate/convert values and output on right side
Author: Dee Brecke (with some starter code from Josh Archer)
date: 1/24/2022
file: script.js

MET values from: https://media.hypersites.com/clients/1235/filemanager/MHC/METs.pdf,
https://www.sciencedirect.com/science/article/pii/S1873959814000969,
https://vrhealth.institute/portfolio/beat-saber/, and
https://golf.procon.org/met-values-for-800-activities/

Please note: This was my first attempt at this assignment. I decided a switch statement
approach would be better. I didn't want to delete this code because I wanted to keep it
for further reference, so I commented out the link on the HTML page.
*/
//this registers the button click events when the
//page loads
window.onload = function()
{
    //register button events when the page loads
    document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
    document.getElementById("workout-to-met").onclick = workoutToMet;
    document.getElementById("calc-calories").onclick = calculateCalories;
}
let kgsFromLbs = 0;
//convert lbs to kgs from the input fields in the
//page and send output to the console
function lbsToKgs()
{
    let lbsBox = document.getElementById("lbs");
    let lbsText = lbsBox.value;
    let lbsNum = parseInt(lbsText);

    if(Number.isNaN(lbsNum))
    {
        output("Please enter a valid number!");
    }
    else
    {
        kgsFromLbs = (lbsNum*0.453592).toFixed(2);
        output(`${lbsNum} pounds is ${kgsFromLbs} kilograms`)
    }
    //extra credit move conversion to calorie box
    let kgAutoInput = document.getElementById("kgs");
    kgAutoInput.value = kgsFromLbs;
}

let metsValue = 0;
//determine MET value for exercises in the dropdown
//list and send output to the console
function workoutToMet()
{
    let metsInput = document.getElementById("workouts");
    let metsText = metsInput.value;

    if (metsText === "yard")
    {
        output("Light Yard Work has a MET value of 3");
        metsValue = 3;
    }
    else if (metsText === "walk")
    {
        output("Walking 3-4 mph has a MET value of 4");
        metsValue = 4;
    }
    else if (metsText === "vacuum")
    {
        output("Vacuuming has a MET value of 4");
        metsValue = 4;
    }
    else if (metsText === "dance")
    {
        output("Dancing has a MET value of 4.8");
        metsValue = 4.8;
    }
    else if (metsText === "hike")
    {
        output("Hiking has a MET value of 6");
        metsValue = 6;
    }
    else if (metsText === "beat")
    {
        output("Playing Beat Saber has a MET value of 6.2");
        metsValue = 6.2;
    }
    else if (metsText === "jog")
    {
        output("Jogging has a MET value of 7");
        metsValue = 7;
    }
    else if (metsText === "back")
    {
        output("Backpacking has a MET value of 7");
        metsValue = 7;
    }

    let metAutoInput = document.getElementById("met");
    metAutoInput.value = metsValue;

//    output(`${document.getElementById("workouts")} has A MET value of ${metsValue}`)

//    output(`${metsInput} has A MET value of ${metsValue}`)
}

//Calculates the calories burned per minute, given
//the inputs from the page and sends the output
//to the console
function calculateCalories()
{
    /* This didn't work
    if(Number.isNaN(kgsFromLbs))
    {
        output("Pounds field is empty!")
    }
    */

   /* This block of code works for the user to input values by hand (original assignment)
    let calMetInput = document.getElementById("met");
    let calMetText = calMetInput.value;
    let calMetNum = parseFloat(calMetText)

    let calKgInput = document.getElementById("kgs");
    let calKgText = calKgInput.value;
    let calKgNum = parseFloat(calKgText);

    let caloriesBurned = ((3.5*calKgNum*calMetNum)/200).toFixed(2);
    output(`MET ${calMetNum}, weight ${calKgNum} - burns ${caloriesBurned} per minute`)
    */

    //extra credit--have the values autofill then calculate

        let caloriesBurned = ((3.5 * kgsFromLbs * metsValue) / 200).toFixed(2);
        output(`MET ${metsValue}, weight ${kgsFromLbs} - burns ${caloriesBurned}  calories per minute`);
}

//this function takes the provided message and prints
//it to the console on the page
function output(message)
{
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}

