// Code your solution in this file!
// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(driversArray) {
    const firstTwo = () => driversArray.slice(0, 2)
    return firstTwo(driversArray);
}

function returnLastTwoDrivers(driversArray) {
    const lastTwo = () => driversArray.slice(2)
    return lastTwo(driversArray)
}

const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
];
//console.log(selectingDrivers)

function createFareMultiplier(mathy) {
    return function fareMultiplier (ymath) {
        return ymath * mathy;
    }
 }

//function fareDoubler(double) {
    const fareDoubler = createFareMultiplier(2);
//}

//does the same thing above but less neat
function fareTripler(triple) {
    return createFareMultiplier(triple)(3)
}

function selectDifferentDrivers(drivers, x) {
    if(x === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else
        return returnLastTwoDrivers(drivers);
}