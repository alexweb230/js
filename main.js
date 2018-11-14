let now = new Date();

let hours = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    day = now.getDay(),
    prepand = '',

    dayName = ['вс','пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    // for(let i = 0; i < dayList.length; i++){
    //     console.log(dayName[dayList[day] - 1]);
    // }

// console.log(now);
// console.log(hours);
// console.log(min);
// console.log(sec);
//  console.log(day);
if(hours > 12){
    hours -= 12;
    prepand = "pm"
}else if(hours == 12){
    prepand = "am"
}
if(hours < 10){
    hours = '0' + hours
}
console.log(`сегодня: ${dayName[day]}`);
console.log(`время: ${hours} ${prepand}`);

