
/*
let person = {
    name: 'Emmanuel',
    age:26,
    
};

 person['likes food'] = true;

let habit = 'likes food';
person[habit]
console.log(person[habit]);

const device = 'andriod';

let phone ={
    [device]:'Tecno'
};

phone[device] = 'samsung'

console.log(phone.andriod);

const league = {
    winner: 'liverpool',
    isRelegated:true,
    teamMate:'bowen',
    fourth:'westham',
};


delete league.isRelegated

delete league.fourth

delete league.teamMate
*/

const list =['eggs',{instruments:'piano',guitar:3,myDrum:false},2024,];
list.shift();
console.log(list);
list.unshift(['abia','adamawa','uyo']);
console.log(list);

// using slice() and splice()

const users =['Tom','Ken','Ben','Ada','Obi','Ali','Ojo'];
console.log(users.slice(1,4));

users.splice(2,3,'Ayo','Olu','Dele');

console.log(users);
















