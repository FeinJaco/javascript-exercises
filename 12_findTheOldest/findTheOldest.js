const findTheOldest = function(people) {
    const CURRENT_YEAR = (new Date()).getFullYear();
    const sorted = people.sort((a,b) => {
        if (!a.yearOfDeath) a.yearOfDeath = CURRENT_YEAR;
        if (!b.yearOfDeath) b.yearOfDeath = CURRENT_YEAR;
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
