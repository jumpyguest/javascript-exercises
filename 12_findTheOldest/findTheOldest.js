const findTheOldest = function(array) {
    let ageArray = array.map(object => ({
        person: object,
        age: object.yearOfDeath - object.yearOfBirth,
    }));


    // let oldestPerson = ageArray.reduce((oldest, current) => {
    //     if(current.age > oldest.age) {
    //         return current;
    //     } 
    //     return oldest;
    // });
    // console.log(oldestPerson);
    // return oldestPerson.person;

    
    let oldestAge = 0;
    for(let ageObject of ageArray) {
        if(isNaN(ageObject.age)) {
            let year = (new Date()).getFullYear();
            ageObject.age = year - ageObject.person.yearOfBirth;
        }
        if(ageObject.age > oldestAge) {
            oldestAge = ageObject.age;
        }
    }
    let oldestPerson = ageArray.find(ageObject => ageObject.age === oldestAge);
    return oldestPerson.person;
};



// Do not edit below this line
module.exports = findTheOldest;
