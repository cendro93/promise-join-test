const Promise = require('bluebird')


// simple delay function to test promises
const delay = (delay, theWay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            process.isSet = true
            resolve()
        }, delay)
    })
}

const promiseArray = [delay(5000, 'arrayWay'), delay(3000, 'arrayWay')]



// The non array way, process.isSet is correctly set 
Promise.join(delay(5000, 'nonArrayWay'), delay(3000, 'nonArrayWay')).then( () => {console.log("The non array way !!! All resolved, isSet: "+process.isSet)})

// the array way, process.isSet is undefined 
Promise.join([promiseArray]).then( () => {console.log("The array way !!! All resolved, isSet: "+process.isSet)})

// the array way, using spread operator to pass promises as multiple arguments of Promise.join function
// process.isSet is true
Promise.join(...promiseArray).then( () => {console.log("The array way !!! All resolved, isSet: "+process.isSet)})







