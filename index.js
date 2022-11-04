// Code your solution in this file!
const returnFirstTwoDrivers = function(driver){
    return driver.slice(0,2)
}

const returnLastTwoDrivers = function (driver){
    return driver.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){

    return function (fare){
       return fare * num
   }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driver, func){
    return func(driver)
}