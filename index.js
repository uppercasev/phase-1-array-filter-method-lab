// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(
        function(driver) {
            return driver.toLowerCase() === name.toLowerCase();
        }
    )    
};

function fuzzyMatch(drivers, letters) {
    return drivers.filter(
        function(driver) {
            return driver.startsWith(letters);
        }
    )
}

function matchName(driverDetails, name) {
    return driverDetails.filter(
        function(driver){
            return driver.name === name;
        }
    )
}