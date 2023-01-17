/*
Using a switch statement to determine outputs of a pull down list
Author: Dee Brecke (with some starter code from Josh Archer)
date: 1/27/2022
file: switch.js

MET values from: https://media.hypersites.com/clients/1235/filemanager/MHC/METs.pdf,
https://www.sciencedirect.com/science/article/pii/S1873959814000969,
https://vrhealth.institute/portfolio/beat-saber/, and
https://golf.procon.org/met-values-for-800-activities/
 */

//this registers the button click events when the page loads
window.onload = function()
{
    //register button events when the page loads
    document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
    document.getElementById("workout-to-met").onclick = workoutToMet;
    document.getElementById("calc-calories").onclick = calculateCalories;
}

let kgsFromLbs;
//convert lbs to kgs from the input fields in the page and send output to the console
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

let metsValue;
//determine MET value for exercises in the dropdown
//list and send output to the console
function workoutToMet()
{
    let metsInput = document.getElementById("workouts");
    let metsText = metsInput.value;

    switch(metsText)
    {
        case "yard": //if day === "Monday"
            output("Light Yard Work has a MET value of 3");
            metsValue = 3;
            break;

        case "walk":
            output("Walking 3-4 mph has a MET value of 4");
            metsValue = 4;
            break;

        case "vacuum":
            output("Vacuuming has a MET value of 4");
            metsValue = 4;
            break;

        case "dance":
            output("Dancing has a MET value of 4.8");
            metsValue = 4.8;
            break;

        case "hike":
            output("Hiking has a MET value of 6");
            metsValue = 6;
            break;

        case "beat":
            output("Playing Beat Saber has a MET value of 6.2");
            metsValue = 6.2;
            break;

        case "jog":
            output("Jogging has a MET value of 7");
            metsValue = 7;
            break;

        case "back":
            output("Backpacking has a MET value of 7");
            metsValue = 7;
            break;
    }
    let metAutoInput = document.getElementById("met");
    metAutoInput.value = metsValue;
}

//Calculates the calories burned per minute, given the inputs from
// the page and sends the output to the console
function calculateCalories()
{
    //extra credit--have the values autofill then calculate
    //I used the following reference to help me figure out how to get the error messages to print
    //https:stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in
    //then I reviewed "truthy and falsy" unit in book
    if(!metsValue)
    {
        output("MET field is empty");
    }
    else if(!kgsFromLbs){
        output("Weight in kg field is empty");
    }
    else
    {
        let caloriesBurned = ((3.5 * kgsFromLbs * metsValue) / 200).toFixed(2);
        output(`MET ${metsValue}, weight ${kgsFromLbs} - burns ${caloriesBurned}  calories per minute`);
    }
}

//this function takes the provided message and prints
//it to the console on the page
function output(message)
{
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}

