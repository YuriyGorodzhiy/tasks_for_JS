// Игра виселица

// 1. 1 Игорок загадывает слово. Через prompt
// корова
let word = prompt('Загадай слово:')
// ['к', 'о', 'р', 'о', 'в', 'а']
// split() - разбить строку на массив;
// join() - объединить элементы массива в строку
word = word.split('');
console.log(word);
// ['_', '_', '_', '_', '_', '_']
let userWord = [];

for (let i = 0; i < word.length; i++) {
    userWord.push('_');
}
console.log(userWord);

for (let i = 0; i < n; i++) {
    userLetters.push('_');
}
console.log(userLetters);

// 2. 2 Игорок отгадывает слово по буквам (вводит букву)
let letter = prompt('Угадай первую букву:');

userLetters[0] = letter;

word.forEach(function(value, index) {
    if (value == letter) {
        userWord[index] = letter;
    }
});

console.log(userWord);

// 3. Пока 2 Игорок не отгадал слово, мы просим его ввести нову

while (word.join('') != userWord.join('')) {
    
    letter = prompt(`Угаданные буквы: ${userWord.join(' ')}. Угадай следующую букву:`);
    
    word.forEach(function(value, index) {
        if (value == letter) {
            userWord[index] = letter;
        }
    });
}

alert('Ты отгадал слово!');

// 4. Введите букву. Угаданные буквы: _ _ _ _ _ _


// Дополн. функциональность:
// 1. Ограничение по кол-ву попыток
// 2. Комментарий о загадонном слове
// 3. Запись уже использованых букв и вывод ошибки в случае повтора
// 4. В случае победы выводим кол-во попыток и само слово
// 5. В случае проигрыша выводим загаданное слово и информацию о проигрыше