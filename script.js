// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
console.log("\nЗадание №_1");
for (let index = 0; index <= 10; index++) {
    if (index === 0) {
        console.log(`${index} - это ноль`);
    } else if (index % 2 === 0) {
        console.log(`${index} - четное число`);
    } else if (index % 2 !== 0) {
        console.log(`${index} - нечетное число`);
    };
};
// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
console.log("\nЗадание №_2");
let arrTask2 = [1, 2, 3, 4, 5, 6, 7];
console.log(`Исходный массив: ${arrTask2}`)
arrTask2.splice(3, 2);
console.log(`Измененный массив: ${arrTask2}`)

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
console.log("\nЗадание №_3");
let arrTask3 = new Array(5);
for (let index = 0; index < arrTask3.length; index++) {
    arrTask3[index] = Math.floor(Math.random() * 9);
};
console.log(`В случайном массиве ${arrTask3}`);
console.log(`сумма всех элементов составляет ${arrTask3.reduce((acc, cur) => acc + cur, 0)},`);
let minNumber = 10;
for (let index = 0; index < arrTask3.length; index++) {
    if (arrTask3[index] < minNumber) {
        minNumber = arrTask3[index];
    } arrTask3[index];
};
let isNum_3_Present = false;
console.log(`Минимальное число в массиве - ${minNumber},`);
for (let index = 0; index < arrTask3.length; index++) {
    if (arrTask3[index] === 3) {
        isNum_3_Present = true;
    };
};
console.log(`В данном массиве ${isNum_3_Present ? "присутствует" : "отсутствует"} число 3.`);
// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx
console.log("\nЗадание №_4");
let accumulator = "";
for (let index = 0; index < 20; index++) {
    accumulator = accumulator + "x";
    console.log(accumulator);
};