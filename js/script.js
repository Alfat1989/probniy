var names = ['Alfat', 'Alfrit', 'Almir', 'Dina', 'Farit', 'Goblin']

Name=[Math.floor(Math.random() * 6)]
console.log(names[Name]);
if ((names[Name]) === 'Alfat') {
    console.log('Hello me')
} else if ((names[Name]) === 'Alfrit') {
    console.log('Hello bro')
} else if ((names[Name]) === 'Almir') {
    console.log('Hello little bro')
} else if ((names[Name]) === 'Farit') {
    console.log('Hello dad')
} else if ((names[Name]) === 'Dina') {
    console.log('Hello mom')
} else {
    console.log('Who are you')
}

for (var x = 2;  x < 100; x =x*2) {
    console.log(x);
}

var city = ['London', 'Paris', 'Miami', 'Sicilia']
for (var x = 0; x < city.length; x++){
    console.log(city[x])
}