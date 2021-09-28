//Добавление строк через цикл
var fruits = ['Апельсин', 'Мандарин', 'Манго', 'Лимон']
for (var x = 0; x < fruits.length; x++) {
    fruits[x] = fruits[x] + ' - спелый и сочный';
}
console.log(fruits)


//Составление строки из 8 рандомных букв через цикл
var lines = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
var randomLines = [];

while (randomLines.length < 8) {
    randomLines+=lines[Math.floor(Math.random() * lines.length)]
} 
console.log(randomLines)

//Сравнить текст и заменить буквы на числа +=  где a=4 e=3 i=1 o=0
var start = 'Cool JavaScript';
var result = [];
for (x = 0; x < start.length; x++) {
    result += start[x];
    result['a'] = '4';
    
}
console.log(result)