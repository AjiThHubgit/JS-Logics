// const say = (message = 'Hi') => {
//     console.log(message);
// }

// say();

// const say = (message = 'Hi') => {
//     console.log(message, 'message');
// }
// say();
// say('Hello');

const peopleLists = [
    {
        name: 'Ayyan',
        age: 28
    },
    {
        name: 'varathan',
        age: 31
    },
    {
        name: 'sam',
        age: 17
    }
]

const checkPersonAllowToVote = (lists) => {

    const filterValidatePeole = lists.filter(list => list.age > 17);

    return filterValidatePeole;
}

const votingRoom = (enterTheRoom = checkPersonAllowToVote(peopleLists)) => {
    
    console.log(enterTheRoom, 'enterTheRoom');
}

votingRoom();
