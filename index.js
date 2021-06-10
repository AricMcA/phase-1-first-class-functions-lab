const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function() {
    const newArray = [...drivers];
    newArray.splice(2,3);
    return newArray;
}

const returnLastTwoDrivers = function() {
    const newArray = [...drivers];
    newArray.splice(0,2);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];
