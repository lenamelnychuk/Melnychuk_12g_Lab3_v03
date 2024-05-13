//Завдання 1

// Функція для обчислення добутку перших 5 від’ємних елементів
function calculateProduct() {
    // Отримання введених чисел та розділення їх на масив за допомогою коми
    let numbersInput = document.getElementById("numbersInput").value; // getElementById - Returns a reference to the first object with the specified value of the ID attribute
    let numbersArray = numbersInput.split(',').map(Number); // Перетворення рядка в масив чисел

    // Фільтрація тільки від'ємних чисел
    let negativeNumbers = numbersArray.filter(num => num < 0);

    // Перевірка, чи в масиві є принаймні 5 від'ємних чисел
    if (negativeNumbers.length < 5) {
        document.getElementById("result_1").innerText = "Недостатньо від’ємних чисел. Повинно бути принаймні 5. Спробуйте ще раз!";
        return;
    }

    // Обчислення добутку перших 5 від’ємних чисел
    let product = 1;
    for (let i = 0; i < 5; i++) {
        product *= negativeNumbers[i];
    }

    // Виведення результату на сторінку
    document.getElementById("result_1").innerText = "Добуток перших 5 від’ємних елементів: " + product;
}


// Завдання 2

// Функція для витягування символів після першого ":"
function extractAfterColon() {
    // Отримання значення з поля введення
    let inputText = document.getElementById("textInput").value;

    // Пошук позиції першого ":"
    let colonIndex = inputText.indexOf(":"); // Функція indexOf() в JavaScript використовується для пошуку першого входження підрядка (або символу) в рядку. Вона повертає позицію першого входження підрядка у рядку. Якщо підрядок не знайдено, функція повертає -1.
    
    // Перевірка, чи знайдено ":"
    if (colonIndex !== -1) { // виконується, якщо підрядок знайдено, функція не повернула -1
        // Витягнення частини рядка після першого ":"
        let extractedText = inputText.substring(colonIndex + 1); // Функція substring() в JavaScript використовується для витягнення підрядка з рядка. Вона приймає два параметри: початковий і кінцевий індекси, які вказують на частину рядка, яку потрібно виділити.
        // Виведення результату
        document.getElementById("result_2").innerText = "Символи після першого \":\": " + extractedText;
    } else {
        // Якщо ":" не знайдено
        document.getElementById("result_2").innerText = "У тексті немає символу \":\"";
    }
}


// Завдання 3

// Функція, яка обробляє введене число згідно вказаних умов
function processNumber() {
    // Отримуємо число, введене користувачем
    let number = parseInt(document.getElementById("numberInput").value);

    // Перевіряємо умови та повертаємо результат
    if (number > 10) {
        return number * number; // Повертаємо квадрат числа
    } else if (number < 7) {
        return "Число менше 7"; // Повертаємо текстове повідомлення
    } else if (number === 7) {
        return number; // Повертаємо саме число 7
    } else if (number === 8) {
        return 7; // Повертаємо 7
    } else if (number === 9) {
        return 8; // Повертаємо 8
    } else {
        return "10"; // Повертаємо текстове повідомлення
    }
}

// Функція для виведення результату на сторінку
function displayResult() {
    let resultElement = document.getElementById("result_3");
    let result = processNumber();

    // Виводимо результат на сторінку
    resultElement.innerText = "Результат: " + result;
}