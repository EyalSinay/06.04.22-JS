const leap_year = year => {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
        console.log("It is indeed a leap year");
    }
}

console.log(2012);
leap_year(2012);

console.log(2100);
leap_year(2100);

console.log(2400);
leap_year(2400);