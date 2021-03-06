// Task #1
// Реализовать рекурсивную функцию которая находит факториал переданного в нее числа
// getFactorial(3)  в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1

{
	const getFactorial = ((num) => {
		return num === 0 ? 1 : num *= getFactorial(num - 1)
	});
	console.log(getFactorial(3));
}


// Task #2
// Реализовать рекурсивную функцию которая находит возводит число в степень.
// Число которое нужно возвести в степень передается как первый аргумент в функцию
// Степень передается как второй аргумент в функцию
// pow(num, degree)

{
	const powFunc = ((num, pow) => {
		if (pow > 1) {
			return num * powFunc(num, pow - 1)
		} else if (pow === 1) {
			return num
		} else if (pow === 0) {
			return 1
		} else if (pow === -1) {
			return 1 / num
		} else {
			return 1 / (num * powFunc(num, -pow - 1))
		}
	});
	console.log(powFunc(10, -2));
}


// Task #3
// Рекурсивное суммирование
// Задача: напишите рекурсивную функцию для вычисления суммы заданных положительных целых 
// чисел a и b без прямого использования оператора +.
// Необходимо инкрементировать одно число на единицу до тех пор, пока другое число не 
// окажется равным нулю.

{
	const sumFunk = ((a, b) => {
		if (b !== 0) {
			a++
			a = sumFunk(a, b - 1)
			return a
		} else {
			return a
		}
	})

	console.log(sumFunk(7, 0));
}
