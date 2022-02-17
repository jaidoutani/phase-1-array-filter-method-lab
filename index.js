// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// returns all drivers that match the passed in name
// returns matching drivers if case does not match but letters do
// returns an empty array if there is no match
function findMatching(drivers, query) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === query.toLowerCase()
    })
}

// returns a driver if beginning provided letters match
// does not return drivers if only middle or ending letters match
// does not return drivers if only middle or ending letters match
function fuzzyMatch(drivers, query) {
    const queryLength = query.length
    return drivers.filter(function(driver) {
        return driver.slice(0, queryLength) === query
    })
}

// accesses the data structure to check if name matches
function matchName(drivers, query) {
    const result = drivers.filter(driver => driver.name === query)
    return result
}
