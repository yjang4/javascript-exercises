const findTheOldest = function(people) {
    const d = new Date();
    currentYear = d.getFullYear();
    const oldest = people.sort(function(a, b) {
        let aDate;
        let bDate;
        if(a.yearOfDeath == null) {
            aDate = currentYear;
        }
        else aDate = a.yearOfDeath;
        if(b.yearOfDeath == null) {
            bDate = currentYear;
        }
        else bDate = b.yearOfDeath;

        const lastPerson = aDate - a.yearOfBirth;
        const nextPerson = bDate - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
